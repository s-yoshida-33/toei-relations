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
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <rect x="2" y="2" width="16" height="16" rx="2" fill="var(--color-navy)" />
            <rect x="22" y="2" width="16" height="16" rx="2" fill="var(--color-accent)" />
            <rect x="12" y="22" width="16" height="16" rx="2" fill="var(--color-navy)" />
          </svg>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
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
                fontSize: 11,
                fontWeight: 500,
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
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
          }}
        >
          <span style={{
            display: "block",
            width: 24,
            height: 2,
            background: "var(--color-navy)",
            margin: "5px 0",
            transition: "transform 0.3s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 2,
            background: "var(--color-navy)",
            margin: "5px 0",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.3s",
          }} />
          <span style={{
            display: "block",
            width: 24,
            height: 2,
            background: "var(--color-navy)",
            margin: "5px 0",
            transition: "transform 0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "white",
          borderTop: "1px solid var(--color-border)",
          padding: "20px 24px",
        }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                fontSize: 13,
                letterSpacing: "0.1em",
                color: "var(--color-text)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
