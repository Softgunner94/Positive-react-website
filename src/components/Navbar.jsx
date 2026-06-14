import { useState, useEffect, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

// ── Navigation links — each `to` maps to a React Router route ────────────────
const NAV_LINKS = [
  { label: "Home",         to: "/" },
  { label: "About Us",     to: "/about" },
  { label: "Services",     to: "/services" },
  { label: "Our Approach", to: "/approach" },
  { label: "Benefits",     to: "/benefits" },
  { label: "Contact Us",   to: "/contact" },
];




// ── Navbar Component ──────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  // Close menu when route changes or Escape is pressed
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onKey    = (e) => { if (e.key === "Escape") closeMenu(); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [closeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Helper: className for NavLink (receives { isActive } from React Router)
  const navLinkClass = ({ isActive }) =>
    `navbar__link${isActive ? " active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-menu__link${isActive ? " active" : ""}`;

  return (
    <>
      {/* ══ NAVBAR ROOT — fixed, wraps topbar + main nav ══ */}
      <header className="navbar-root" role="banner">

        {/* ── MAIN NAVBAR ──────────────────────────────────── */}
        <nav
          className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
          aria-label="Main navigation"
        >
          <div className="navbar__inner">

            {/* Logo — React Router Link to Home */}
            <Link
              to="/"
              className="navbar__logo"
            >
              <div className="navbar__logo-badge">
                <img width="150px" src="/logo.png" alt="" />
              </div>
              
            </Link>

            {/* Desktop nav links */}
            <ul className="navbar__links" role="list">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to} role="listitem">
                  <NavLink
                    to={to}
                    className={navLinkClass}
                    end={to === "/"}  /* exact match for home only */
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA — React Router Link */}
            <Link
              to="/contact"
              className="navbar__cta"
              aria-label="Request a consultation"
            >
              Request Consultation
              <span className="navbar__cta-arrow" aria-hidden="true">→</span>
            </Link>

            {/* Hamburger toggle — mobile only */}
            <button
              className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="navbar__hamburger-bar" aria-hidden="true" />
              <span className="navbar__hamburger-bar" aria-hidden="true" />
              <span className="navbar__hamburger-bar" aria-hidden="true" />
            </button>

          </div>
        </nav>
      </header>

      {/* ══ MOBILE MENU DRAWER ══════════════════════════════ */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__inner">

          {/* Mobile nav links */}
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={mobileLinkClass}
              end={to === "/"}
              onClick={closeMenu}
            >
              {label}
              <span className="mobile-menu__link-arrow" aria-hidden="true">›</span>
            </NavLink>
          ))}

          <hr className="mobile-menu__divider" aria-hidden="true" />

          {/* Mobile CTA */}
          <Link
            to="/contact"
            className="mobile-menu__cta"
            onClick={closeMenu}
            aria-label="Request a consultation"
          >
            Request Consultation →
          </Link>

        </div>
      </nav>

      {/* ══ SPACER — offsets fixed navbar height ════════════ */}
      <div className="navbar-spacer" aria-hidden="true" />
    </>
  );
}