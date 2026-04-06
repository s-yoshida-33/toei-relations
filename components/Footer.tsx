"use client";
import Link from "next/link";

const footerLinks = {
  left: [
    { label: "TOP", href: "#top" },
    { label: "ABOUT US", href: "#about" },
    { label: "PHILOSOPHY", href: "#mission" },
    { label: "SERVICE", href: "#service" },
  ],
  right: [
    { label: "COMPANY", href: "#company" },
    { label: "NEWS", href: "#news" },
    { label: "RECRUIT", href: "#recruit" },
    { label: "CONTACT", href: "#contact" },
  ],
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
        {/* Main footer */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
          alignItems: "start",
        }}>
          {/* Logo */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <rect x="2" y="2" width="16" height="16" rx="2" fill="var(--color-navy)" />
                <rect x="22" y="2" width="16" height="16" rx="2" fill="var(--color-accent)" />
                <rect x="12" y="22" width="16" height="16" rx="2" fill="var(--color-navy)" />
              </svg>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--color-navy)",
              }}>
                TOEI RELATIONS
              </span>
            </div>
          </div>

          {/* Nav left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.left.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-text-light)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-text-light)"}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Nav right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.right.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "var(--color-text-light)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-text-light)"}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: 20,
          textAlign: "center",
        }}>
          <p style={{
            fontSize: 11,
            color: "var(--color-text-light)",
            letterSpacing: "0.05em",
          }}>
            ©2026 TOEI RELATIONS Inc.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
