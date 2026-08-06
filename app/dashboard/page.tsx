"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);
      setLoading(false);
    }

    loadUser();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white">
        Učitavanje...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 px-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          Dobrodošli 👋
        </h1>

        <p className="text-yellow-400 text-xl mb-10">
          {user?.user_metadata?.full_name || user?.email}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-[#181818] rounded-3xl p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold mb-3">📚 Moji kursevi</h2>
            <p className="text-gray-400">
              Još nema kupljenih kurseva.
            </p>
          </div>

          <div className="bg-[#181818] rounded-3xl p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold mb-3">🎓 Akademija</h2>
            <p className="text-gray-400">
              Nastavite svoje putovanje.
            </p>
          </div>

          <div className="bg-[#181818] rounded-3xl p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold mb-3">❤️ Favoriti</h2>
            <p className="text-gray-400">
              Sačuvani sadržaji.
            </p>
          </div>

          <div className="bg-[#181818] rounded-3xl p-8 border border-yellow-500/20">
            <h2 className="text-2xl font-bold mb-3">⚙️ Profil</h2>
            <p className="text-gray-400">
              Uredi svoje podatke.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}