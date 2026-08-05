import { reviews } from "../../../data/reviews.js";

export default function OpinionesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="text-green uppercase text-xs font-extrabold tracking-wider">
            Opiniones
          </span>
          <h2 className="text-3xl font-bold text-primary mt-1 mb-3">
            Lo que dicen nuestros huéspedes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <blockquote
              key={i}
              className="p-6 bg-bg-card rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.10)] border border-border m-0"
            >
              <div className="text-accent text-sm mb-2">{review.stars}</div>
              <p className="text-text-secondary italic mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <cite className="block not-italic font-bold text-sm text-primary-light">
                {review.author}
                {review.meta && (
                  <span className="block font-normal text-xs text-text/60 mt-1">
                    {review.meta}
                  </span>
                )}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
