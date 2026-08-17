import { createMiddleware, createStart } from '@tanstack/react-start'

const securityHeaders = {
  'Permissions-Policy': 'camera=(), geolocation=(), microphone=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
} as const

const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next()
  const headers = new Headers(result.response.headers)

  for (const [name, value] of Object.entries(securityHeaders)) {
    headers.set(name, value)
  }

  return {
    ...result,
    response: new Response(result.response.body, {
      headers,
      status: result.response.status,
      statusText: result.response.statusText,
    }),
  }
})

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeadersMiddleware],
}))
