import products from "../data/products";
import { Link } from "react-router-dom";

function ProductsSection() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Featured Products</p>
          <h2>Technology Products Built Around Real Sector Needs</h2>
          <p className="section-intro">
            Our product portfolio reflects Xuzentra’s focus on solving practical
            challenges across institutional systems, operations, and emerging
            markets.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <article key={index} className="product-card">
              <div className="product-badge">{product.category}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>

        <div className="section-actions">
          <Link to="/products" className="btn btn-outline">
            View Product Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;