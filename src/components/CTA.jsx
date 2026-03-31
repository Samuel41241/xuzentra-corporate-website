import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <p className="eyebrow">Let’s Work Together</p>
          <h2>Discuss a partnership, pilot, or digital transformation project.</h2>
          <p>
            Xuzentra works with institutions, operational teams, enterprises,
            and founders seeking practical technology solutions with clear
            deployment value.
          </p>

          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
            <Link to="/solutions" className="btn btn-outline">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;