import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
 
// ─────────────────────────────────────────────
//  CONFIGURATION — swap in your own image paths
// ─────────────────────────────────────────────
const MISSION_IMAGE   = "/aboutimg2.png";   // ← replace with your src
const VALUE_IMAGE     = "/img7.png";
const GOAL_IMAGE      ="/img9.png";
const VISION_IMAGE      ="/img8.png";


export default function AboutPage() {
  return (
    <div>
       <div className="about-wrapper">

        <div className="services-banner">
      <div className="banner-inner">
        <h2 className="banner-heading">About Us</h2>
      </div>
      <div className="banner-pattern" aria-hidden="true" />
    </div>
 
      {/* ═══════════════════════════════════════
          SECTION 1 — Our Mission
          Layout: text LEFT  |  image RIGHT
         ═══════════════════════════════════════ */}
      <section className="about-section mission-section">
        <div className="about-container">
 
          {/* — Text column — */}
          <div className="about-text-col">
            <div className="text-inner">
              <span className="section-eyebrow">Who We Are</span>
              <h2 className="section-heading">Our Mission</h2>
              <div className="heading-rule" />
              <p className="section-body">
                Our mission is to deliver high-quality accounting, tax, audit,
                 and bookkeeping services that empower businesses to operate 
                 efficiently and confidently. We strive to build long-term 
                 relationships with our clients by offering personalized support, 
                 professional expertise, and practical financial solutions tailored 
                 to their unique needs. Our focus is on helping clients maintain financial
                  stability while achieving their business objectives.
              </p>
              <Link to="/services" className="about-cta">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     width="18" height="18" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
 
          {/* — Image column — */}
          <div className="about-image-col image-right">
            <div className="image-frame">
              <img
                src={MISSION_IMAGE}
                alt="Our mission — team at an event"
                className="about-img"
                loading="lazy"
              />
              {/* decorative accent */}
              <div className="image-accent image-accent--br" />
            </div>
          </div>
 
        </div>
      </section>
 
      {/* ═══════════════════════════════════════
          SECTION 2 — Value Delivered
          Layout: image LEFT  |  text RIGHT
         ═══════════════════════════════════════ */}
      <section className="about-section value-section">
        <div className="about-container-reverse">
 
          {/* — Image column — */}
          <div className="about-image-col image-left">
            <div className="image-frame">
              <img
                src={GOAL_IMAGE}
                alt="Value delivered — decorative coin"
                className="about-img value-img"
                loading="lazy"
              />
              <div className="image-accent image-accent--tl" />
            </div>
          </div>
 
          {/* — Text column — */}
          <div className="about-text-col">
            <div className="text-inner">
              <span className="section-eyebrow">Our Goal</span>
              <h2 className="section-heading">Our Core Purpose</h2>
              <div className="heading-rule" />
              <p className="section-body">
                At Positive Professional Services, our goal is to provide reliable,
                 accurate, and professional financial solutions that help businesses
                  and individuals achieve sustainable growth. We are committed to 
                  simplifying accounting processes, ensuring tax compliance, maintaining
                   transparent financial records, and delivering valuable insights that
                    support informed decision-making. Through dedication and excellence, 
                    we aim to become a trusted partner in every stage of our clients’ financial journey.
              </p>
              <Link to="/contact" className="about-cta">
                Get In Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     width="18" height="18" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
 
        </div>
      </section>

      <section className="about-section mission-section">
        <div className="about-container">
 
          {/* — Text column — */}
          <div className="about-text-col">
            <div className="text-inner">
              <span className="section-eyebrow">Our Vision</span>
              <h2 className="section-heading">What We Aim To Achieve</h2>
              <div className="heading-rule" />
              <p className="section-body">
                Our vision is to be a leading professional services firm recognized for integrity,
                 innovation, and exceptional client service. We aspire to help businesses of all 
                 sizes grow stronger through sound financial management and strategic guidance.
                  By continuously improving our knowledge, technology, and service delivery, 
                  we aim to create lasting value for our clients and contribute positively to 
                  the success of the business community.
              </p>
              <Link to="/services" className="about-cta">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     width="18" height="18" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
 
          {/* — Image column — */}
          <div className="about-image-col image-right">
            <div className="image-frame">
              <img
                src={VISION_IMAGE}
                alt="Our mission — team at an event"
                className="about-img"
                loading="lazy"
              />
              {/* decorative accent */}
              <div className="image-accent image-accent--br" />
            </div>
          </div>
 
        </div>
      </section>
      <section className="about-section value-section">
        <div className="about-container-reverse">
 
          {/* — Image column — */}
          <div className="about-image-col image-left">
            <div className="image-frame">
              <img
                src={VALUE_IMAGE}
                alt="Value delivered — decorative coin"
                className="about-img value-img"
                loading="lazy"
              />
              <div className="image-accent image-accent--tl" />
            </div>
          </div>
 
          {/* — Text column — */}
          <div className="about-text-col">
            <div className="text-inner">
              <span className="section-eyebrow">Our Promise</span>
              <h2 className="section-heading">Value Delivered</h2>
              <div className="heading-rule" />
              <p className="section-body">
                That is what we are about. The result of our business-minded
                approach to supporting our clients in every transaction is
                quantifiable savings for our clients. The words <em>Value
                delivered</em> guide every assignment we undertake.
              </p>
              <p className="section-body">
                We consistently seek to deliver value to our clients in various
                ways relating to their transactions. We are with our clients at
                every stage of their transactions, ensuring they receive timely
                and actionable advice. Above all, we are never too busy for our
                clients. We take pride in our accessibility for the businessman
                who needs to act quickly to maximise the value of proactive
                decision-making.
              </p>
              <a href="#contact" className="about-cta">
                Get In Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     width="18" height="18" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
 
        </div>
      </section>
    </div>
    </div>
  );
}