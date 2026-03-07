import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "DentalCare - Your Trusted Dental Clinic",
  description: "Professional dental care for a brighter, healthier smile.",
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.className}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
