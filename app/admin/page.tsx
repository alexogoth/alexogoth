"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (!profile || profile.role !== "admin") {
        router.push("/dashboard");
        return;
      }

      setAllowed(true);
      setLoading(false);
    }

    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Učitavanje...</h1>
      </main>
    );
  }

  if (!allowed) return null;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-yellow-300 mb-10">
          Admin Panel
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
            <p className="text-gray-400">Kursevi</p>
            <h2 className="text-4xl font-bold text-yellow-300 mt-2">0</h2>
          </div>

          <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
            <p className="text-gray-400">Lekcije</p>
            <h2 className="text-4xl font-bold text-yellow-300 mt-2">0</h2>
          </div>

          <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
            <p className="text-gray-400">Korisnici</p>
            <h2 className="text-4xl font-bold text-yellow-300 mt-2">0</h2>
          </div>

          <div className="bg-[#111827] rounded-2xl p-6 border border-yellow-500/20">
            <p className="text-gray-400">Prodaje</p>
            <h2 className="text-4xl font-bold text-yellow-300 mt-2">0</h2>
          </div>

        </div>

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

          <p className="text-gray-400">
            Trenutno nema kurseva.
          </p>

        </div>

      </div>
    </main>
  );
}