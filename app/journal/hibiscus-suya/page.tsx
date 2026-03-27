import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elevating Suya with Hibiscus Glaze",
  description: "A botanical twist on Nigeria's most iconic street food. Discover how the tartness of Zobo hibiscus balances the fire of Yaji spice in this elevated Suya.",
  keywords: ["suya recipe", "nigerian suya", "hibiscus glaze", "zobo suya", "yaji spice", "nigerian street food elevated"],
  openGraph: {
    title: "Elevating Suya with Hibiscus Glaze | The Culinary Gallery Journal",
    description: "A botanical twist on Nigeria's most iconic street food — Zobo tartness meets the fire of Yaji spice.",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=2000", alt: "Suya with hibiscus glaze" }],
  },
};

export default function HibiscusSuyaArticle() {
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
          Elevating Suya with Hibiscus Glaze
        </h1>
        <div className="flex items-center gap-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          <span>6 min read</span>
          <span className="w-1 h-1 bg-on-surface-variant rounded-full"></span>
          <span>Chef&apos;s Specials</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-surface-container">
          <img
            className="w-full h-full object-cover"
            alt="Modern plated suya with vibrant purple hibiscus glaze and microgreens"
            src="https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=1500&auto=format&fit=crop"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-8 space-y-8 font-body text-on-surface-variant leading-[1.9] text-lg">
        <p>
          Suya is Nigeria&apos;s most democratic food. From the roadside mallam in Abuja to five-star hotel menus in Lagos, no dish crosses socioeconomic lines with as much grace. The genius of Suya is in its Yaji spice — a dust of groundnut, ginger, paprika, and dried pepper that adheres to beef like a second skin, caramelizing under intense heat into something primal and addictive.
        </p>
        <p>
          The question I set out to answer in my development kitchen was this: what botanical element could be introduced to Suya that would amplify rather than compete with Yaji? The answer arrived in the form of Zobo — the deep crimson hibiscus flower that Nigerians steep into a tart, cooling drink. Concentrated and reduced, it becomes a glaze of extraordinary complexity.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Zobo Reduction</h2>
        <p>
          Begin by steeping two generous handfuls of dried hibiscus flowers in 500ml of boiling water with a single clove and a cinnamon stick for twenty minutes. Strain, then reduce over medium heat with two tablespoons of palm sugar until the liquid coats the back of a spoon. The result is a glaze with the tartness of a very good tamarind — bright, acidic, deeply floral.
        </p>
        <p>
          The acidity of the Zobo reduction cuts through the richness of the spiced beef fat in exactly the way a squeeze of lemon would, but with an indigenous depth that feels completely right. It also carries an unmistakable colour — a jewel-like magenta that stains the outer edge of each skewer like an ink wash.
        </p>

        <h2 className="font-headline text-3xl text-on-surface pt-8">The Yaji Balance</h2>
        <p>
          For this preparation, I dial back the ginger in the Yaji slightly — from its traditional assertive level to a quieter presence — allowing the hibiscus to take on some of the brightness that ginger usually provides. The groundnut percentage remains unchanged; it is the binding element and should never be compromised.
        </p>
        <p>
          Marinate thinly sliced sirloin for a minimum of four hours, then grill over the highest heat you have access to for three to four minutes per side. In the final minute, brush generously with the warm Zobo glaze. The sugar will begin to char slightly at the edges, creating a lacquered finish that is simultaneously sweet, smokey, tart, and electric with spice.
        </p>

        <div className="border-l-4 border-primary pl-8 py-2 my-12">
          <p className="font-headline italic text-2xl text-primary leading-relaxed">
            &quot;The Zobo does not replace the Yaji. It completes it.&quot;
          </p>
        </div>
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-8 mt-24 pt-16 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div>
          <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Experience this on the menu</p>
          <p className="font-body text-on-surface-variant">Book a private dinner and taste it yourself.</p>
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
