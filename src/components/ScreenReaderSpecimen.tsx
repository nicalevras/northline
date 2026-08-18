import { useState } from 'react'

const beforeItems = [
  'graphic',
  'graphic',
  'button, unlabeled',
  'link, click here',
  'image, IMG_4402.jpg',
  'button, unlabeled',
]

const afterItems = [
  'Search city services',
  'Apply for a permit',
  'View agendas and minutes',
  'Emergency alerts',
  'Mayor Elena Torres',
  'Pay water bill',
]

export function ScreenReaderSpecimen() {
  const [fixed, setFixed] = useState(false)
  const items = fixed ? afterItems : beforeItems

  return (
    <figure className="flex flex-col border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-border"
          />
        ))}
        <span className="ml-2 flex-1 truncate bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground">
          cityof——.gov
        </span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div aria-hidden="true" className="flex-1 border-b border-border p-4 sm:border-r sm:border-b-0">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-3 w-20 bg-foreground/15" />
            <div className="h-3 w-12 bg-foreground/10" />
          </div>
          <div className="mb-4 grid grid-cols-4 gap-2">
            {['Search', 'Apply', 'Agendas', 'Alerts'].map((label) => (
              <div
                key={label}
                className="flex h-14 items-end justify-center border border-border bg-secondary pb-1"
              >
                <span className="text-[10px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
          <div className="mb-2 h-2.5 w-full bg-foreground/10" />
          <div className="mb-2 h-2.5 w-5/6 bg-foreground/10" />
          <div className="h-2.5 w-4/6 bg-foreground/10" />
        </div>
        <div className="flex-1 bg-primary p-4 text-primary-foreground">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-widest opacity-80">Screen reader</span>
            <button
              type="button"
              onClick={() => setFixed((value) => !value)}
              className="focus-on-primary border border-primary-foreground bg-primary-foreground px-3 py-1.5 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Show: {fixed ? 'current condition' : 'after implementation'}
            </button>
          </div>
          <ol
            aria-live="polite"
            className="flex flex-col gap-1.5 font-mono text-xs leading-relaxed"
          >
            {items.map((item, index) => (
              <li
                key={`${fixed ? 'after' : 'before'}-${index}`}
                className="flex items-baseline gap-2"
              >
                <span aria-hidden="true" className="opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={
                    fixed
                      ? ''
                      : 'opacity-70 line-through decoration-accent decoration-2'
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="border-t border-border px-4 py-2 font-mono text-xs text-muted-foreground">
        What assistive technology receives on a typical municipal homepage—and
        what it receives after implementation.
      </figcaption>
    </figure>
  )
}
