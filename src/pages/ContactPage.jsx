import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

// ── EmailJS credentials ──────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_6mpo1bt";
const EMAILJS_TEMPLATE_ID = "template_6kyfsjk";
const EMAILJS_PUBLIC_KEY  = "ZzWdyh3biiMFIgqDc";

// ── WhatsApp ─────────────────────────────────────────────────
const WHATSAPP_NUMBER = "2348032174660";

// ── Service options ───────────────────────────────────────────
const SERVICES = [
  "Consulting",
  "Accounting Services",
  "Tax & Consulting Services",
  "Business Advisory Services",
  "Audit Services",
  "Other",
];

// ── Initial form state ────────────────────────────────────────
const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const formRef = useRef(null); // ref attached to <form> — required by emailjs.sendForm()

  const [form, setForm]           = useState(INITIAL_FORM);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  // ── Validation ──────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.phone.trim())    e.phone    = "Phone number is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim()) e.message = "Please enter your message.";
    return e;
  };

  // ── Handle input changes ────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as the user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // ── Handle form submission ──────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation first
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // emailjs.sendForm() reads input name attributes from the DOM form element
    // and maps them to your EmailJS template variables ({{fullName}}, {{phone}}, etc.)
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,   // ← the actual <form> DOM node, NOT useState
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setForm(INITIAL_FORM); // reset controlled inputs
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again or contact us directly on WhatsApp.");
      });
  };

  // ── Reset back to the form ──────────────────────────────────
  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  // ── Render ──────────────────────────────────────────────────
  return (
    <div className="cp-page">
      {/* Decorative blobs */}
      <div className="cp-blob cp-blob--1" aria-hidden="true" />
      <div className="cp-blob cp-blob--2" aria-hidden="true" />

      {/* Hero */}
      <div className="cp-hero">
        <span className="cp-eyebrow">Get in touch</span>
        <h1 className="cp-hero__title">Contact Positive Professional</h1>
        <p className="cp-hero__sub">
          Reach out and the right specialist will respond to your inquiry as
          soon as possible.
        </p>
      </div>

      {/* Info strip */}
      <div className="cp-info-strip">
        <div className="cp-info-item">
          <div className="cp-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </div>
          <div>
            <div className="cp-info-label">Phone</div>
            <div className="cp-info-value">+2348032174660</div>
          </div>
        </div>

        <div className="cp-info-item">
          <div className="cp-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div>
            <div className="cp-info-label">Email</div>
            <div className="cp-info-value">gbemiga@positiveprofessional.org</div>
          </div>
        </div>

        <div className="cp-info-item">
          <div className="cp-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <div className="cp-info-label">Location</div>
            <div className="cp-info-value">Nigeria</div>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="cp-card">
        <div className="cp-card__left">
          <h2 className="cp-card__heading">Send us a message</h2>
          <p className="cp-card__desc">
            Fill in the form and we&apos;ll get back to you within 24 hours.
            All inquiries are treated with the utmost confidentiality.
          </p>

          <div className="cp-card__assurance">
            {[
              "Professional. Reliable. Confidential.",
              "RC 9549917 registered company",
              "Response within 24 hours",
            ].map((a) => (
              <div key={a} className="cp-assurance-item">
                <span className="cp-assurance-dot" aria-hidden="true" />
                {a}
              </div>
            ))}
          </div>
        </div>

        <div className="cp-card__right">
          {submitted ? (
            /* ── Success state ── */
            <div className="cp-success">
              <div className="cp-success__icon" aria-hidden="true">✓</div>
              <h3 className="cp-success__title">Message sent!</h3>
              <p className="cp-success__text">
                Thank you for reaching out. A member of our team will be in
                touch with you shortly.
              </p>
              <button className="cp-btn cp-btn--outline" onClick={handleReset}>
                Send another message
              </button>
            </div>
          ) : (
            /* ── Contact form ── */
            <form
              ref={formRef}
              className="cp-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Row: full name + phone */}
              <div className="cp-form__row">
                <div className="cp-form__group">
                  <label htmlFor="fullName" className="cp-label">
                    Full name <span className="cp-required">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "cp-input cp-input--error" : "cp-input"}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="cp-error" role="alert">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className="cp-form__group">
                  <label htmlFor="phone" className="cp-label">
                    Phone number <span className="cp-required">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+234 800 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={errors.phone ? "cp-input cp-input--error" : "cp-input"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="cp-error" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="cp-form__group">
                <label htmlFor="email" className="cp-label">
                  Email address <span className="cp-required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="yourname@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "cp-input cp-input--error" : "cp-input"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="cp-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Service */}
              <div className="cp-form__group">
                <label htmlFor="service" className="cp-label">
                  Service needed <span className="cp-required">*</span>
                </label>
                <div className="cp-select-wrapper">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={errors.service ? "cp-select cp-input--error" : "cp-select"}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className="cp-select-chevron" aria-hidden="true">▾</span>
                </div>
                {errors.service && (
                  <span id="service-error" className="cp-error" role="alert">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="cp-form__group">
                <label htmlFor="message" className="cp-label">
                  Message <span className="cp-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={errors.message ? "cp-input cp-textarea cp-input--error" : "cp-input cp-textarea"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="cp-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="cp-btn cp-btn--primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="cp-spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cp-whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.65 4.83 1.79 6.86L2 30l7.34-1.77A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.59l-.42-.25-4.35 1.05 1.08-4.24-.27-.44A11.5 11.5 0 1116 27.5zm6.3-8.62c-.34-.17-2.02-1-2.33-1.11-.32-.11-.55-.17-.78.17-.23.34-.9 1.11-1.1 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.67-.57-.58-.78-.59l-.66-.01c-.23 0-.6.09-.91.43-.32.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.32-.23-.66-.4z" />
        </svg>
        <span className="cp-whatsapp-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  );
}