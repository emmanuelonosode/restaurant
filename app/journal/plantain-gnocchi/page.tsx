import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plantain Gnocchi: A Fusion Experiment",
  description: "Rethinking the over-ripe plantain. Italian technique meets Nigerian soul in this pillowy, buttery plantain gnocchi with palm nut brown butter and utazi.",
  keywords: ["plantain gnocchi", "nigerian fusion recipe", "plantain recipe", "west african fusion", "nigerian italian fusion", "plantain dough"],
  openGraph: {
    title: "Plantain Gnocchi: A Fusion Experiment | The Culinary Gallery Journal",
    description: "Italian technique meets Nigerian soul — over-ripe plantain transformed into pillowy, buttery gnocchi.",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=2000", alt: "Golden plantain gnocchi pillows with herb butter" }],
  },
};

export default function PlantainGnocchiArticle() {
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
        <span className="text-secondary font-label text-xs uppercase tracking-widest mb-4 block">Chef&apos;s Specials</span>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter leading-tight mb-8">
          Plantain Gnocchi: A Fusion Experiment
        </h1>
        <div className="flex items-center gap-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          <span>7 min read</span>
          <span className="w-1 h-1 bg-on-surface-variant rounded-full"></span>
          <span>Chef&apos;s Specials</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt="Small golden plantain gnocchi pillows with herb butter and edible flowers"
            src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1500&auto=format&fit=crop"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-8 space-y-8 font-body text-on-surface-variant leading-[1.9] text-lg">
        <p>
          The over-ripe plantain is, to most Nigerian households, a problem to be solved quickly — fried into dodo before it turns, or mashed into porridge. What it is rarely considered is an ingredient with structural ambition. But the over-ripe plantain, at the moment it crosses from yellow to deep black-spotted, reaches a sugar concentration and fibre softness that makes it a near-perfect candidate for a gnocchi dough.
        </p>
        <p>
          I arrived at this recipe after a stage in a Venetian kitchen where the chef spoke about gnocchi as an act of restraint — the goal is to use as little flour as possible while still achieving a dough that holds its shape under boiling water. The plantain, I realised, behaves almost identically to a very ripe Yukon Gold potato: densely sweet, low in excess water, with a natural starchiness that binds.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Dough</h2>
        <p>
          Bake two large over-ripe plantains in their skins at 200°C for twenty-five minutes. The heat concentrates the sugars further and drives off residual moisture. Peel while hot and pass through a fine-mesh sieve or ricer — never a food processor, which will make the dough gummy. Allow to cool to room temperature.
        </p>
        <p>
          Combine with one egg yolk, a generous pinch of salt, a whisper of freshly grated nutmeg, and — here is where the Nigerian soul enters — a half-teaspoon of ground dried crayfish. The crayfish introduces an umami depth that reads as complexity rather than fishiness. Start with one hundred grams of all-purpose flour and add more by the tablespoon until the dough just comes together and does not stick to your hands. Overworking or over-flouring are the two cardinal sins.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Sauce: Palm Nut Brown Butter</h2>
        <p>
          Brown butter — beurre noisette — is one of the most transformative preparations in French cooking. A Nigerian-inflected version uses a small spoonful of palm nut extract (banga) added to clarified butter at the moment it turns golden. The banga dissolves into the butter, introducing a red-orange tinge and a distinctly tropical, faintly smokey depth that pairs with the sweet plantain pillow in a way that no other sauce could.
        </p>
        <p>
          Cook the gnocchi in well-salted boiling water until they float — approximately ninety seconds — then transfer directly to the brown butter pan. Toss over medium heat for one minute to glaze. Finish with very finely shredded utazi leaf and a crack of black pepper. Serve immediately, while the exterior of each piece has a light golden sear from the butter.
        </p>

        <div className="border-l-4 border-primary pl-8 py-2 my-12">
          <p className="font-headline italic text-2xl text-primary leading-relaxed">
            &quot;The over-ripe plantain is not a problem to be solved. It is an ingredient waiting to be discovered.&quot;
          </p>
        </div>
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-8 mt-24 pt-16 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div>
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Taste this at your table</p>
          <p className="font-body text-on-surface-variant">Available as a starter at private dining events.</p>
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
          <Link href="/journal/seafood-okra" className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low mb-4">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Seafood okra soup" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop"/>
            </div>
            <span className="text-secondary font-label text-xs uppercase tracking-widest mb-2 block">Quick Meals</span>
            <h4 className="font-headline text-xl text-on-background group-hover:text-primary transition-colors">The 20-Minute Seafood Okra</h4>
          </Link>
        </div>
      </div>
    </main>
  );
}
