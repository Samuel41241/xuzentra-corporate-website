import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { signOutAdmin } from "../lib/auth";

function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const loadInquiries = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("contact_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setStatusMessage(error.message || "Failed to load inquiries.");
      setLoading(false);
      return;
    }

    setInquiries(data || []);
    setStatusMessage("");
    setLoading(false);
  };

  const updateInquiryStatus = async (id, status) => {
    const { error } = await supabase
      .from("contact_inquiries")
      .update({ status })
      .eq("id", id);

    if (error) {
      setStatusMessage(error.message || "Failed to update inquiry.");
      return;
    }

    await loadInquiries();
  };

  const handleSignOut = async () => {
    await signOutAdmin();
    window.location.href = "/admin/login";
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <div className="admin-dashboard-header">
          <div>
            <p className="eyebrow">Admin Dashboard</p>
            <h1>Contact Inquiries</h1>
            <p>Review and manage messages submitted through the Xuzentra website.</p>
          </div>

          <div className="admin-dashboard-actions">
            <button type="button" className="btn btn-outline" onClick={loadInquiries}>
              Refresh
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>

        {statusMessage && <p className="form-status error">{statusMessage}</p>}

        {loading ? (
          <div className="page-placeholder">
            <p>Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="page-placeholder">
            <p>No inquiries yet.</p>
          </div>
        ) : (
          <div className="admin-inquiries-grid">
            {inquiries.map((item) => (
              <article key={item.id} className="admin-inquiry-card">
                <div className="admin-inquiry-top">
                  <div>
                    <h3>{item.full_name}</h3>
                    <p className="admin-meta">{item.email}</p>
                    {item.organization && (
                      <p className="admin-meta">{item.organization}</p>
                    )}
                  </div>

                  <span className={`status-pill status-${item.status}`}>
                    {item.status}
                  </span>
                </div>

                <p className="admin-message">{item.message}</p>

                <div className="admin-meta-row">
                  <span>{new Date(item.created_at).toLocaleString()}</span>
                </div>

                <div className="admin-status-actions">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateInquiryStatus(item.id, "new")}
                  >
                    Mark New
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateInquiryStatus(item.id, "reviewed")}
                  >
                    Mark Reviewed
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => updateInquiryStatus(item.id, "archived")}
                  >
                    Archive
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

export default AdminInquiries;