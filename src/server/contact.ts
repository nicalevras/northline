import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'

const expectedAction = 'contact'
const siteverifyUrl =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const developmentSecret = '1x0000000000000000000000000000000AA'
const developmentHostnames = new Set(['localhost', '127.0.0.1'])

type ContactInquiry = {
  email: string
  intent: 'assessment' | 'general'
  message: string
  name: string
  organization: string
  token: string
  website: string
}

type SiteverifyResult = {
  action?: string
  hostname?: string
  success?: boolean
}

function requiredString(value: unknown, maximumLength: number) {
  if (typeof value !== 'string') throw new Error('Invalid contact request.')

  const normalized = value.trim()
  if (!normalized || normalized.length > maximumLength) {
    throw new Error('Invalid contact request.')
  }

  return normalized
}

function optionalString(value: unknown, maximumLength: number) {
  if (typeof value !== 'string') throw new Error('Invalid contact request.')

  const normalized = value.trim()
  if (normalized.length > maximumLength) {
    throw new Error('Invalid contact request.')
  }

  return normalized
}

function validateContactInquiry(input: unknown): ContactInquiry {
  if (!input || typeof input !== 'object') {
    throw new Error('Invalid contact request.')
  }

  const candidate = input as Record<string, unknown>
  const intent = candidate.intent
  if (intent !== 'assessment' && intent !== 'general') {
    throw new Error('Invalid contact request.')
  }

  const email = requiredString(candidate.email, 254)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid contact request.')
  }

  const website = optionalString(candidate.website, 2048)
  if (website) {
    let parsedWebsite: URL
    try {
      parsedWebsite = new URL(website)
    } catch {
      throw new Error('Invalid contact request.')
    }

    if (!['http:', 'https:'].includes(parsedWebsite.protocol)) {
      throw new Error('Invalid contact request.')
    }
  }

  return {
    intent,
    name: requiredString(candidate.name, 120),
    email,
    organization: optionalString(candidate.organization, 200),
    website,
    message: requiredString(candidate.message, 5000),
    token: requiredString(candidate.token, 2048),
  }
}

export const verifyContactInquiry = createServerFn({ method: 'POST' })
  .validator(validateContactInquiry)
  .handler(async ({ data }) => {
    const isDevelopment = import.meta.env.DEV
    const secret = isDevelopment
      ? developmentSecret
      : process.env.TURNSTILE_SECRET
    const expectedHostnames = isDevelopment
      ? developmentHostnames
      : new Set(
          (process.env.TURNSTILE_HOSTNAMES ?? '')
            .split(',')
            .map((hostname) => hostname.trim())
            .filter(Boolean),
        )

    if (!secret || expectedHostnames.size === 0) {
      throw new Error('Verification is temporarily unavailable.')
    }

    const request = getRequest()
    const body = new URLSearchParams({
      secret,
      response: data.token,
    })
    const clientIp = request.headers.get('CF-Connecting-IP')
    if (clientIp) body.set('remoteip', clientIp)

    let result: SiteverifyResult
    try {
      const response = await fetch(siteverifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
        signal: AbortSignal.timeout(10_000),
      })

      if (!response.ok) throw new Error('Siteverify request failed.')
      result = (await response.json()) as SiteverifyResult
    } catch {
      throw new Error('Verification failed. Please try again.')
    }

    if (
      !result.success ||
      result.action !== expectedAction ||
      !result.hostname ||
      !expectedHostnames.has(result.hostname)
    ) {
      throw new Error('Verification failed. Please try again.')
    }

    return { verified: true as const }
  })
