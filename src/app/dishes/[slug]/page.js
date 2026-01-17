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
                <p className="capitalize">
                  <b>Region:</b> {dish.continent.replace("-", " ")}
                </p>
                <p><b>Country:</b> {dish.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-xl font-bold">Ingredients</h2>
          <ul className="list-disc ml-5 mt-3 opacity-90 space-y-1">
            {dish.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>

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
