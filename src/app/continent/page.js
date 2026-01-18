import Link from "next/link";
import { dishes } from "@/data/dishes";

export const metadata = {
  title: "Continents | Global Recipe Restaurant",
  description: "Browse veg dishes continent-wise and explore global recipes.",
};

export default function ContinentsPage() {
  const continents = Array.from(new Set(dishes.map((d) => d.continent)));

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Browse Continents
            </h1>
            <p className="opacity-70 mt-1 text-sm">
              Choose a region to explore dishes.
            </p>
          </div>

          <Link href="/dishes" className="text-sm underline opacity-80">
            All dishes →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6">
          {continents.map((c) => (
            <Link
              key={c}
              href={`/continent/${c}`}
              className="p-5 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <p className="text-xl font-bold capitalize">{c.replace("-", " ")}</p>
              <p className="text-sm opacity-70 mt-2">
                Explore {dishes.filter((d) => d.continent === c).length} dishes
              </p>

              <div className="mt-4 text-xs opacity-60">
                Tap to browse →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 opacity-70 text-sm">
          <p>
            Tip: Use <Link href="/dishes" className="underline">All Dishes</Link> to search faster.
          </p>
        </div>
      </div>
    </div>
  );
}
