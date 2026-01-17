export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold">Premium AI Cooking Videos</h1>
        <p className="opacity-80 mt-3">
          Premium videos are coming soon. Payment integration will be added here.
        </p>

        <div className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/5">
          <p className="font-semibold">✅ What you get:</p>
          <ul className="list-disc ml-6 mt-3 opacity-90 space-y-1">
            <li>AI generated cooking visuals</li>
            <li>Step-by-step plating shots</li>
            <li>Shorts + long format versions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
