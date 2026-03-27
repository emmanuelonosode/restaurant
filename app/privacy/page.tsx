import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Culinary Gallery — how we collect, use, and protect your personal information when you submit an inquiry or subscribe to our newsletter.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-40 px-8 md:px-24 max-w-4xl mx-auto">
      <div className="mb-20">
        <span className="font-label text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Legal</span>
        <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">Privacy Policy</h1>
        <p className="font-body text-on-surface-variant text-lg">Last updated: January 2025</p>
      </div>

      <div className="space-y-16 font-body text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="font-headline text-2xl text-on-surface mb-6">Information We Collect</h2>
          <p className="mb-4">
            When you submit a booking inquiry or subscribe to our newsletter, we collect personal information you provide directly — including your name, email address, event details, and budget range.
          </p>
          <p>
            We may also collect anonymous usage data to improve our website experience. We do not use tracking cookies for advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-on-surface mb-6">How We Use Your Information</h2>
          <ul className="space-y-3 list-none">
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              <span>To respond to booking inquiries and begin the consultation process</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              <span>To send you recipes, culinary stories, and exclusive updates if you subscribe</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
              <span>To improve our website and client experience</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-on-surface mb-6">Data Protection</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your personal information. We do not sell, trade, or transfer your personal information to third parties without your consent.
          </p>
          <p>
            Your data is retained only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-on-surface mb-6">Your Rights</h2>
          <p>
            You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@culinarygallery.ng" className="text-primary hover:opacity-70 transition-opacity">
              privacy@culinarygallery.ng
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-2xl text-on-surface mb-6">Contact</h2>
          <p>
            For any privacy-related questions, please reach us at{" "}
            <a href="mailto:privacy@culinarygallery.ng" className="text-primary hover:opacity-70 transition-opacity">
              privacy@culinarygallery.ng
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-24 pt-12 border-t border-outline-variant/20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-label text-xs tracking-widest uppercase text-secondary font-bold hover:gap-4 transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
