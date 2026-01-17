import Link from "next/link";
import { dishes } from "@/data/dishes";

export async function generateStaticParams() {
  const continents = Array.from(new Set(dishes.map((d) => d.continent)));
  return continents.map((continent) => ({ continent }));
}

export default async function ContinentPage({ params }) {
  const { continent } = await params;

  const list = dishes.filter((d) => d.continent === continent);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold capitalize">
              {continent.replace("-", " ")} Dishes
            </h1>
            <p className="opacity-70 mt-1 text-sm">
              {list.length} dishes found in this region.
            </p>
          </div>

          <Link href="/dishes" className="text-sm underline opacity-80">
            All dishes →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {list.map((d) => (
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
