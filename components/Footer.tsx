export default function Footer() {
  return (
    <footer className="bg-[#f6f3ee] dark:bg-stone-800 w-full pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-6">
          <span className="font-headline text-xl font-semibold text-[#702817]">The Culinary Gallery</span>
          <p className="font-body text-sm tracking-wide leading-relaxed text-stone-600 dark:text-stone-400">
            Redefining West African gastronomic art through intentional design and seasonal heritage ingredients.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label text-stone-500 uppercase tracking-widest text-xs font-bold">Connect</span>
          <nav className="flex flex-col gap-3 font-label">
            <a className="text-stone-500 uppercase tracking-widest text-xs hover:text-[#702817] transition-colors" href="#">Instagram</a>
            <a className="text-stone-500 uppercase tracking-widest text-xs hover:text-[#702817] transition-colors" href="#">LinkedIn</a>
            <a className="text-stone-500 uppercase tracking-widest text-xs hover:text-[#702817] transition-colors" href="#">Newsletter</a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label text-stone-500 uppercase tracking-widest text-xs font-bold">Inquiries</span>
          <p className="font-body text-sm tracking-wide leading-relaxed text-[#702817] dark:text-[#8e3e2b]">
            curate@culinarygallery.ng<br/>
            Lagos | Abuja | Port Harcourt
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 mt-20 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-body text-sm tracking-wide leading-relaxed text-stone-500 uppercase text-[10px]">© 2024 The Culinary Gallery. All rights reserved.</span>
        <a className="font-label text-stone-500 uppercase tracking-widest text-[10px] hover:text-[#702817] transition-colors" href="#">Privacy</a>
      </div>
    </footer>
  );
}
