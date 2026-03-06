import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/components/AnimationProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { AIWidgetFloating } from "@/components/AIWidgetFloating";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top Atlas Chiropractic | NUCCA Upper Cervical Chiropractor Austin TX",
  description:
    "Dr. Shelley Lorenzen is Austin's NUCCA specialist. 19 years of precision upper cervical care for headaches, vertigo, migraines, and sports injuries. Cash-only. Gentle. Life-changing.",
  keywords: [
    "NUCCA chiropractor Austin",
    "upper cervical chiropractor Austin",
    "atlas chiropractor Austin TX",
    "NUCCA Austin Texas",
    "gentle chiropractic Austin",
  ],
  openGraph: {
    title: "Top Atlas Chiropractic | NUCCA Upper Cervical Chiropractor Austin TX",
    description:
      "Dr. Shelley Lorenzen is Austin's NUCCA specialist. 19 years of precision upper cervical care for headaches, vertigo, migraines, and sports injuries.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <AnimationProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AIWidgetFloating />
        </AnimationProvider>
      </body>
    </html>
  );
}
