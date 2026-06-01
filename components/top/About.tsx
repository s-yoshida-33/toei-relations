import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full pt-16 pb-32 bg-white overflow-hidden">
      <h2 className="absolute top-0 -left-4 text-[16rem] font-black text-[#f58e38] tracking-tighter leading-none z-0 pointer-events-none select-none">
        ABOUT US
      </h2>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-16 flex items-center justify-between gap-16 mt-52">
        <div className="w-5/12">
          <p className="text-base font-bold text-[#3b5976] leading-relaxed mb-8">
            TOEI RELATIONSは、総合人材サービスを通じて変化し続けるビジネス環境に対応する柔軟なソリューションを提供しています。<br />
            単なるマッチングに止まらず双方が持続的に成長できる環境を創造すること、それが私たちのミッションです。
          </p>
          <button className="bg-[#4a6b8c] text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-[#3b5976] transition-colors">
            私たちについて
          </button>
        </div>

        <div className="w-7/12 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/top/about.jpg"
            alt="About Us"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
