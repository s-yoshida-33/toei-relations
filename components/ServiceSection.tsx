"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const services = [
  { title: "人材派遣サービス" },
  { title: "人材紹介サービス" },
  { title: "業務請負（アウトソーシング）" },
  { title: "キャリア支援・研修" },
];

export default function ServiceSection() {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="service" style={{ background: "#f8f9fb", padding: "100px 24px" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: 64,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            letterSpacing: "0.25em",
            color: "var(--color-navy)",
            fontWeight: 700,
            marginBottom: 8,
          }}>
            SERVICE
          </p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 700,
            color: "var(--color-navy)",
            letterSpacing: "0.05em",
          }}>
            事業内容
          </h2>
          <div style={{
            width: 40,
            height: 2,
            background: "var(--color-accent)",
            margin: "16px auto 0",
          }} />
        </div>

        {/* Service cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginBottom: 48,
        }} className="service-grid">
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "white",
                padding: "40px 20px",
                borderRadius: 4,
                textAlign: "center",
                cursor: "pointer",
                opacity: inView ? 1 : 0,
                transform: inView
                  ? hovered === i ? "translateY(-6px)" : "translateY(0)"
                  : "translateY(30px)",
                transition: `
                  opacity 0.7s ease ${0.1 + i * 0.1}s,
                  transform ${inView ? "0.25s ease" : `0.7s ease ${0.1 + i * 0.1}s`},
                  box-shadow 0.25s ease
                `,
                boxShadow: hovered === i
                  ? "0 12px 40px rgba(26,58,92,0.12)"
                  : "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Sample icon placeholder */}
              <div style={{
                width: 80,
                height: 80,
                margin: "0 auto 20px",
                background: "#e8eef4",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10,
                  color: "var(--color-text-light)",
                  letterSpacing: "0.05em",
                }}>
                  SAMPLE
                </span>
              </div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "var(--color-navy)",
                marginBottom: 0,
                letterSpacing: "0.05em",
              }}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Detail button - centered */}
        <div style={{
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.7s ease 0.5s",
        }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              background: "var(--color-navy)",
              color: "white",
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              textDecoration: "none",
              fontWeight: 700,
              borderRadius: 2,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--color-accent)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--color-navy)"}
          >
            詳細を見る
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
