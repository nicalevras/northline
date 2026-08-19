import { site } from '../site'

export function SiteMark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="size-5 shrink-0 text-primary"
        shapeRendering="crispEdges"
      >
        <rect width="20" height="20" fill="currentColor" />
        <path
          d="M8 20V8H20"
          fill="none"
          stroke="var(--color-background)"
          strokeWidth="4"
        />
      </svg>
      <span className="text-[17px] font-semibold tracking-[-0.01em]">
        {site.name}
      </span>
    </span>
  )
}
