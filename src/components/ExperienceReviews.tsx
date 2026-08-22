import { experienceReviews } from '../content/home'

export function ExperienceReviews() {
  return (
    <section
      aria-labelledby="experience-reviews-heading"
      className="mt-8 border-t border-border pt-8"
    >
      <h3 id="experience-reviews-heading" className="sr-only">
        Client reviews
      </h3>
      <div className="grid gap-12 md:grid-cols-3">
        {experienceReviews.map((review) => (
          <figure key={review.quote} className="flex min-w-0 flex-col">
            <span aria-hidden="true" className="mb-6 block size-2 bg-primary" />
            <blockquote className="text-balance text-xl font-medium leading-relaxed tracking-tight">
              <p>&ldquo;{review.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 md:mt-auto md:pt-6">
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
    </section>
  )
}
