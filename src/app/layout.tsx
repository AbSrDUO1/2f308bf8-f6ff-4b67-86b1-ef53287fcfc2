import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NovaSuite Landing",
  description: "Provide a clean, conversion-focused single-page plan for a SaaS product with hero, about, how-to-buy, tokenomics (pricing/stats), FAQ, and footer. In-page navigation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased" style={{ background: 'linear-gradient(135deg, #6D5EFF 0%, #00C2FF 100%)' }}>
        {children}
      </body>
    </html>
  );
}
