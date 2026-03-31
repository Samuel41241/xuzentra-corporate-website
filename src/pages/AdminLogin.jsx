import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signInAdmin } from "../lib/auth";
import { supabase } from "../lib/supabase";

function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin/inquiries";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate(from, { replace: true });
      }
    }

    checkSession();
  }, [navigate, from]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const { error } = await signInAdmin(formData.email, formData.password);

    if (error) {
      setStatus({
        loading: false,
        message: error.message || "Login failed.",
        error: true,
      });
      return;
    }

    setStatus({
      loading: false,
      message: "",
      error: false,
    });

    navigate(from, { replace: true });
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-placeholder admin-auth-box">
          <p className="eyebrow">Admin Access</p>
          <h1>Admin Login</h1>
          <p>Sign in to access Xuzentra administrative tools.</p>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status.loading}>
              {status.loading ? "Signing in..." : "Sign In"}
            </button>

            {status.message && (
              <p className={status.error ? "form-status error" : "form-status success"}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;