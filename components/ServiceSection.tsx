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
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="7" />
        <circle cx="36" cy="16" r="7" />
        <circle cx="26" cy="32" r="7" />
        <path d="M16 23v2M36 23v2M26 25v-2" strokeLinecap="round" />
      </svg>
    ),
    title: "人材派遣サービス",
    desc: "即戦力となる人材を迅速にご提供します",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="20" r="8" />
        <path d="M30 14l8 6-8 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 36c0-5 4-8 8-8" strokeLinecap="round" />
      </svg>
    ),
    title: "人材紹介サービス",
    desc: "最適なキャリアマッチングをご提案します",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="18" width="20" height="16" rx="2" />
        <path d="M22 26h6M24 22v8" strokeLinecap="round" />
        <path d="M30 30l8-4" strokeLinecap="round" />
        <circle cx="40" cy="26" r="4" />
      </svg>
    ),
    title: "業務請負（アウトソーシング）",
    desc: "業務全体をまるごとお任せいただけます",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M26 12c-8 0-14 5-14 12s6 12 14 12 14-5 14-12-6-12-14-12z" />
        <path d="M22 28l-6 8M30 28l6 8" strokeLinecap="round" />
        <path d="M20 22c2-3 10-3 12 0" strokeLinecap="round" />
      </svg>
    ),
    title: "キャリア支援・研修",
    desc: "個人の成長を組織の力に変えます",
  },
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
            fontSize: 11,
            letterSpacing: "0.25em",
            color: "var(--color-accent)",
            fontWeight: 500,
            marginBottom: 8,
          }}>
            SERVICE
          </p>
          <h2 style={{
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
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          marginBottom: 48,
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "white",
                padding: "40px 28px",
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
              <div style={{
                color: hovered === i ? "var(--color-accent)" : "var(--color-navy)",
                marginBottom: 20,
                display: "flex",
                justifyContent: "center",
                transition: "color 0.25s",
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: 14,
                fontWeight: 700,
                color: "var(--color-navy)",
                marginBottom: 10,
                letterSpacing: "0.05em",
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: 12,
                color: "var(--color-text-light)",
                lineHeight: 1.7,
              }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detail button */}
        <div style={{
          textAlign: "right",
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
              fontSize: 12,
              letterSpacing: "0.12em",
              textDecoration: "none",
              fontWeight: 500,
              borderRadius: 2,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--color-accent)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--color-navy)"}
          >
            詳細を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
