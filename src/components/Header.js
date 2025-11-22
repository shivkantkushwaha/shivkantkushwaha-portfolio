"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur-md w-full">
      <nav className="flex w-full items-center px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo only, left corner */}
        <Link
          href="#home"
          className="flex items-center"
          aria-label="Go to home"
          onClick={closeMenu}
        >
            <div className="relative h-7 w-28 sm:h-8 sm:w-32 md:h-9 md:w-36">
          <Image
            src="/shivkant.png"
            alt="Shivkant logo"
            fill
            sizes="78px"
            className="object-contain"
            priority
            />
            </div>
        </Link>

        {/* Right side: nav + CTAs + mobile button */}
        <div className="ml-auto flex items-center gap-4">
          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6 text-sm font-medium text-neutral-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center px-1 py-1 transition-colors hover:text-indigo-700"
                  >
                    <span className="relative">
                      {item.label}
                      {/* blue underline on hover */}
                      <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-indigo-600 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Resume button */}
              <Link
                href="https://drive.google.com/file/d/1VAC8WkqiccOl66hHa1N46rYG0w5DHzGm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
              >
                <span>Resume</span>
                <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
                  {/* Download icon (default) */}
                  <svg
                    className="absolute h-4 w-4 opacity-100 transition-opacity duration-150 group-hover:opacity-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 2.5a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V3.25A.75.75 0 0 1 10 2.5z" />
                    <path d="M4.75 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H4.75z" />
                  </svg>
                  {/* Eye icon (on hover) */}
                  <svg
                    className="absolute h-4 w-4 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 4.5c-4.17 0-6.83 2.9-7.94 4.43a1.4 1.4 0 0 0 0 1.64C3.17 12.1 5.83 15 10 15s6.83-2.9 7.94-4.43a1.4 1.4 0 0 0 0-1.64C16.83 7.4 14.17 4.5 10 4.5zm0 8a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm0-1.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z" />
                  </svg>
                </span>
              </Link>

              {/* Open to Opportunities button */}
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-900 px-4 py-2 text-xs font-semibold text-neutral-900 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-neutral-900 hover:text-white"
              >
                <span>Open to Opportunities</span>
                <svg
                  className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 5.25A.75.75 0 0 1 6.75 4.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V7.56l-7.22 7.22a.75.75 0 0 1-1.06-1.06l7.22-7.22H6.75A.75.75 0 0 1 6 5.25z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 p-2 text-neutral-800 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-neutral-900 transition-transform duration-150 ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-neutral-900 transition-opacity duration-150 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute inset-x-0 top-3 h-0.5 rounded-full bg-neutral-900 transition-transform duration-150 ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-2 text-sm font-medium text-neutral-800">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-neutral-100"
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-2">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-600 hover:text-white"
                onClick={closeMenu}
              >
                <span>Resume</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 2.5a.75.75 0 0 1 .75.75v7.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V3.25A.75.75 0 0 1 10 2.5z" />
                  <path d="M4.75 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H4.75z" />
                </svg>
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-900 px-4 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white"
                onClick={closeMenu}
              >
                <span>Open to Opportunities</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 5.25A.75.75 0 0 1 6.75 4.5h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V7.56l-7.22 7.22a.75.75 0 0 1-1.06-1.06l7.22-7.22H6.75A.75.75 0 0 1 6 5.25z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
