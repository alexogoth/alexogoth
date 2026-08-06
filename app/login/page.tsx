"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);

    router.push("/");
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-[#161616] border border-zinc-800 rounded-3xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Prijava
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Prijavite se na svoj Alexogoth račun.
        </p>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white"
        />

        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
        >
          {loading ? "Prijavljivanje..." : "Prijavite se"}
        </button>

        {message && (
          <p className="mt-6 text-center text-red-400">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}