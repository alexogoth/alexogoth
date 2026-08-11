"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import Link from "next/link";

type Course = {
  id: string;
  title: string;
};

type Lesson = {
  id: string;
  title: string;
  description: string;
  video_url: string;
  position: number;
};

export default function LessonsPage() {
  const { id } = useParams();

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    async function loadLessons() {
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("id, title")
        .eq("id", id)
        .single();

      if (courseError) {
        console.error(courseError);
      } else {
        setCourse(courseData);
      }

      const { data: lessonsData, error: lessonsError } = await supabase
        .from("lessons")
        .select("*")
        .eq("course_id", id)
        .order("position", { ascending: true });

      if (lessonsError) {
        console.error(lessonsError);
      } else {
        setLessons(lessonsData || []);
      }

      setLoading(false);
    }

    if (id) {
      loadLessons();
    }
  }, [id]);
    if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Učitavanje lekcija...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold text-yellow-300">
              {course?.title}
            </h1>

            <p className="text-gray-400 mt-2">
              Upravljanje lekcijama
            </p>
          </div>

          <Link
            href={`/admin/courses/${id}/lessons/new`}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold"
          >
            + Nova lekcija
          </Link>
        </div>

        {lessons.length === 0 ? (
          <div className="bg-[#111827] rounded-2xl p-8 border border-yellow-500/20">
            <p className="text-gray-400">
              Ovaj kurs još nema nijednu lekciju.
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20 flex justify-between items-center"
              >
                <div>
                  <p className="text-yellow-400 font-bold">
                    Lekcija {lesson.position}
                  </p>

                  <h2 className="text-2xl font-bold mt-1">
                    {lesson.title}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {lesson.video_url}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-lg font-bold">
                    Uredi
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-bold">
                    Obriši
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}