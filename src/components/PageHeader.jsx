import React, { useEffect, useRef } from "react";

import "./PageHeader.css";

// ─── Slide Data ───────────────────────────────────────────────
// Replace src values with your own image paths or URLs
const SLIDES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80",
    alt: "Professional team meeting",
    headline: "POSITIVE PROFESSIONAL",
    sub: "The right specialist will respond to your inquiry as soon as possible.",
    badge: "Trusted Professionals",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    alt: "Business consulting",
    headline: "Expert Consulting",
    sub: "Unlock your potential with tailored consulting and coaching services.",
    badge: "Consulting & Coaching",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
    alt: "Training session",
    headline: "Training & Development",
    sub: "Empowering individuals and organisations to grow and succeed.",
    badge: "Growth & Learning",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80",
    alt: "Modern office",
    headline: "Get In Touch",
    sub: "We are always ready to help you achieve more. Reach out today.",
    badge: "Let's Connect",
  },
];

export default function PageHeader() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Dynamically load Swiper scripts so no npm install is needed.
    // If you have Swiper installed via npm, remove this block and
    // import { Swiper } from 'swiper' at the top instead.
    const loadSwiper = async () => {
      if (window.Swiper) {
        initSwiper();
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      script.onload = initSwiper;
      document.body.appendChild(script);
    };

    const initSwiper = () => {
      if (swiperRef.current) {
        swiperRef.current = new window.Swiper(".header-swiper", {
          slidesPerView: 1,       // exactly 1 slide visible
          loop: true,             // infinite loop
          effect: "fade",         // crossfade — no peeking edges
          fadeEffect: { crossFade: true },
          speed: 1000,            // 1s fade transition
          autoplay: {
            delay: 3000,          // 3 seconds per slide
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          keyboard: { enabled: true },
          a11y: {
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
          },
        });
      }
    };

    loadSwiper();

    return () => {
      // Cleanup swiper on unmount
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <header className="page-header">
      <div className="swiper header-swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {SLIDES.map((slide) => (
            <div className="swiper-slide" key={slide.id}>
              {/* Image — object-fit: cover keeps it perfectly fitted */}
              <img
                src={slide.src}
                alt={slide.alt}
                className="slide-img"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="slide-overlay">
                {/* Bootstrap container centres the text content */}
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 slide-content">
                      <span className="slide-badge">{slide.badge}</span>
                      <h1 className="slide-headline">{slide.headline}</h1>
                      <p className="slide-sub">{slide.sub}</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="swiper-button-prev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        {/* Pagination dots */}
        <div className="swiper-pagination"></div>

        {/* Progress bar */}
        <div className="slide-progress">
          <div className="slide-progress-bar"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </header>
  );
}