import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040404] via-[#060915] to-[#040404]">

      {/* Zlatni sjaj */}
      <div className="absolute w-[900px] h-[900px] rounded-full bg-yellow-500/10 blur-[180px]"></div>

      {/* Mistični krug */}
      <div className="absolute w-[650px] h-[650px] border border-yellow-500/10 rounded-full"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <Image
          src="/Logo.png"
          alt="Alexogoth"
          width={240}
          height={240}
          priority
          className="mx-auto drop-shadow-[0_0_40px_rgba(212,175,55,0.45)]"
        />

        <p className="mt-10 uppercase tracking-[0.45em] text-yellow-400 text-sm">
          Probudi svoju moć
        </p>

        <h1 className="mt-6 text-6xl md:text-8xl font-bold text-yellow-300">
          Alexogoth Akademija
        </h1>

        <p className="mt-8 text-2xl text-gray-300 max-w-3xl mx-auto leading-10">
          Najveće putovanje nije kroz svijet,
          <br />
          već kroz spoznaju sebe.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-4 rounded-xl transition duration-300 shadow-lg shadow-yellow-500/30">
            Istraži kurseve
          </button>

          <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-10 py-4 rounded-xl transition duration-300">
            O Akademiji
          </button>

        </div>

      </div>

    </section>
  );
}