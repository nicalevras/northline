import type { ComponentPropsWithoutRef, ReactNode } from 'react'

const sectionTones = {
  default: 'border-b border-border',
  muted: 'border-b border-border bg-secondary',
  brand: 'bg-primary text-primary-foreground',
} as const

type ContentSectionProps = ComponentPropsWithoutRef<'section'> & {
  innerClassName?: string
  tone?: keyof typeof sectionTones
}

export function ContentSection({
  children,
  className = '',
  innerClassName = '',
  tone = 'default',
  ...props
}: ContentSectionProps) {
  return (
    <section className={`${sectionTones[tone]} ${className}`.trim()} {...props}>
      <div
        className={`mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  )
}

export function SectionLabel({
  children,
  onBrand = false,
}: {
  children: ReactNode
  onBrand?: boolean
}) {
  return (
    <p
      className={`mb-5 inline-flex w-fit items-center gap-2 border px-3 py-1.5 font-mono text-xs uppercase tracking-widest ${onBrand ? 'border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground' : 'border-foreground/20 bg-background text-muted-foreground'}`}
    >
      <span aria-hidden="true">§</span>
      {children}
    </p>
  )
}

export function SectionHeading({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl ${className}`.trim()}
    >
      {children}
    </h2>
  )
}
