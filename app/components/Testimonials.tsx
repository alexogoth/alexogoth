export default function Testimonials() {
  const testimonials = [
    {
      name: "M. K.",
      text: "Kursevi su mi pomogli da promijenim način razmišljanja i donesem više mira u svakodnevni život.",
    },
    {
      name: "A. S.",
      text: "Sve lekcije su jasno objašnjene i lako primjenjive. Topla preporuka svima koji žele raditi na sebi.",
    },
    {
      name: "J. P.",
      text: "Alexogoth Akademija mi je otvorila potpuno novu perspektivu. Profesionalno, jasno i inspirativno.",
    },
  ];

  return (
    <section className="bg-[#080808] py-28 px-6 border-t border-yellow-500/10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm">
            Iskustva polaznika
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-yellow-300 mt-4">
            Šta kažu naši polaznici
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Povjerenje naših polaznika najveća je potvrda kvaliteta naših programa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-yellow-400 text-4xl mb-6">“</div>

              <p className="text-gray-300 leading-8">
                {item.text}
              </p>

              <div className="mt-8 border-t border-yellow-500/10 pt-6">
                <h3 className="text-yellow-300 font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}