"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Lozinka je uspješno promijenjena.");

    setTimeout(() => {
      router.push("/login");
    }, 2000);

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md bg-[#161616] border border-zinc-800 rounded-3xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Nova lozinka
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Unesite novu lozinku za svoj račun.
        </p>

        <input
          type="password"
          placeholder="Nova lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
        >
          {loading ? "Spremanje..." : "Promijeni lozinku"}
        </button>

        {message && (
          <p className="mt-6 text-center text-gray-300">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}