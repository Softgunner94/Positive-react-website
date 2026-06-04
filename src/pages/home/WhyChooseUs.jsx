import "./WhyChooseUs.css";

// ── Benefits data — matches the website image exactly ─────────────────────────
const BENEFITS = [
  {
    id: 1,
    icon: "📊",
    title: "Improved Financial Record Accuracy",
    desc: "Precise, error-free records you can rely on every time.",
  },
  {
    id: 2,
    icon: "📉",
    title: "Reduced Tax Compliance Risks",
    desc: "Stay ahead of regulations and avoid costly penalties.",
  },
  {
    id: 3,
    icon: "💡",
    title: "Better Financial Decision-Making",
    desc: "Clear insights that drive smarter business choices.",
  },
  {
    id: 4,
    icon: "⏱️",
    title: "Time Savings for Management",
    desc: "Free your team to focus on growth, not paperwork.",
  },
  {
    id: 5,
    icon: "🧾",
    title: "Professional Support During Audits",
    desc: "Expert guidance to navigate audits with confidence.",
  },
  {
    id: 6,
    icon: "🚀",
    title: "Enhanced Business Efficiency",
    desc: "Streamlined processes that boost overall performance.",
  },
];

// ── Why Choose Us Section ─────────────────────────────────────────────────────
export default function WhyChooseUs() {
  return (
    /* SECTION WRAPPER — full-width, pale green bg, vertical padding */
    <section
      className="wcu-section"
      id="benefits"
      aria-label="Why Choose Us"
    >
      {/* CONTAINER — max-width centred, horizontal padding */}
      <div className="wcu-container">

        {/* ── Section Header ────────────────────────────────── */}
        <div className="wcu__header">

          {/* Eyebrow label */}
          <span className="wcu__eyebrow">Benefits</span>

          {/* Main heading */}
          <h2 className="wcu__heading">
            Why{" "}
            <span className="wcu__heading-accent">Choose Us</span>
          </h2>

          {/* Subtitle */}
          <p className="wcu__subtitle">
            By engaging our services, your organization will benefit from
            measurable results, professional expertise, and lasting financial
            clarity.
          </p>

          {/* Gold diamond divider */}
          <div className="wcu__divider" aria-hidden="true">
            <span className="wcu__divider-line" />
            <span className="wcu__divider-diamond" />
            <span className="wcu__divider-line wcu__divider-line--right" />
          </div>

        </div>

        {/* ── Benefits Grid ──────────────────────────────────── */}
        <div className="wcu__grid">
          {BENEFITS.map((benefit) => (
            <div
              className="wcu__card"
              key={benefit.id}
              aria-label={benefit.title}
            >
              {/* Icon with outer pulse ring */}
              <div className="wcu__card-icon-wrap">
                <div
                  className="wcu__card-icon"
                  aria-hidden="true"
                >
                  {benefit.icon}
                </div>
              </div>

              {/* Card text body */}
              <div className="wcu__card-body">
                <h3 className="wcu__card-title">{benefit.title}</h3>
                <p className="wcu__card-desc">{benefit.desc}</p>

                {/* Green check tick */}
                <span
                  className="wcu__card-check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* ── CTA Strip ─────────────────────────────────────── */}
        <div className="wcu__cta-strip" aria-label="Get started call to action">

          <div className="wcu__cta-text">
            <h3 className="wcu__cta-heading">
              Ready to Transform Your Financial Future?
            </h3>
            <p className="wcu__cta-sub">
              Partner with us for dependable accounting, tax, and advisory
              solutions that move your business forward.
            </p>
          </div>

          <div className="wcu__cta-actions">
            <a
              href="#consultation"
              className="wcu__cta-btn-primary"
              aria-label="Request a consultation"
            >
              Request Consultation →
            </a>
            <a
              href="#services"
              className="wcu__cta-btn-secondary"
              aria-label="View our services"
            >
              Our Services
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}