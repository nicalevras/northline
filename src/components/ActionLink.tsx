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
  compact: 'px-3 py-1.5 text-sm',
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
