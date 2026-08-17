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
      className={`mb-4 font-mono text-xs uppercase tracking-widest ${onBrand ? 'opacity-70' : 'text-muted-foreground'}`}
    >
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
