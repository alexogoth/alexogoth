"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function loadCourses() {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error(error);
        return;
      }

      setCourses(data || []);
    }

    loadCourses();
  }, []);

  return (
    <section
      id="courses"
      className="bg-[#040404] py-32 px-6 border-t border-yellow-500/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm">
            Kursevi
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-yellow-300 mt-4">
            Istražite naše kurseve
          </h2>

          <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
            Programi kreirani da Vas vode kroz unutrašnji razvoj,
            manifestaciju i svjesno kreiranje vlastite realnosti.
          </p>
        </div>

        {courses.length === 0 ? (
          <div className="text-center text-yellow-400 text-xl">
            Nema pronađenih kurseva.
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-10">
            {courses.map((course) => (
              <div
                key={course.id}
                className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#0b0f1d]
                hover:-translate-y-2
                hover:border-yellow-400/60
                hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]
                transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={
                      course.image.startsWith("http")
                        ? course.image
                        : `/${course.image}`
                    }
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-10">
                  <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-3">
                    {course.category}
                  </p>

                  <h3 className="text-3xl font-bold text-yellow-300">
                    {course.title}
                  </h3>

                  <p className="mt-6 text-gray-400 leading-8">
                    {course.description}
                  </p>

                  <div className="mt-8 text-3xl font-bold text-yellow-400">
                    € {course.price}
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-300 hover:scale-105 active:scale-95 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/20"
                  >
                    Pogledajte kurs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}