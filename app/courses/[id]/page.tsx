import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: course, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#040404] text-white">
      {/* HERO */}
      <div className="relative h-[80vh]">
        <Image
          src={`/${course.image}`}
          alt={course.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-20">
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-bold uppercase tracking-widest">
              {course.category}
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold text-yellow-300 leading-tight max-w-4xl">
              {course.title}
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              {course.description}
            </p>

            <div className="mt-8 text-5xl md:text-6xl font-bold text-yellow-400">
              € {course.price}
            </div>

            <button className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-5 rounded-xl text-xl font-bold transition">
              Kupi kurs
            </button>
          </div>
        </div>
      </div>

      {/* SADRŽAJ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">
          Šta ćete naučiti?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              ✔ Praktične tehnike
            </h3>

            <p className="text-gray-400 leading-8">
              Naučićete konkretne metode koje možete odmah primijeniti u
              svakodnevnom životu.
            </p>
          </div>

          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              ✔ Video lekcije
            </h3>

            <p className="text-gray-400 leading-8">
              Kurs je podijeljen u module koje možete pratiti vlastitim tempom.
            </p>
          </div>

          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              ✔ Doživotni pristup
            </h3>

            <p className="text-gray-400 leading-8">
              Jednom kupljen kurs ostaje trajno dostupan na Vašem profilu.
            </p>
          </div>

          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              ✔ Premium podrška
            </h3>

            <p className="text-gray-400 leading-8">
              Dobijate pristup svim budućim nadogradnjama ovog kursa bez dodatne
              naplate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}