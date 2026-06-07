import React from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import "./ServicesPage.css";


// ─────────────────────────────────────────────────────────────
//  SERVICES DATA — all content lives here, easy to update
// ─────────────────────────────────────────────────────────────
export const SERVICES_DATA = [
  {
    slug: "audit-assurance",
    label: "Audit & Assurance",
    intro: `When you are a decision maker, you must be sure you are acting on
    reliable information. You need to be aware of your business risks and know
    that they are managed effectively. You need faith in your underlying systems
    and controls, and the certainty that you are compliant with key legal
    requirements.

    The key objective when carrying out an audit is to gain a thorough
    understanding of your business and its strategic direction. Our partner-led
    audits give you peace of mind and a regular contact to deal with. Each
    dedicated team carefully structures its audit and advice in consultation
    with you.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Statutory audit",
      "Non-statutory audit",
      "Value-for-money audit",
      "Systems review and compliance with procedures",
      "International Accounting Standards / IFRS compliance reviews",
      "Due diligence",
      "Reporting accountant services",
    ],
  },
  {
    slug: "business-advisory",
    label: "Business Advisory",
    intro: `Our business advisory team works closely with owner-managed businesses,
    corporates and entrepreneurs to help them achieve their goals. Whether you
    are looking to start, grow, or exit your business, we provide the insight
    and guidance you need to make informed decisions.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Business planning and strategy",
      "Cash flow management",
      "Financial forecasting and modelling",
      "Business performance reviews",
      "Exit planning and succession",
      "Start-up advisory",
    ],
  },
  {
    slug: "corporate-finance",
    label: "Corporate Finance",
    intro: `Our corporate finance specialists provide expert advice on a wide range
    of transactions and financial matters. We work alongside businesses and their
    advisors to deliver seamless support at every stage of a transaction.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Mergers and acquisitions advisory",
      "Business valuations",
      "Fundraising and debt advisory",
      "Management buy-outs and buy-ins",
      "Financial due diligence",
      "Vendor due diligence",
    ],
  },
  {
    slug: "forensic-accounting",
    label: "Forensic Accounting",
    intro: `Our forensic accounting team brings together financial expertise and
    investigative skills to help clients navigate complex disputes, fraud
    investigations, and regulatory matters. We provide clear, independent, and
    objective analysis.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Fraud investigation and prevention",
      "Dispute resolution support",
      "Expert witness services",
      "Asset tracing",
      "Insurance claim support",
      "Regulatory investigations",
    ],
  },
  {
    slug: "management-consultancy",
    label: "Management Consultancy",
    intro: `We help organisations improve performance, drive efficiency, and manage
    change effectively. Our management consultants bring deep sector knowledge
    and practical experience to every engagement.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Operational improvement",
      "Change management",
      "Process optimisation",
      "Strategy development",
      "Performance management",
      "Risk and governance advisory",
    ],
  },
  {
    slug: "mergers-acquisitions",
    label: "Mergers & Acquisitions",
    intro: `Our M&A team supports buyers and sellers throughout the entire
    transaction lifecycle — from initial strategy and target identification
    through to post-deal integration. We combine commercial acumen with
    rigorous financial analysis.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Acquisition searches and target identification",
      "Deal structuring and negotiation",
      "Financial and commercial due diligence",
      "Post-merger integration",
      "Vendor preparation and sale management",
      "Cross-border transactions",
    ],
  },
  {
    slug: "tax-compliance-advisory",
    label: "Tax Compliance and Advisory",
    intro: `Our tax team provides comprehensive compliance and advisory services
    to individuals, businesses, and multinationals. We ensure you remain
    compliant while identifying opportunities to manage your tax position
    efficiently and transparently.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Corporate tax compliance and planning",
      "Personal tax and self-assessment",
      "VAT compliance and advisory",
      "Transfer pricing",
      "International tax structuring",
      "PAYE and employment tax",
      "Tax investigations and dispute resolution",
    ],
  },
  {
    slug: "it-consulting",
    label: "IT Consulting Services",
    intro: `Technology is at the heart of every modern organisation. Our IT
    consulting team helps businesses align technology strategy with business
    objectives, improve cyber resilience, and get the most from their digital
    investments.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "IT strategy and roadmap development",
      "Cybersecurity assessments",
      "Digital transformation advisory",
      "ERP selection and implementation support",
      "IT audit and assurance",
      "Cloud strategy and migration advisory",
    ],
  },
  {
    slug: "corporate-services",
    label: "Corporate Services",
    intro: `Our corporate services team provides businesses with the administrative
    and compliance infrastructure they need to operate effectively. From company
    formation to ongoing secretarial support, we handle the details so you can
    focus on growth.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Company formation and registration",
      "Company secretarial services",
      "Registered office facilities",
      "Board support and governance",
      "Compliance monitoring",
      "Statutory filings and returns",
    ],
  },
  {
    slug: "accounting",
    label: "Accounting",
    intro: `Accurate, timely accounting underpins every successful business. Our
    accounting team provides reliable bookkeeping, management accounts, and
    financial reporting services tailored to the size and complexity of your
    organisation.`,
    keyServicesLabel: "Key services include:",
    keyServices: [
      "Bookkeeping and ledger maintenance",
      "Management accounts preparation",
      "Year-end statutory accounts",
      "Payroll processing",
      "Accounts payable / receivable management",
      "Cloud accounting (Xero, QuickBooks, Sage)",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
//  SIDEBAR — left service list
// ─────────────────────────────────────────────────────────────

function ServiceSidebar({ activeSlug }) {
  return (
    <aside className="services-sidebar">
      <nav aria-label="Services navigation">
        <ul className="sidebar-list">
          {SERVICES_DATA.map((s) => (
            <li key={s.slug} className="sidebar-item">
              <NavLink
                to={`/services/${s.slug}`}
                className={({ isActive }) =>
                  `sidebar-link ${isActive || s.slug === activeSlug ? "sidebar-link--active" : ""}`
                }
              >
                {(s.slug === activeSlug) && (
                  <span className="sidebar-arrow" aria-hidden="true">→</span>
                )}
                {s.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────
//  BREADCRUMB
// ─────────────────────────────────────────────────────────────
function Breadcrumb({ label }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li>
          <Link to="/" className="breadcrumb-link">Home</Link>
        </li>
        <li className="breadcrumb-sep" aria-hidden="true">›</li>
        <li>
          <Link to="/services/audit-assurance" className="breadcrumb-link">Services</Link>
        </li>
        <li className="breadcrumb-sep" aria-hidden="true">›</li>
        <li className="breadcrumb-current" aria-current="page">{label}</li>
      </ol>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN SERVICE CONTENT
// ─────────────────────────────────────────────────────────────
function ServiceContent({ service }) {
  // Split intro paragraphs on blank lines
  const paragraphs = service.intro
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  return (
    <article className="service-content">
      <h1 className="service-title">{service.label}</h1>

      <div className="service-body">
        {paragraphs.map((p, i) => (
          <p key={i} className="service-para">{p}</p>
        ))}

        {service.keyServices?.length > 0 && (
          <>
            <p className="service-key-label">
              <strong>{service.keyServicesLabel}</strong>
            </p>
            <ul className="service-key-list">
              {service.keyServices.map((item, i) => (
                <li key={i} className="service-key-item">
                  <span className="key-bullet" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* CTA strip */}
      <div className="service-cta-strip">
        <p>Interested in our {service.label} services?</p>
        <Link to="/contact" className="btn-service-cta">
          Get In Touch
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width="16" height="16" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
//  PAGE HEADER BANNER
// ─────────────────────────────────────────────────────────────
function PageBanner() {
  return (
    <div className="services-banner">
      <div className="banner-inner">
        <h2 className="banner-heading">Our services</h2>
      </div>
      <div className="banner-pattern" aria-hidden="true" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN EXPORT — ServicesPage
//  Usage in React Router: <Route path="/services/:slug" element={<ServicesPage />} />
// ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const { slug } = useParams();

  // Default to first service if no slug or slug not found
  const activeService =
    SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  return (
    <div className="services-page">
      <PageBanner />

      <div className="services-layout container-fluid px-0">
        <div className="services-inner">
          <Breadcrumb label={activeService.label} />

          <div className="services-grid">
            <ServiceSidebar activeSlug={activeService.slug} />
            <ServiceContent service={activeService} />
          </div>
        </div>
      </div>
    </div>
  );
}