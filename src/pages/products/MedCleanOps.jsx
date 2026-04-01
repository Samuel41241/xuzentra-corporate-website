import { Helmet } from "react-helmet-async";

function MedCleanOps() {
  return (
    <section className="page-section">
      <Helmet>
        <title>MedCleanOps | Healthcare Operations Platform</title>
        <meta
          name="description"
          content="MedCleanOps is a healthcare operations platform designed to improve hospital cleaning workflows, incident reporting, stock visibility, and facility coordination."
        />
      </Helmet>

      <div className="container product-page">
        <div className="product-hero">
          <p className="eyebrow">Healthcare Operations</p>
          <h1>MedCleanOps</h1>
          <p className="product-tagline">
            A healthcare operations and facility management system for hospital
            cleaning teams, supervisors, and administrators.
          </p>
        </div>

        <div className="product-section">
          <h2>The Problem</h2>
          <p>
            In many hospitals and healthcare facilities, cleaning operations are
            still managed manually or through fragmented systems. This creates
            weak oversight, poor incident visibility, inefficient stock
            coordination, and limited accountability across janitorial and
            support teams.
          </p>
          <p>
            In high-risk healthcare environments, these inefficiencies can
            directly affect hygiene standards, operational response, and service
            quality.
          </p>
        </div>

        <div className="product-section">
          <h2>The Solution</h2>
          <p>
            MedCleanOps provides a structured digital platform for hospital
            cleaning operations, incident reporting, stock request workflows,
            team coordination, and administrative oversight.
          </p>
          <p>
            It enables facilities to move from manual supervision toward
            real-time operational visibility and stronger workflow management.
          </p>
        </div>

        <div className="product-section">
          <h2>Who It’s For</h2>
          <ul>
            <li>Hospitals and healthcare facilities</li>
            <li>Janitorial services teams</li>
            <li>Site supervisors and facility managers</li>
            <li>Healthcare administrators and operational partners</li>
          </ul>
        </div>

        <div className="product-section">
          <h2>Why It Matters</h2>
          <p>
            Healthcare environments require structured support systems behind
            the scenes, not just clinical tools. Cleanliness, incident
            coordination, stock access, and team workflow all affect service
            quality and facility performance.
          </p>
          <p>
            MedCleanOps creates a strong operational layer for a category of
            healthcare work that is often underserved by software.
          </p>
        </div>

        <div className="product-section">
          <h2>Business Model</h2>
          <ul>
            <li>SaaS subscriptions for hospitals and facility operators</li>
            <li>Multi-site deployment for healthcare service providers</li>
            <li>Implementation and training services</li>
            <li>Support, maintenance, and workflow customization</li>
          </ul>
        </div>

        <div className="product-section">
          <h2>Long-Term Potential</h2>
          <p>
            MedCleanOps can evolve into a broader healthcare support operations
            platform covering workforce coordination, compliance workflows,
            materials management, and institutional facility intelligence.
          </p>
        </div>

        <div className="product-cta">
          <h2>Explore MedCleanOps</h2>
          <p>
            Interested in hospital operations technology, facility deployment,
            or healthcare workflow modernization?
          </p>
          <a
            href="https://clean-envoy-ops.lovable.app/"
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

export default MedCleanOps;