"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function CTASection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      style={{
        background: "#003E84",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading - 48px at 1280px, #FFFFFF */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(22px, 3.75vw, 48px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.7,
            marginBottom: 40,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          可能性を、共にひらく。
          <br />
          まずはお気軽にご相談ください
        </h2>

        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {/* CONTACT - 32px at 1280px, white bg, #003E84 text */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 48px",
              background: "white",
              color: "#003E84",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 32px)",
              fontWeight: 400,
              letterSpacing: "0.15em",
              borderRadius: 2,
              border: "2px solid white",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.85)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "white";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            CONTACT
          </a>
          {/* RECRUIT - 32px at 1280px, outlined, #FFFFFF text */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 48px",
              background: "transparent",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 32px)",
              fontWeight: 400,
              letterSpacing: "0.15em",
              borderRadius: 2,
              border: "2px solid rgba(255,255,255,0.6)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "white";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            RECRUIT
          </a>
        </div>
      </div>
    </section>
  );
}
