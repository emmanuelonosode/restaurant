import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Secret to the Perfect Smokey Jollof",
  description: "The soul of Party Jollof lies in patience and smoke. Learn the exact technique for achieving the authentic smokey base — the 'party bottom pot' — in a modern kitchen.",
  keywords: ["jollof rice recipe", "party jollof", "smokey jollof", "nigerian jollof rice", "how to make jollof rice"],
  openGraph: {
    title: "The Secret to the Perfect Smokey Jollof | The Culinary Gallery Journal",
    description: "The soul of Party Jollof lies in patience and smoke. A deep dive into Nigeria's most iconic dish.",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000", alt: "Smokey Jollof rice in a traditional clay pot" }],
  },
};

export default function SmokeyJollofArticle() {
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
        <span className="text-secondary font-label text-xs uppercase tracking-widest mb-4 block">Traditional Classics</span>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tighter leading-tight mb-8">
          The Secret to the Perfect Smokey Jollof
        </h1>
        <div className="flex items-center gap-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          <span>8 min read</span>
          <span className="w-1 h-1 bg-on-surface-variant rounded-full"></span>
          <span>Traditional Technique</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt="Rich red smoky Jollof rice in a traditional clay pot with aromatic steam rising"
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1500&auto=format&fit=crop"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-8 space-y-8 font-body text-on-surface-variant leading-[1.9] text-lg">
        <p>
          There are two kinds of Jollof in Nigeria: the kind you make on a Tuesday, and the kind you make for a party. The difference is not the recipe. It is entirely about the heat, the patience, and the final minutes of deliberate, controlled burning that creates the <em>party bottom pot</em> — that deep, smokey crust at the base of the pan that infuses the entire pot with a haunting, campfire-like complexity.
        </p>
        <p>
          My grandmother called it &quot;the cooking after the cooking.&quot; After the rice had absorbed every drop of tomato base, she would increase the flame, place a folded foil sheet over the pot, and leave it entirely alone for exactly seven minutes. No stirring. No peeking. The smoke that rose from the edges was not a sign of failure — it was the signature.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Foundation: The Tomato Base</h2>
        <p>
          The most common error in Jollof is an under-reduced tomato base. You must cook the blended tomatoes, peppers, and onions down until the raw smell is completely gone and the oil begins to float and separate — a process that takes no less than forty minutes over medium heat, with stirring only when you see sticking.
        </p>
        <p>
          At The Culinary Gallery, we use a ratio of two Roma tomatoes to one red bell pepper to half a scotch bonnet. We add a single dried tatashe for colour depth. The result is a base that is simultaneously sweet, smokey from the slow reduction, and carries a clean heat that does not overpower.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Rice: Parboil Once, Never Twice</h2>
        <p>
          Use long-grain parboiled rice. Rinse it until the water runs clear, then soak for fifteen minutes before adding to the pot. This allows the grain to absorb the base evenly rather than sitting on top of it. The steam does the cooking — the tomato base is simply the flavour conductor.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">Achieving the Smoke</h2>
        <p>
          Once the rice is just cooked through — about twenty-two minutes on low — uncover the pot, layer fresh bay leaves directly onto the surface of the rice, and cover tightly with foil before replacing the lid. Turn the heat to medium-high. The bay leaves will char slightly, releasing an herbaceous smoke that layers with the natural caramelization of the rice at the base. Seven minutes. No more.
        </p>
        <p>
          This is the version we serve at private dinners — a Jollof that announces itself from across the room. The smoke is not accidental. It is the point.
        </p>

        <div className="border-l-4 border-primary pl-8 py-2 my-12">
          <p className="font-headline italic text-2xl text-primary leading-relaxed">
            &quot;The smoke is not accidental. It is the point.&quot;
          </p>
        </div>
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-8 mt-24 pt-16 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div>
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Want to experience it in person?</p>
          <p className="font-body text-on-surface-variant">Book a private tasting session or dinner.</p>
        </div>
        <Link href="/booking" className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-all shadow-lg whitespace-nowrap">
          Book an Experience
        </Link>
      </div>

      {/* Related Articles */}
      <div className="max-w-3xl mx-auto px-8 mt-24">
        <h3 className="font-headline text-2xl text-on-surface mb-8">More from the Journal</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link href="/journal/hibiscus-suya" className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low mb-4">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Suya with hibiscus glaze" src="https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=800&auto=format&fit=crop"/>
            </div>
            <span className="text-secondary font-label text-xs uppercase tracking-widest mb-2 block">Chef&apos;s Specials</span>
            <h4 className="font-headline text-xl text-on-background group-hover:text-primary transition-colors">Elevating Suya with Hibiscus Glaze</h4>
          </Link>
          <Link href="/journal/plantain-gnocchi" className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-low mb-4">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Plantain gnocchi" src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=800&auto=format&fit=crop"/>
            </div>
            <span className="text-secondary font-label text-xs uppercase tracking-widest mb-2 block">Chef&apos;s Specials</span>
            <h4 className="font-headline text-xl text-on-background group-hover:text-primary transition-colors">Plantain Gnocchi: A Fusion Experiment</h4>
          </Link>
        </div>
      </div>
    </main>
  );
}
