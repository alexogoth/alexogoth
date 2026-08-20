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

type LessonProgress = {
  lesson_id: string;
  completed: boolean;
  last_viewed_at: string | null;
};

export default function CoursePlayerPage() {
  const { id } = useParams();

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<LessonProgress[]>([]);
const [userId, setUserId] = useState("");
    useEffect(() => {
    async function loadCourse() {
      const {
  data: { user },
} = await supabase.auth.getUser();

if (user) {
  setUserId(user.id);

 const { data: progressData } = await supabase
  .from("lesson_progress")
  .select("lesson_id, completed, last_viewed_at")
  .eq("user_id", user.id)
  .eq("course_id", id);

const userProgress: LessonProgress[] = progressData ?? [];

setProgress(userProgress);
}
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
    const completedLessonIds = new Set(
      progress
        .filter((item) => item.completed)
        .map((item) => item.lesson_id)
    );

    const firstUnfinished = lessonsData.find(
      (lesson) => !completedLessonIds.has(lesson.id)
    );

    if (firstUnfinished) {
      setCurrentLesson(firstUnfinished);
    } else {
      setCurrentLesson(lessonsData[lessonsData.length - 1]);
    }
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
async function markLessonCompleted() {
  if (!currentLesson || !userId) return;

  const { error } = await supabase
    .from("lesson_progress")
    .upsert(
      {
        user_id: userId,
        course_id: id,
        lesson_id: currentLesson.id,
        completed: true,
        completed_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,lesson_id",
      }
    );

  if (error) {
    alert(error.message);
    return;
  }

  setProgress((prev) => {
    const exists = prev.find(
      (p) => p.lesson_id === currentLesson.id
    );

    if (exists) {
      return prev.map((p) =>
        p.lesson_id === currentLesson.id
          ? { ...p, completed: true }
          : p
      );
    }

    return [
  ...prev,
  {
    lesson_id: currentLesson.id,
    completed: true,
    last_viewed_at: new Date().toISOString(),
  },
];
  });
}
const completedLessons = progress.filter(
  (lesson) => lesson.completed
).length;

const totalLessons = lessons.length;

const progressPercentage =
  totalLessons === 0
    ? 0
    : Math.round((completedLessons / totalLessons) * 100);
return (
  <main className="min-h-screen bg-black text-white">

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-yellow-300 mb-10">
        {course?.title}
      </h1>
      <div className="mb-10">

  <div className="flex justify-between mb-2 text-sm text-gray-400">
    <span>
      Napredak
    </span>

    <span>
      {completedLessons} / {totalLessons} lekcija
    </span>
  </div>

  <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
    <div
      className="h-full bg-yellow-400 transition-all duration-500"
      style={{
        width: `${progressPercentage}%`,
      }}
    />
  </div>

  <p className="mt-3 text-yellow-300 font-bold">
    {progressPercentage}% završeno
  </p>

</div>

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
              <div className="mt-8">
  <button
    onClick={markLessonCompleted}
    className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-bold"
  >
    ✓ Označi lekciju kao završenu
  </button>
</div>
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
                onClick={async () => {
  setCurrentLesson(lesson);

  if (userId) {
    await supabase
      .from("lesson_progress")
      .upsert(
        {
          user_id: userId,
          course_id: id,
          lesson_id: lesson.id,
          last_viewed_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,lesson_id",
        }
      );
  }
}}
                className={`w-full text-left p-4 rounded-xl transition ${
                  currentLesson?.id === lesson.id
                    ? "bg-yellow-400 text-black"
                    : "bg-black hover:bg-gray-900 text-white"
                }`}
              >
                <p className="font-bold flex items-center gap-2">
  {progress.some(
    (item) =>
      item.lesson_id === lesson.id &&
      item.completed
  ) && (
    <span className="text-green-400">✓</span>
  )}

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