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
        padding: "clamp(64px, 8vw, 120px) clamp(16px, 3vw, 24px)",
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
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(20px, 3.75vw, 48px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.7,
            marginBottom: "clamp(32px, 4vw, 56px)",
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
            gap: "clamp(12px, 1.5vw, 20px)",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <a
            href="#"
            className="btn-cta-contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(10px, 1.5vw, 20px) clamp(32px, 4vw, 56px)",
              fontSize: "clamp(13px, 1.48vw, 19px)",
              color: "#003E84",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              borderRadius: 9999,
              border: "1.5px solid white",
            }}
          >
            CONTACT
          </a>
          <a
            href="#"
            className="btn-cta-recruit"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(10px, 1.5vw, 20px) clamp(32px, 4vw, 56px)",
              fontSize: "clamp(13px, 1.48vw, 19px)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              borderRadius: 9999,
              border: "1.5px solid white",
            }}
          >
            RECRUIT
          </a>
        </div>
      </div>
    </section>
  );
}
