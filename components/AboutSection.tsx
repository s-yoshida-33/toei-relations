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

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" style={{ position: "relative", overflow: "hidden" }}>
      {/* Full-width image with overlay */}
      <div style={{
        position: "relative",
        height: "60vh",
        minHeight: 400,
        overflow: "hidden",
        background: "var(--color-navy-dark)",
      }}>
        {/* Sample placeholder image */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#8a9bb0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}>
            SAMPLE IMAGE
          </span>
        </div>

        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20, 40, 70, 0.5)",
        }} />

        {/* Text overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ textAlign: "center" }}>
            {/* Bordered title */}
            <div style={{
              border: "1.5px solid rgba(255,255,255,0.7)",
              padding: "20px 60px",
              display: "inline-block",
            }}>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(36px, 6vw, 72px)",
                fontWeight: 400,
                color: "white",
                letterSpacing: "0.05em",
                fontStyle: "italic",
              }}>
                about us
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div ref={ref} style={{
        background: "white",
        padding: "60px 24px",
      }}>
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 2,
            color: "var(--color-text-light)",
            marginBottom: 32,
          }}>
            TOEI RELATIONSは、総合人材サービスを通じて変化し続けるビジネス環境に対応する柔軟なソリューションを提供しています。
            <br />
            多彩なマッチングによる両者の持続的に成長できる環境を創出すること、それが私たちのミッションです。
          </p>
          <a
            href="#company"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--color-navy)",
              textDecoration: "none",
              padding: "12px 28px",
              border: "1.5px solid var(--color-navy)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--color-navy)";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--color-navy)";
            }}
          >
            会社概要を見る
          </a>
        </div>
      </div>
    </section>
  );
}
