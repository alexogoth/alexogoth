import Image from "next/image";
import Link from "next/link";
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
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen">
        <Image
  src={
    course.image.startsWith("http")
      ? course.image
      : `/${course.image}`
  }
  alt={course.title}
  fill
  priority
  className="object-cover"
/>

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 flex items-end min-h-screen">
          <div className="max-w-6xl mx-auto w-full px-6 pb-16 md:pb-24">
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-widest">
              {course.category}
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-300 leading-tight max-w-4xl">
              {course.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              {course.description}
            </p>

            <div className="mt-8 text-4xl md:text-6xl font-bold text-yellow-400">
              € {course.price}
            </div>

            <Link
              href={`/checkout/${course.id}`}
              className="inline-flex items-center justify-center mt-8 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 md:px-10 md:py-5 rounded-xl text-lg md:text-xl font-bold transition duration-300"
            >
              Kupi kurs
            </Link>
          </div>
        </div>
      </section>

      {/* SADRŽAJ */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-10">
          Šta ćete naučiti?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
              ✔ Praktične tehnike
            </h3>

            <p className="text-gray-400 leading-8">
              Naučićete konkretne metode koje možete odmah primijeniti u
              svakodnevnom životu.
            </p>
          </div>

          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
              ✔ Video lekcije
            </h3>

            <p className="text-gray-400 leading-8">
              Kurs je podijeljen u module koje možete pratiti vlastitim tempom.
            </p>
          </div>

          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
              ✔ Doživotni pristup
            </h3>

            <p className="text-gray-400 leading-8">
              Jednom kupljen kurs ostaje trajno dostupan na Vašem profilu.
            </p>
          </div>

          <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
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