import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NorthernWindHVAC - Professional HVAC Services in Los Angeles",
  description: "Expert heating, cooling, and air conditioning services in Glendale, Burbank, Tujunga, Pasadena and surrounding areas. Licensed & insured HVAC contractors.",
  keywords: ["HVAC", "heating", "cooling", "air conditioning", "furnace repair", "AC repair", "Glendale", "Burbank", "Pasadena", "Tujunga"],
  icons: {
    icon: '/images/favicon.ico.png',
    shortcut: '/images/favicon.ico.png',
    apple: '/images/favicon.ico.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
