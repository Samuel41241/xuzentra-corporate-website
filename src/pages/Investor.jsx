import { Helmet } from "react-helmet-async";
import company from "../data/company";
import products from "../data/products";

function Investor() {
  return (
    <section className="page-section">
      <Helmet>
        <title>Investor Overview | Xuzentra Technologies Limited</title>
        <meta
          name="description"
          content="Investor overview for Xuzentra Technologies Limited, a Nigerian technology company building practical digital infrastructure across education, healthcare, energy, and public-sector ecosystems."
        />
      </Helmet>

      <div className="container">
        <div className="page-placeholder investor-page">
          <p className="eyebrow">Investor Overview</p>
          <h1>Building Practical Digital Infrastructure for Underserved Institutional Markets</h1>
          <p>
            {company.name} is building sector-focused digital systems designed
            for institutions, operational environments, and emerging markets
            across Africa.
          </p>

          <div className="page-list-grid">
            <article className="page-list-card">
              <h3>The Thesis</h3>
              <p>
                Many institutions across Africa still operate with fragmented,
                manual, or poorly integrated systems. Xuzentra is building
                practical digital infrastructure that improves visibility,
                workflows, monitoring, and service delivery.
              </p>
            </article>

            <article className="page-list-card">
              <h3>Why Now</h3>
              <p>
                Digital adoption is accelerating, but many sector-specific
                operational challenges remain underserved. This creates a strong
                opportunity for focused, deployable, and context-aware software
                platforms.
              </p>
            </article>

            <article className="page-list-card">
              <h3>Market Focus</h3>
              <p>
                Xuzentra is focused on education, healthcare, energy, and
                public-sector ecosystems — areas where digital systems can
                significantly improve execution, coordination, and scale.
              </p>
            </article>

            <article className="page-list-card">
              <h3>Strategic Position</h3>
              <p>
                Rather than building generic software, Xuzentra is developing
                sector-aligned products with practical use cases, implementation
                relevance, and long-term deployment value.
              </p>
            </article>
          </div>

          <div className="investor-section">
            <h2>Why Xuzentra</h2>
            <div className="page-list-grid">
              <article className="page-list-card">
                <h3>Sector-Specific Approach</h3>
                <p>
                  Our products are built around real institutional and market
                  problems, not abstract software ideas.
                </p>
              </article>

              <article className="page-list-card">
                <h3>Multi-Product Potential</h3>
                <p>
                  Xuzentra is being built as a structured technology company
                  with multiple vertical opportunities across high-need sectors.
                </p>
              </article>

              <article className="page-list-card">
                <h3>Execution-Oriented Design</h3>
                <p>
                  We focus on deployable systems that improve operational
                  workflows, reporting, oversight, and decision-making.
                </p>
              </article>

              <article className="page-list-card">
                <h3>African Market Relevance</h3>
                <p>
                  Our solutions are being designed with local realities in mind,
                  including institutional constraints, operational inefficiency,
                  and sector implementation gaps.
                </p>
              </article>
            </div>
          </div>

          <div className="page-list-grid">
  {products.map((product, index) => {
    const productLinks = {
      EduSignal: "/products/edusignal",
      "GasWise Nigeria": "/products/gaswise",
      MedCleanOps: "/products/medcleanops",
      "DigiGuide NG": "/products/digiguide",
    };

    return (
      <article key={index} className="page-list-card">
        <p className="page-mini-label">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        {productLinks[product.name] && (
          <a href={productLinks[product.name]} className="btn btn-outline">
            View Product
          </a>
        )}
      </article>
    );


    
  })}

<div className="investor-section">
  <h2>Company Brief</h2>
  <p>
    Download our company brief for a structured overview of Xuzentra’s
    strategy, product portfolio, and long-term vision across key sectors.
  </p>

  <div className="investor-brief-box">
    <div>
      <h3>Xuzentra Company Brief</h3>
      <p>
        Includes company overview, product portfolio, business model,
        and strategic direction.
      </p>
    </div>

    <a
      href="/docs/xuzentra-company-brief.pdf"
      target="_blank"
      rel="noreferrer"
      className="btn btn-primary"
    >
      Download PDF
    </a>
  </div>
</div>

</div>

          <div className="investor-section">
            <h2>Business Model Direction</h2>
            <div className="page-list-grid">
              <article className="page-list-card">
                <h3>SaaS Revenue</h3>
                <p>
                  Subscription-based access for institutions and operational
                  teams that need reliable, ongoing digital systems.
                </p>
              </article>

              <article className="page-list-card">
                <h3>Enterprise Deployment</h3>
                <p>
                  Product customization, implementation, and structured rollout
                  support for organizations with specific workflow needs.
                </p>
              </article>

              <article className="page-list-card">
                <h3>Support & Maintenance</h3>
                <p>
                  Post-deployment support, managed improvements, and operational
                  continuity services as products mature.
                </p>
              </article>

              <article className="page-list-card">
                <h3>Strategic Partnerships</h3>
                <p>
                  Collaboration with institutions, ecosystem players, and
                  implementation partners to expand reach and adoption.
                </p>
              </article>
            </div>
          </div>

          <div className="investor-section">
            <h2>Long-Term Vision</h2>
            <p>
              Xuzentra is being built to become a trusted African technology
              company delivering practical digital infrastructure for
              institutions, operational systems, and emerging market ecosystems.
            </p>
            <p>
              Our ambition is not just to launch products, but to build a
              durable technology company with long-term relevance across
              multiple sectors.
            </p>
          </div>

          <div className="investor-cta">
            <h2>Engage With Xuzentra</h2>
            <p>
              We welcome conversations with investors, strategic partners,
              enterprise collaborators, and ecosystem stakeholders interested in
              practical digital infrastructure for African markets.
            </p>
            <a href="/contact" className="btn btn-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Investor;