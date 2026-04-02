import { useState } from "react";
import company from "../data/company";
import { supabase } from "../lib/supabase";

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    organization: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

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

    const { error } = await supabase.from("contact_inquiries").insert([
      {
        full_name: formData.fullName,
        email: formData.emailAddress,
        organization: formData.organization,
        message: formData.message,
      },
    ]);

    if (error) {
      setStatus({
        loading: false,
        message: "Something went wrong. Please try again.",
        error: true,
      });
      return;
    }

    setStatus({
      loading: false,
      message: "Your inquiry has been sent successfully.",
      error: false,
    });

    setFormData({
      fullName: "",
      emailAddress: "",
      organization: "",
      message: "",
    });
  };

  return (
    <section className="contact-section-block">
      <div className="container contact-grid">
        <div className="contact-info-card">
          <p className="eyebrow">Contact</p>
          <h2>Start a Business Conversation</h2>
          <p>
            For partnerships, institutional engagements, enterprise solutions,
            or product-related discussions, contact {company.name}.
          </p>

          <ul className="contact-points">
            <li>Location: {company.location}</li>
            <li>General Inquiries: {company.inquiryEmail}</li>
            <li>Partnerships: {company.email}</li>
            <li>Join Us: {company.careers}</li>
            <li>Phonecontact: {company.phonecontact}</li>
          </ul>
        </div>

        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              type="email"
              placeholder="you@company.com"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              id="organization"
              type="text"
              placeholder="Your organization or company"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us about your project, partnership, or inquiry"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Inquiry"}
          </button>

          {status.message && (
            <p className={status.error ? "form-status error" : "form-status success"}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;