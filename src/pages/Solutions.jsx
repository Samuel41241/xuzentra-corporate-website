import services from "../data/services";

function Solutions() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-placeholder">
          <p className="eyebrow">Solutions</p>
          <h1>Our Solutions</h1>
          <p>
            Xuzentra designs and deploys practical digital systems that help
            organizations modernize operations, improve visibility, and support
            more effective delivery.
          </p>

          <div className="page-list-grid">
            {services.map((service, index) => (
              <article key={index} className="page-list-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;