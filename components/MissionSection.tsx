"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(threshold = 0.15) {
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

const missionText = [
  "私たちは、「つながり」を起点に価値を生み出します。",
  "人と企業、仕事と人、現場と可能性。",
  "それぞれが関わり合うことで、新しい流れが生まれていく。",
  "目の前の課題に向き合いながら、その先にある未来にも目を向ける。",
  "関わるすべてにとって、意味のある仕事をつくり続けます。",
];

export default function MissionSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="mission"
      style={{
        background: "var(--color-navy)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background MISSION text */}
      <div style={{
        position: "absolute",
        left: -20,
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "center",
        fontSize: 120,
        fontWeight: 900,
        letterSpacing: "0.05em",
        color: "rgba(255,255,255,0.03)",
        userSelect: "none",
        whiteSpace: "nowrap",
        fontFamily: "'Inter', sans-serif",
      }}>
        MISSION
      </div>

      {/* Background image */}
      <Image
        src="/images/mission-bg.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center", opacity: 0.15 }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 800,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(24px, 4vw, 40px)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.5,
            marginBottom: 48,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          つながりを生み出し
          <br />
          次へと続く機会をつくる
        </h2>

        {/* Mission text lines */}
        <div style={{ marginBottom: 48 }}>
          {missionText.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                lineHeight: 2,
                color: "rgba(255,255,255,0.75)",
                fontWeight: 100,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(15px)",
                transition: `opacity 0.7s ease ${0.2 + i * 0.08}s, transform 0.7s ease ${0.2 + i * 0.08}s`,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(15px)",
          transition: "opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s",
        }}>
          <a
            href="#about"
            className="pill-btn pill-btn-mission"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 32px",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              textDecoration: "none",
              fontWeight: 500,
              borderRadius: 9999,
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
              border: "none",
              transition: "color 0.4s ease",
            }}
          >
            私たちの信念
          </a>
        </div>
      </div>

      <style>{`
        .pill-btn-mission::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.45);
          transform: translateX(100%);
          transition: transform 0.4s ease;
          z-index: -1;
          border-radius: 9999px;
        }
        .pill-btn-mission:hover::before {
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
