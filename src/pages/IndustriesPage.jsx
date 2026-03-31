import industries from "../data/industries";

function IndustriesPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-placeholder">
          <p className="eyebrow">Industries</p>
          <h1>Industries We Serve</h1>
          <p>
            Our technology solutions are designed to support institutions,
            operations teams, and implementation-focused environments across
            multiple sectors.
          </p>

          <div className="page-list-grid">
            {industries.map((industry, index) => (
              <article key={index} className="page-list-card">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesPage;