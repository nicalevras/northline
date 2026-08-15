/** Decorative. Meaning is in the adjacent copy. */
export function CitySpecimen() {
  return (
    <div
      aria-hidden="true"
      className="specimen overflow-hidden rounded-sm border border-rule bg-[#faf7f1] shadow-[0_24px_50px_-28px_rgba(27,24,20,0.35)]"
    >
      <div className="flex items-center gap-2 border-b border-rule bg-paper-2 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="h-2 w-2 rounded-full bg-rule" />
        <span className="ml-2 flex-1 truncate bg-paper px-2 py-1 font-sans text-[0.7rem] tracking-wide text-ink-soft">
          city.gov/pay
        </span>
      </div>

      <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_11rem]">
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3 border-b border-rule pb-3">
            <span className="font-serif text-lg tracking-[-0.03em]">
              City of —
            </span>
            <span className="text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">
              Resident
            </span>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {['Pay', '', 'Permits', ''].map((label, i) => (
              <div
                key={i}
                className={`flex aspect-square flex-col items-center justify-center border ${
                  i === 0
                    ? 'border-copper bg-paper ring-2 ring-copper ring-offset-2 ring-offset-[#faf7f1]'
                    : 'border-rule/80'
                }`}
              >
                <span className="h-5 w-5 rounded-sm bg-paper-2" />
                {label ? (
                  <span className="mt-1.5 text-[0.62rem] text-ink">{label}</span>
                ) : (
                  <span className="mt-1.5 h-1.5 w-8 bg-rule/70" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-2 w-2/3 bg-rule/50" />
            <div className="h-2 w-full bg-rule/35" />
            <div className="h-8 w-full border border-rule bg-paper" />
            <div className="h-8 w-28 bg-ink" />
          </div>
        </div>

        <div className="border-t border-rule bg-ink px-4 py-5 text-paper md:border-t-0 md:border-l">
          <p className="text-[0.62rem] tracking-[0.16em] text-paper/50 uppercase">
            Screen reader
          </p>
          <ul className="mt-3 space-y-2 font-sans text-[0.72rem] leading-snug">
            <li className="text-paper/45">graphic</li>
            <li className="text-paper/45">graphic</li>
            <li className="text-paper">Pay</li>
            <li className="text-paper/45">graphic</li>
            <li className="border-l-2 border-copper pl-2 text-paper">
              button, unlabeled
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
