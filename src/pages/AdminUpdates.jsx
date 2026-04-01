import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

function AdminUpdates() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const loadUpdates = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("site_updates")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setStatusMessage(error.message || "Failed to load updates.");
      setLoading(false);
      return;
    }

    setUpdates(data || []);
    setStatusMessage("");
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    const payload = {
      status,
      published_at: status === "published" ? new Date().toISOString() : null,
    };

    const { error } = await supabase
      .from("site_updates")
      .update(payload)
      .eq("id", id);

    if (error) {
      setStatusMessage(error.message || "Failed to update item.");
      return;
    }

    loadUpdates();
  };

  const toggleHomepage = async (id, nextValue) => {
    if (nextValue) {
      await supabase
        .from("site_updates")
        .update({ show_on_homepage: false })
        .neq("id", id);
    }

    const { error } = await supabase
      .from("site_updates")
      .update({ show_on_homepage: nextValue })
      .eq("id", id);

    if (error) {
      setStatusMessage(error.message || "Failed to update homepage display.");
      return;
    }

    loadUpdates();
  };

  const deleteUpdate = async (id) => {
    const confirmed = window.confirm("Delete this update?");
    if (!confirmed) return;

    const { error } = await supabase
      .from("site_updates")
      .delete()
      .eq("id", id);

    if (error) {
      setStatusMessage(error.message || "Failed to delete update.");
      return;
    }

    loadUpdates();
  };

  useEffect(() => {
    loadUpdates();
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <div className="admin-dashboard-header">
          <div>
            <p className="eyebrow">Admin Dashboard</p>
            <h1>Company Updates</h1>
            <p>Create, publish, edit, archive, or remove homepage company updates.</p>
          </div>

          <div className="admin-dashboard-actions">
            <button type="button" className="btn btn-outline" onClick={loadUpdates}>
              Refresh
            </button>
            <Link to="/admin/updates/new" className="btn btn-primary">
              New Update
            </Link>
          </div>
        </div>

        {statusMessage && <p className="form-status error">{statusMessage}</p>}

        {loading ? (
          <div className="page-placeholder">
            <p>Loading updates...</p>
          </div>
        ) : updates.length === 0 ? (
          <div className="page-placeholder">
            <p>No updates yet.</p>
          </div>
        ) : (
          <div className="admin-inquiries-grid">
            {updates.map((item) => (
              <article key={item.id} className="admin-inquiry-card">
                <div className="admin-inquiry-top">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="admin-meta">{item.slug}</p>
                    <p className="admin-meta">
                      Homepage: {item.show_on_homepage ? "Yes" : "No"}
                    </p>
                  </div>

                  <span className={`status-pill status-${item.status}`}>
                    {item.status}
                  </span>
                </div>

                <p className="admin-message">{item.summary}</p>

                <div className="admin-status-actions">
                  <Link to={`/admin/updates/${item.id}/edit`} className="btn btn-outline">
                    Edit
                  </Link>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(item.id, "draft")}
                  >
                    Draft
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(item.id, "published")}
                  >
                    Publish
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateStatus(item.id, "archived")}
                  >
                    Archive
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => toggleHomepage(item.id, !item.show_on_homepage)}
                  >
                    {item.show_on_homepage ? "Remove from Homepage" : "Show on Homepage"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => deleteUpdate(item.id)}
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

export default AdminUpdates;