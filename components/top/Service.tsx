import Image from "next/image";

export default function Service() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="relative max-w-[1280px] mx-auto overflow-hidden">
        <h2 className="absolute top-10 -right-8 text-[16rem] font-black text-[#0f3c75] tracking-tighter leading-none z-0 pointer-events-none select-none">
          SERVICE
        </h2>

        <div className="relative z-10 px-16 flex items-center justify-between gap-16 mt-20 pb-4">
          <div className="w-7/12 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/top/service.jpg"
              alt="Service"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-5/12">
            <p className="text-base font-bold text-[#3b5976] leading-relaxed mb-8">
              TOEI RELATIONSは、総合人材サービスを通じて変化し続けるビジネス環境に対応する柔軟なソリューションを提供しています。<br />
              単なるマッチングに止まらず双方が持続的に成長できる環境を創造すること、それが私たちのミッションです。
            </p>
            <button className="bg-[#4a6b8c] text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-[#3b5976] transition-colors">
              サービスについて
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}