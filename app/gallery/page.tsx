import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Gallery",
  description: "A curated visual exhibition of The Culinary Gallery's West African gastronomic art — from Pepper Soup and Efo Riro to plantain desserts and Jollof arancini.",
  keywords: ["nigerian food photography", "west african plating", "fine dining food art", "jollof rice", "nigerian chef portfolio", "culinary photography"],
  openGraph: {
    title: "The Gallery | The Culinary Gallery",
    description: "A curated exhibition of West African gastronomic art — heritage techniques meeting modern plating aesthetics.",
    images: [{ url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000", alt: "Elegantly plated Nigerian fine dining dish" }],
  },
};

export default function Gallery() {
  return (
    <>
      <main className="pt-32 pb-24">
        {/* Hero Title Section */}
        <header className="max-w-7xl mx-auto px-8 mb-20 text-center md:text-left">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-none tracking-tighter mb-6">
            The Culinary Gallery.
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              A curated exhibition of West African gastronomic art. Experience the intersection of heritage techniques and modern plating aesthetics.
            </p>
            {/* Filter Component */}
            <div className="flex flex-wrap gap-4 md:gap-8 border-b border-outline-variant/30 pb-2" role="group" aria-label="Filter by course">
              <button className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold border-b-2 border-secondary pb-2">All Creations</button>
              <button className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors pb-2">Appetizers</button>
              <button className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors pb-2">Main Course</button>
              <button className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors pb-2">Desserts</button>
            </div>
          </div>
        </header>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-8" aria-label="Gallery of dishes">
          <div className="gallery-grid">
            {/* Item 1: Wide Hero */}
            <div className="gallery-item-wide group relative overflow-hidden rounded-xl bg-surface-container aspect-[16/9]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Modern plated goat meat pepper soup with herb garnish and aromatic broth" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1500&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2">Signature Main</span>
                <h3 className="font-headline text-3xl text-on-primary mb-2">Clarified Goat Meat Pepper Soup</h3>
                <p className="font-body text-sm text-primary-fixed/80 max-w-md">Deconstructed components served with an aromatic broth infused with Uda and Uziza seeds.</p>
              </div>
            </div>
            {/* Item 2: Tall */}
            <div className="gallery-item-tall group relative overflow-hidden rounded-xl bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Artistically arranged deconstructed efo riro green vegetable stew" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1500&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2">Main Course</span>
                <h3 className="font-headline text-2xl text-on-primary mb-2">Deconstructed Efo Riro</h3>
                <p className="font-body text-sm text-primary-fixed/80">Sautéed wild spinach, red bell pepper reduction, and crisp protein textures.</p>
              </div>
            </div>
            {/* Item 3: Square */}
            <div className="gallery-item-square group relative overflow-hidden rounded-xl bg-surface-container aspect-square">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Beef tartare with suya spice seasoning and edible flowers" src="https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=1500&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2">Appetizer</span>
                <h3 className="font-headline text-2xl text-on-primary mb-2">Suya Beef Tartare</h3>
                <p className="font-body text-sm text-primary-fixed/80">Yaji-cured beef with kuli-kuli soil and fermented cream.</p>
              </div>
            </div>
            {/* Item 4: Square */}
            <div className="gallery-item-square group relative overflow-hidden rounded-xl bg-surface-container aspect-square">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gourmet plantain dessert with caramel and gold leaf" src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1500&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2">Dessert</span>
                <h3 className="font-headline text-2xl text-on-primary mb-2">Caramelized Dodo Mille-feuille</h3>
                <p className="font-body text-sm text-primary-fixed/80">Layers of crisp plantain, spiced mousse, and palm sugar caramel.</p>
              </div>
            </div>
            {/* Item 5: Wide */}
            <div className="gallery-item-wide group relative overflow-hidden rounded-xl bg-surface-container aspect-[16/7]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Crispy jollof rice balls served with spicy tomato jam" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1500&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2">Fusion Small Plate</span>
                <h3 className="font-headline text-3xl text-on-primary mb-2">Smokey Jollof Arancini</h3>
                <p className="font-body text-sm text-primary-fixed/80 max-w-md">Fire-roasted tomato rice balls with a melting heart of aged local cheese.</p>
              </div>
            </div>
            {/* Item 6: Square */}
            <div className="gallery-item-square group relative overflow-hidden rounded-xl bg-surface-container aspect-square">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Steamed bean pudding elegantly presented in a modern white bowl" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1500&auto=format&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label text-xs uppercase tracking-widest text-primary-fixed mb-2">Appetizer</span>
                <h3 className="font-headline text-2xl text-on-primary mb-2">Silken Moin Moin</h3>
                <p className="font-body text-sm text-primary-fixed/80">Twice-passed honey bean puree with smoked fish essence and garden herbs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Pattern Break */}
        <section className="mt-24 py-24 bg-surface-container-low overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#702817 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="font-headline text-4xl text-primary mb-6 leading-tight">Beyond the Plate: The Philosophy of West African Gastronomy</h2>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                Our gallery isn&apos;t just a portfolio; it&apos;s a testament to the resilience and evolution of Nigerian cuisine. We source seasonally, respect ancestral techniques, and plate for the modern eye.
              </p>
              <Link className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-secondary font-bold hover:gap-4 transition-all" href="/journal">
                Read the Journal
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-1/3 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-3">
              <img className="w-full h-full object-cover" alt="Close up of chef hands plating a dish with precision" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1500&auto=format&fit=crop"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
