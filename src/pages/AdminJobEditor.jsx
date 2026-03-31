import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const initialState = {
  title: "",
  slug: "",
  department: "",
  location: "",
  employment_type: "",
  work_mode: "",
  summary: "",
  description: "",
  requirements: "",
  responsibilities: "",
  application_url: "",
  application_email: "",
  status: "draft",
};

function AdminJobEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = useMemo(() => Boolean(id), [id]);

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!isEditMode) return;

    async function loadJob() {
      const { data, error } = await supabase
        .from("job_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          department: data.department || "",
          location: data.location || "",
          employment_type: data.employment_type || "",
          work_mode: data.work_mode || "",
          summary: data.summary || "",
          description: data.description || "",
          requirements: data.requirements || "",
          responsibilities: data.responsibilities || "",
          application_url: data.application_url || "",
          application_email: data.application_email || "",
          status: data.status || "draft",
        });
      }

      setLoading(false);
    }

    loadJob();
  }, [id, isEditMode]);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => {
      const next = { ...prev, [id]: value };

      if (id === "title" && (!prev.slug || prev.slug === slugify(prev.title))) {
        next.slug = slugify(value);
      }

      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setStatusMessage("");

    const payload = {
      ...formData,
      slug: slugify(formData.slug || formData.title),
      published_at:
        formData.status === "published" ? new Date().toISOString() : null,
    };

    let error = null;

    if (isEditMode) {
      const response = await supabase.from("job_posts").update(payload).eq("id", id);
      error = response.error;
    } else {
      const response = await supabase.from("job_posts").insert([payload]);
      error = response.error;
    }

    if (error) {
      setStatusMessage(error.message || "Failed to save job advert.");
      setSaving(false);
      return;
    }

    setSaving(false);
    navigate("/admin/jobs");
  };

  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-placeholder">
            <p>Loading job advert...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-placeholder admin-auth-box">
          <p className="eyebrow">Admin Dashboard</p>
          <h1>{isEditMode ? "Edit Job Advert" : "New Job Advert"}</h1>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Job Title</label>
              <input
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <input
                id="slug"
                value={formData.slug}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                id="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="employment_type">Employment Type</label>
              <input
                id="employment_type"
                value={formData.employment_type}
                onChange={handleChange}
                placeholder="Full-time, Contract, Internship"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="work_mode">Work Mode</label>
              <input
                id="work_mode"
                value={formData.work_mode}
                onChange={handleChange}
                placeholder="Remote, Hybrid, On-site"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <textarea
                id="summary"
                rows="3"
                value={formData.summary}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="responsibilities">Responsibilities</label>
              <textarea
                id="responsibilities"
                rows="5"
                value={formData.responsibilities}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="requirements">Requirements</label>
              <textarea
                id="requirements"
                rows="5"
                value={formData.requirements}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="application_url">Application URL</label>
              <input
                id="application_url"
                type="url"
                value={formData.application_url}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="application_email">Application Email</label>
              <input
                id="application_email"
                type="email"
                value={formData.application_email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" value={formData.status} onChange={handleChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="closed">Closed</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {statusMessage && <p className="form-status error">{statusMessage}</p>}

            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Saving..." : "Save Job Advert"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminJobEditor;