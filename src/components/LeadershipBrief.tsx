import { findings } from '../content/home'

export function LeadershipBrief() {
  return (
    <article
      aria-labelledby="leadership-brief-title"
      className="flex h-full flex-col bg-card"
    >
      <header className="flex flex-col gap-4 border-b border-border px-6 py-6 sm:flex-row sm:items-end sm:justify-between md:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Representative assessment excerpt
          </p>
          <h3
            id="leadership-brief-title"
            className="mt-2 text-2xl font-semibold tracking-tight"
          >
            Leadership brief
          </h3>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Assessment · p. 1
        </p>
      </header>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Ranked findings
        </p>
        <ol className="mt-4 border-y border-border">
          {findings.map((finding, index) => (
            <li
              key={finding}
              className={`py-4 text-sm leading-relaxed ${index < findings.length - 1 ? 'border-b border-border' : ''}`}
            >
              {finding}
            </li>
          ))}
        </ol>
        <p className="mt-auto max-w-lg border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          Each finding is tied to evidence, ownership, and acceptance criteria
          so leadership can decide what moves first.
        </p>
      </div>
    </article>
  )
}
