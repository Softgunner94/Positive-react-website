import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ApproachPage.css"

const pillars = [
  {
   
    icon: '🛡️',
    title: 'Accuracy & Professionalism',
    short: 'Every number verified before it reaches you.',
    desc: `At Positive Professionals, accuracy is non-negotiable. Every report undergoes a multi-step review before it leaves our office — figures verified against source documents, calculations double-checked, and language reviewed for clarity. Our team holds recognised professional qualifications and maintains active CPD membership to stay at the frontier of financial practice.`,
  },
  {
   
    icon: '⚖️',
    title: 'Compliance with Regulations',
    short: 'Stay ahead of every regulatory change.',
    desc: `Nigeria's regulatory landscape evolves quickly. We monitor FIRS, CAC, CBN, and SEC circulars continuously so you never miss a deadline or an obligation. Our compliance calendar is updated in real time and every client file is reviewed against current requirements at each touchpoint.`,
  },
    {
    
    icon: '🔒',
    title: 'Confidential Client Handling',
    short: 'Your data stays protected — always.',
    desc: `We apply strict data governance across every engagement. Client financial information is stored on encrypted servers, accessed only by the personnel assigned to your account, and never shared with third parties without explicit written consent. Our confidentiality policies exceed standard NDAs.`,
  },
  {
    
    icon: '⏱️',
    title: 'Timely Delivery of Reports',
    short: 'Deadlines are commitments, not targets.',
    desc: `We build your deadlines into our internal workflow from day one. Progress is tracked on a shared timeline updated weekly, and you receive proactive notifications if anything changes. We have maintained a 97% on-time delivery rate across all client engagements since 2012.`,
  
  },
  {
  
    icon: '💡',
    title: 'Practical Financial Solutions',
    short: 'Advice built for your real situation.',
    desc: `We do not apply off-the-shelf frameworks. Every recommendation is grounded in your industry, your cashflow realities, and your growth objectives. We model scenarios, stress-test assumptions, and present options with clear trade-offs — so you make informed decisions, not blind leaps.`,
   
  },
  {
   
    icon: '🤝',
    title: 'Client-Centered Collaboration',
    short: 'We listen first, advise second.',
    desc: `Every new engagement starts with a structured discovery session — we learn your business, your pressures, and your goals before we recommend anything. You are assigned a dedicated relationship manager who stays consistent across all your projects. Communication is proactive, transparent, and jargon-free.`,
  },
];


const faqs = [
  {
    q: 'How long does a typical engagement take?',
    a: 'It depends on scope. A one-off report typically takes 5–10 business days. Ongoing advisory engagements run on agreed quarterly or annual cycles. We agree the timeline upfront and commit to it.',
  },
  {
    q: 'Do you work with startups or only established businesses?',
    a: 'Both. We have experience supporting pre-revenue startups, SMEs, NGOs, and large corporates. Our services are scoped and priced for your stage.',
  },
  {
    q: 'What information do you need to get started?',
    a: 'It varies by service. For accounts preparation we typically need your bank statements, invoices, and receipts. We provide a detailed checklist after the discovery call.',
  },
  {
    q: 'Is my financial information secure with you?',
    a: 'Yes. All data is encrypted at rest and in transit, stored on secure private servers, and only accessed by your assigned team. We sign NDAs with every client.',
  },
  {
    q: 'Do you offer remote or in-person services?',
    a: 'Both. Most of our work is done remotely via secure document exchange. We can arrange in-person meetings at our Lagos office or at your location on request.',
  },
];

export default function ApproachPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activePillar, setActivePillar] = useState(0);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section style={{ background: 'var(--pp-green-dark)', padding: '5rem 0 4rem' }}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-12 col-lg-6">
              <div className="hero-eyebrow" style={{ marginBottom: '1.2rem' }}>
                <i className="bi bi-layers-fill"></i>
                <span>Our Approach</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
                How We Work —<br /><em>six principles</em> behind<br />everything we do
              </h1>
              <p className="hero-desc">
                Our approach is not a checklist. It is the foundation of every client
                relationship we build — from first conversation to final report and beyond.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-pp-primary">Book a consultation</Link>
                <a href="#pillars" className="btn btn-pp-ghost">
                  Explore the pillars <i className="bi bi-arrow-down ms-1"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero-image-panel" style={{ borderRadius: 'var(--pp-radius-lg)', minHeight: 320 }}>
                <div className="hero-img-zone" style={{ minHeight: 260 }}>
                  <i className="bi bi-image img-icon"><img src="/img7.png" alt="" width={900}/></i>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <div style={{ background: 'var(--pp-green-light)', borderTop: '1px solid var(--pp-white)', borderBottom: '1px solid var(--pp-white)', padding: '1.75rem 0' }}>
        <div className="container">
          <div className="row text-center gy-3">
            {[
              { num: '200+', label: 'Clients served across Africa' },
              { num: '97%', label: 'On-time delivery rate' },
              { num: '15yr', label: 'Combined industry experience' },
              { num: '100%', label: 'Compliance record maintained' },
            ].map((s) => (
              <div className="col-6 col-md-3" key={s.label}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--pp-green)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--pp-green)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PILLAR TABS ── */}
      <section className="how-section" id="pillars">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">The six pillars</div>
            <h2 className="section-title">What drives every engagement</h2>
            <p className="section-desc">
              Click each pillar below to learn what it means in practice and how
              it shapes the work we do on your behalf.
            </p>
          </div>

          {/* Pill nav */}
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
            {pillars.map((p, i) => (
              <button
                
                onClick={() => setActivePillar(i)}
                className="btn"
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '0.5rem 1rem',
                  borderRadius: 20,
                  border: '1px solid var(--pp-green-light)',
                  background: activePillar === i ? 'var(--pp-green-dark)' : 'var(--pp-green-light)',
                  color: activePillar === i ? '#fff' : 'var(--pp-green-600)',
                  transition: 'all 0.18s',
                }}
              >
                {p.num} {p.title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>

          {/* Active pillar detail */}
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--pp-green)',
              borderRadius: 'var(--pp-radius-lg)',
              borderTop: '4px solid var(--pp-green-800)',
              padding: '2.5rem',
              marginBottom: '3rem',
            }}
          >
            <div className="row align-items-start gy-3">
              
              <div className="col-12 col-md-11">
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--pp-green-800)', marginBottom: '0.6rem' }}>
                  {pillars[activePillar].title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--pp-green-500)', lineHeight: 1.8, marginBottom: '1rem', maxWidth: 640 }}>
                  {pillars[activePillar].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Full pillar grid */}
          <div className="row g-4">
            {pillars.map((p, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={p.num}>
                <div
                  className="pillar-card"
                  style={{ cursor: 'pointer', outline: activePillar === i ? '2px solid var(--pp-green-600)' : 'none' }}
                  onClick={() => { setActivePillar(i); document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  <div className="pillar-card-num">{p.num}</div>
                  <div className="pillar-icon-box">
                    <i className='pillar-icon'>{p.icon}</i>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH SPLIT ── */}
      <section className="approach-section">
        <div className="row g-0">
          <div className="col-12 col-lg-5 ">
            <img src="./office1.png" alt="" width="100%" height="100%" />
          </div>
          <div className="col-12 col-lg-7 approach-content-panel">
            <div className="section-eyebrow">Why it matters</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              A firm built on principles,<br />not just processes
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--pp-green-500)', lineHeight: 1.8, marginBottom: 0 }}>
              At Positive Professionals, our approach is not a poster on the wall. It is
              the lived practice of our team every day — and what you will experience
              from the very first conversation.
            </p>
            <div className="checklist">
              {[
                { t: 'Dedicated relationship manager for your account', d: 'One point of contact who knows your business inside-out' },
                { t: 'Transparent pricing with no hidden fees', d: 'Clear scope and billing from the very first proposal' },
                { t: 'Proactive updates — we do not wait for you to ask', d: 'Regular status communications and report previews' },
                { t: 'Post-delivery support and clarification included', d: 'We stand behind every report we issue, no extra charge' },
                { t: 'Structured onboarding for every new client', d: 'A smooth start with clear expectations from day one' },
              ].map((item) => (
                <div className="check-item" key={item.t}>
                  <div className="check-dot">
                    <i className="bi bi-check2" style={{ fontSize: '0.75rem' }}></i>
                  </div>
                  <div>
                    <div className="check-text">{item.t}</div>
                    <div className="check-desc">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'var(--pp-white)', borderTop: '1px solid var(--pp-border)', padding: '5rem 0' }}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-12 col-lg-4">
              <div className="section-eyebrow">FAQ</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Common questions</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--pp-green-500)', lineHeight: 1.8 }}>
                Don't see your question here? Book a free discovery call and we'll
                answer anything you need to know.
              </p>
              <Link to="/contact" className="btn btn-pp-primary mt-3">Ask us directly</Link>
            </div>
            <div className="col-12 col-lg-8">
              <div className="d-flex flex-column gap-3">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#fff',
                      border: '1px solid var(--pp-border)',
                      borderRadius: 'var(--pp-radius-md)',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        padding: '1.1rem 1.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--pp-green-800)' }}>{f.q}</span>
                      <i
                        className={`bi ${openFaq === i ? 'bi-dash-circle' : 'bi-plus-circle'}`}
                        style={{ fontSize: '1.1rem', color: 'var(--pp-green-600)', flexShrink: 0, transition: 'transform 0.2s' }}
                      ></i>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: '0 1.4rem 1.2rem', fontSize: '0.86rem', color: 'var(--pp-green-500)', lineHeight: 1.8 }}>
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-12 col-lg-7">
              <h2>Ready to experience the Positive Professionals difference?</h2>
              <p>
                Start with a free 30-minute discovery call. We will listen to your
                needs, answer your questions, and tell you exactly how we can help.
              </p>
            </div>
            <div className="col-12 col-lg-5 d-flex gap-3 flex-wrap justify-content-lg-end">
              <Link to="/contact" className="btn btn-pp-primary">
                Book a free call <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}