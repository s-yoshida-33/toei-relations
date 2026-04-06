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

const newsItems = [
  { date: "2026.07.21", title: "夏季休業期間のご案内" },
  { date: "2026.04.11", title: "キャリア支援プログラムの提供を開始しました" },
  { date: "2026.04.01", title: "コーポレートサイトを作成しました" },
];

export default function NewsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="news" style={{ background: "white", padding: "100px 24px" }}>
      <div ref={ref} style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: 48,
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <p style={{
            fontSize: 11,
            letterSpacing: "0.25em",
            color: "var(--color-accent)",
            fontWeight: 500,
            marginBottom: 4,
          }}>
            NEWS
          </p>
          <h2 style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 700,
            color: "var(--color-navy)",
            letterSpacing: "0.05em",
          }}>
            最新のお知らせ
          </h2>
        </div>

        {/* News list */}
        <div>
          {newsItems.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
                padding: "24px 0",
                borderTop: i === 0 ? "1px solid var(--color-border)" : "none",
                borderBottom: "1px solid var(--color-border)",
                textDecoration: "none",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s, background 0.2s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(42,122,184,0.02)";
                const title = (e.currentTarget as HTMLElement).querySelector(".news-title") as HTMLElement;
                if (title) title.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                const title = (e.currentTarget as HTMLElement).querySelector(".news-title") as HTMLElement;
                if (title) title.style.color = "var(--color-text)";
              }}
            >
              <span style={{
                fontSize: 13,
                color: "var(--color-text-light)",
                fontWeight: 400,
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                minWidth: 90,
              }}>
                {item.date}
              </span>
              <span
                className="news-title"
                style={{
                  fontSize: 14,
                  color: "var(--color-text)",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
              >
                {item.title}
              </span>
              <span style={{
                marginLeft: "auto",
                fontSize: 18,
                color: "var(--color-text-light)",
              }}>
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
