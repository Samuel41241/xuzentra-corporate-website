import { Helmet } from "react-helmet-async";
import company from "../data/company";
import products from "../data/products";

function Investor() {
  return (
    <section className="page-section">

 <Helmet>
        <title>Investor | Xuzentra Technologies Limited</title>
        <meta
          name="description"
          content="We are building a multi-product technology company focused on sector-specific solutions with strong deployment potential. And, We aim to become a trusted African technology company delivering digital infrastructure for institutional transformation."
        />
      </Helmet>

      <div className="container">
        <div className="page-placeholder investor-page">
          <p className="eyebrow">Investor Overview</p>
          <h1>Why Xuzentra</h1>
          <p>
            {company.name} is building practical digital infrastructure for
            institutions and emerging markets across education, healthcare,
            energy, and public-sector ecosystems.
          </p>

          <div className="page-list-grid">
            <article className="page-list-card">
              <h3>The Opportunity</h3>
              <p>
                Many institutions and operational environments still struggle
                with fragmented systems, weak visibility, and poor digital
                execution. Xuzentra is building practical digital tools to
                solve these gaps.
              </p>
            </article>

            <article className="page-list-card">
              <h3>Our Position</h3>
              <p>
                We are building a multi-product technology company focused on
                sector-specific solutions with strong deployment potential.
              </p>
            </article>

            <article className="page-list-card">
              <h3>Product Portfolio</h3>
              <p>
                Our portfolio spans education technology, healthcare operations,
                energy intelligence, and digital inclusion.
              </p>
            </article>

            <article className="page-list-card">
              <h3>Growth Vision</h3>
              <p>
                We aim to become a trusted African technology company delivering
                digital infrastructure for institutional transformation.
              </p>
            </article>
          </div>

          <div className="investor-products">
            <h2>Featured Products</h2>
            <div className="page-list-grid">
              {products.map((product, index) => (
                <article key={index} className="page-list-card">
                  <p className="page-mini-label">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Investor;