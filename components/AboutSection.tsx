"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      <div ref={ref} style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}>
        {/* Background image - 100% natural height */}
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src="/images/about-bg.png"
            alt="About us"
            width={1280}
            height={720}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>

        {/* Overlay content - no dark blur, no "about us" text */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}>
          {/* Description text - 16px at 1280px, color #FFFFFF */}
          <div style={{
            maxWidth: 700,
            textAlign: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(12px, 1.25vw, 16px)",
              fontWeight: 700,
              lineHeight: 2,
              color: "#FFFFFF",
              marginBottom: 32,
            }}>
              TOEI RELATIONSは、総合人材サービスを通じて変化し続けるビジネス環境に対応する柔軟なソリューションを提供しています。多彩なマッチングによる両者の持続的に成長できる環境を創出すること、それが私たちのミッションです。
            </p>
            {/* Button - 17px, centered */}
            <div style={{ textAlign: "center" }}>
              <a
                href="#company"
                className="pill-btn-about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(13px, 1.33vw, 17px)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  padding: "12px 36px",
                  borderRadius: 9999,
                  background: "rgba(255,255,255,0.2)",
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                  border: "none",
                }}
              >
                会社概要を見る
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pill-btn-about::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.35);
          transform: translateX(100%);
          transition: transform 0.4s ease;
          z-index: -1;
          border-radius: 9999px;
        }
        .pill-btn-about:hover::before {
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
