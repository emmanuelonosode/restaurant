import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The 20-Minute Seafood Okra",
  description: "Freshness is the only ingredient that matters. A masterclass in preserving the crunch and vibrancy of sea-fresh okra in a quick yet deeply flavourful seafood stew.",
  keywords: ["okra soup recipe", "seafood okra", "nigerian okra soup", "quick nigerian recipe", "fresh okra stew"],
  openGraph: {
    title: "The 20-Minute Seafood Okra | The Culinary Gallery Journal",
    description: "Freshness is the only ingredient that matters. A masterclass in quick, vibrant Nigerian seafood okra.",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000", alt: "Seafood okra soup" }],
  },
};

export default function SeafoodOkraArticle() {
  return (
    <main className="pt-32 pb-24">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-8 mb-12">
        <Link href="/journal" className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-secondary font-bold hover:gap-4 transition-all">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Journal
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-8 mb-16">
        <span className="text-secondary font-label text-xs uppercase tracking-widest mb-4 block">Quick Meals</span>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter leading-tight mb-8">
          The 20-Minute Seafood Okra
        </h1>
        <div className="flex items-center gap-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          <span>5 min read</span>
          <span className="w-1 h-1 bg-on-surface-variant rounded-full"></span>
          <span>Quick Meals</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt="Artfully plated viscous okra soup with fresh seafood and vibrant green herbs"
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1500&auto=format&fit=crop"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-8 space-y-8 font-body text-on-surface-variant leading-[1.9] text-lg">
        <p>
          The greatest insult you can do to okra is to cook it for too long. The vegetable has a fifteen-minute window — from raw to perfectly cooked — before it crosses into a gluey, flavourless territory from which no amount of seasoning can rescue it. Most Nigerian home cooks err on the side of overcooking because they are afraid of the rawness. But it is exactly that slight resistance, that fresh green crunch at the very centre of each sliced pod, that makes okra irreplaceable.
        </p>
        <p>
          This recipe takes twenty minutes from pan to table, and it demands absolutely fresh okra, procured that day. Frozen will not produce the same result. The sweetness of fresh crayfish, the brininess of periwinkle, and the clean taste of sea-fresh prawns are all lost to the background if the okra is not vibrant.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Preparation</h2>
        <p>
          Slice your okra no more than five millimetres thick — this controls the mucilage release and keeps the texture firm. Rinse briefly but never soak. In a hot pan with a thin layer of palm oil, sweat your chopped onion and locust beans (iru) for two minutes. Add your blend of fresh tomato, tatashe, and a single scotch bonnet. Do not reduce extensively — this is not a Jollof base. Three minutes is sufficient; you want fresh tomato brightness.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Seafood</h2>
        <p>
          Season large prawns with salt, white pepper, and a pinch of ground crayfish. Sear in a separate hot pan for ninety seconds per side — no more. They will finish cooking in the pot. Add the sliced okra to the tomato base first, stir for three minutes, then fold in the prawns, cleaned periwinkles, and a generous handful of finely ground dried crayfish. Cover and leave for four minutes.
        </p>
        <p>
          The residual heat will cook the seafood through while the okra remains just barely yielding. Finish with a small handful of shredded utazi leaf for a clean, slightly bitter note that balances the sweetness of the prawns and the richness of the palm oil base. Serve immediately.
        </p>

        <div className="border-l-4 border-primary pl-8 py-2 my-12">
          <p className="font-headline italic text-2xl text-primary leading-relaxed">
            &quot;Freshness is not an ingredient. It is the entire dish.&quot;
          </p>
        </div>
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-8 mt-24 pt-16 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div>
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Want it made for you?</p>
          <p className="font-body text-on-surface-variant">Request a private dinner or meal prep delivery.</p>
        </div>
        <Link href="/booking" className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-all shadow-lg whitespace-nowrap">
          Book an Experience
        </Link>
      </div>

      {/* Related Articles */}
      <div className="max-w-3xl mx-auto px-8 mt-24">
        <h3 className="font-headline text-2xl text-on-surface mb-8">More from the Journal</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link href="/journal/smokey-jollof" className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low mb-4">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Smokey Jollof rice" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"/>
            </div>
            <span className="text-secondary font-label text-xs uppercase tracking-widest mb-2 block">Traditional Classics</span>
            <h4 className="font-headline text-xl text-on-background group-hover:text-primary transition-colors">The Secret to the Perfect Smokey Jollof</h4>
          </Link>
          <Link href="/journal/hibiscus-suya" className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low mb-4">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Suya with hibiscus glaze" src="https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=800&auto=format&fit=crop"/>
            </div>
            <span className="text-secondary font-label text-xs uppercase tracking-widest mb-2 block">Chef&apos;s Specials</span>
            <h4 className="font-headline text-xl text-on-background group-hover:text-primary transition-colors">Elevating Suya with Hibiscus Glaze</h4>
          </Link>
        </div>
      </div>
    </main>
  );
}
