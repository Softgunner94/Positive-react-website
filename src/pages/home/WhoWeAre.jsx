import "./WhoWeAre.css";

// ── Card data ─────────────────────────────────────────────────────────────────
const WHO_WE_ARE_CARDS = [
  {
    id: 1,
    icon: "🛡️",
    title: "RC Number",
    tag: "RC 9549917",
    text: null,
  },
  {
    id: 2,
    icon: "🤝",
    title: "Our Commitment",
    tag: null,
    text: "Professional. Reliable. Confidential.",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Our Goal",
    tag: null,
    text: "Your business growth and financial success.",
  },
  {
    id: 4,
    icon: "🔭",
    title: "Our Vision",
    tag: null,
    text: "Leading Africa's financial advisory excellence.",
  },
  {
    id: 5,
    icon: "🚀",
    title: "Our Mission",
    tag: null,
    text: "Empowering businesses through accurate financial solutions.",
  },
];

// ── Who We Are Section ────────────────────────────────────────────────────────
export default function WhoWeAre() {
  return (
    /* SECTION WRAPPER — controls background, padding, full-width */
    <section className="who-we-are-section" id="about" aria-label="Who We Are">

      {/* CONTAINER — centers and constrains max-width */}
      <div className="who-we-are-container">

        {/* ── Section Header ────────────────────────────────── */}
        <div className="who-we-are__header">

          {/* Label with side lines */}
          <span className="who-we-are__label">Who We Are</span>

          {/* Main heading */}
          <h2 className="who-we-are__heading">
            We are <span>committed</span> to delivering
          </h2>

          {/* Subtitle */}
          <p className="who-we-are__subtitle">
            Reliable, timely, and confidential financial services tailored
            to your organization's needs.
          </p>

          {/* Gold diamond divider */}
          <div className="who-we-are__divider" aria-hidden="true">
            <span className="who-we-are__divider-line" />
            <span className="who-we-are__divider-diamond" />
            <span className="who-we-are__divider-line who-we-are__divider-line--right" />
          </div>

        </div>

        {/* ── Cards Grid — first row: 3 cols, second row: 2 cols centered ── */}
        <div className="who-we-are__grid">
          {WHO_WE_ARE_CARDS.map((card) => (
            <div className="who-we-are__card" key={card.id}>

              {/* Icon badge */}
              <div className="who-we-are__card-icon" aria-hidden="true">
                {card.icon}
              </div>

              {/* Text body */}
              <div className="who-we-are__card-body">

                {/* Title */}
                <h3 className="who-we-are__card-title">{card.title}</h3>

                {/* RC tag badge (only on first card) */}
                {card.tag && (
                  <span className="who-we-are__card-tag">
                    <span className="who-we-are__card-tag-dot" aria-hidden="true" />
                    {card.tag}
                  </span>
                )}

                {/* Paragraph text */}
                {card.text && (
                  <p className="who-we-are__card-text">{card.text}</p>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}