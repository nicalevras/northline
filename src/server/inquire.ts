import { createServerFn } from '@tanstack/react-start'

export type InquireResult =
  | { ok: true }
  | { ok: false; error: string }

function str(form: FormData, key: string) {
  const v = form.get(key)
  return typeof v === 'string' ? v.trim() : ''
}

export const inquire = createServerFn({ method: 'POST' })
  .validator((input: unknown) => {
    if (!(input instanceof FormData)) {
      throw new Error('Expected form data')
    }
    return input
  })
  .handler(async ({ data }): Promise<InquireResult> => {
    const honeypot = str(data, 'company_website')
    if (honeypot) return { ok: true }

    const name = str(data, 'name')
    const email = str(data, 'email')
    const entity = str(data, 'entity')
    const url = str(data, 'url')
    const note = str(data, 'note')

    if (!name || name.length > 120) {
      return { ok: false, error: 'Please give a name we can reply to.' }
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 180) {
      return { ok: false, error: 'Please give a working email address.' }
    }
    if (note.length > 4000) {
      return { ok: false, error: 'Please keep the note under 4,000 characters.' }
    }

    const at = new Date().toISOString()
    const row = JSON.stringify({
      at,
      name,
      email,
      entity,
      url,
      note,
    })

    const { env } = await import('cloudflare:workers')
    const id = crypto.randomUUID()
    await env.INQUIRIES.put(`inquiry:${at}:${id}`, row)

    return { ok: true }
  })
