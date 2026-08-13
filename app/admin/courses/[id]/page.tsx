"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditCoursePage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [kofiUrl, setKofiUrl] = useState("");
  const [productCode, setProductCode] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
    useEffect(() => {
    async function loadCourse() {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert(error.message);
        router.push("/admin");
        return;
      }

      setTitle(data.title ?? "");
      setDescription(data.description ?? "");
      setPrice(String(data.price ?? ""));
      setImage(data.image ?? "");
      setCategory(data.category ?? "");
      setKofiUrl(data.kofi_url ?? "");
      setProductCode(data.kofi_product_code ?? "");

      setLoading(false);
    }

    if (id) {
      loadCourse();
    }
  }, [id, router]);

  async function updateCourse(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const { error } = await supabase
      .from("courses")
      .update({
        title,
        description,
        price: Number(price),
        image,
        category,
        kofi_url: kofiUrl,
        kofi_product_code: productCode,
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Kurs uspješno ažuriran!");

    router.push("/admin");
  }
    if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Učitavanje kursa...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-300 mb-10">
          Uredi kurs
        </h1>

        <form
          onSubmit={updateCourse}
          className="bg-[#111827] rounded-3xl p-8 space-y-6 border border-yellow-500/20"
        >

          <div>
            <label className="block mb-2">Naziv kursa</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Opis</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700 h-40"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Cijena (€)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">URL slike</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Kategorija</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2">Ko-fi URL</label>
            <input
              value={kofiUrl}
              onChange={(e) => setKofiUrl(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2">Ko-fi Product Code</label>
            <input
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold px-8 py-4 rounded-xl"
          >
            {saving ? "Spremanje..." : "Sačuvaj izmjene"}
          </button>

        </form>

      </div>
    </main>
  );
}