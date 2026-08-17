import { places } from '../places'

const COPIES = 4

export function TrustMarquee() {
  return (
    <section
      aria-label="Trusted by municipalities"
      className="overflow-hidden bg-paper-2"
    >
      <p className="pt-5 text-center text-xs font-medium tracking-[0.16em] text-copper-deep uppercase">
        Trusted by
      </p>
      <div className="mt-3 overflow-hidden pb-4">
        <div className="marquee-track flex w-max">
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center gap-14 px-7 py-1"
              aria-hidden={copy > 0 ? true : undefined}
            >
              {places.map((place) => (
                <li key={`${copy}-${place.name}`}>
                  <Seal src={place.src} name={place.name} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

function Seal({ src, name }: { src: string; name: string }) {
  return (
    <span
      role="img"
      aria-label={`Seal of ${name}, Massachusetts`}
      className="inline-block size-10 shrink-0 bg-ink/70"
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
