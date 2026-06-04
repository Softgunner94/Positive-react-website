import "./OurServices.css";

// ── Services data — matches the website image exactly ─────────────────────────
const SERVICES = [
  {
    id: 1,
    icon: "🧮",
    title: "Accounting Services",
    items: [
      "Bookkeeping and financial record maintenance",
      "Preparation of monthly management accounts",
      "Bank reconciliation",
      "Payroll processing",
      "Accounts payable and receivable management",
      "Financial statement preparation",
      "Budgeting and cash flow analysis",
      "Accounting systems and software set up",
    ],
    link: "#accounting",
  },
  {
    id: 2,
    icon: "📋",
    title: "Tax & Consulting Services",
    items: [
      "Tax planning and advisory",
      "Company income tax preparation and filing",
      "VAT computation and filing",
      "PAYE administration",
      "Tax compliance review",
      "Tax audit support",
      "Liaison with tax authorities",
      "Human Resource Management",
    ],
    link: "#tax",
  },
  {
    id: 3,
    icon: "📊",
    title: "Business Advisory Services",
    items: [
      "Financial reporting advisory",
      "Internal control review",
      "Business process improvement",
      "Accounting system setup and support",
      "Strategic Human Resource Management",
    ],
    link: "#advisory",
  },
];

// ── Our Services Section ──────────────────────────────────────────────────────
export default function OurServices() {
  return (
    /* SECTION WRAPPER — full-width, background, vertical padding */
    <section
      className="services-section"
      id="services"
      aria-label="Our Services"
    >
      {/* CONTAINER — max-width, centred, horizontal padding */}
      <div className="services-container">

        {/* ── Section Header ────────────────────────────────── */}
        <div className="services__header">

          {/* Eyebrow label */}
          <span className="services__eyebrow">Our Services</span>

          {/* Main heading */}
          <h2 className="services__heading">
            What{" "}
            <span className="services__heading-accent">We Offer</span>
          </h2>

          {/* Subtitle */}
          <p className="services__subtitle">
            Comprehensive financial and advisory solutions tailored to help
            your business thrive and stay compliant.
          </p>

          {/* Gold diamond divider */}
          <div className="services__divider" aria-hidden="true">
            <span className="services__divider-line" />
            <span className="services__divider-diamond" />
            <span className="services__divider-line services__divider-line--right" />
          </div>

        </div>

        {/* ── Cards Grid ────────────────────────────────────── */}
        <div className="services__grid">
          {SERVICES.map((service) => (
            <div className="services__card" key={service.id}>

              {/* ── Card Top Band: icon + title ── */}
              <div className="services__card-top">
                <div
                  className="services__card-icon-wrap"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="services__card-title">{service.title}</h3>
              </div>

              {/* ── Card Body: bullet list + button ── */}
              <div className="services__card-body">

                {/* Bullet list */}
                <ul className="services__list" aria-label={`${service.title} offerings`}>
                  {service.items.map((item, index) => (
                    <li className="services__list-item" key={index}>
                      <span
                        className="services__list-bullet"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Learn More button */}
                <a
                  href={service.link}
                  className="services__card-btn"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <span
                    className="services__card-btn-icon"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}