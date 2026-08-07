import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function CheckoutPage({
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
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-yellow-300 mb-6">
          {course.title}
        </h1>

        <p className="text-gray-300 mb-2">
          Cijena
        </p>

        <p className="text-5xl font-bold text-yellow-400 mb-8">
          € {course.price}
        </p>

        <a
          href={course.kofi_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
        >
          Nastavi na plaćanje
        </a>

      </div>
    </main>
  );
}