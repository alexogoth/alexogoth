"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewCoursePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [kofiUrl, setKofiUrl] = useState("");
  const [productCode, setProductCode] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function createCourse(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    if (!imageFile) {
  alert("Odaberi sliku.");
  setLoading(false);
  return;
}

const fileName = `${Date.now()}-${imageFile.name}`;

const { error: uploadError } = await supabase.storage
  .from("course-images")
  .upload(fileName, imageFile);

if (uploadError) {
  alert(uploadError.message);
  setLoading(false);
  return;
}

const {
  data: { publicUrl },
} = supabase.storage
  .from("course-images")
  .getPublicUrl(fileName);

    const { error } = await supabase
      .from("courses")
      .insert({
        title,
        description,
        price: Number(price),
        image: publicUrl,
        category,
        kofi_url: kofiUrl,
        kofi_product_code: productCode,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Kurs uspješno kreiran!");

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-300 mb-10">
          Novi kurs
        </h1>

        <form
          onSubmit={createCourse}
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
  <label className="block mb-2">Slika kursa</label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      if (e.target.files && e.target.files.length > 0) {
        setImageFile(e.target.files[0]);
      }
    }}
    className="w-full p-4 rounded-xl bg-black border border-gray-700"
    required
  />

  {imageFile && (
    <p className="mt-2 text-green-400">
      Odabrana slika: {imageFile.name}
    </p>
  )}
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
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl"
          >
            {loading ? "Spremanje..." : "Sačuvaj kurs"}
          </button>

        </form>

      </div>
    </main>
  );
}