export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="bg-black border-t border-yellow-500/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-14">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-semibold text-yellow-300">
              Alexogoth
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Alexogoth Akademija pruža online programe
              ličnog razvoja, manifestacije i svjesnog
              kreiranja života.
            </p>

          </div>

          {/* Linkovi */}

          <div>

            <h3 className="text-yellow-300 text-xl mb-6">
              Navigacija
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="/">Početna</a>

<a href="/#about">Akademija</a>

<a href="/#courses">Kursevi</a>

<a href="/#faq">FAQ</a>

            </div>

          </div>

          <div>

  <h3 className="text-yellow-300 text-xl mb-6">
    Pravno
  </h3>

  <div className="flex flex-col gap-4 text-gray-400">

    <a
      href="/privacy"
      className="hover:text-yellow-400 transition"
    >
      Politika privatnosti
    </a>

    <a
      href="/terms"
      className="hover:text-yellow-400 transition"
    >
      Uslovi korištenja
    </a>

    <a
      href="/refund"
      className="hover:text-yellow-400 transition"
    >
      Politika povrata
    </a>

  </div>

</div>

          {/* Kontakt */}

          <div>

            <h3 className="text-yellow-300 text-xl mb-6">
              Kontakt
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
  href="mailto:tarot.x@yahoo.com"
  className="hover:text-yellow-400 transition"
>
  info@alexogoth.com
</a>


<a
  href="https://www.instagram.com/alexogoth9"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-yellow-400 transition"
>
  Instagram
</a>


<a
  href="https://www.youtube.com/@alexogoth"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-yellow-400 transition"
>
  YouTube
</a>

            </div>

          </div>

        </div>

        <div className="border-t border-yellow-500/10 mt-16 pt-8 text-center text-gray-500">

          © 2026 Alexogoth Akademija.
          Sva prava zadržana.

        </div>

      </div>
    </footer>
  );
}