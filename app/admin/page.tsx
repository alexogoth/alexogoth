"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

import AdminStats from "@/app/components/admin/AdminStats";
import CoursesList from "@/app/components/admin/CoursesList";

type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  kofi_url: string;
  kofi_product_code: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  const [courses, setCourses] = useState<Course[]>([]);
  const [users, setUsers] = useState(0);
  const [sales, setSales] = useState(0);
    useEffect(() => {
    async function loadAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profileError || !profile || profile.role !== "admin") {
        router.push("/dashboard");
        return;
      }

      setAllowed(true);

      const { data: coursesData, error: coursesError } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

      if (coursesError) {
        console.error(coursesError);
      } else {
        setCourses(coursesData || []);
      }

      const { count: usersCount } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

      setUsers(usersCount || 0);

      const { count: salesCount } = await supabase
        .from("user_courses")
        .select("*", { count: "exact", head: true });

      setSales(salesCount || 0);

      setLoading(false);
    }

    loadAdmin();
  }, [router]);
    if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Učitavanje...</p>
      </main>
    );
  }

  if (!allowed) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-300 mb-10">
          Admin Panel
        </h1>

        <AdminStats
          courses={courses.length}
          lessons={0}
          users={users}
          sales={sales}
        />

        <CoursesList
          courses={courses}
        />

      </div>
    </main>
  );
}