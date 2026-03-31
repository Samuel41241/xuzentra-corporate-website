import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

function CareerDetails() {
  const { slug } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJob() {
      const { data, error } = await supabase
        .from("job_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (!error) {
        setJob(data);
      }

      setLoading(false);
    }

    loadJob();
  }, [slug]);

  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-placeholder">
            <p>Loading role...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!job) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-placeholder">
            <h1>Role not found</h1>
            <p>This opportunity may have been removed or closed.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-placeholder career-details">
          <p className="eyebrow">Career Opportunity</p>
          <h1>{job.title}</h1>

          <div className="career-meta-grid">
            <div className="page-list-card">
              <h3>Department</h3>
              <p>{job.department}</p>
            </div>
            <div className="page-list-card">
              <h3>Location</h3>
              <p>{job.location}</p>
            </div>
            <div className="page-list-card">
              <h3>Employment Type</h3>
              <p>{job.employment_type}</p>
            </div>
            <div className="page-list-card">
              <h3>Work Mode</h3>
              <p>{job.work_mode}</p>
            </div>
          </div>

          <div className="career-content-block">
            <h2>Role Summary</h2>
            <p>{job.summary}</p>
          </div>

          <div className="career-content-block">
            <h2>Role Description</h2>
            <p>{job.description}</p>
          </div>

          {job.responsibilities && (
            <div className="career-content-block">
              <h2>Responsibilities</h2>
              <p style={{ whiteSpace: "pre-line" }}>{job.responsibilities}</p>
            </div>
          )}

          {job.requirements && (
            <div className="career-content-block">
              <h2>Requirements</h2>
              <p style={{ whiteSpace: "pre-line" }}>{job.requirements}</p>
            </div>
          )}

          <div className="career-apply-box">
            <h2>Apply for this role</h2>

            {job.application_url ? (
              <a
                href={job.application_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Apply Now
              </a>
            ) : job.application_email ? (
              <a
                href={`mailto:${job.application_email}?subject=Application for ${job.title}`}
                className="btn btn-primary"
              >
                Apply by Email
              </a>
            ) : (
              <p>Application instructions will be provided soon.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerDetails;