export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Odaberite kurs",
      text: "Izaberite program koji najbolje odgovara Vašim ciljevima i započnite svoje putovanje.",
    },
    {
      number: "02",
      title: "Učite svojim tempom",
      text: "Pristupite lekcijama kada Vama odgovara i napredujte bez vremenskog pritiska.",
    },
    {
      number: "03",
      title: "Primijenite znanje",
      text: "Stečeno znanje pretvorite u svakodnevne navike i ostvarite stvarne promjene u životu.",
    },
  ];

  return (
    <section className="py-28 bg-[#080808] border-t border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm">
            Kako funkcioniše
          </p>

          <h2 className="text-5xl font-semibold text-yellow-300 mt-4">
            Vaše putovanje u tri koraka
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Jednostavan proces koji Vam omogućava da odmah započnete učenje i
            razvijate sebe vlastitim tempom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-yellow-500/20 bg-[#111111] p-10 hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-yellow-500/30">
                {step.number}
              </span>

              <h3 className="text-2xl text-yellow-300 font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-8 mt-5">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}