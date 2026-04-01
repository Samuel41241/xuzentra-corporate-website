import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  const productLinks = {
    EduSignal: "/products/edusignal",
    "GasWise Nigeria": "/products/gaswise",
    MedCleanOps: "/products/medcleanops",
    "DigiGuide NG": "/products/digiguide",
  };

  return (
    <section className="page-section">
      <Helmet>
        <title>Products | Xuzentra Technologies Limited</title>
        <meta
          name="description"
          content="Explore Xuzentra’s product portfolio across education, healthcare, energy, and digital inclusion."
        />
      </Helmet>

      <div className="container">
        <div className="page-placeholder">
          <p className="eyebrow">Products</p>
          <h1>Our Product Portfolio</h1>
          <p>
            Xuzentra develops sector-focused products that address practical
            needs in education, healthcare, energy, and digital inclusion.
          </p>

          <div className="page-list-grid">
            {products.map((product, index) => (
              <article key={index} className="page-list-card">
                <p className="page-mini-label">{product.category}</p>
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                {productLinks[product.name] && (
                  <Link to={productLinks[product.name]} className="btn btn-outline">
                    View Product
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;