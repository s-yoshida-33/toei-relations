"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  { title: "人材派遣サービス", icon: "/images/services/dispatch.svg" },
  { title: "人材紹介サービス", icon: "/images/services/recruit.svg" },
  { title: "業務請負（アウトソーシング）", icon: "/images/services/outsource.svg" },
  { title: "キャリア支援・研修", icon: "/images/services/career.svg" },
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
            fontSize: 18,
            letterSpacing: "0.25em",
            color: "var(--color-navy)",
            fontWeight: 700,
            marginBottom: 4,
          }}>
            SERVICE
          </p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            color: "var(--color-navy)",
            letterSpacing: "0.1em",
          }}>
            事業内容
          </h2>
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
                padding: "40px 20px 32px",
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
              {/* Service icon */}
              <div style={{
                width: 80,
                height: 80,
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--color-navy)",
                marginBottom: 0,
                letterSpacing: "0.05em",
                lineHeight: 1.5,
              }}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Detail button - centered, pill shape */}
        <div style={{
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.7s ease 0.5s",
        }}>
          <a
            href="#"
            className="pill-btn pill-btn-service"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 32px",
              background: "#4D6C88",
              color: "white",
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              textDecoration: "none",
              fontWeight: 700,
              borderRadius: 9999,
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              border: "none",
              transition: "color 0.4s ease",
            }}
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
        .pill-btn-service::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #3a5570;
          transform: translateX(100%);
          transition: transform 0.4s ease;
          z-index: -1;
          border-radius: 9999px;
        }
        .pill-btn-service:hover::before {
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
