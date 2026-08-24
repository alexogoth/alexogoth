import Link from "next/link";
export default function About() {
  return (
    <section
      id="about"
      className="bg-[#040404] py-28 px-6 border-t border-yellow-500/10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Tekst */}
        <div>

          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm mb-4">
            Dobrodošli
          </p>

          <h2 className="text-5xl md:text-6xl text-yellow-300 font-bold leading-tight">
            Dobrodošli u <br /> Alexogoth Akademiju
          </h2>

          <p className="mt-8 text-gray-300 text-xl leading-9">
            Akademiju magije, alhemije, ličnog razvoja
            i praktične duhovnosti.
          </p>

          <p className="mt-6 text-gray-400 leading-8">
            Ovdje nećete pronaći prazna obećanja.
            Naš cilj je pružiti jasne metode, praktične tehnike
            i kvalitetne programe koji Vam mogu pomoći da razvijete
            sebe, promijenite način razmišljanja i svjesno kreirate
            život kakav želite.
          </p>

          <Link
  href="/#courses"
  className="inline-block mt-10 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
>
  Saznajte više
</Link>

        </div>

        {/* Ilustracija */}
        <div className="relative">

          <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full"></div>

          <div className="relative rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#090909] to-[#101522] p-20 flex items-center justify-center">

            <div className="text-center">

              <div className="text-8xl mb-6">
                ✨
              </div>

              <h3 className="text-yellow-300 text-3xl font-bold">
                Probudite svoju moć
              </h3>

              <p className="text-gray-400 mt-6 leading-8">
                Svako veliko putovanje počinje
                upoznavanjem sebe.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}