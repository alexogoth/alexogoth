"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function NewLessonPage() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [position, setPosition] = useState("1");

  const [loading, setLoading] = useState(false);
    async function createLesson(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("lessons")
      .insert({
        course_id: id,
        title,
        description,
        video_url: videoUrl,
        position: Number(position),
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Lekcija uspješno dodana!");

    router.push(`/admin/courses/${id}/lessons`);
  }
    return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-300 mb-10">
          Nova lekcija
        </h1>

        <form
          onSubmit={createLesson}
          className="bg-[#111827] rounded-3xl p-8 space-y-6 border border-yellow-500/20"
        >

          <div>
            <label className="block mb-2">Naslov lekcije</label>

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
            />
          </div>

          <div>
            <label className="block mb-2">
              YouTube URL
            </label>

            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">
              Redni broj lekcije
            </label>

            <input
              type="number"
              min="1"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-black font-bold px-8 py-4 rounded-xl"
          >
            {loading ? "Spremanje..." : "Sačuvaj lekciju"}
          </button>

        </form>

      </div>
    </main>
  );
}