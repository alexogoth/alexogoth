export default function WhyUs() {
  const features = [
    {
      title: "Praktično znanje",
      text: "Programi su osmišljeni tako da naučeno možete primijeniti u svakodnevnom životu.",
    },
    {
      title: "Doživotni pristup",
      text: "Jednom kupljen kurs ostaje Vam dostupan bez vremenskog ograničenja.",
    },
    {
      title: "Lični razvoj",
      text: "Razvijajte svijest, fokus i unutrašnju stabilnost kroz pažljivo strukturirane programe.",
    },
    {
      title: "Podrška",
      text: "Na Vašem putovanju niste sami. Alexogoth Akademija pruža podršku i smjernice tokom učenja.",
    },
  ];

  return (
    <section className="bg-[#050505] py-28 px-6 border-t border-yellow-500/10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm">
            Zašto Alexogoth
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-yellow-300 mt-4">
            Više od online kurseva
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Alexogoth Akademija nije samo mjesto za učenje, već prostor za
            lični razvoj, primjenu znanja i kontinuirani napredak.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-400 text-xl mb-6">
                ✦
              </div>

              <h3 className="text-2xl font-semibold text-yellow-300">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}