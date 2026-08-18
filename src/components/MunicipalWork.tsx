import { municipalities } from '../content/home'

export function MunicipalWork() {
  return (
    <div className="border border-border bg-background p-5 md:p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Selected municipal work
      </p>
      <ul
        aria-label="Municipalities Northline has worked with"
        className="mt-5 flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-7 sm:gap-6"
      >
        {municipalities.map((municipality) => (
          <li
            key={municipality.name}
            className="w-12 shrink-0 text-muted-foreground sm:w-auto"
          >
            <span
              aria-hidden="true"
              className="mx-auto block size-12 bg-foreground/70"
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
  )
}
