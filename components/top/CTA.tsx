export default function CTA() {
    return (
      <section className="w-full bg-[#0a3875] py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-relaxed mb-12 tracking-wide">
            可能性を、共にひらく。<br />
            まずはお気軽にご相談ください
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-white text-[#0a3875] font-bold py-4 w-full sm:w-48 text-center hover:bg-gray-100 transition-colors">
              CONTACT
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-4 w-full sm:w-48 text-center hover:bg-white/10 transition-colors">
              RECRUIT
            </button>
          </div>
        </div>
      </section>
    );
  }