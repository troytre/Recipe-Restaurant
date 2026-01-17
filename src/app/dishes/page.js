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

{/* ✅ Recipe Section */}
<div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <h2 className="text-xl font-bold">Recipe</h2>

    <div className="flex flex-wrap gap-2 text-xs">
      <span className="px-3 py-1 rounded-full bg-white/10">
        Prep: <b>{dish.recipe?.prepTime || "—"}</b>
      </span>
      <span className="px-3 py-1 rounded-full bg-white/10">
        Cook: <b>{dish.recipe?.cookTime || "—"}</b>
      </span>
      <span className="px-3 py-1 rounded-full bg-white/10">
        Total: <b>{dish.recipe?.totalTime || "—"}</b>
      </span>
      <span className="px-3 py-1 rounded-full bg-white/10">
        Level: <b>{dish.recipe?.difficulty || "—"}</b>
      </span>
    </div>
  </div>

  <p className="opacity-70 text-sm mt-2">
    Follow these steps to cook <b>{dish.name}</b> at home.
  </p>

  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
    {(dish.recipe?.steps || []).map((step, idx) => (
      <div
        key={idx}
        className="p-4 rounded-2xl bg-black/40 border border-white/10"
      >
        <p className="text-xs opacity-60">Step {idx + 1}</p>
        <p className="mt-1 leading-relaxed">{step}</p>
      </div>
    ))}
  </div>
</div>

{/* 🔒 Premium AI Video Section */}
<div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 relative overflow-hidden">
  <div className="flex items-start justify-between gap-4">
    <div>
      <h2 className="text-xl font-bold">AI Cooking Video</h2>
      <p className="opacity-70 text-sm mt-2 max-w-xl">
        {dish.premiumVideo?.previewText ||
          "🔒 Premium AI cooking video is locked. Unlock to watch the full visuals."}
      </p>

      <div className="mt-3 flex items-center gap-2 text-sm">
        <span className="px-3 py-1 rounded-full bg-white/10">
          Price: <b>{dish.premiumVideo?.currency || "INR"} {dish.premiumVideo?.price || 199}</b>
        </span>
        <span className="px-3 py-1 rounded-full bg-white/10">
          Access: <b>Instant</b>
        </span>
      </div>
    </div>

    <div className="shrink-0">
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
        🔒 Locked
      </span>
    </div>
  </div>

  {/* Fake thumbnail preview */}
  <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold">Video Preview</p>
      <p className="text-xs opacity-60">AI Generated</p>
    </div>

    <div className="mt-3 h-40 sm:h-48 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
      <p className="opacity-70 text-sm">🎬 Premium video preview locked</p>
    </div>

    <button
      className="mt-4 w-full sm:w-auto px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-90 transition"
      onClick={() => alert("Payment integration coming next ✅")}
    >
      Unlock Video →
    </button>

    <p className="text-xs opacity-60 mt-2">
      (Next step: Razorpay / UPI payment integration)
    </p>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
}

