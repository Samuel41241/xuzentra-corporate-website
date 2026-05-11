import { Link } from "react-router-dom";
import company from "../data/company";

function Hero() {
  return (
    <section
      className="hero-section hero-immersive"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(3, 10, 25, 0.88), rgba(3, 10, 25, 0.52), rgba(3, 10, 25, 0.18)), url("https://pqbkdrovafvfkezaqfhz.supabase.co/storage/v1/object/public/site-assets/flyers/image0.webp")`,
      }}
    >
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-immersive-inner">
        <div className="hero-content hero-overlay-content">
          <p className="eyebrow">{company.name}</p>

          <h1>{company.tagline}</h1>

          <p className="hero-description">
            We build practical technology solutions across education, healthcare,
            energy, and public-sector ecosystems — helping institutions and
            businesses move from fragmented systems to scalable digital operations.
          </p>

          <div className="hero-actions">
            <Link to="/solutions" className="btn btn-primary">
              Explore Solutions
            </Link>
            <Link to="/contact" className="btn btn-outline hero-light-outline">
              Contact Us
            </Link>
          </div>

          <div className="hero-metrics">
            <div className="hero-metric-card">
              <strong>Sector-Focused</strong>
              <span>Education, healthcare, energy, and public sector</span>
            </div>
            <div className="hero-metric-card">
              <strong>Institution-Ready</strong>
              <span>Built for deployment, workflows, and operational visibility</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;