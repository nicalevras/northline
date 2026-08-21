import { experienceReviews } from '../content/home'

export function ExperienceReviews() {
  return (
    <section
      aria-labelledby="experience-reviews-heading"
      className="mt-20 md:mt-24"
    >
      <div className="grid gap-9 lg:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            Client perspective
          </p>
          <h3
            id="experience-reviews-heading"
            className="mt-3 text-2xl font-semibold tracking-tight"
          >
            The work, in their words.
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Draft review placement. Replace this copy and attribution with
            approved client language before publication.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          {experienceReviews.map((review) => (
            <figure key={review.quote} className="min-w-0">
              <span aria-hidden="true" className="mb-5 block size-2 bg-primary" />
              <blockquote className="text-balance text-xl font-medium leading-relaxed tracking-tight md:text-2xl">
                <p>&ldquo;{review.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-7">
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground">
                  {review.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {review.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
