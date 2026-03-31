import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const loadJobs = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("job_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setStatusMessage(error.message || "Failed to load jobs.");
      setLoading(false);
      return;
    }

    setJobs(data || []);
    setStatusMessage("");
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    const updates = {
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { error } = await supabase
      .from("job_posts")
      .update(updates)
      .eq("id", id);

    if (error) {
      setStatusMessage(error.message || "Failed to update job.");
      return;
    }

    loadJobs();
  };

  const deleteJob = async (id) => {
    const confirmed = window.confirm("Delete this job advert?");
    if (!confirmed) return;

    const { error } = await supabase.from("job_posts").delete().eq("id", id);

    if (error) {
      setStatusMessage(error.message || "Failed to delete job.");
      return;
    }

    loadJobs();
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <div className="admin-dashboard-header">
          <div>
            <p className="eyebrow">Admin Dashboard</p>
            <h1>Job Adverts</h1>
            <p>Create, manage, publish, close, archive, and remove job adverts.</p>
          </div>

          <div className="admin-dashboard-actions">
            <button type="button" className="btn btn-outline" onClick={loadJobs}>
              Refresh
            </button>
            <Link to="/admin/jobs/new" className="btn btn-primary">
              New Job Advert
            </Link>
          </div>
        </div>

        {statusMessage && <p className="form-status error">{statusMessage}</p>}

        {loading ? (
          <div className="page-placeholder">
            <p>Loading job adverts...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="page-placeholder">
            <p>No job adverts yet.</p>
          </div>
        ) : (
          <div className="admin-inquiries-grid">
            {jobs.map((job) => (
              <article key={job.id} className="admin-inquiry-card">
                <div className="admin-inquiry-top">
                  <div>
                    <h3>{job.title}</h3>
                    <p className="admin-meta">{job.department}</p>
                    <p className="admin-meta">
                      {job.location} • {job.employment_type} • {job.work_mode}
                    </p>
                  </div>

                  <span className={`status-pill status-${job.status}`}>
                    {job.status}
                  </span>
                </div>

                <p className="admin-message">{job.summary}</p>

                <div className="admin-status-actions">
                  <Link to={`/admin/jobs/${job.id}/edit`} className="btn btn-outline">
                    Edit
                  </Link>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(job.id, "draft")}
                  >
                    Draft
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(job.id, "published")}
                  >
                    Publish
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(job.id, "closed")}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(job.id, "archived")}
                  >
                    Archive
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminJobs;