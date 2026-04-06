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
  { title: "業務請負(アウトソーシング)", icon: "/images/services/outsource.svg" },
  { title: "キャリア支援・研修", icon: "/images/services/career.svg" },
];

export default function ServiceSection() {
  const { ref, inView } = useInView();

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
          {/* SERVICE - 24px at 1280px, Inter Bold, #000000 */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(18px, 1.875vw, 24px)",
            letterSpacing: "0.1em",
            color: "#000000",
            fontWeight: 700,
            marginBottom: 4,
          }}>
            SERVICE
          </p>
          {/* 事業内容 - 16px at 1280px, #000000 */}
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(12px, 1.25vw, 16px)",
            fontWeight: 700,
            color: "#000000",
            letterSpacing: "0.1em",
          }}>
            事業内容
          </h2>
        </div>

        {/* Service items - images aligned at bottom, single line text */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginBottom: 48,
        }} className="service-grid">
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
              }}
            >
              {/* Icon container - fixed height to align bottoms */}
              <div style={{
                width: "100%",
                height: "clamp(140px, 16.72vw, 214px)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                marginBottom: 16,
              }}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={190}
                  height={214}
                  style={{
                    width: "clamp(120px, 14.84vw, 190px)",
                    height: "auto",
                    maxHeight: "100%",
                    objectFit: "contain",
                    objectPosition: "bottom",
                  }}
                />
              </div>
              {/* Title - 16px at 1280px, #000000, single line */}
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(12px, 1.25vw, 16px)",
                fontWeight: 700,
                color: "#000000",
                letterSpacing: "0.05em",
                lineHeight: 1.6,
                whiteSpace: "nowrap",
              }}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Detail button - 17px, right-aligned, pill */}
        <div style={{
          textAlign: "right",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.7s ease 0.5s",
        }}>
          <a
            href="#"
            className="btn-pill-service"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 36px",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1.33vw, 17px)",
              letterSpacing: "0.1em",
              textDecoration: "none",
              fontWeight: 700,
              borderRadius: 9999,
              border: "none",
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
      `}</style>
    </section>
  );
}
