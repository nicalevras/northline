import type { ErrorComponentProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { ActionLink } from './ActionLink'

function RouteStatus({
  code,
  title,
  description,
  action,
}: {
  code: string
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <main id="main" className="flex flex-1 items-center border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          {code}
        </p>
        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-8">{action}</div>
      </div>
    </main>
  )
}

export function NotFoundPage() {
  return (
    <RouteStatus
      code="404"
      title="This address is not on the site."
      description="The URL may be outdated or mistyped. The Northline overview is available on the homepage."
      action={<ActionLink href="/">Return home</ActionLink>}
    />
  )
}

export function RootErrorPage({ reset }: ErrorComponentProps) {
  return (
    <RouteStatus
      code="Something went wrong"
      title="The page could not be loaded."
      description="Retry the request. If the problem continues, return to the homepage."
      action={
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try again
          </button>
          <ActionLink href="/" variant="outline">
            Return home
          </ActionLink>
        </div>
      }
    />
  )
}
