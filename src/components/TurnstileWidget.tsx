import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'

const TURNSTILE_SCRIPT_ID = 'cloudflare-turnstile-script'
const TURNSTILE_SITE_KEY = import.meta.env.DEV
  ? '1x00000000000000000000BB'
  : '0x4AAAAAAEX6Zyl2mcKi60nV'

type TurnstileApi = {
  remove: (widgetId: string) => void
  render: (
    container: HTMLElement,
    options: {
      action: string
      appearance: 'interaction-only'
      callback: (token: string) => void
      'error-callback': () => void
      'expired-callback': () => void
      sitekey: string
      size: 'flexible'
      theme: 'light'
    },
  ) => string
  reset: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export type TurnstileWidgetHandle = {
  reset: () => void
}

type TurnstileWidgetProps = {
  onError: () => void
  onVerify: (token: string) => void
}

let scriptPromise: Promise<void> | undefined

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID)

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true })
      existingScript.addEventListener('error', () => reject(), { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = TURNSTILE_SCRIPT_ID
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => reject(), { once: true })
    document.head.append(script)
  })

  return scriptPromise
}

export const TurnstileWidget = forwardRef<
  TurnstileWidgetHandle,
  TurnstileWidgetProps
>(function TurnstileWidget({ onError, onVerify }, forwardedRef) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)
  const onErrorRef = useRef(onError)
  const onVerifyRef = useRef(onVerify)

  onErrorRef.current = onError
  onVerifyRef.current = onVerify

  useImperativeHandle(
    forwardedRef,
    () => ({
      reset() {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
          onVerifyRef.current('')
        }
      },
    }),
    [],
  )

  useEffect(() => {
    let isActive = true

    void loadTurnstileScript()
      .then(() => {
        if (!isActive || !containerRef.current || !window.turnstile) return

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          action: 'contact',
          appearance: 'interaction-only',
          theme: 'light',
          size: 'flexible',
          callback: (token) => onVerifyRef.current(token),
          'expired-callback': () => onVerifyRef.current(''),
          'error-callback': () => onErrorRef.current(),
        })
      })
      .catch(() => {
        if (isActive) onErrorRef.current()
      })

    return () => {
      isActive = false
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = undefined
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full" />
})
