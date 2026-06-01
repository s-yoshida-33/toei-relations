import Image from "next/image";

const newsList = [
  { date: "2026.07.21", title: "夏季休業期間のご案内" },
  { date: "2026.04.11", title: "キャリア支援プログラムの提供を開始しました" },
  { date: "2026.04.01", title: "コーポレートサイトを作成しました" },
];

export default function News() {
  return (
    <section className="w-full py-32 bg-white">
      <div className="relative max-w-[1280px] mx-auto overflow-hidden">
        <h2 className="absolute top-10 -left-8 text-[16rem] font-black text-[#8ec899] tracking-tighter leading-none z-0 pointer-events-none select-none">
          NEWS
        </h2>

        <div className="relative z-10 px-16 flex items-center justify-between gap-16 mt-20 pb-4">
          <div className="w-5/12">
            <ul className="mb-10 border-t-2 border-gray-800">
              {newsList.map((item, index) => (
                <li key={index} className="flex items-center py-5 border-b border-gray-300 gap-6">
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

          <div className="w-7/12 relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/top/news.jpg"
              alt="News"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}