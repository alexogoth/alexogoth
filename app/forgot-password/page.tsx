"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Ako postoji nalog sa ovom email adresom, poslali smo Vam link za reset lozinke."
      );
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md bg-[#161616] border border-zinc-800 rounded-3xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Reset lozinke
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Unesite email adresu povezanu sa Vašim nalogom.
        </p>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-6 rounded-xl bg-[#1f1f1f] border border-zinc-700 text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
        >
          {loading ? "Slanje..." : "Pošalji link za reset"}
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