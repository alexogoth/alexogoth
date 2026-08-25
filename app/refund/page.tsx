export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-yellow-300 mb-6">
          Politika povrata novca
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-12">
          Posljednje ažuriranje: 25. august 2026.
        </p>

        <section className="space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              1. Digitalni proizvodi
            </h2>

            <p className="text-gray-300 leading-8">
              Alexogoth Akademija prodaje isključivo digitalne proizvode u
              obliku online kurseva kojima korisnik dobija pristup odmah
              nakon uspješno izvršene kupovine.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              2. Povrat novca
            </h2>

            <p className="text-gray-300 leading-8">
              Nakon što korisnik dobije pristup kupljenom digitalnom
              sadržaju, povrat novca nije moguć. Ovo pravilo postoji zbog
              prirode digitalnih proizvoda koji se ne mogu vratiti nakon
              isporuke.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              3. Izuzeci
            </h2>

            <p className="text-gray-300 leading-8">
              Izuzetak predstavljaju slučajevi dvostruke naplate ili
              tehničke greške zbog koje korisnik nije dobio pristup
              kupljenom kursu. U takvim situacijama svaki zahtjev će biti
              pojedinačno razmotren.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              4. Kontakt
            </h2>

            <p className="text-gray-300 leading-8">
              Za sva pitanja vezana za kupovinu ili eventualni povrat
              sredstava možete nas kontaktirati putem email adrese:
            </p>

            <a
              href="mailto:tarot.x@yahoo.com"
              className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition"
            >
              tarot.x@yahoo.com
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}