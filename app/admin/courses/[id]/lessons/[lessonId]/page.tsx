"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditLessonPage() {
  const router = useRouter();

  const { id, lessonId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [position, setPosition] = useState("1");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
    useEffect(() => {
    async function loadLesson() {
      const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("id", lessonId)
        .single();

      if (error) {
        alert(error.message);
        router.push(`/admin/courses/${id}/lessons`);
        return;
      }

      setTitle(data.title);
      setDescription(data.description ?? "");
      setVideoUrl(data.video_url ?? "");
      setPosition(String(data.position));

      setLoading(false);
    }

    if (lessonId) {
      loadLesson();
    }
  }, [lessonId, id, router]);

  async function updateLesson(e: React.FormEvent) {
    e.preventDefault();

    setSaving(true);

    const { error } = await supabase
      .from("lessons")
      .update({
        title,
        description,
        video_url: videoUrl,
        position: Number(position),
      })
      .eq("id", lessonId);

    setSaving(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Lekcija uspješno ažurirana!");

    router.push(`/admin/courses/${id}/lessons`);
  }  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Učitavanje lekcije...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-300 mb-10">
          Uredi lekciju
        </h1>

        <form
          onSubmit={updateLesson}
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
            <label className="block mb-2">YouTube URL</label>

            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full p-4 rounded-xl bg-black border border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Redni broj</label>

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