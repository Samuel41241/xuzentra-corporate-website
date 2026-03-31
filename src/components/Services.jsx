import services from "../data/services";

function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">What We Do</p>
          <h2>Our Core Capabilities</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;