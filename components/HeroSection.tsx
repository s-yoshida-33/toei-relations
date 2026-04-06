"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="top"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f0f4f8 0%, #e8eef4 50%, #dce7f0 100%)",
        paddingTop: 60,
      }}
    >
      {/* Background geometric shapes */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "-5%",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "rgba(42,122,184,0.05)",
        transform: "translateZ(0)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "5%",
        left: "-8%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "rgba(26,58,92,0.04)",
      }} />

      {/* Grid lines subtle decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(42,122,184,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(42,122,184,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Tag line */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
            padding: "6px 14px",
            border: "1px solid rgba(42,122,184,0.3)",
            borderRadius: 20,
            background: "rgba(42,122,184,0.06)",
          }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--color-accent)",
              display: "inline-block",
            }} />
            <span style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "var(--color-accent)",
              fontWeight: 500,
            }}>
              TOEI RELATIONS
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--color-navy)",
            marginBottom: 24,
            letterSpacing: "-0.01em",
          }}>
            Creating new
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-accent)" }}>possibilities.</span>
          </h1>

          {/* Sub text */}
          <p
            style={{
              fontSize: 18,
              color: "var(--color-text-light)",
              marginBottom: 48,
              fontWeight: 300,
              letterSpacing: "0.05em",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            関わるすべてに、次の可能性をひらく。
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
            }}
          >
            <a
              href="#about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                background: "var(--color-navy)",
                color: "white",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                borderRadius: 2,
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-navy)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              ABOUT US
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                background: "transparent",
                color: "var(--color-navy)",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                borderRadius: 2,
                border: "1.5px solid var(--color-navy)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-navy)";
                (e.currentTarget as HTMLElement).style.color = "white";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--color-navy)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 36,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.8s",
      }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--color-text-light)" }}>SCROLL</span>
        <div style={{
          width: 1,
          height: 40,
          background: "linear-gradient(to bottom, var(--color-accent), transparent)",
          animation: "scrollLine 2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
