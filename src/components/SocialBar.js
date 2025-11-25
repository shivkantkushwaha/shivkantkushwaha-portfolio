"use client";

import { useState, useEffect } from "react";

// ============================================================
// SOCIAL LINKS DATA
// ============================================================
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shivkantkushwaha",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    ariaLabel: "Open Shivkant on LinkedIn (opens in new tab)"
  },
  {
    name: "GitHub",
    url: "https://github.com/shivkantkushwaha",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    ariaLabel: "Open Shivkant on GitHub (opens in new tab)"
  },
  {
    name: "X",
    url: "https://x.com/shivkantkushwa",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    ariaLabel: "Open Shivkant on X (opens in new tab)"
  }
];

// ============================================================
// SOCIAL BAR COMPONENT
// ============================================================
export default function SocialBar({ heroId = "hero" }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // ============================================================
  // REDUCED MOTION DETECTION
  // ============================================================
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ============================================================
  // INTERSECTION OBSERVER FOR HERO VISIBILITY
  // ============================================================
  useEffect(() => {
    const heroElement = document.getElementById(heroId);
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroElement);

    return () => {
      observer.unobserve(heroElement);
    };
  }, [heroId]);

  // ============================================================
  // DESKTOP: VERTICAL SOCIAL BAR (Fixed Left Side)
  // ============================================================
  const DesktopSocialBar = () => (
    <div
      className="hidden md:flex fixed left-7 top-1/2 z-50 flex-col gap-3 transition-all duration-200"
      style={{
        transform: isHeroVisible
          ? "translateY(-50%) translateX(0)"
          : "translateY(-50%) translateX(-18px)",
        opacity: isHeroVisible ? 1 : 0,
        transition: prefersReducedMotion
          ? "opacity 220ms"
          : "opacity 220ms, transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
          className="group relative flex items-center justify-start overflow-hidden bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{
            width: hoveredIndex === index ? "160px" : "48px",
            height: "48px",
            border:
              hoveredIndex === index
                ? "1px solid #1558D6"
                : "1px solid #e5e7eb",
            backgroundColor:
              hoveredIndex === index
                ? "rgba(21, 88, 214, 0.08)"
                : "#ffffff",
            transition: prefersReducedMotion
              ? "width 220ms, background-color 220ms, border 220ms"
              : "width 220ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 220ms, border 220ms",
          }}
        >
          <div className="flex items-center justify-center w-12 h-12 text-slate-700 group-hover:text-blue-600 transition-colors duration-200">
            {social.icon}
          </div>
          <span
            className="font-medium text-sm text-blue-600 whitespace-nowrap pr-4"
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              transform:
                hoveredIndex === index ? "translateX(0)" : "translateX(6px)",
              transition: prefersReducedMotion
                ? "opacity 220ms"
                : "opacity 220ms, transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );

  // ============================================================
  // MOBILE: HORIZONTAL SOCIAL ROW (Placeholder Content)
  // ============================================================
  const MobileSocialBar = () => (
    <div className="flex md:hidden gap-3 pt-2">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-full text-slate-700 hover:text-blue-600 hover:border-blue-600 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Vertical Bar */}
      <DesktopSocialBar />

      {/* Mobile Horizontal Bar - Render into placeholder if exists */}
      {typeof window !== "undefined" && (
        <MobileSocialBarPortal>
          <MobileSocialBar />
        </MobileSocialBarPortal>
      )}
    </>
  );
}

// ============================================================
// PORTAL COMPONENT FOR MOBILE SOCIAL BAR
// ============================================================
function MobileSocialBarPortal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const placeholder = document.getElementById("socials-placeholder");
  if (!placeholder) return children;

  // Use React Portal if available, otherwise return children
  if (typeof window !== "undefined" && window.ReactDOM?.createPortal) {
    return window.ReactDOM.createPortal(children, placeholder);
  }

  return children;
}