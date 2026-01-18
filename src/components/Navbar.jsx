"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { dishes } from "@/data/dishes";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const continents = useMemo(() => {
    return Array.from(new Set(dishes.map((d) => d.continent)));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-red/70  border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg sm:text-xl">
          Global Recipe Restaurant
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/" className="opacity-80 hover:opacity-100 hover:underline">
            Home
          </Link>
          <Link href="/dishes" className="opacity-80 hover:opacity-100 hover:underline">
            All Dishes
          </Link>

          {continents.map((c) => (
            <Link
              key={c}
              href={`/continent/${c}`}
              className="opacity-80 hover:opacity-100 hover:underline capitalize"
            >
              {c.replace("-", " ")}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden px-3 py-2 rounded-lg bg-white/10 border border-white/10"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black border-l border-white/10 p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-lg">Menu</p>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/10"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <Link onClick={() => setOpen(false)} href="/" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} href="/dishes" className="block p-3 rounded-lg bg-white/5 hover:bg-white/10">
                All Dishes
              </Link>

              <p className="mt-4 text-xs uppercase tracking-wider opacity-60">Continents</p>
              <div className="grid grid-cols-2 gap-2">
                {continents.map((c) => (
                  <Link
                    key={c}
                    onClick={() => setOpen(false)}
                    href={`/continent/${c}`}
                    className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 capitalize text-sm"
                  >
                    {c.replace("-", " ")}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
