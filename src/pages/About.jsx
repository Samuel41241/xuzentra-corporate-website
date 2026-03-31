import company from "../data/company";

function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-placeholder">
          <p className="eyebrow">About Us</p>
          <h1>About {company.shortName}</h1>
          <p>{company.description}</p>
          <p>
            Our mission is to build practical digital systems that improve how
            institutions, businesses, and sector-focused programs operate.
          </p>
          <p>
            We are building toward a future where African organizations can rely
            on stronger digital infrastructure to support scale, visibility, and
            better decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;