"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo - 76x54 at 1280px */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo.svg"
            alt="TOEI RELATIONS"
            width={76}
            height={54}
            style={{ width: "clamp(56px, 5.94vw, 76px)", height: "auto" }}
          />
        </Link>

        {/* Desktop Nav - 14px at 1280px */}
        <nav style={{ display: "flex", gap: "clamp(12px, 2.2vw, 28px)" }} className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(10px, 1.09vw, 14px)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#000000",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#000000";
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
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 1025px) {
          .mobile-overlay { display: none !important; }
        }
      `}</style>
    </header>
  );
}
