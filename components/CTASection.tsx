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
          {/* CONTACT - white bg, #003E84 text → hover: #003E84 bg, white text */}
          <a
            href="#"
            className="btn-cta-contact fv-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#003E84",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              borderRadius: 2,
              border: "1.5px solid white",
            }}
          >
            CONTACT
          </a>
          {/* RECRUIT - transparent, white text → hover: white bg, #003E84 text */}
          <a
            href="#"
            className="btn-cta-recruit fv-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              borderRadius: 2,
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
