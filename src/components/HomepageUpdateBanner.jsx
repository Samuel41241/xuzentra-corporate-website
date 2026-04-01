import { Link } from "react-router-dom";

function HomepageUpdateBanner({ update }) {
  if (!update) return null;

  const isExternal = update.cta_link?.startsWith("http");

  return (
    <section className="homepage-update-banner">
      <div className="container homepage-update-inner">
        <div className="homepage-update-content">
          <p className="eyebrow">Company Update</p>
          <h1>{update.title}</h1>
          <p>{update.summary}</p>

          {update.cta_text && update.cta_link && (
            isExternal ? (
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
            )
          )}
        </div>

        {update.image_url && (
          <div className="homepage-update-visual">
            <img
              src={update.image_url}
              alt={update.title}
              className="homepage-update-image"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default HomepageUpdateBanner;