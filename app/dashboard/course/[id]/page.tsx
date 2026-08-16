"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

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

export default function CoursePlayerPage() {
  const { id } = useParams();

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const [loading, setLoading] = useState(true);
    useEffect(() => {
    async function loadCourse() {
      const { data: courseData } = await supabase
        .from("courses")
        .select("id,title")
        .eq("id", id)
        .single();

      if (courseData) {
        setCourse(courseData);
      }

      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("*")
        .eq("course_id", id)
        .order("position", { ascending: true });

      if (lessonsData) {
        setLessons(lessonsData);

        if (lessonsData.length > 0) {
          setCurrentLesson(lessonsData[0]);
        }
      }

      setLoading(false);
    }

    if (id) {
      loadCourse();
    }
  }, [id]);
    if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-2xl text-yellow-300">
          Učitavanje kursa...
        </p>
      </main>
    );
  }
  function getYoutubeEmbed(url: string) {
  if (!url) return "";

  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  }

  return url;
}
function goToNextLesson() {
  if (!currentLesson) return;

  const index = lessons.findIndex(
    (lesson) => lesson.id === currentLesson.id
  );

  if (index < lessons.length - 1) {
    setCurrentLesson(lessons[index + 1]);
  }
}

function goToPreviousLesson() {
  if (!currentLesson) return;

  const index = lessons.findIndex(
    (lesson) => lesson.id === currentLesson.id
  );

  if (index > 0) {
    setCurrentLesson(lessons[index - 1]);
  }
}
return (
  <main className="min-h-screen bg-black text-white">

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-yellow-300 mb-10">
        {course?.title}
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2">

          {currentLesson && (
            <>
              <div className="aspect-video rounded-2xl overflow-hidden border border-yellow-500/20">

                <iframe
                  src={getYoutubeEmbed(currentLesson.video_url)}
                  className="w-full h-full"
                  allowFullScreen
                />

              </div>

              <h2 className="text-3xl font-bold mt-8 text-yellow-300">
                {currentLesson.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-8">
                {currentLesson.description}
              </p>
              <div className="flex justify-between mt-8">

  <button
    onClick={goToPreviousLesson}
    disabled={
      lessons.findIndex(
        (lesson) => lesson.id === currentLesson?.id
      ) === 0
    }
    className="bg-gray-800 hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-bold"
  >
    ← Prethodna
  </button>

  <button
    onClick={goToNextLesson}
    disabled={
      lessons.findIndex(
        (lesson) => lesson.id === currentLesson?.id
      ) === lessons.length - 1
    }
    className="bg-yellow-400 hover:bg-yellow-300 text-black disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-bold"
  >
    Sljedeća →
  </button>

</div>
            </>
          )}

        </div>

        <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">

          <h3 className="text-2xl font-bold text-yellow-300 mb-6">
            Lekcije
          </h3>

          <div className="space-y-3">
                        {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setCurrentLesson(lesson)}
                className={`w-full text-left p-4 rounded-xl transition ${
                  currentLesson?.id === lesson.id
                    ? "bg-yellow-400 text-black"
                    : "bg-black hover:bg-gray-900 text-white"
                }`}
              >
                <p className="font-bold">
                  Lekcija {lesson.position}
                </p>

                <p className="mt-1">
                  {lesson.title}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>

    </div>

  </main>
);
}