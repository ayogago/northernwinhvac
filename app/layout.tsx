import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northernwindhvac.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1e40af',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NorthernWindHVAC - Professional HVAC Services in Los Angeles | Heating & Cooling Experts",
    template: "%s | NorthernWindHVAC",
  },
  description: "Expert HVAC services in Los Angeles, Glendale, Burbank, Pasadena & San Fernando Valley. AC repair, heating installation, 24/7 emergency service. Licensed & insured. Call (818) 555-HVAC for free estimates!",
  keywords: [
    "HVAC",
    "heating",
    "cooling",
    "air conditioning",
    "AC repair",
    "AC installation",
    "furnace repair",
    "heating repair",
    "HVAC contractor",
    "Los Angeles HVAC",
    "Glendale HVAC",
    "Burbank HVAC",
    "Pasadena HVAC",
    "San Fernando Valley HVAC",
    "emergency HVAC service",
    "24/7 HVAC",
    "air conditioning service",
    "heating service",
    "HVAC maintenance",
    "indoor air quality",
  ],
  authors: [{ name: "NorthernWindHVAC" }],
  creator: "NorthernWindHVAC",
  publisher: "NorthernWindHVAC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/favicon.ico.png',
    shortcut: '/images/favicon.ico.png',
    apple: '/images/favicon.ico.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'NorthernWindHVAC',
    title: 'NorthernWindHVAC - Professional HVAC Services in Los Angeles',
    description: 'Expert heating, cooling, and air conditioning services in Greater Los Angeles. Licensed & insured HVAC contractors with 15+ years experience. 24/7 emergency service available.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NorthernWindHVAC - Professional HVAC Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NorthernWindHVAC - Professional HVAC Services in Los Angeles',
    description: 'Expert heating, cooling, and air conditioning services in Greater Los Angeles. 24/7 emergency service. Call (818) 555-HVAC!',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'HVAC Services',
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'NorthernWindHVAC',
  description: 'Professional HVAC services including AC repair, heating installation, and 24/7 emergency service in Greater Los Angeles area.',
  url: siteUrl,
  telephone: '+1-818-555-4822',
  email: 'info@northernwindhvac.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Glendale',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.1425,
    longitude: -118.2551,
  },
  areaServed: [
    { '@type': 'City', name: 'Los Angeles' },
    { '@type': 'City', name: 'Glendale' },
    { '@type': 'City', name: 'Burbank' },
    { '@type': 'City', name: 'Pasadena' },
    { '@type': 'City', name: 'Tujunga' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, Check',
  currenciesAccepted: 'USD',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heating Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heating Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency HVAC Service' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/northernwindhvac',
    'https://www.instagram.com/northernwindhvac',
    'https://www.yelp.com/biz/northernwindhvac',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
