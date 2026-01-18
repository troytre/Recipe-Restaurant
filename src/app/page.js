"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { dishes } from "@/data/dishes";


export default function HomePage() {
  const [query, setQuery] = useState("");
  const [continent, setContinent] = useState("all");

  const continents = useMemo(() => {
    return ["all", ...Array.from(new Set(dishes.map((d) => d.continent)))];
  }, []);

  const filtered = useMemo(() => {
    return dishes.filter((d) => {
      const matchesQuery =
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.country.toLowerCase().includes(query.toLowerCase());

      const matchesContinent = continent === "all" ? true : d.continent === continent;

      return matchesQuery && matchesContinent;
    });
  }, [query, continent]);

  const topRated = useMemo(() => {
    return [...dishes].sort((a, b) => b.rating - a.rating).slice(0, 8);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="px-4 sm:px-6 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 sm:p-10">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Global Recipe Restaurant
            </h1>
            <p className="opacity-80 mt-3 max-w-2xl text-sm sm:text-base">
              Explore top dishes from every continent. Ingredient-based ratings.⭐
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/dishes"
                className="text-center px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition"
              >
                Explore All Dishes →
              </Link>

              <Link
                href="/continent/"
                className="text-center px-5 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
              >
                Browse Continents
              </Link>
            </div>

            {/* Search + Filter */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dish or country..."
                className="sm:col-span-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-white/30"
              />

              <select
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-white/30 capitalize"
              >
                {continents.map((c) => (
                  <option key={c} value={c} className="bg-black">
                    {c.replace("-", " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* TOP RATED */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold">Top Rated</h2>
            <Link href="/dishes" className="text-sm opacity-80 hover:opacity-100 underline">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4">
            {topRated.map((d) => (
              <Link
                key={d.slug}
                href={`/dishes/${d.slug}`}
                className="group p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <p className="font-semibold text-sm sm:text-base">{d.name}</p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">{d.country}</p>
                <p className="text-xs sm:text-sm mt-2">⭐ {d.rating}/5</p>

                <div className="mt-3 text-[11px] opacity-60">
                  {d.ingredients.slice(0, 3).join(", ")}...
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="px-4 sm:px-6 pb-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold">Browse</h2>
          <p className="opacity-70 text-sm mt-1">
            Showing {filtered.length} dishes
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4">
            {filtered.slice(0, 16).map((d) => (
              <Link
                key={d.slug}
                href={`/dishes/${d.slug}`}
                className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold">{d.name}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                    ⭐ {d.rating}
                  </span>
                </div>

                <p className="text-sm opacity-70 mt-1">{d.country}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {d.taste.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 opacity-90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/dishes"
              className="inline-block px-5 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
            >
              Load more → (Go to All Dishes)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
