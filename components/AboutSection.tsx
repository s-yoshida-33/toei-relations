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
        minHeight: "clamp(400px, 56.25vw, 720px)",
      }}>
        {/* Background image - fills container */}
        <Image
          src="/images/about-bg.png"
          alt="About us"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />

        {/* Overlay content - positioned at bottom */}
        <div style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: "clamp(400px, 56.25vw, 720px)",
          padding: "0 24px 5%",
        }}>
          {/* Description text */}
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
            <div style={{ textAlign: "center" }}>
              <a
                href="#company"
                className="btn-pill-white"
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
                  border: "none",
                }}
              >
                会社概要を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
