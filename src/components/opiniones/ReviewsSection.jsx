const ReviewsSection = ({ reviews, ratingSummary }) => {
  return (
    <>
      <section id="opiniones" className="section section-muted">
        <div className="container rating-summary">
          <div className="rating-big">
            <span className="rating-number">{ratingSummary?.average}</span>
            <span className="rating-stars">{ratingSummary?.stars}</span>
            <span className="rating-label">Calificacion promedio</span>
          </div>

          <div className="rating-bars">
            {(ratingSummary?.bars ?? []).map((bar) => (
              <div className="rating-row" key={bar.label}>
                <span>{bar.label}</span>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${bar.fill}%` }}></div>
                </div>
                <span>{bar.score}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="kicker">Opiniones</p>
            <h2>Lo que dicen nuestros huespedes</h2>
          </div>

          <div className="reviews-grid">
            {(reviews ?? []).map((review) => (
              <blockquote className="review-card" key={review.author}>
                <p className="review-stars">{review.stars}</p>
                <p>"{review.text}"</p>
                <cite>
                  {review.author}
                  {review.meta && <span>{review.meta}</span>}
                </cite>
              </blockquote>
            ))}
          </div>

          <div className="cta-block dark-card">
            <p className="kicker">Tu experiencia nos importa</p>
            <h3>Ya nos visitaste? Dejanos tu opinion</h3>
            <p>Tu comentario ayuda a otros viajeros a elegir su proxima escapada.</p>
            <div className="btn-group center-group">
              <a
                className="btn btn-primary"
                href="https://www.facebook.com/profile.php?id=61557780654785"
                target="_blank"
                rel="noreferrer"
              >
                Opinar en Facebook
              </a>
              <a className="btn btn-outline" href="#contacto">
                Enviar comentario
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
