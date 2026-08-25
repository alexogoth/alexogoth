export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-yellow-300 mb-6">
          Uslovi korištenja
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-12">
          Posljednje ažuriranje: 25. august 2026.
        </p>

        <section className="space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              1. Prihvatanje uslova
            </h2>

            <p className="text-gray-300 leading-8">
              Korištenjem Alexogoth Akademije prihvatate ove Uslove
              korištenja. Ukoliko se ne slažete sa bilo kojim dijelom
              ovih uslova, molimo Vas da ne koristite platformu.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              2. Korisnički nalog
            </h2>

            <p className="text-gray-300 leading-8">
              Korisnik je odgovoran za tačnost podataka koje unosi prilikom
              registracije i za sigurnost svog korisničkog naloga. Dijeljenje
              pristupa drugim osobama nije dozvoljeno.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              3. Digitalni sadržaj
            </h2>

            <p className="text-gray-300 leading-8">
              Kupovinom kursa korisnik dobija pravo ličnog pristupa
              digitalnom sadržaju. Svi materijali ostaju vlasništvo
              Alexogotha i zaštićeni su autorskim pravima.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              4. Zabranjene aktivnosti
            </h2>

            <p className="text-gray-300 leading-8">
              Zabranjeno je kopiranje, distribuiranje, dijeljenje korisničkog
              naloga ili na bilo koji način neovlašteno korištenje sadržaja
              dostupnog na platformi.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              5. Izmjene uslova
            </h2>

            <p className="text-gray-300 leading-8">
              Alexogoth zadržava pravo izmjene ovih Uslova korištenja u bilo
              kojem trenutku. Sve izmjene biće objavljene na ovoj stranici.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              6. Kontakt
            </h2>

            <p className="text-gray-300 leading-8">
              Za sva pitanja u vezi sa Uslovima korištenja kontaktirajte nas
              putem email adrese:
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