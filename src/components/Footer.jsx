import { Link } from "react-router-dom";
import company from "../data/company";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src="/images/logo/xuzentra-logo.png"
              alt="Xuzentra Technologies Limited"
              className="brand-logo"
            />

            <div className="brand-text">
              <span className="brand-name">{company.shortName}</span>
              <span className="brand-subtitle">Technologies Limited</span>
            </div>
          </div>

          <p className="footer-copy">
            Building practical digital infrastructure for institutions,
            businesses, and emerging markets.
          </p>

          <div
  className="footer-socials"
  style={{
    display: "flex",
    gap: "12px",
    marginTop: "26px",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://x.com/xuzentra"
    target="_blank"
    rel="noreferrer"
    style={{
      padding: "10px 16px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.08)",
      color: "#c7d7ee",
      textDecoration: "none",
    }}
  >
    X
  </a>

  <a
    href="https://linkedin.com/company/xuzentra"
    target="_blank"
    rel="noreferrer"
    style={{
      padding: "10px 16px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.08)",
      color: "#c7d7ee",
      textDecoration: "none",
    }}
  >
    LinkedIn
  </a>

  <a
    href="https://instagram.com/xuzentra"
    target="_blank"
    rel="noreferrer"
    style={{
      padding: "10px 16px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.08)",
      color: "#c7d7ee",
      textDecoration: "none",
    }}
  >
    Instagram
  </a>
</div>
        </div>

        <div>
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/investor">Investor</Link></li>
            <li><Link to="/careers">Join Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li>{company.location}</li>
            <li>{company.email}</li>
            <li>{company.inquiryEmail}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;