// src/components/Footer.jsx
import Link from "next/link";
import { dishes } from "@/data/dishes";

export default function Footer() {
  const continents = Array.from(new Set(dishes.map((d) => d.continent)));

  return (
    <footer className="mt-16 border-t border-white/10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold">Global Recipe Restaurant</h3>
            <p className="mt-3 text-sm opacity-75 leading-relaxed">
              Pure veg recipes from around the world. Built for taste, simplicity
              and mobile-first browsing.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                🌿 Veg Only
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                🍽️ Global Dishes
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                🎬 AI Videos (Premium)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dishes"
                  className="opacity-80 hover:opacity-100 hover:underline"
                >
                  All Dishes
                </Link>
              </li>
              <li>
                <Link
                  href="/premium"
                  className="opacity-80 hover:opacity-100 hover:underline"
                >
                  Premium Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Continents */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">
              Continents
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {continents.map((c) => (
                <Link
                  key={c}
                  href={`/continent/${c}`}
                  className="opacity-80 hover:opacity-100 hover:underline capitalize"
                >
                  {c.replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">
              Contact
            </h4>
            <p className="mt-4 text-sm opacity-75">
              Want AI cooking videos or collaborations?
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <p className="opacity-80">
                Email:{" "}
                <span className="font-semibold">hello@globalrecipe.restaurant</span>
              </p>

              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="text-xs px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-xs px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="text-xs px-3 py-2 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
                >
                  Twitter/X
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Global Recipe Restaurant. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline">
              Privacy
            </Link>
            <Link href="/" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
