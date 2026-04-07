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
  fontSize: "clamp(10px, 1.09vw, 14px)",
  fontWeight: 700,
  letterSpacing: "0.1em",
  color: "#4D6C88",
  textDecoration: "none",
  transition: "color 0.2s",
  whiteSpace: "nowrap",
};

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div style={{
        background: "#f0f3f6",
        padding: "clamp(40px, 5vw, 72px) clamp(16px, 3vw, 24px)",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          gap: "clamp(16px, 3vw, 40px)",
          alignItems: "start",
        }}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <Image
              src="/images/logo.svg"
              alt="TOEI RELATIONS"
              width={153}
              height={108}
              style={{ width: "clamp(56px, 10vw, 153px)", height: "auto" }}
            />
          </div>

          {/* Nav: 4 columns x 2 rows */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, auto)",
            gap: "clamp(8px, 1.25vw, 16px) clamp(12px, 2.5vw, 32px)",
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
      </div>

      {/* Sub footer - copyright */}
      <div style={{
        background: "#e8ecf0",
        padding: "clamp(16px, 2vw, 24px) clamp(16px, 3vw, 24px)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          color: "#4D6C88",
          letterSpacing: "0.05em",
        }}>
          ©2026 TOEI RELATIONS Inc.
        </p>
      </div>
    </footer>
  );
}
