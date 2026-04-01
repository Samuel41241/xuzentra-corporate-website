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
  summary: "",
  content: "",
  cta_text: "",
  cta_link: "",
  image_url: "",
  status: "draft",
  show_on_homepage: false,
};

function AdminUpdateEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = useMemo(() => Boolean(id), [id]);

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!isEditMode) return;

    async function loadItem() {
      const { data, error } = await supabase
        .from("site_updates")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          summary: data.summary || "",
          content: data.content || "",
          cta_text: data.cta_text || "",
          cta_link: data.cta_link || "",
          image_url: data.image_url || "",
          status: data.status || "draft",
          show_on_homepage: data.show_on_homepage || false,
        });
      }

      setLoading(false);
    }

    loadItem();
  }, [id, isEditMode]);

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;

    setFormData((prev) => {
      const next = {
        ...prev,
        [id]: type === "checkbox" ? checked : value,
      };

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

    if (payload.show_on_homepage) {
      await supabase
        .from("site_updates")
        .update({ show_on_homepage: false })
        .neq("id", id || "00000000-0000-0000-0000-000000000000");
    }

    let error = null;

    if (isEditMode) {
      const response = await supabase
        .from("site_updates")
        .update(payload)
        .eq("id", id);
      error = response.error;
    } else {
      const response = await supabase
        .from("site_updates")
        .insert([payload]);
      error = response.error;
    }

    if (error) {
      setStatusMessage(error.message || "Failed to save update.");
      setSaving(false);
      return;
    }

    setSaving(false);
    navigate("/admin/updates");
  };

  if (loading) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-placeholder">
            <p>Loading update...</p>
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
          <h1>{isEditMode ? "Edit Company Update" : "New Company Update"}</h1>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input id="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <input id="slug" value={formData.slug} onChange={handleChange} required />
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
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                rows="6"
                value={formData.content}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cta_text">CTA Text</label>
              <input id="cta_text" value={formData.cta_text} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="cta_link">CTA Link</label>
              <input id="cta_link" value={formData.cta_link} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="image_url">Image URL</label>
              <input id="image_url" value={formData.image_url} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" value={formData.status} onChange={handleChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="form-group form-checkbox-row">
              <label htmlFor="show_on_homepage">Show on homepage</label>
              <input
                id="show_on_homepage"
                type="checkbox"
                checked={formData.show_on_homepage}
                onChange={handleChange}
              />
            </div>

            {statusMessage && <p className="form-status error">{statusMessage}</p>}

            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Saving..." : "Save Update"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminUpdateEditor;