import { Helmet } from "react-helmet-async";

function GasWise() {
  return (
    <section className="page-section">
      <Helmet>
        <title>GasWise Nigeria | Energy Intelligence Platform</title>
        <meta
          name="description"
          content="GasWise Nigeria is an energy intelligence platform designed to improve LPG and petrol price visibility, market access, and consumer decision-making."
        />
      </Helmet>

      <div className="container product-page">
        <div className="product-hero">
          <p className="eyebrow">Energy Intelligence</p>
          <h1>GasWise Nigeria</h1>
          <p className="product-tagline">
            A digital platform for LPG and petrol price visibility, market
            intelligence, and smarter energy decisions.
          </p>
        </div>

        <div className="product-section">
          <h2>The Problem</h2>
          <p>
            In Nigeria and other emerging markets, consumers and businesses
            often buy fuel without reliable visibility into who has supply,
            where prices are lower, and how those prices vary across locations.
          </p>
          <p>
            This creates daily inefficiency, unnecessary spending, poor market
            transparency, and weak data for both buyers and vendors.
          </p>
        </div>

        <div className="product-section">
          <h2>The Solution</h2>
          <p>
            GasWise Nigeria provides a real-time energy intelligence layer for
            LPG and petrol markets, helping users discover prices, compare
            locations, and make more informed purchasing decisions.
          </p>
          <p>
            Over time, the platform can also support vendor discovery,
            consumption tracking, market pattern analysis, and broader energy
            ecosystem visibility.
          </p>
        </div>

        <div className="product-section">
          <h2>Who It’s For</h2>
          <ul>
            <li>Households purchasing LPG</li>
            <li>Drivers and transport operators purchasing petrol</li>
            <li>Vendors and filling stations seeking visibility</li>
            <li>Energy market actors and commercial partners</li>
          </ul>
        </div>

        <div className="product-section">
          <h2>Why It Matters</h2>
          <p>
            Energy is a daily necessity, but pricing inefficiency creates major
            financial pressure for households, drivers, and small businesses.
            A platform that improves transparency and market access has strong
            recurring value.
          </p>
          <p>
            GasWise sits at the intersection of consumer utility, market
            intelligence, and scalable platform opportunity.
          </p>
        </div>

        <div className="product-section">
          <h2>Business Model</h2>
          <ul>
            <li>Vendor listing and visibility packages</li>
            <li>Premium consumer features and alerts</li>
            <li>Commercial partnerships and market integrations</li>
            <li>Future data intelligence opportunities</li>
          </ul>
        </div>

        <div className="product-section">
          <h2>Long-Term Potential</h2>
          <p>
            GasWise can evolve into a broader digital energy platform,
            connecting consumers, vendors, and commercial stakeholders through
            location intelligence, price tracking, market data, and service
            discovery.
          </p>
        </div>

        <div className="product-cta">
          <h2>Explore GasWise Nigeria</h2>
          <p>
            Interested in market partnerships, product deployment, or platform
            collaboration in the energy space?
          </p>
          <a
            href="https://gas-wise-nigeria.lovable.app/"
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

export default GasWise;