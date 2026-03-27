import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Chef",
  description: "The story behind The Culinary Gallery — from the vibrant spice markets of Lagos to Michelin-starred European kitchens. Meet the alchemist of West African flavors.",
  keywords: ["nigerian chef", "west african cuisine chef", "private chef lagos", "le cordon bleu chef", "nigerian gastronomy"],
  openGraph: {
    title: "About the Chef | The Culinary Gallery",
    description: "From Lagos spice markets to Michelin-starred kitchens — the story of The Culinary Gallery's award-winning chef.",
    images: [{ url: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000", alt: "Professional chef portrait" }],
  },
};

export default function About() {
  return (
    <>


      <main className="pt-32">
        {/* Hero Section: Portrait & Title */}
        <section className="max-w-screen-2xl mx-auto px-8 mb-24 md:mb-40">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-7 relative">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
                <img className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]" alt="Elegant portrait of a professional chef in a minimalist kitchen setting" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1500&auto=format&fit=crop"/>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:pl-12 pb-12">
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-primary mb-8 -ml-4 md:-ml-24 relative z-10">
                The Alchemist <br/>
                <span className="italic font-normal">of West African</span> <br/>
                Flavors.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-sm leading-relaxed">
                Redefining the boundaries of Nigerian gastronomy through the lens of modern technique and ancestral memory.
              </p>
            </div>
          </div>
        </section>

        {/* The Narrative */}
        <section className="bg-surface-container-low py-24 md:py-40">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-secondary mb-4">The Narrative</h2>
                <h3 className="font-headline text-4xl leading-tight">From the Open Air Markets to the White Linen.</h3>
              </div>
              <div className="md:col-span-4 font-body text-on-surface-variant leading-relaxed space-y-6">
                <p>
                  Born among the vibrant spice stalls of Lagos, the journey began not with a recipe book, but with a sensory education. Every morning was a lesson in the architecture of flavor—the smoky depth of dried fish, the citrus-sharp bite of fresh peppers, and the earthy sweetness of yams.
                </p>
              </div>
              <div className="md:col-span-4 font-body text-on-surface-variant leading-relaxed space-y-6">
                <p>
                  Years spent in the rigorous environments of Michelin-starred European kitchens refined this raw intuition into technical precision. Today, the mission is singular: to elevate the soul of Nigerian cuisine to the global stage, stripping away the noise to reveal its inherent art.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culinary Philosophy */}
        <section className="py-24 md:py-40">
          <div className="max-w-screen-2xl mx-auto px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="max-w-xl">
                  <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-secondary mb-8">Culinary Philosophy</h2>
                  <h3 className="font-headline text-5xl mb-10 leading-tight">Tradition, Reinterpreted.</h3>
                  <div className="space-y-12">
                    <div className="flex gap-6">
                      <span className="text-primary font-headline text-2xl italic">01.</span>
                      <div>
                        <h4 className="font-headline text-xl mb-2">Technique as a Tool</h4>
                        <p className="text-on-surface-variant leading-relaxed">Using molecular gastronomy and sous-vide not for spectacle, but to preserve the integrity of local ingredients in ways never before explored.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <span className="text-primary font-headline text-2xl italic">02.</span>
                      <div>
                        <h4 className="font-headline text-xl mb-2">Ingredient Respect</h4>
                        <p className="text-on-surface-variant leading-relaxed">Sourcing exclusively from small-scale Nigerian farmers, treating the humble cassava or garden egg with the same reverence as caviar.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <span className="text-primary font-headline text-2xl italic">03.</span>
                      <div>
                        <h4 className="font-headline text-xl mb-2">Visual Poetics</h4>
                        <p className="text-on-surface-variant leading-relaxed">Every plate is a canvas. We strip back the layers of traditional presentation to focus on the geometric beauty of our food.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-square bg-surface-container rounded-xl overflow-hidden relative">
                  <img className="w-full h-full object-cover" alt="High-end artistic plating of a West African inspired dish" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1500&auto=format&fit=crop"/>
                  <div className="absolute bottom-0 right-0 p-8 bg-background/90 backdrop-blur-sm max-w-xs m-8 rounded-lg shadow-sm">
                    <p className="text-xs font-label uppercase tracking-widest text-secondary mb-2">Signature Vision</p>
                    <p className="text-sm font-body italic">"We don't just feed the body; we curate a cultural resonance."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accolades & Education: Bento Grid */}
        <section className="bg-surface-container py-24 md:py-40">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-secondary mb-4">Accolades & Foundation</h2>
              <h3 className="font-headline text-4xl">A Proven Legacy.</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between border-b-2 border-primary">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">school</span>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Education</p>
                  <h4 className="font-headline text-xl">Le Cordon Bleu, Paris</h4>
                  <p className="text-sm text-on-surface-variant mt-2">Advanced Diploma in Culinary Arts & Gastronomy</p>
                </div>
              </div>
              <div className="md:col-span-2 bg-primary p-10 rounded-xl text-on-primary">
                <p className="font-label text-xs uppercase tracking-widest text-on-primary/60 mb-6">Notable Stage</p>
                <h4 className="font-headline text-3xl mb-4 italic">The Fat Duck, UK</h4>
                <p className="font-body text-on-primary/80 leading-relaxed">An intensive exploration of sensory-led dining and experimental West African flavor mapping within Heston Blumenthal's development kitchen.</p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-between border-b-2 border-secondary">
                <span className="material-symbols-outlined text-secondary text-3xl mb-4">star</span>
                <div>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Award</p>
                  <h4 className="font-headline text-xl">Vanguard Chef 2023</h4>
                  <p className="text-sm text-on-surface-variant mt-2">African Culinary Excellence Awards</p>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl border-t-2 border-outline-variant">
                <p className="font-label text-xs uppercase tracking-widest text-secondary mb-6">Key Clients</p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-headline text-lg">Lagos Art Foundation</h5>
                    <p className="text-xs text-on-surface-variant">Annual Gala Catering</p>
                  </div>
                  <div>
                    <h5 className="font-headline text-lg">The Heritage Club</h5>
                    <p className="text-xs text-on-surface-variant">Private Residency</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl border-t-2 border-outline-variant">
                <p className="font-label text-xs uppercase tracking-widest text-secondary mb-6">Speaking Engagements</p>
                <h4 className="font-headline text-xl">Oxford Food Symposium</h4>
                <p className="text-sm text-on-surface-variant mt-2">Paper: "The Decolonization of Fine Dining via African Fermentation."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch */}
        <section className="py-24 md:py-40">
          <div className="max-w-screen-md mx-auto px-8 text-center">
            <div className="w-16 h-px bg-primary mx-auto mb-12"></div>
            <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-secondary mb-8">Personal Touch</h2>
            <h3 className="font-headline text-3xl italic mb-10 text-primary">The Scent of Pre-Dawn Rain.</h3>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              "My inspiration is never found in a modern laboratory. It’s found in the smell of parched earth meeting the first rains—that specific, mineral scent we call petrichor. It reminds me of the wild Irvingia (Ogbono) seeds my grandmother would dry in the sun. That balance of earth and anticipation is the 'fifth taste' I try to capture in every reduction I make."
            </p>
            <div className="mt-16 grayscale opacity-20">
              <span className="material-symbols-outlined text-6xl">eco</span>
            </div>
          </div>
        </section>

        {/* Pattern Break */}
        <div className="w-full h-32 opacity-10 flex justify-center items-center overflow-hidden">
          <div className="flex space-x-24 text-8xl font-serif tracking-widest text-outline whitespace-nowrap">
            <span>GASTRONOMY</span>
            <span>HERITAGE</span>
            <span>ARTISTRY</span>
            <span>GASTRONOMY</span>
            <span>HERITAGE</span>
          </div>
        </div>
      </main>


    </>
  );
}
