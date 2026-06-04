import "./Footer.css";

// ── Quick Links data ──────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: "Home",        href: "#" },
  { label: "About Us",    href: "#about" },
  { label: "Services",    href: "#services" },
  { label: "Our Approach",href: "#approach" },
  { label: "Benefits",    href: "#benefits" },
  { label: "Contact Us",  href: "#contact" },
];

// ── Contact info data ─────────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    id: 1,
    icon: "📞",
    label: "Phone",
    value: "+234 803 217 4660",
    href: "tel:+2348032174660",
    isLink: true,
  },
  {
    id: 2,
    icon: "✉️",
    label: "Email",
    value: "gbemiga@positiveprofessional.org",
    href: "mailto:gbemiga@positiveprofessional.org",
    isLink: true,
  },
  {
    id: 3,
    icon: "📍",
    label: "Location",
    value: "Nigeria",
    href: null,
    isLink: false,
  },
];




// ── Footer Component ──────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* SECTION WRAPPER — wraps CTA banner + footer body + bottom bar */
    <footer className="footer-section" aria-label="Site Footer">

      {/* ══ CTA BANNER ══════════════════════════════════════ */}
      <div className="footer-cta">
        <div className="footer-cta__container">

          {/* Left text */}
          <div className="footer-cta__text">
            <h2 className="footer-cta__heading">
              Let's Help You Build a Stronger Financial Future
            </h2>
            <p className="footer-cta__sub">
              Partner with us for dependable accounting, tax, and advisory solutions.
            </p>
          </div>

          {/* Action buttons */}
          <div className="footer-cta__actions">
            <a
              href="tel:+2348032174660"
              className="footer-cta__btn footer-cta__btn--phone"
              aria-label="Call us"
            >
              <span className="footer-cta__btn-icon">📞</span>
              Call: +2348032174660
            </a>
            <a
              href="mailto:gbemiga@positiveprofessional.org"
              className="footer-cta__btn footer-cta__btn--email"
              aria-label="Email us"
            >
              <span className="footer-cta__btn-icon">✉️</span>
              Email Us
            </a>
          </div>

        </div>
      </div>

      {/* ══ FOOTER BODY ═════════════════════════════════════ */}
      <div className="footer-body">

        {/* CONTAINER — max-width centred */}
        <div className="footer-container">
          <div className="footer-columns">

            {/* ── Column 1: Logo + About ── */}
            <div className="footer-col">

              {/* Logo */}
              <a className="footer-logo" href="#" aria-label="Positive Professional Services Home">
                <div className="footer-logo__badge">
                  <img width="200px" src="/logo1.png" alt="" />
                </div>
              </a>

              {/* About blurb */}
              <p className="footer-about">
                At Positive Professional Services, we are committed to delivering
                reliable, timely, and confidential financial services tailored to
                your organization's needs.
              </p>

              {/* Gold divider */}
              <div className="footer-rule" aria-hidden="true" />

            </div>

            {/* ── Column 2: Quick Links ── */}
            <div className="footer-col">
              <h3 className="footer-col__heading">Quick Links</h3>
              <div className="footer-col__rule" aria-hidden="true" />
              <ul className="footer-links" aria-label="Quick navigation links">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a className="footer-links__link" href={href}>
                      {label}
                      <span className="footer-links__chevron" aria-hidden="true">›</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3: Contact Information ── */}
            <div className="footer-col">
              <h3 className="footer-col__heading">Contact Information</h3>
              <div className="footer-col__rule" aria-hidden="true" />
              <ul className="footer-contact" aria-label="Contact information">
                {CONTACT_INFO.map((item) => (
                  <li className="footer-contact__item" key={item.id}>
                    <div
                      className="footer-contact__icon"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div className="footer-contact__info">
                      <span className="footer-contact__label">{item.label}</span>
                      {item.isLink ? (
                        <a
                          className="footer-contact__value"
                          href={item.href}
                          aria-label={`${item.label}: ${item.value}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="footer-contact__value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <div className="footer-bottom__inner">
            <p className="footer-bottom__copy">
              © {currentYear}{" "}
              <span>Positive Professional Services Ltd.</span>{" "}
              All rights reserved.
            </p>
            <p className="footer-bottom__tagline">
              Professional. Reliable. Committed.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}