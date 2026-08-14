"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

type Props = {
  courses: Course[];
};

export default function CoursesList({ courses }: Props) {
  const [courseList, setCourseList] = useState(courses);
    async function deleteCourse(courseId: string) {
    const confirmed = window.confirm(
      "Da li ste sigurni da želite obrisati ovaj kurs? Sve lekcije ovog kursa će također biti obrisane."
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("courses")
      .delete()
      .eq("id", courseId);

    if (error) {
      alert(error.message);
      return;
    }

    setCourseList((current) =>
      current.filter((course) => course.id !== courseId)
    );
  }

  return (
    <div className="bg-[#111827] rounded-2xl p-8 border border-yellow-500/20">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-300">
          Kursevi
        </h2>

        <Link
          href="/admin/courses/new"
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold"
        >
          + Novi kurs
        </Link>
      </div>

      {courseList.length === 0 ? (
        <p className="text-gray-400">
          Trenutno nema kurseva.
        </p>
      ) : (
        <div className="grid gap-6">
                    {courseList.map((course) => (
            <div
              key={course.id}
              className="bg-black rounded-2xl p-6 border border-yellow-500/20 flex justify-between items-center"
            >
              <div className="flex items-center gap-5">

  {course.image?.startsWith("http") && (
  <Image
    src={course.image}
    alt={course.title}
    width={120}
    height={80}
    className="rounded-xl object-cover border border-yellow-500/20"
  />
)}

  <div>
    <h3 className="text-2xl font-bold text-yellow-300">
      {course.title}
    </h3>

    <p className="text-gray-400 mt-2">
      € {course.price}
    </p>
  </div>

</div>

              <div className="flex gap-3">
                <Link
                  href={`/admin/courses/${course.id}`}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-lg font-bold"
                >
                  Uredi
                </Link>

                <Link
                  href={`/admin/courses/${course.id}/lessons`}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-bold"
                >
                  Lekcije
                </Link>

                <button
                  onClick={() => deleteCourse(course.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-bold"
                >
                  Obriši
                </button>
              </div>
            </div>
          ))}
                  </div>
      )}
    </div>
  );
}