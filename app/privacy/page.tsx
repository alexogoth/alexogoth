export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold text-yellow-300 mb-6">
          Politika privatnosti
        </h1>

        <p className="text-gray-400 text-lg leading-8 mb-12">
          Posljednje ažuriranje: 25. august 2026.
        </p>

        <section className="space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              1. Uvod
            </h2>

            <p className="text-gray-300 leading-8">
              Alexogoth poštuje Vašu privatnost i posvećen je zaštiti
              Vaših ličnih podataka. Ova Politika privatnosti objašnjava
              koje informacije prikupljamo, kako ih koristimo i na koji
              način ih štitimo prilikom korištenja Alexogoth Akademije.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              2. Podaci koje prikupljamo
            </h2>

            <p className="text-gray-300 leading-8">
              Prilikom registracije možemo prikupiti Vaše ime i email
              adresu. Ovi podaci koriste se isključivo za kreiranje
              korisničkog naloga, pristup kupljenim kursevima i
              komunikaciju u vezi sa Vašim nalogom.
            </p>
          </div>

          <div>
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    3. Kako koristimo Vaše podatke
  </h2>

  <p className="text-gray-300 leading-8">
    Prikupljene podatke koristimo isključivo za omogućavanje pristupa
    platformi, upravljanje korisničkim nalozima, pristup kupljenim
    kursevima, odgovaranje na Vaše upite i unapređenje korisničkog
    iskustva. Vaše podatke ne prodajemo niti dijelimo trećim stranama u
    marketinške svrhe.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    4. Plaćanja
  </h2>

  <p className="text-gray-300 leading-8">
    Plaćanja na Alexogoth Akademiji obrađuju se putem platforme Ko-fi,
    koja koristi PayPal za sigurnu obradu transakcija. Alexogoth nema
    pristup podacima o Vašoj platnoj kartici niti ih pohranjuje na svojim
    serverima.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    5. Sigurnost podataka
  </h2>

  <p className="text-gray-300 leading-8">
    Koristimo razumne tehničke i organizacione mjere kako bismo zaštitili
    Vaše podatke od neovlaštenog pristupa, izmjene ili gubitka.
    Korisnički nalozi i autentikacija upravljaju se putem Supabase
    platforme.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    6. Vaša prava
  </h2>

  <p className="text-gray-300 leading-8">
    U svakom trenutku imate pravo zatražiti pristup svojim ličnim
    podacima, njihovu ispravku ili brisanje. Za sva pitanja u vezi sa
    obradom podataka možete nas kontaktirati putem email adrese
    tarot.x@yahoo.com.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    7. Izmjene Politike privatnosti
  </h2>

  <p className="text-gray-300 leading-8">
    Alexogoth zadržava pravo izmjene ove Politike privatnosti kada to bude
    potrebno radi usklađivanja sa zakonskim obavezama ili unapređenja
    usluga. Sve izmjene biće objavljene na ovoj stranici.
  </p>
</div>

<div>
  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
    8. Kontakt
  </h2>

  <p className="text-gray-300 leading-8">
    Ukoliko imate pitanja u vezi sa ovom Politikom privatnosti ili načinom
    obrade Vaših podataka, možete nas kontaktirati putem email adrese:
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