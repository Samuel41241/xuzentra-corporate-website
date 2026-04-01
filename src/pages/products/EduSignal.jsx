import { Helmet } from "react-helmet-async";

function EduSignal() {
  return (
    <section className="page-section">
      <Helmet>
        <title>EduSignal | Education Intelligence Platform</title>
        <meta
          name="description"
          content="EduSignal is a readiness and monitoring platform designed to support large-scale education reform programs through data, visibility, and operational insights."
        />
      </Helmet>

      <div className="container product-page">
        {/* HERO */}
        <div className="product-hero">
          <p className="eyebrow">Education Technology</p>
          <h1>EduSignal</h1>
          <p className="product-tagline">
            A readiness and monitoring platform for large-scale education
            reform programs.
          </p>
        </div>

        {/* PROBLEM */}
        <div className="product-section">
          <h2>The Problem</h2>
          <p>
            Across many African countries, education reform initiatives struggle
            with implementation gaps. Governments and organizations invest in
            devices, platforms, and training programs, but lack real visibility
            into readiness, usage, and long-term sustainability.
          </p>
          <p>
            As a result, large-scale interventions often fail to deliver
            measurable impact due to poor monitoring, weak feedback systems, and
            limited data-driven decision-making.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="product-section">
          <h2>The Solution</h2>
          <p>
            EduSignal provides a structured system for assessing readiness,
            monitoring deployment, and tracking real-time usage of education
            technologies across institutions.
          </p>
          <p>
            The platform enables stakeholders to move from assumptions to
            evidence-based insights, improving implementation quality and
            long-term sustainability.
          </p>
        </div>

        {/* USERS */}
        <div className="product-section">
          <h2>Who It’s For</h2>
          <ul>
            <li>Government education ministries</li>
            <li>NGOs and donor-funded education programs</li>
            <li>School systems and administrators</li>
            <li>Education technology implementation partners</li>
          </ul>
        </div>

        {/* WHY IT MATTERS */}
        <div className="product-section">
          <h2>Why It Matters</h2>
          <p>
            Education systems represent one of the largest public investments in
            developing economies. Without proper monitoring and feedback
            systems, resources are often underutilized and impact is lost.
          </p>
          <p>
            EduSignal enables better accountability, improved resource
            allocation, and measurable outcomes — making it a critical layer in
            education transformation.
          </p>
        </div>

        {/* BUSINESS MODEL */}
        <div className="product-section">
          <h2>Business Model</h2>
          <ul>
            <li>SaaS subscriptions for institutions and programs</li>
            <li>Enterprise deployments for large-scale reforms</li>
            <li>Implementation and onboarding services</li>
            <li>Ongoing monitoring and support contracts</li>
          </ul>
        </div>

        {/* LONG TERM */}
        <div className="product-section">
          <h2>Long-Term Potential</h2>
          <p>
            EduSignal can evolve into a central intelligence layer for education
            systems, integrating with devices, platforms, and administrative
            tools to provide continuous insight across entire regions or
            countries.
          </p>
        </div>

        {/* CTA */}
        <div className="product-cta">
          <h2>Explore EduSignal</h2>
          <p>
            Interested in deploying EduSignal or learning more about how it can
            support your education program?
          </p>
          <a
            href="https://edu-signal-pulse.lovable.app/"
            target="_blank"
            className="btn btn-primary"
          >
            View Platform
          </a>
        </div>
      </div>
    </section>
  );
}

export default EduSignal;