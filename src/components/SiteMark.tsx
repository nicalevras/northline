import { site } from '../site'

export function SiteMark({ showDescriptor = false }: { showDescriptor?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-3 w-3 bg-primary" />
      <span className="text-sm font-semibold tracking-wide">{site.name}</span>
      {showDescriptor ? (
        <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
          / Title II web work
        </span>
      ) : null}
    </span>
  )
}
