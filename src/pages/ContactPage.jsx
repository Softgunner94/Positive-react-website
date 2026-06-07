import React, { useState } from "react";
import "./ContactPage.css";
import PageHeader from "../components/PageHeader";

const COMPANY_EMAIL = "mayhourh@gmail.com";
const WHATSAPP_NUMBER = "2348032174660"; // E.164 without +

const SERVICES = [
  "Consulting",
  "Accounting Services",
  "Tax & Consulting Services",
  "Business Advisory Services",
  "Audit Services",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(
      `Inquiry from ${form.fullName} – ${form.service}`
    );
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Needed: ${form.service}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  
  return (
    <div>
      <PageHeader />
    <div className="daikot-page">
      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="daikot-hero">
        <h1 className="daikot-title">Contact Positive</h1>
        <p className="daikot-subtitle">
          Get in touch and the right specialist will respond to your inquiry as
          soon as possible.
        </p>
      </div>

      <div className="daikot-card">
        <h2 className="card-heading">Contact Us</h2>

        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <p>Your email client has been opened. Send the message to complete your inquiry!</p>
            <button className="btn-reset" onClick={() => { setForm({ fullName: "", phone: "", email: "", service: "", message: "" }); setSubmitted(false); }}>
              Send Another
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "input-error" : ""}
                  aria-label="Full name"
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? "input-error" : ""}
                  aria-label="Phone number"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <input
                type="email"
                name="email"
                placeholder="myemail@gmail.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
                aria-label="Email address"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group full-width">
              <label className="services-label">Services needed</label>
              <div className="select-wrapper">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={errors.service ? "input-error" : ""}
                  aria-label="Select a service"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="select-chevron">▾</span>
              </div>
              {errors.service && <span className="error-text">{errors.service}</span>}
            </div>

            <div className="form-group full-width">
              <label className="services-label">Message</label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? "input-error" : ""}
                aria-label="Your message"
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-send">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.65 4.83 1.79 6.86L2 30l7.34-1.77A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.59l-.42-.25-4.35 1.05 1.08-4.24-.27-.44A11.5 11.5 0 1116 27.5zm6.3-8.62c-.34-.17-2.02-1-2.33-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59l-.66-.01c-.23 0-.6.09-.91.43-.32.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.32-.23-.66-.4z" />
        </svg>
      </a>
    </div>
    </div>
  );
}