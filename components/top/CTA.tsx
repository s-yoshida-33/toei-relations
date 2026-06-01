export default function CTA() {
  return (
    <section className="w-full bg-[#0a3875] py-24 px-4 text-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <h2 className="text-white text-4xl font-bold leading-relaxed mb-12 tracking-wide">
          可能性を、共にひらく。<br />
          まずはお気軽にご相談ください
        </h2>

        <div className="flex justify-center items-center gap-8">
          <button className="bg-white text-[#0a3875] font-bold py-4 w-60 text-center hover:bg-gray-100 transition-colors">
            CONTACT
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-4 w-60 text-center hover:bg-white/10 transition-colors">
            RECRUIT
          </button>
        </div>
      </div>
    </section>
  );
}
