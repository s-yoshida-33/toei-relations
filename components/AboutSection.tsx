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
        {/* Placeholder image - hands raised */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #1a3a5c 0%, #2a5a8c 50%, #1a3a5c 100%)",
        }}>
          {/* Decorative pattern simulating crowd/hands */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                bottom: 0,
                left: `${i * 5 + 2}%`,
                width: 30,
                height: `${60 + Math.sin(i) * 20}%`,
                background: `rgba(255,255,255,${0.05 + (i % 3) * 0.02})`,
                borderRadius: "50% 50% 0 0",
                transform: `rotate(${(i % 5 - 2) * 3}deg)`,
              }}
            />
          ))}
        </div>

        {/* Text overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(20, 40, 70, 0.5)",
        }}>
          <div style={{ textAlign: "center" }}>
            {/* Bordered title */}
            <div style={{
              border: "1.5px solid rgba(255,255,255,0.7)",
              padding: "20px 60px",
              display: "inline-block",
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
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
            fontSize: 15,
            lineHeight: 2,
            color: "var(--color-text-light)",
            marginBottom: 32,
          }}>
            TOEI RELATIONSは、社会人材サービスを通じて変化し続けるビジネス環境に対応する柔軟なソリューションを提供しています。
            多彩なマッチングによる両者の持続的に成長できる環境を創出することこそ、それが私たちのミッションです。
          </p>
          <a
            href="#company"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "var(--color-navy)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-navy)",
              paddingBottom: 2,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-accent)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--color-navy)"}
          >
            会社概要を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
