import { Link } from "react-router-dom";

function HomepageUpdateBanner({ update }) {
  if (!update) return null;

  const isExternal = update.cta_link?.startsWith("http");

  return (
    <section
      className="homepage-update-banner hero-immersive"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(3, 10, 25, 0.9), rgba(3, 10, 25, 0.55), rgba(3, 10, 25, 0.2)), url("${update.image_url || "/images/hero/xuzentra-hero.jpg"}")`,
      }}
    >
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-immersive-inner">
        <div className="homepage-update-content hero-overlay-content">
          <p className="eyebrow">Company Update</p>
          <h1>{update.title}</h1>
          <p className="hero-description">{update.summary}</p>

          {update.cta_text &&
            update.cta_link &&
            (isExternal ? (
              <a
                href={update.cta_link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {update.cta_text}
              </a>
            ) : (
              <Link to={update.cta_link} className="btn btn-primary">
                {update.cta_text}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageUpdateBanner;