
import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./BenefitsPage.css";
import PageHeader from "../components/PageHeader"

const benefits = [
  {
    icon: "ti ti-report-analytics",
    title: "Improved financial record accuracy",
    desc: "Eliminate costly errors and maintain a clear financial picture at all times with our meticulous bookkeeping and reconciliation services.",
    list: [
      "Real-time ledger updates",
      "Monthly reconciliation reports",
      "Error detection & correction",
      "Audit-ready documentation",
    ],
    accent: "green",
  },
  {
    icon: "ti ti-shield-check",
    title: "Reduced tax compliance risks",
    desc: "Stay fully compliant with Nigerian tax laws. Our experts navigate regulatory complexity so you never face unexpected penalties or liabilities.",
    list: [
      "FIRS & state tax management",
      "Timely filing & submissions",
      "PAYE & VAT administration",
      "Tax audit representation",
    ],
    accent: "amber",
  },
  {
    icon: "ti ti-bulb",
    title: "Better financial decision-making",
    desc: "Gain the insights and clarity you need to make confident business decisions backed by accurate data and expert advisory support.",
    list: [
      "Management account reports",
      "Cash flow forecasting",
      "Budget analysis & planning",
      "Strategic business advisory",
    ],
    accent: "blue",
  },
  {
    icon: "ti ti-clock",
    title: "Time savings for management",
    desc: "Free your leadership team to focus on growth and strategy while we handle the full scope of accounting and compliance operations.",
    list: [
      "Outsourced accounting functions",
      "Automated payroll processing",
      "Deadline tracking & reminders",
    ],
    accent: "purple",
  },
  {
    icon: "ti ti-headset",
    title: "Professional support during audits",
    desc: "Our team stands by you during tax authority audits, providing documentation, responding to queries, and protecting your interests.",
    list: [
      "Audit trail preparation",
      "Liaison with tax authorities",
      "Document management",
    ],
    accent: "red",
  },
  {
    icon: "ti ti-trending-up",
    title: "Enhanced business efficiency",
    desc: "Optimize your internal financial systems and HR processes to reduce overhead, improve output, and support sustainable scaling.",
    list: [
      "Accounting software setup",
      "HR management support",
      "Process improvement advisory",
    ],
    accent: "teal",
  },
];

const metrics = [
  { num: "40%", label: "Average tax savings for clients", bg: "bg-green" },
  { num: "3×", label: "Faster financial reporting", bg: "bg-amber" },
  { num: "99%", label: "On-time filing success rate", bg: "bg-blue" },
  { num: "24hr", label: "Average client response time", bg: "bg-brown" },
];

const steps = [
  {
    num: "1",
    title: "Free consultation",
    desc: "We assess your current financial situation and identify gaps, risks, and opportunities tailored to your business.",
  },
  {
    num: "2",
    title: "Customized engagement plan",
    desc: "We design a service plan that fits your needs, budget, and industry — flexible and scalable as you grow.",
  },
  {
    num: "3",
    title: "Ongoing professional support",
    desc: "Our team handles your accounting, tax, and advisory needs continuously, with regular reporting and reviews.",
  },
];



export default function BenefitsPage() {
  return (
    <div className="benefits-page">
      {/* ── Hero ── */}
      <PageHeader />
      <section className="bp-hero">
        <Container fluid="xl">
          <Row className="align-items-end g-0">
            <Col lg={7} className="bp-hero__text">
              <span className="bp-eyebrow">Why choose us</span>
              <h1 className="bp-hero__title">
                Benefits of working with{" "}
                <em className="bp-hero__em">Positive</em> Professional
              </h1>
              <p className="bp-hero__sub">
                By engaging our services, your organization gains a trusted
                financial partner committed to accuracy, compliance, and lasting
                growth.
              </p>
              <div className="bp-hero__stats">
                {[
                  { num: "200+", label: "Clients served" },
                  { num: "100%", label: "Compliance rate" },
                  { num: "15yr", label: "Industry experience" },
                ].map((s) => (
                  <div key={s.label} className="bp-hero__stat">
                    <span className="bp-hero__stat-num">{s.num}</span>
                    <span className="bp-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={5} className="bp-hero__img-col d-none d-lg-flex">
              <img
                src="./benifitwork.jpg"
                alt="Financial team at work"
                className="bp-hero__img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── Benefits Cards ── */}
      <section className="bp-section">
        <Container fluid="xl">
          <span className="bp-eyebrow bp-eyebrow--dark text-center d-block">
            Our Benefits
          </span>
          <h2 className="bp-section__title">What you gain with us</h2>
          <p className="bp-section__sub">
            Every service we deliver is designed to give your business a
            measurable advantage — financially, operationally, and
            strategically.
          </p>

          <Row className="g-4 mb-5">
            {benefits.map((b) => (
              <Col key={b.title} xs={12} sm={6} lg={4}>
                <Card className={`bp-benefit-card bp-benefit-card--${b.accent} h-100`}>
                  <Card.Body className="p-4">
                    <div className={`bp-benefit-icon bp-benefit-icon--${b.accent}`}>
                      <i className={b.icon} aria-hidden="true" />
                    </div>
                    <h3 className="bp-benefit-title">{b.title}</h3>
                    <p className="bp-benefit-desc">{b.desc}</p>
                    <ul className="bp-benefit-list">
                      {b.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ── Metrics ── */}
          <Row className="g-3 mb-5">
            {metrics.map((m) => (
              <Col key={m.label} xs={6} lg={3}>
                <div className={`bp-metric ${m.bg}`}>
                  <span className="bp-metric__num">{m.num}</span>
                  <span className="bp-metric__label">{m.label}</span>
                </div>
              </Col>
            ))}
          </Row>

          {/* ── Gallery ── */}
          <Row className="g-3 mb-5">
            <Col xs={12} md={6}>
              <div className="bp-gallery-img bp-gallery-img--tall">
                <img
                  src="/benefit1.jpg"
                  alt="Business professional reviewing financials"
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row className="g-3 h-100">
                <Col xs={6} md={12} lg={6}>
                  <div className="bp-gallery-img">
                    <img
                      src="/benefit3.jpg"
                      alt="Tax documents and calculator"
                    />
                  </div>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <div className="bp-gallery-img">
                    <img
                      src="/benefit2.jpg"
                      alt="Team handshake"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* ── Testimonial ── */}
          <div className="bp-proof mb-5">
            <Row className="g-0 align-items-center">
              <Col xs={12} md={5}>
                <div className="bp-proof__img">
                  <img
                    src="/benefit4.jpg"
                    alt="Client team meeting"
                  />
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div className="bp-proof__content">
                  <span className="bp-proof__mark">&ldquo;</span>
                  <p className="bp-proof__quote">
                    Positive Professional Services transformed how we manage our
                    finances. Their team caught compliance gaps we didn&apos;t even
                    know existed and saved us significant penalties during our
                    last audit.
                  </p>
                  <div className="bp-proof__author">
                    <div className="bp-proof__avatar">AS</div>
                    <div>
                      <div className="bp-proof__name">Abiodun Samuel</div>
                      <div className="bp-proof__role">
                        CEO, Soft Tech Ltd
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* ── How it works ── */}
          <div className="bp-how mb-5">
            <span className="bp-eyebrow bp-eyebrow--dark text-center d-block">
              How it works
            </span>
            <h2 className="bp-section__title">
              From onboarding to ongoing support
            </h2>
            <p className="bp-section__sub mb-5">
              A simple, structured process that gets your finances in order from
              day one.
            </p>
            <div className="bp-steps">
              {steps.map((s, i) => (
                <div key={s.num} className="bp-step">
                  {i < steps.length - 1 && (
                    <span className="bp-step__connector" aria-hidden="true" />
                  )}
                  <div className="bp-step__num">{s.num}</div>
                  <h4 className="bp-step__title">{s.title}</h4>
                  <p className="bp-step__desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="bp-cta">
            <span className="bp-eyebrow text-center d-block mb-2">
              Ready to get started?
            </span>
            <h2 className="bp-cta__title">
              Let&apos;s build your stronger financial future
            </h2>
            <p className="bp-cta__sub">
              Partner with Positive Professional Services for dependable
              accounting, tax, and advisory solutions.
            </p>
            <div className="bp-cta__btns">
              <Link to="/contact" className="bp-btn bp-btn--white">
                Request a consultation
              </Link>
              <Link to="/services" className="bp-btn bp-btn--outline">
                View our services
              </Link>
            </div>
            <div className="bp-cta__contact">
              {[
                { icon: "ti ti-phone", text: "+2348032174660" },
                { icon: "ti ti-mail", text: "gbemiga@positiveprofessional.org" },
                { icon: "ti ti-map-pin", text: "Nigeria" },
              ].map((c) => (
                <span key={c.text} className="bp-cta__contact-item">
                  <i className={c.icon} aria-hidden="true" />
                  {c.text}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}