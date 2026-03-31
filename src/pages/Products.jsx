import products from "../data/products";

function Products() {
  return (
    <section className="page-section">
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
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;