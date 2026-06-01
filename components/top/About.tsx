import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        {/* 背景の巨大テキスト */}
        <h2 className="absolute top-[-40px] md:top-[-80px] left-0 text-[6rem] md:text-[12rem] font-black text-[#f58e38] tracking-tighter leading-none z-0 select-none">
          ABOUT US
        </h2>

        {/* コンテンツエリア */}
        <div className="relative z-10 flex flex-col md:flex-row items-center mt-12 md:mt-24">
          <div className="w-full md:w-5/12 pr-0 md:pr-12 mb-10 md:mb-0">
            <p className="text-sm md:text-base font-bold text-[#3b5976] leading-relaxed mb-8">
              TOEI RELATIONSは、総合人材サービスを通じて変化し続けるビジネス環境に対応する柔軟なソリューションを提供しています。<br />
              単なるマッチングに止まらず双方が持続的に成長できる環境を創造すること、それが私たちのミッションです。
            </p>
            <button className="bg-[#4a6b8c] text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-[#3b5976] transition-colors">
              私たちについて
            </button>
          </div>
          
          <div className="w-full md:w-7/12 relative">
            <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/top/about.jpg" 
                alt="About Us" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}