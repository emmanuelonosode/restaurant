export default function Home() {
  return (
    <>


      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 z-10">
              <h1 className="display-lg text-primary mb-8">Modern Nigerian Cuisine, Redefined.</h1>
              <p className="font-body text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
                Experience an avant-garde journey through West African terroir, where ancestral techniques meet the precision of contemporary culinary art.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="/booking" className="bg-primary text-center text-on-primary px-10 py-4 rounded-full font-label font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all inline-block">
                  Book a Private Experience
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 relative h-[716px] lg:h-[870px]">
              <div className="absolute inset-0 bg-surface-container-high rounded-xl overflow-hidden shadow-2xl transform lg:translate-x-12 translate-y-8">
                <img alt="Gourmet Jollof rice with artisanal plating and microgreens" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1500&auto=format&fit=crop"/>
              </div>
              {/* Pattern Break Accent */}
              <div className="absolute -bottom-12 -left-12 w-64 h-64 opacity-10 pointer-events-none">
                <svg className="w-full h-full fill-primary" viewBox="0 0 100 100">
                  <path d="M0 0h10v10H0zm20 0h10v10H20zm20 0h10v10H40zm20 0h10v10H60zm20 0h10v10H80zM0 20h10v10H0zm20 0h10v10H20zm20 0h10v10H40zm20 0h10v10H60zm20 0h10v10H80z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="aspect-[4/5] bg-surface-variant rounded-xl overflow-hidden">
                  <img alt="Professional chef carefully garnishing a high-end Nigerian dish" className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1500&auto=format&fit=crop"/>
                </div>
              </div>
              <div>
                <span className="font-label text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-6 block">The Narrative</span>
                <h2 className="headline-md text-on-surface mb-8">Chef's Vision — Traditional flavors meet modern elegance.</h2>
                <p className="font-body text-on-surface-variant leading-[1.8] text-lg mb-8">
                  Our philosophy is rooted in the preservation of heritage. We source rare spices from local markets in Lagos and Kano, applying French culinary rigour to the soulful heart of Nigerian gastronomy.
                </p>
                <p className="font-body text-on-surface-variant leading-[1.8] text-lg">
                  Each plate is a canvas; each ingredient is a story of soil, sun, and spirit. We don't just cook—we curate memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Gallery */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <span className="font-label text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">The Collection</span>
              <h2 className="headline-md text-primary">Signature Masterpieces</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Highlight 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img alt="Wagyu beef suya with yaji spice and edible flowers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1500&auto=format&fit=crop"/>
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">Smoked Suya Wagyu</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">Pressed brisket, artisanal yaji dust, and honey-roasted garden eggs.</p>
              </div>
              {/* Highlight 2 */}
              <div className="group cursor-pointer mt-12 md:mt-24">
                <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img alt="Modern deconstructed egusi soup with seared seafood" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1500&auto=format&fit=crop"/>
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">Ocean-Fresh Egusi</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">Pan-seared scallops over toasted melon seed emulsion and waterleaf oil.</p>
              </div>
              {/* Highlight 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img alt="Zobo hibiscus poached pear with ginger crumble" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1500&auto=format&fit=crop"/>
                </div>
                <h3 className="font-headline text-xl text-primary mb-2">Hibiscus Zobo Pear</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">Slow-poached in local hibiscus, served with ginger-infused kunu crumble.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 bg-primary overflow-hidden relative">
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <svg className="w-full h-full fill-on-primary" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="0.5"></circle>
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8 block">format_quote</span>
            <blockquote className="font-headline text-3xl md:text-4xl text-on-primary italic leading-tight mb-12">
              "An absolute masterclass in Nigerian gastronomy. The flavors were nostalgic yet the presentation was purely cosmopolitan. A truly world-class private dining experience."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-secondary"></div>
              <cite className="font-body text-on-primary not-italic font-semibold tracking-widest uppercase text-xs">Adeola O., Private Client, Victoria Island</cite>
              <div className="w-12 h-[1px] bg-secondary"></div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-40 bg-background text-center">
          <div className="max-w-3xl mx-auto px-8">
            <h2 className="display-lg text-primary mb-8">Bring the Gallery to Your Table</h2>
            <p className="font-body text-lg text-on-surface-variant mb-12">
              Available for exclusive private bookings, corporate galas, and boutique culinary consultancy nationwide across Nigeria.
            </p>
            <a href="/booking" className="bg-primary text-on-primary px-12 py-5 rounded-full font-label font-bold text-sm tracking-[0.2em] uppercase hover:bg-primary-container transition-all shadow-xl hover:shadow-2xl active:scale-95 inline-block">
              Request a Consultation
            </a>
          </div>
        </section>
      </main>


    </>
  );
}
