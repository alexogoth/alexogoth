"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Course = {
  id: string;
  course_id: string;
  purchased_at: string;
};

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);

      const { data } = await supabase
        .from("user_courses")
        .select("*")
        .eq("user_id", user.id);

      setCourses(data || []);
      setLoading(false);
    }

    loadDashboard();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#040404] flex items-center justify-center text-white">
        Učitavanje...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#040404] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-yellow-300">
              Dobrodošli 👋
            </h1>

            <p className="mt-3 text-yellow-400 text-xl">
              {user.user_metadata?.full_name || user.email}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
          >
            Odjava
          </button>
        </div>

        <div className="bg-[#0b0f1d] border border-yellow-500/20 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-yellow-300 mb-8">
            📚 Moji kursevi
          </h2>

          {courses.length === 0 ? (
            <div>
              <p className="text-gray-400 mb-6">
                Još nemate kupljenih kurseva.
              </p>

              <Link
                href="/#courses"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
              >
                Pogledaj kurseve
              </Link>
            </div>
          ) : (
            <div className="grid gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#161616] rounded-2xl border border-yellow-500/20 p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-300">
                      {course.course_id}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Kupljen kurs
                    </p>
                  </div>

                  <Link
                    href={`/courses/${course.course_id}`}
                    className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold"
                  >
                    Nastavi kurs
                  </Link>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </main>
  );
}