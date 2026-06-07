import { useState } from "react";
import "./Banner.css";
import Chart from "/chart.png"
import { Link } from "react-router-dom";

// ─── The exact image from the website UI ─────────────────────────────────────
// Using a professional accounting/finance stock photo that matches the website:
// laptop with charts, calculator, financial documents on a desk


// ─── Banner Component ─────────────────────────────────────────────────────────
export default function Banner() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="banner" aria-label="Hero Banner">
      <div className="banner__inner">

        {/* ══ LEFT — Text Content ══════════════════════════════════ */}
        <div className="banner__content">

          {/* Main heading */}
          <h1 className="banner__heading">
            Accounting &amp; Tax<br />
            <em>Consulting</em> Services
          </h1>
         {/* Gold accent rule */}
          <span className="banner__accent-bar" aria-hidden="true" />
          {/* Three taglines */}
          <div className="banner__taglines">
            <p className="banner__tagline">Accurate records. Full compliance.</p>
            <p className="banner__tagline">Smarter financial decisions.</p>
          </div>

          {/* Body copy */}
          <p className="banner__body">
            At Positive Professional Services, we help businesses maintain accurate
            financial records, achieve tax compliance, improve financial efficiency,
            and support business growth through professional solutions.
          </p>

          {/* CTA Buttons */}
          <div className="banner__actions">
            {/* Primary */}
            <Link to="/contact" className="banner__btn-primary">
              Request Consultation
              <span className="btn-icon" aria-hidden="true">›</span>
            </Link>

            {/* Secondary */}
            <Link to="/services" className="banner__btn-secondary">
              Our Services
              <span className="btn-circle" aria-hidden="true">›</span>
            </Link>
          </div>
        </div>

        {/* ══ RIGHT — Image Panel ══════════════════════════════════ */}
        <div className="banner__image-wrapper">

          {/* Decorative dashed ring behind image */}
          <div className="banner__image-bg-circle" aria-hidden="true" />

          {/* Floating top-right badge */}
          <div className="banner__badge" aria-label="Tax Compliance badge">
            <span className="banner__badge-icon">✅</span>
            <div>
              <div className="banner__badge-text">Tax Compliant</div>
              <div className="banner__badge-text banner__badge-sub">Always up to date</div>
            </div>
          </div>

          {/* Main image */}
          <div className="banner__image-frame">
            {!imgError ? (
              <img
                src={Chart}
                alt="Accounting workspace with laptop showing financial charts, calculator and documents"
                onError={() => setImgError(true)}
              />
            ) : (
              /* Fallback placeholder if image fails to load */
              <div
                style={{
                  width: "100%",
                  height: 380,
                  background: "linear-gradient(135deg, #e8f7ee 0%, #d0ead8 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  borderRadius: 16,
                }}
              >
                <span style={{ fontSize: 56 }}>📊</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "#4a6b55", fontWeight: 500 }}>
                  Financial Analytics Dashboard
                </span>
              </div>
            )}

            {/* Bottom overlay gradient */}
            <div className="banner__image-overlay" aria-hidden="true" />
          </div>

          {/* Floating bottom-left stat card */}
          <div className="banner__stat-card" aria-label="Client satisfaction stat">
            <div className="banner__stat-icon">📈</div>
            <div>
              <div className="banner__stat-label">Client Satisfaction</div>
              <div className="banner__stat-value">98% ★★★★★</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}