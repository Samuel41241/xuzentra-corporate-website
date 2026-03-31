import { Link } from "react-router-dom";
import company from "../data/company";

function AboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="container about-preview-grid">
        <div className="about-preview-content">
          <p className="eyebrow">About Xuzentra</p>
          <h2>A Nigerian Technology Company Focused on Practical Innovation</h2>
          <p>{company.description}</p>
          <p>
            Our work is centered on building digital platforms that can support
            operations, monitoring, service delivery, institutional management,
            and market access across real-world sectors.
          </p>

          <div className="about-preview-points">
            <div className="about-point">Practical product development</div>
            <div className="about-point">Institutional and operational focus</div>
            <div className="about-point">Scalable digital systems</div>
          </div>

          <Link to="/about" className="btn btn-primary">
            Learn More About Us
          </Link>
        </div>

        <div className="about-preview-visual">
          <img
            src="/images/misc/office-tech.png"
            alt="Xuzentra technology visual"
            className="about-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;