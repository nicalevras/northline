import type { ComponentPropsWithoutRef } from 'react'

const variants = {
  primary:
    'bg-primary text-primary-foreground transition-opacity hover:opacity-90',
  outline:
    'border border-foreground/25 transition-colors hover:border-foreground',
  inverse:
    'bg-background text-foreground transition-opacity hover:opacity-90',
} as const

const sizes = {
  default: 'px-5 py-3 text-sm',
  compact: 'inline-flex min-h-11 items-center px-4 py-2 text-sm',
} as const

type ActionLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

export function ActionLink({
  className = '',
  variant = 'primary',
  size = 'default',
  ...props
}: ActionLinkProps) {
  return (
    <a
      className={`${sizes[size]} font-medium ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  )
}
