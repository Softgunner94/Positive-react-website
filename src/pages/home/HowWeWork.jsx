import "./HowWeWork.css";

// ── Steps data — matches the website image exactly ────────────────────────────
const HOW_WE_WORK_STEPS = [
  {
    id: 1,
    icon: "🛡️",
    label: "Accuracy and Professionalism",
  },
  {
    id: 2,
    icon: "⚖️",
    label: "Compliance with Regulations",
  },
  {
    id: 3,
    icon: "🔒",
    label: "Confidential Client Handling",
  },
  {
    id: 4,
    icon: "⏱️",
    label: "Timely Delivery of Reports",
  },
  {
    id: 5,
    icon: "💡",
    label: "Practical Financial Solutions",
  },
  {
    id: 6,
    icon: "🤝",
    label: "Client-Centered Collaboration",
  },
];

// ── How We Work Section ───────────────────────────────────────────────────────
export default function HowWeWork() {
  return (
    /* SECTION WRAPPER — full-width, background, vertical padding */
    <section
      className="hww-section"
      id="approach"
      aria-label="How We Work"
    >
      {/* CONTAINER — max-width, centred, horizontal padding */}
      <div className="hww-container">

        {/* ── Section Header ────────────────────────────────── */}
        <div className="hww__header">

          {/* Eyebrow label */}
          <span className="hww__eyebrow">Our Approach</span>

          {/* Main heading */}
          <h2 className="hww__heading">
            How{" "}
            <span className="hww__heading-accent">We Work</span>
          </h2>

          {/* Subtitle */}
          <p className="hww__subtitle">
            Our approach combines integrity, precision, and client-first
            thinking to deliver results that matter.
          </p>

          {/* Gold diamond divider */}
          <div className="hww__divider" aria-hidden="true">
            <span className="hww__divider-line" />
            <span className="hww__divider-diamond" />
            <span className="hww__divider-line hww__divider-line--right" />
          </div>

        </div>

        {/* ── Steps Row ─────────────────────────────────────── */}
        <div className="hww__steps" role="list">
          {HOW_WE_WORK_STEPS.map((step) => (
            <div
              className="hww__step"
              key={step.id}
              role="listitem"
              aria-label={step.label}
            >
              {/* Step number badge */}
              <span
                className="hww__step-number"
                aria-hidden="true"
              >
                {step.id}
              </span>

              {/* Icon circle */}
              <div
                className="hww__step-icon"
                aria-hidden="true"
              >
                {step.icon}
              </div>

              {/* Label */}
              <p className="hww__step-label">{step.label}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom Accent Band ─────────────────────────────── */}
        <div className="hww__bottom-band" aria-label="Approach summary">
          <span className="hww__bottom-band-icon" aria-hidden="true">✅</span>
          <p className="hww__bottom-band-text">
            Every engagement is guided by our core values —{" "}
            <strong>accuracy, compliance, confidentiality,</strong> and a{" "}
            <strong>commitment to your success.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}