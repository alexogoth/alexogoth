"use client";

import Link from "next/link";

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

      {courses.length === 0 ? (
        <p className="text-gray-400">
          Trenutno nema kurseva.
        </p>
      ) : (
        <div className="grid gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-black rounded-2xl p-6 border border-yellow-500/20 flex justify-between items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">
                  {course.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  € {course.price}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/admin/courses/${course.id}`}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-lg font-bold"
                >
                  Uredi
                </Link>

                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-bold">
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