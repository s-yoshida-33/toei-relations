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
        position: "relative",
        overflow: "hidden",
        aspectRatio: "1280 / 463",
        minHeight: 360,
      }}
    >
      {/* Background image - fixed aspect ratio */}
      <Image
        src="/images/mission-bg.png"
        alt=""
        fill
        style={{
          objectFit: "cover",
          objectPosition: "left center",
        }}
      />

      {/* Content overlay */}
      <div
        ref={ref}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          maxWidth: 1100,
          width: "100%",
          padding: "0 clamp(16px, 3vw, 24px)",
          textAlign: "center",
        }}>
          {/* Heading - fluid */}
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 3.9vw, 50px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.5,
              marginBottom: "clamp(16px, 2.5vw, 32px)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            つながりを生み出し
            <br />
            次へと続く機会をつくる
          </h2>

          {/* Mission text lines - fluid */}
          <div style={{ marginBottom: "clamp(16px, 2.5vw, 32px)" }}>
            {missionText.map((line, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(10px, 1.6vw, 22px)",
                  lineHeight: 2,
                  color: "#FFFFFF",
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

          {/* CTA - right-aligned */}
          <div className="btn-align-right" style={{
            textAlign: "right",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.7s ease 0.65s, transform 0.7s ease 0.65s",
          }}>
            <a
              href="#about"
              className="btn-pill-white"
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
                fontWeight: 500,
                borderRadius: 9999,
                border: "none",
              }}
            >
              私たちの信念
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
