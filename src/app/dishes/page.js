"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { dishes } from "@/data/dishes";

export default function AllDishesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return dishes.filter((d) =>
      (d.name + d.country + d.continent).toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">All Dishes</h1>
            <p className="opacity-70 mt-1 text-sm">
              Browse {dishes.length} dishes with ingredient-based ratings.
            </p>
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full sm:w-80 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-white/30"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {filtered.map((d) => (
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

              <p className="text-xs opacity-60 mt-3">
                {d.ingredients.slice(0, 4).join(", ")}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
