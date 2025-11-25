"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const skills = [
  "Data Structures & Algorithms",
  "Full-Stack Development",
  "Cloud Computing",
  "AI & Machine Learning",
  "Intelligent System Design",
  "Backend Engineering"
];

export default function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const update = () => {
    setPrefersReducedMotion(mediaQuery.matches);
  };

  update(); // set initial value
  mediaQuery.addEventListener("change", update);

  return () => mediaQuery.removeEventListener("change", update);
}, []);


  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const currentSkill = skills[currentSkillIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentSkill) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentSkill.substring(0, displayedText.length - 1)
          : currentSkill.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSkillIndex, isPaused, prefersReducedMotion]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      aboutSection.focus({ preventScroll: true });
    }
  };

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="hero"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16 lg:pt-20"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-0 sm:opacity-40 md:opacity-50 pointer-events-none"></div>

      <div className="container mx-auto py-2 sm:py-4 lg:py-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-slate-600 font-medium">Hi, I'm</p>
              
              <h1 className="font-extrabold text-slate-900 leading-[1.1] text-[clamp(2.25rem,5vw,4rem)]">
                Shivkant Kushwaha
              </h1>
              
              <div 
                className="min-h-[4rem] sm:min-h-[3.5rem] flex items-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                <h2 
                  className="text-[clamp(1.125rem,2.5vw,1.875rem)] font-normal text-slate-600"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  I'm into{" "}
                  <span className="font-bold text-blue-600 inline-block">
                    {displayedText}
                    {!prefersReducedMotion && (
                      <span className="animate-pulse ml-0.5 text-blue-500">|</span>
                    )}
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2">
              <button
                onClick={handleResumeClick}
                onMouseEnter={() => setIsResumeHovered(true)}
                onMouseLeave={() => setIsResumeHovered(false)}
                className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm"
                aria-label="View or download resume"
              >
                <span>Resume</span>
                <div className="relative w-4 h-4 flex-shrink-0">
                  <svg
                    className={`absolute inset-0 transition-all duration-300 ${
                      isResumeHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  <svg
                    className={`absolute inset-0 transition-all duration-300 ${
                      isResumeHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </button>

              <button
                onClick={scrollToAbout}
                className="group px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white active:scale-[0.98] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 text-sm"
                aria-label="Scroll to about section"
              >
                <span>About Me</span>
                <svg
                  className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            {/* ============================================================ */}
            {/* MOBILE SOCIAL BAR PLACEHOLDER */}
            {/* SocialBar component will render mobile icons here */}
            {/* ============================================================ */}
            <div id="socials-placeholder"></div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="hidden md:block absolute top-1/4 right-0 lg:right-1/4 w-24 h-24 lg:w-32 lg:h-32 border-2 border-slate-300/60 rounded-full opacity-50 pointer-events-none" style={{ animation: prefersReducedMotion ? 'none' : 'spin 20s linear infinite' }}></div>

            <div className="relative z-10 w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
              <div className="hidden lg:block absolute -inset-8 bg-gradient-radial from-blue-400/20 via-blue-300/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-3xl transform rotate-3 lg:rotate-6"></div>
              
              <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500 ring-1 ring-blue-100">
                <Image
                  src="/shivkantpic.png"
                  alt="Shivkant Kushwaha - Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 380px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}