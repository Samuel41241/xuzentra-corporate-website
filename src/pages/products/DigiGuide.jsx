import { Helmet } from "react-helmet-async";

function DigiGuide() {
  return (
    <section className="page-section">
      <Helmet>
        <title>DigiGuide NG | Digital Inclusion Assistant</title>
        <meta
          name="description"
          content="DigiGuide NG is a voice-guided digital inclusion assistant designed to help first-time and low-confidence users learn practical digital tasks."
        />
      </Helmet>

      <div className="container product-page">
        <div className="product-hero">
          <p className="eyebrow">Digital Inclusion</p>
          <h1>DigiGuide NG</h1>
          <p className="product-tagline">
            A voice-guided digital skills assistant for first-time and
            low-confidence technology users.
          </p>
        </div>

        <div className="product-section">
          <h2>The Problem</h2>
          <p>
            Millions of people are expected to use digital tools for daily life,
            education, communication, and economic participation, yet many still
            struggle with the most basic digital tasks.
          </p>
          <p>
            Traditional learning tools are often text-heavy, intimidating, or
            poorly adapted to first-time users, especially in low-bandwidth and
            digitally underserved environments.
          </p>
        </div>

        <div className="product-section">
          <h2>The Solution</h2>
          <p>
            DigiGuide NG provides a simple, voice-guided learning experience
            that helps users navigate essential digital tasks with less fear and
            less friction.
          </p>
          <p>
            The platform is designed to make digital learning more accessible,
            especially for users who need guidance, simplicity, and practical
            step-by-step support.
          </p>
        </div>

        <div className="product-section">
          <h2>Who It’s For</h2>
          <ul>
            <li>First-time smartphone and internet users</li>
            <li>Low-confidence digital learners</li>
            <li>Digital inclusion programs and NGOs</li>
            <li>Public and private sector skills initiatives</li>
          </ul>
        </div>

        <div className="product-section">
          <h2>Why It Matters</h2>
          <p>
            Digital access alone is not enough. People also need the confidence
            and guidance to use tools meaningfully. Without usable learning
            support, digital inclusion efforts remain incomplete.
          </p>
          <p>
            DigiGuide NG addresses a large and underserved gap between device
            access and practical digital capability.
          </p>
        </div>

        <div className="product-section">
          <h2>Business Model</h2>
          <ul>
            <li>Program partnerships with NGOs and social impact initiatives</li>
            <li>Institutional deployment for digital literacy programs</li>
            <li>Government and donor-supported implementation models</li>
            <li>Future B2B and public-sector licensing opportunities</li>
          </ul>
        </div>

        <div className="product-section">
          <h2>Long-Term Potential</h2>
          <p>
            DigiGuide NG can evolve into a broader digital assistance platform
            for inclusive onboarding, practical learning, and guided user
            adoption across public, educational, and consumer-facing services.
          </p>
        </div>

        <div className="product-cta">
          <h2>Explore DigiGuide NG</h2>
          <p>
            Interested in digital inclusion, guided onboarding, or skills access
            for underserved users?
          </p>
          <a
            href="https://digi-sabi-app.lovable.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Platform
          </a>
        </div>
      </div>
    </section>
  );
}

export default DigiGuide;