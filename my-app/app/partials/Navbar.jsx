"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Create Blog", href: "/create-blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-bold text-stone-900 tracking-tight hover:text-stone-600 transition-colors"
          >
            Inkwell
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
           
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white px-4 pb-4 pt-2 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-stone-600 hover:text-stone-900 py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium bg-stone-900 text-white px-4 py-2 rounded-full text-center hover:bg-stone-700 transition-colors mt-1"
          >
            Subscribe
          </Link>
        </div>
      )}
    </nav>
  );
}