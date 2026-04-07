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
    <section id="service" style={{ background: "#f8f9fb", padding: "clamp(60px, 7.8vw, 100px) clamp(16px, 3vw, 24px)" }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "clamp(32px, 5vw, 64px)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
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

        {/* Service items - auto-fit grid: no breakpoint needed */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
          gap: "clamp(16px, 2vw, 24px)",
          marginBottom: "clamp(32px, 3.75vw, 48px)",
        }}>
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
              {/* Icon container - fluid height */}
              <div style={{
                width: "100%",
                height: "clamp(120px, 16.72vw, 214px)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                marginBottom: "clamp(8px, 1.25vw, 16px)",
              }}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={190}
                  height={214}
                  style={{
                    width: "clamp(100px, 14.84vw, 190px)",
                    height: "auto",
                    maxHeight: "100%",
                    objectFit: "contain",
                    objectPosition: "bottom",
                  }}
                />
              </div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(11px, 1.25vw, 16px)",
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

        {/* Detail button - right-aligned */}
        <div className="btn-align-right" style={{
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
              padding: "clamp(8px, 1vw, 12px) clamp(24px, 2.8vw, 36px)",
              color: "#FFFFFF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 1.33vw, 17px)",
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
    </section>
  );
}
