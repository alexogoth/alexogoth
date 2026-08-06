"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Račun je uspješno kreiran! Provjerite svoj e-mail.");
    setLoading(false);

    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-[#161616] p-8 rounded-3xl border border-zinc-800"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Registracija
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Kreirajte svoj Alexogoth račun.
        </p>

        <input
          type="text"
          placeholder="Ime i prezime"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white mb-4"
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white mb-4"
        />

        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white mb-6"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
        >
          {loading ? "Kreiranje..." : "Kreirajte račun"}
        </button>

        {message && (
          <p className="mt-6 text-center text-sm text-white">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}