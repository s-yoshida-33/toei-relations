"use client";
import Image from "next/image";

const allLinks = [
  { label: "TOP", href: "#top" },
  { label: "ABOUT US", href: "#about" },
  { label: "PHILOSOPHY", href: "#mission" },
  { label: "COMPANY", href: "#company" },
  { label: "SERVICE", href: "#service" },
  { label: "NEWS", href: "#news" },
  { label: "RECRUIT", href: "#recruit" },
  { label: "CONTACT", href: "#contact" },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(11px, 1.09vw, 14px)",
  fontWeight: 700,
  letterSpacing: "0.1em",
  color: "#4D6C88",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer style={{
      background: "#f0f3f6",
      padding: "60px 24px 32px",
      borderTop: "1px solid var(--color-border)",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Main footer: logo left + nav right (4col x 2row) */}
        <div className="footer-main" style={{
          display: "flex",
          gap: 40,
          marginBottom: 48,
          alignItems: "start",
        }}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <Image
              src="/images/logo.svg"
              alt="TOEI RELATIONS"
              width={153}
              height={108}
              className="footer-logo-img"
              style={{ width: "clamp(80px, 11.95vw, 153px)", height: "auto" }}
            />
          </div>

          {/* Nav: 4 columns x 2 rows */}
          <div className="footer-nav" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, auto)",
            gap: "16px 32px",
            flex: 1,
            paddingTop: 8,
          }}>
            {allLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#4D6C88"}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ paddingTop: 20, textAlign: "center" }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "#4D6C88",
            letterSpacing: "0.05em",
          }}>
            ©2026 TOEI RELATIONS Inc.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-main {
            gap: 20px !important;
          }
          .footer-nav {
            gap: 10px 16px !important;
            font-size: 11px !important;
          }
          .footer-nav a {
            font-size: 11px !important;
          }
          .footer-logo-img {
            width: 56px !important;
          }
        }
      `}</style>
    </footer>
  );
}
