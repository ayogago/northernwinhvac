import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free HVAC Quote | 24/7 Emergency Service',
  description: 'Contact NorthernWindHVAC for free HVAC estimates in Los Angeles. 24/7 emergency service available. Call (818) 555-HVAC or fill out our online form for fast response!',
  keywords: ['contact HVAC', 'free HVAC quote', 'HVAC estimate', 'emergency HVAC service', 'HVAC consultation', 'schedule HVAC service'],
  openGraph: {
    title: 'Contact NorthernWindHVAC - Free Estimates',
    description: 'Get a free quote for HVAC services. 24/7 emergency service available. We respond within 1 hour during business hours.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
