"use client";
import Image from "next/image";

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
          {/* Logo - 153x108 at 1280px */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <Image
                src="/images/logo.svg"
                alt="TOEI RELATIONS"
                width={153}
                height={108}
                style={{ width: "clamp(100px, 11.95vw, 153px)", height: "auto" }}
              />
            </div>
          </div>

          {/* Nav left - 14px, #4D6C88 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.left.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(11px, 1.09vw, 14px)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#4D6C88",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#4D6C88"}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Nav right - 14px, #4D6C88 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {footerLinks.right.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(11px, 1.09vw, 14px)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#4D6C88",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#4D6C88"}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright - #4D6C88 */}
        <div style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: 20,
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
