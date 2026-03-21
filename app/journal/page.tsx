export default function Journal() {
  return (
    <>


      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-8 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-label text-xs uppercase tracking-[0.2em] mb-4 block">The Journal</span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tighter leading-[1.1]">
                The Modern <br/>Nigerian Journal.
              </h1>
            </div>
            <div className="md:text-right">
              <p className="text-on-surface-variant font-body text-lg max-w-sm ml-auto leading-relaxed">
                Curated stories, forgotten techniques, and the evolution of West African gastronomy.
              </p>
            </div>
          </div>
          {/* Category Filter Pattern Break */}
          <div className="mt-16 flex flex-wrap gap-4 border-t border-outline-variant/30 pt-8">
            <button className="px-6 py-2 rounded-full bg-secondary text-on-secondary font-label text-sm transition-all hover:scale-105">All Stories</button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label text-sm hover:bg-surface-container-low transition-all">Chef's Specials</button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label text-sm hover:bg-surface-container-low transition-all">Traditional Classics</button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label text-sm hover:bg-surface-container-low transition-all">Quick Meals</button>
            <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label text-sm hover:bg-surface-container-low transition-all">Techniques</button>
          </div>
        </header>

        {/* Featured Post: Asymmetric Layout */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-16 items-center">
            <div className="md:col-span-7 overflow-hidden rounded-xl bg-surface-container shadow-sm">
              <img className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Rich red smoky Jollof rice in a traditional clay pot" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1500&auto=format&fit=crop"/>
            </div>
            <div className="md:col-span-5 py-12 md:py-0 -mt-16 md:mt-0 relative z-10">
              <div className="bg-background/90 backdrop-blur-sm p-8 md:p-0">
                <span className="text-secondary font-label text-xs uppercase tracking-widest mb-4 block">Traditional Classics</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background mb-6 leading-tight">
                  The Secret to the Perfect Smokey Jollof
                </h2>
                <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8">
                  Beyond the fire, the soul of Jollof lies in the patience of the steam. Explore the depth of "Party Jollof" and how to achieve that authentic charred aroma in a modern kitchen.
                </p>
                <a className="inline-flex items-center gap-2 text-primary font-label font-bold text-sm group/link" href="#">
                  READ THE STORY
                  <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        {/* Secondary Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Post 2 */}
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Modern plated suya meat with vibrant purple hibiscus glaze" src="https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=1500&auto=format&fit=crop"/>
              </div>
              <span className="text-secondary font-label text-xs uppercase tracking-widest mb-3 block">Chef's Specials</span>
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Elevating Suya with Hibiscus Glaze</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                A botanical twist on a street food icon. Discover how the tartness of Zobo balances the heat of Yaji spice.
              </p>
              <a className="text-primary font-label font-bold text-xs tracking-widest border-b border-primary/20 pb-1" href="#">READ MORE</a>
            </article>

            {/* Post 3 */}
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Artfully plated viscous okra soup with seafood and green herbs" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1500&auto=format&fit=crop"/>
              </div>
              <span className="text-secondary font-label text-xs uppercase tracking-widest mb-3 block">Quick Meals</span>
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">The 20-Minute Seafood Okra</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                Freshness is the only ingredient that matters. A masterclass in preserving the crunch of sea-fresh okra.
              </p>
              <a className="text-primary font-label font-bold text-xs tracking-widest border-b border-primary/20 pb-1" href="#">READ MORE</a>
            </article>

            {/* Post 4 */}
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Small golden plantain gnocchi pillows with herb butter" src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1500&auto=format&fit=crop"/>
              </div>
              <span className="text-secondary font-label text-xs uppercase tracking-widest mb-3 block">Chef's Specials</span>
              <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Plantain Gnocchi: A Fusion Experiment</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                Rethinking the over-ripe plantain. Italian technique meets Nigerian soul in this buttery, sweet dish.
              </p>
              <a className="text-primary font-label font-bold text-xs tracking-widest border-b border-primary/20 pb-1" href="#">READ MORE</a>
            </article>
          </div>
        </section>

        {/* Newsletter Signup Section (Pattern Break) */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <div className="bg-primary-container rounded-xl p-12 md:p-24 relative overflow-hidden">
            {/* Nigerian textile inspired pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "32px 32px" }}></div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-primary-container mb-6">Join the Table</h2>
              <p className="text-on-primary-container/80 font-body text-lg mb-10 leading-relaxed">
                Get recipes, culinary history, and exclusive cooking tips delivered to your inbox. No noise, just heritage.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input className="flex-grow bg-transparent border-b border-on-primary-container/30 text-on-primary-container placeholder:text-on-primary-container/50 px-4 py-3 focus:outline-none focus:border-secondary transition-colors font-body" placeholder="Email address" type="email"/>
                <button className="bg-primary text-on-primary px-10 py-3 rounded-full font-label font-bold hover:scale-105 transition-transform" type="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}
