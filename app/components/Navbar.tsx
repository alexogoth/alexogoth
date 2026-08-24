"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo.png"
            alt="Alexogoth"
            width={50}
            height={50}
            priority
          />

          <span className="text-2xl font-semibold text-white">
            Alexogoth
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-yellow-400 transition">
            Početna
          </Link>


          <a href="#about" className="hover:text-yellow-400 transition">
            Akademija
          </a>

          <a href="#courses" className="hover:text-yellow-400 transition">
            Kursevi
          </a>

          <a href="#faq" className="hover:text-yellow-400 transition">
            FAQ
          </a>

          <a href="#kontakt" className="hover:text-yellow-400 transition">
            Kontakt
          </a>
        </nav>
        <button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="lg:hidden text-yellow-400 text-3xl"
>
  ☰
</button>
{mobileMenuOpen && (
  <div className="lg:hidden absolute top-20 left-0 w-full bg-black border-t border-yellow-500/20 p-6 flex flex-col gap-5">

    <Link
  href="/"
  onClick={() => setMobileMenuOpen(false)}
  className="text-xl text-white hover:text-yellow-400 transition"
>
  Početna
</Link>

    <a
  href="/"
  onClick={() => setMobileMenuOpen(false)}
  className="text-xl text-white hover:text-yellow-400 transition"
>
  Akademija
</a>

    <a
  href="/"
  onClick={() => setMobileMenuOpen(false)}
  className="text-xl text-white hover:text-yellow-400 transition"
>
  Kursevi
</a>

    <a
  href="/"
  onClick={() => setMobileMenuOpen(false)}
  className="text-xl text-white hover:text-yellow-400 transition"
>
  FAQ
</a>

    <a
  href="/"
  onClick={() => setMobileMenuOpen(false)}
  className="text-xl text-white hover:text-yellow-400 transition"
>
  Kontakt
</a>

  </div>
)}

        {!user ? (
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="border border-yellow-500 text-yellow-400 px-5 py-2.5 rounded-xl hover:bg-yellow-500 hover:text-black transition"
            >
              Prijava
            </Link>

            <Link
              href="/register"
              className="bg-yellow-400 text-black px-5 py-2.5 rounded-xl font-semibold hover:bg-yellow-300 transition"
            >
              Registracija
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-4">

            <span className="text-yellow-400 font-semibold">
              👤 {user.user_metadata?.full_name || user.email}
            </span>

            <Link
              href="/dashboard"
              className="border border-yellow-500 text-yellow-400 px-4 py-2 rounded-xl hover:bg-yellow-500 hover:text-black transition"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl transition"
            >
              Odjava
            </button>

          </div>
        )}

      </div>
    </header>
  );
}