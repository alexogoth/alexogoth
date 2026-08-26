import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040404] via-[#060915] to-[#040404]">

      {/* Zlatni sjaj */}
      <div className="absolute w-[650px] h-[650px] md:w-[900px] md:h-[900px] rounded-full bg-yellow-500/10 blur-[180px]"></div>

      {/* Mistični krug */}
      <div className="absolute w-[520px] h-[520px] md:w-[650px] md:h-[650px] border border-yellow-500/10 rounded-full"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <Image
          src="/Logo.png"
          alt="Alexogoth"
          width={240}
          height={240}
          priority
          className="mx-auto w-32 md:w-60 h-auto drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]"
        />

        <p className="mt-5 md:mt-10 uppercase tracking-[0.35em] md:tracking-[0.45em] text-yellow-400 text-xs md:text-sm">
          Probudi svoju moć
        </p>

        <h1 className="mt-4 text-5xl md:text-8xl font-bold text-yellow-300 leading-tight font-heading">
  <span className="block md:inline">Alexogoth</span>{" "}
  <span className="block md:inline">Akademija</span>
</h1>

        <p className="mt-5 md:mt-8 text-base md:text-2xl text-gray-300 max-w-2xl mx-auto leading-8 md:leading-10">
          Najveće putovanje nije kroz svijet,
          <br />
          već kroz spoznaju sebe.
        </p>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center items-center gap-5">

          <Link
            href="/#courses"
            className="w-full sm:w-auto sm:min-w-[220px] bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg shadow-yellow-500/30 text-center"
          >
            Istraži kurseve
          </Link>

          <Link
            href="/#about"
            className="w-full sm:w-auto sm:min-w-[220px] border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 rounded-xl transition duration-300 text-center"
          >
            O Akademiji
          </Link>

        </div>

      </div>

    </section>
  );
}