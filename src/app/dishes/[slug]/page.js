import Link from "next/link";
import { dishes } from "@/data/dishes";

export async function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

export default async function DishPage({ params }) {
  const { slug } = await params;
  const dish = dishes.find((d) => d.slug === slug);

  if (!dish) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-2xl font-bold">Dish not found</h1>
        <Link className="underline" href="/">Go Home</Link>
      </div>
    );
  }

  const related = dishes
    .filter((d) => d.continent === dish.continent && d.slug !== dish.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm underline opacity-80">
          ← Back Home
        </Link>

        {/* Title */}
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold">{dish.name}</h1>
              <p className="opacity-80 mt-2 text-sm sm:text-base">{dish.intro}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {dish.taste.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/10 bg-black/40 p-4 w-full sm:w-52">
              <p className="text-lg font-bold">⭐ {dish.rating}/5</p>
              <p className="text-xs opacity-70 mt-1">{dish.caloriesNote}</p>
              <div className="mt-3 text-sm opacity-90 space-y-1">
                <p><b>Time:</b> {dish.time}</p>
                <p><b>Serves:</b> {dish.servings}</p>
                <p className="capitalize"><b>Region:</b> {dish.continent.replace("-", " ")}</p>
                <p><b>Country:</b> {dish.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <ul className="list-disc ml-5 mt-3 opacity-90 space-y-1">
              {dish.ingredients.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold">Chef Tips</h2>
            <ul className="list-disc ml-5 mt-3 opacity-90 space-y-1">
              {dish.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-bold">FAQs</h2>
          <div className="mt-3 space-y-3">
            {dish.faq.map((f, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/40 border border-white/10"
              >
                <p className="font-semibold">{f.q}</p>
                <p className="opacity-80 mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Related dishes</h2>
            <Link
              href={`/continent/${dish.continent}`}
              className="text-sm underline opacity-80"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/dishes/${r.slug}`}
                className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm opacity-70">{r.country}</p>
                <p className="text-sm mt-2">⭐ {r.rating}/5</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 opacity-80 text-sm">
          <Link href={`/continent/${dish.continent}`} className="underline">
            Browse all {dish.continent.replace("-", " ")} dishes →
          </Link>
        </div>
      </div>
    </div>
  );
}
