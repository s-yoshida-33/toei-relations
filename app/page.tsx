import Header from "@/components/Header";
import Hero from "@/components/top/Hero";
import About from "@/components/top/About";
import Service from "@/components/top/Service";
import News from "@/components/top/News";
import CTA from "@/components/top/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Service />
      <News />
      <CTA />
    </main>
  );
}
