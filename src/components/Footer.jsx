import { Link } from "react-router-dom";
import company from "../data/company";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark">X</span>
            <div className="brand-text">
              <span className="brand-name">{company.shortName}</span>
              <span className="brand-subtitle">Technologies Limited</span>
            </div>
          </div>
          <p className="footer-copy">
            Building practical digital infrastructure for institutions,
            businesses, and emerging markets.
          </p>
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