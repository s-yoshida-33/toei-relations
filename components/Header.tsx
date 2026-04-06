"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "TOP", href: "#top" },
  { label: "ABOUT US", href: "#about" },
  { label: "PHILOSOPHY", href: "#mission" },
  { label: "SERVICE", href: "#service" },
  { label: "COMPANY", href: "#company" },
  { label: "NEWS", href: "#news" },
  { label: "RECRUIT", href: "#recruit" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
            <path d="M20 15h60v8H55v62h-10V23H20v-8z" fill="var(--color-navy)" />
            <path d="M62 40c0-6 4-10 10-10h8c6 0 10 4 10 10v8c0 6-4 10-10 10h-8c-6 0-10-4-10-10v-8z" fill="var(--color-accent)" />
          </svg>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--color-navy)",
            }}
          >
            TOEI RELATIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 28 }} className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "var(--color-text)",
                textDecoration: "none",
                transition: "color 0.2s",
                opacity: 0.8,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-accent)";
                (e.target as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-text)";
                (e.target as HTMLElement).style.opacity = "0.8";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          aria-label="メニュー"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            position: "relative",
            zIndex: 110,
          }}
        >
          <span style={{
            display: "block",
            width: 24,
            height: 2,
            background: menuOpen ? "white" : "var(--color-navy)",
            margin: "5px 0",
            transition: "transform 0.3s, background 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 2,
            background: menuOpen ? "white" : "var(--color-navy)",
            margin: "5px 0",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.3s, background 0.3s",
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 2,
            background: menuOpen ? "white" : "var(--color-navy)",
            margin: "5px 0",
            transition: "transform 0.3s, background 0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className="mobile-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "var(--color-navy)",
          zIndex: 105,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "16px 0",
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "white",
              textDecoration: "none",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.4s ease ${0.05 * i}s, transform 0.4s ease ${0.05 * i}s`,
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-overlay { display: none !important; }
        }
      `}</style>
    </header>
  );
}
