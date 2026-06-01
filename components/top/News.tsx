import Image from "next/image";

const newsList = [
  { date: "2026.07.21", title: "夏季休業期間のご案内" },
  { date: "2026.04.11", title: "キャリア支援プログラムの提供を開始しました" },
  { date: "2026.04.01", title: "コーポレートサイトを作成しました" },
];

export default function News() {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden bg-white mb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        {/* 背景の巨大テキスト */}
        <h2 className="absolute top-[-30px] md:top-[-70px] left-0 text-[6rem] md:text-[12rem] font-black text-[#8ec899] opacity-80 tracking-tighter leading-none z-0 select-none">
          NEWS
        </h2>

        {/* コンテンツエリア */}
        <div className="relative z-10 flex flex-col md:flex-row mt-16 md:mt-32">
          <div className="w-full md:w-5/12 pr-0 md:pr-12 mb-10 md:mb-0">
            <ul className="mb-8 border-t border-gray-300">
              {newsList.map((item, index) => (
                <li key={index} className="flex flex-col md:flex-row md:items-center py-4 border-b border-gray-300 gap-2 md:gap-6">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{item.date}</span>
                  <a href="#" className="text-sm font-bold text-gray-900 hover:text-[#8ec899] transition-colors line-clamp-1">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-[#8ec899] text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-[#7ab585] transition-colors">
              最新のお知らせ
            </button>
          </div>
          
          <div className="w-full md:w-7/12 relative">
            <div className="relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/images/top/news.jpg" 
                alt="News" 
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