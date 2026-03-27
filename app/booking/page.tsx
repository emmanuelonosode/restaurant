import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Private Experience",
  description: "Request a consultation for private dinners, corporate events, catering, or nationwide meal prep. We respond within 24 hours to begin your personalised culinary journey.",
  keywords: ["private chef booking", "private dinner nigeria", "chef hire lagos", "corporate catering nigeria", "meal prep delivery nigeria"],
  openGraph: {
    title: "Book a Private Experience | The Culinary Gallery",
    description: "Private dinners, events, catering, and meal prep across Nigeria. Submit your inquiry and receive a response within 24 hours.",
    images: [{ url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000", alt: "Private chef plating an elegant dish" }],
  },
};

export default function Booking() {
  return (
    <>


      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-label uppercase tracking-widest text-xs font-semibold mb-4 block">Bespoke Gastronomy</span>
            <h1 className="text-6xl md:text-7xl font-headline text-primary leading-tight tracking-tighter mb-8">Experience the Taste.</h1>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">From intimate candlelit dinners to grand nationwide shipments, we translate Nigerian heritage into an unforgettable sensory exhibition.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Professional private chef plating an elegant West African dish" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1500&auto=format&fit=crop"/>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-lg hidden md:block max-w-xs border-l-4 border-secondary">
              <p className="font-headline italic text-primary text-xl">"Cuisine is the only art that uses all five senses."</p>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section className="bg-surface-container-low py-24 mb-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <h2 className="text-4xl md:text-5xl font-headline text-on-surface tracking-tight">Our Curated Services</h2>
              <p className="text-on-surface-variant font-body max-w-xs border-l border-outline-variant pl-6">Tailored experiences designed to bring high-end culinary artistry to your table.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="group bg-surface-container-lowest p-1 rounded-xl transition-transform duration-500 hover:scale-[1.02]">
                <div className="aspect-square rounded-lg overflow-hidden mb-8">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury home dining setting with terracotta accents" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1500&auto=format&fit=crop"/>
                </div>
                <div className="px-6 pb-10">
                  <h3 className="text-2xl font-headline text-primary mb-3">Private Dinners</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">Exclusive in-home dining tailored to your palate, bringing the restaurant's elegance to your residence.</p>
                  <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
              {/* Service 2 */}
              <div className="group bg-surface-container-lowest p-1 rounded-xl transition-transform duration-500 hover:scale-[1.02] mt-0 md:mt-12">
                <div className="aspect-square rounded-lg overflow-hidden mb-8">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Boutique catered event with gold and terracotta decor" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1500&auto=format&fit=crop"/>
                </div>
                <div className="px-6 pb-10">
                  <h3 className="text-2xl font-headline text-primary mb-3">Events & Catering</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">Boutique celebrations curated with precision, ensuring every guest experiences the height of hospitality.</p>
                  <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
              {/* Service 3 */}
              <div className="group bg-surface-container-lowest p-1 rounded-xl transition-transform duration-500 hover:scale-[1.02] mt-0 md:mt-24">
                <div className="aspect-square rounded-lg overflow-hidden mb-8">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Gourmet meal prep containers with fresh vegetables" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1500&auto=format&fit=crop"/>
                </div>
                <div className="px-6 pb-10">
                  <h3 className="text-2xl font-headline text-primary mb-3">Nationwide Meal Prep</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">Chef-prepared meals shipped directly to you, preserving the integrity and warmth of our kitchen.</p>
                  <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Inquiry Form */}
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-headline text-primary mb-6 tracking-tight">Initiate Your Inquiry</h2>
            <p className="text-on-surface-variant font-body mb-12 leading-relaxed">Let us know the details of your vision. We respond to all inquiries within 24 hours to begin the creative consultation.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">location_on</span>
                <div>
                  <p className="font-bold font-body text-on-surface">Gallery Studio</p>
                  <p className="text-sm text-on-surface-variant font-body">Lagos, Nigeria | Remote Consultations Available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">mail</span>
                <div>
                  <p className="font-bold font-body text-on-surface">Digital Correspondence</p>
                  <p className="text-sm text-on-surface-variant font-body">concierge@culinarygallery.co</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-12 rounded-xl shadow-sm border border-surface-variant/20">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" action="mailto:concierge@culinarygallery.co" method="GET">
              <div className="col-span-1">
                <label htmlFor="booking-name" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Name</label>
                <input id="booking-name" name="name" required className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors" placeholder="Your full name" type="text"/>
              </div>
              <div className="col-span-1">
                <label htmlFor="booking-email" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Email Address</label>
                <input id="booking-email" name="email" required className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors" placeholder="email@example.com" type="email"/>
              </div>
              <div className="col-span-1">
                <label htmlFor="booking-date" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Event Date</label>
                <input id="booking-date" name="date" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors text-on-surface-variant" type="date"/>
              </div>
              <div className="col-span-1">
                <label htmlFor="booking-type" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Event Type</label>
                <select id="booking-type" name="event_type" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors appearance-none text-on-surface">
                  <option value="private-dinner">Private Dinner</option>
                  <option value="events-catering">Events &amp; Catering</option>
                  <option value="meal-prep">Meal Prep Plan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-span-1">
                <label htmlFor="booking-guests" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Guest Count</label>
                <input id="booking-guests" name="guests" min="1" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors" placeholder="Number of guests" type="number"/>
              </div>
              <div className="col-span-1">
                <label htmlFor="booking-budget" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Budget Range (NGN)</label>
                <input id="booking-budget" name="budget" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors" placeholder="e.g. ₦500,000 – ₦2,000,000" type="text"/>
              </div>
              <div className="col-span-full">
                <label htmlFor="booking-message" className="block text-xs font-label uppercase tracking-widest text-secondary font-bold mb-2">Special Requests &amp; Vision</label>
                <textarea id="booking-message" name="message" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body text-sm outline-none transition-colors resize-none" placeholder="Tell us about the occasion and any dietary preferences..." rows={4}></textarea>
              </div>
              <div className="col-span-full pt-6">
                <button className="w-full bg-primary text-on-primary py-4 rounded-full font-label font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-colors shadow-lg active:scale-95" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Pattern Break */}
        <div className="w-full h-24 overflow-hidden flex items-center justify-center opacity-10 mt-24 mb-12">
          <div className="w-full h-px bg-outline-variant flex justify-around items-center px-12">
            <span className="material-symbols-outlined text-4xl">restaurant</span>
            <span className="material-symbols-outlined text-4xl">local_dining</span>
            <span className="material-symbols-outlined text-4xl">wine_bar</span>
            <span className="material-symbols-outlined text-4xl">skillet</span>
            <span className="material-symbols-outlined text-4xl">kitchen</span>
          </div>
        </div>
      </main>


    </>
  );
}
