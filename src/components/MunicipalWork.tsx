import { municipalities } from '../content/home'

export function MunicipalWork() {
  return (
    <div className="overflow-hidden border border-border bg-background p-5 md:p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Selected municipal work
      </p>
      <div
        role="region"
        aria-label="Municipalities Northline has worked with"
        aria-describedby="municipal-rail-instructions"
        tabIndex={0}
        className="municipal-rail mt-5 max-w-full overflow-x-auto pb-3 sm:overflow-visible sm:pb-0"
      >
        <ul className="flex w-max snap-x snap-mandatory gap-5 sm:grid sm:w-full sm:grid-cols-7 sm:gap-6">
          {municipalities.map((municipality) => (
            <li
              key={municipality.name}
              className="w-16 shrink-0 snap-start text-muted-foreground sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="mx-auto block size-14 bg-foreground/80 sm:size-16"
                style={{
                  WebkitMaskImage: `url(${municipality.seal})`,
                  maskImage: `url(${municipality.seal})`,
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  maskMode: 'alpha',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
              />
              <span className="sr-only">{municipality.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <p
        id="municipal-rail-instructions"
        className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:hidden"
      >
        Scroll to view more →
      </p>
    </div>
  )
}
