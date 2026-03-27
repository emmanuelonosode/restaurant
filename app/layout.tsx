import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theculinarygallery.example.com"),
  title: {
    template: "%s | The Culinary Gallery",
    default: "The Culinary Gallery | Modern Nigerian Cuisine",
  },
  description: "Redefining modern Nigerian cuisine. Experience an elevated private dining journey with our award-winning Chef — available for private dinners, events, and catering across Nigeria.",
  keywords: ["fine dining", "nigerian cuisine", "lagos restaurant", "gourmet", "culinary", "private chef", "west african food", "catering nigeria"],
  openGraph: {
    title: "The Culinary Gallery | Modern Nigerian Cuisine",
    description: "West African gastronomy, redefined. Private dinners, events, and nationwide catering curated by an award-winning Nigerian chef.",
    url: "https://theculinarygallery.example.com",
    siteName: "The Culinary Gallery",
    images: [{ url: "https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=2000", width: 2000, height: 1333, alt: "Elegantly plated Nigerian cuisine" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Culinary Gallery | Modern Nigerian Cuisine",
    description: "West African gastronomy, redefined. Private dinners, events, and nationwide catering.",
    images: ["https://images.unsplash.com/photo-1414235077428-33898bd122e2?q=80&w=2000"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} min-h-full flex flex-col selection:bg-primary selection:text-on-primary bg-background text-on-surface font-body pt-20`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
