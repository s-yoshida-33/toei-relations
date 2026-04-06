"use client";
import { useEffect, useState } from "react";

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
        background: "white",
        paddingTop: 70,
      }}
    >
      <div style={{
        maxWidth: 1280,
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
          {/* Main heading - 96px at 1280px */}
          <div style={{
            fontFamily: "'M PLUS 1p', sans-serif",
            fontSize: "clamp(36px, 7.5vw, 96px)",
            fontWeight: 700,
            color: "#4D6C88",
            letterSpacing: "-0.01em",
            lineHeight: 1.6,
          }}>
            <span style={{ display: "block" }}>Creating new</span>
            <span style={{ display: "block" }}>possibilities.</span>
          </div>

          {/* Spacing before subtitle - reduced */}
          <div style={{ height: "clamp(20px, 3.5vw, 45px)" }} />

          {/* Sub text - 38px at 1280px */}
          <p
            style={{
              fontFamily: "'M PLUS 1p', sans-serif",
              fontSize: "clamp(18px, 2.97vw, 38px)",
              fontWeight: 700,
              color: "#4D6C88",
              marginBottom: 72,
              letterSpacing: "0.05em",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            関わるすべてに、次の可能性をひらく。
          </p>

          {/* CTA Buttons - 1.5x size */}
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
            }}
          >
            <a
              href="#contact"
              className="btn-navy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "20px 48px",
                color: "white",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: 19,
                fontWeight: 500,
                letterSpacing: "0.1em",
                borderRadius: 2,
                border: "1.5px solid var(--color-navy)",
              }}
            >
              CONTACT
            </a>
            <a
              href="#recruit"
              className="btn-navy-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "20px 48px",
                color: "var(--color-navy)",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: 19,
                fontWeight: 500,
                letterSpacing: "0.1em",
                borderRadius: 2,
                border: "1.5px solid var(--color-navy)",
              }}
            >
              RECRUIT
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
        <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--color-text-light)", fontFamily: "'Inter', sans-serif" }}>SCROLL</span>
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
