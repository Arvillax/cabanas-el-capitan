const LocationSection = ({ steps, attractions, transportStats }) => {
  return (
    <>
      <section id="ubicacion" className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="kicker">Ubicacion</p>
            <h2>Como llegar</h2>
          </div>

          <div className="location-card">
            <div className="location-info">
              <h3>Cabanas El Capitan</h3>
              <p>
                <strong>Direccion:</strong> Aldea San Pablo, frente al mirador
              </p>
              <p>
                <strong>Municipio:</strong> Amapala, Valle, Honduras
              </p>
              <p>
                <strong>Referencia:</strong> Isla del Tigre, Golfo de Fonseca
              </p>
              <p>
                <strong>Coordenadas:</strong> 13.289 N, 87.632 W
              </p>
              <a
                className="btn btn-sand"
                href="https://maps.google.com/?q=Cabanas+El+Capitan+Amapala+Honduras"
                target="_blank"
                rel="noreferrer"
              >
                Ver en Google Maps
              </a>
            </div>

            <div className="location-steps">
              <h3>Como llegar</h3>
              <ol>
                {(steps ?? []).map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="kicker">A pocos minutos</p>
            <h2>Atractivos cercanos</h2>
          </div>

          <div className="attractions-grid">
            {(attractions ?? []).map((attraction) => (
              <article className="attraction-card" key={attraction.title}>
                <div className="attraction-img">
                  <img src={attraction.image} alt={attraction.alt} loading="lazy" />
                </div>
                <div className="attraction-body">
                  <h3>{attraction.title}</h3>
                  <p>{attraction.description}</p>
                  <p className="attraction-distance">{attraction.distance}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container transport-note">
          <div>
            <p className="kicker">Consejo de viaje</p>
            <h3>Transporte en la isla</h3>
            <p>
              Dentro de la isla el transporte principal es en mototaxi. Si necesitas que
              coordinemos tu traslado desde Coyolito, escribenos por WhatsApp.
            </p>
          </div>

          <div className="transport-data">
            {(transportStats ?? []).map((stat) => (
              <div className="data-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationSection;
