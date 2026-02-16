import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/common/navBar";
import WhatsAppButton from "@/src/common/WhatsAppButton";
import Footer from "@/src/common/Footer";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aome - Electrical Services in Atlanta",
    template: "%s | Aome Electric LLC",
  },
  description: "Professional, reliable residential & commercial electrical services in Atlanta. Installations, repairs and fast, safe service. Contact us today.",
  alternates: {
    canonical: 'https://www.aomeelectricllc.com/',
    languages: {
      en: 'https://www.aomeelectricllc.com/',
      es: 'https://www.aomeelectricllc.com/?lang=es',
    }
  },
  icons: {
    icon: '/aome111.ico',
    shortcut: '/aome111.ico',
    apple: '/aome111.ico',
  },
  openGraph: {
    title: 'AomeElectricllc - Electrical Services in Atlanta',
    description:
      'Professional, reliable residential & commercial electrical services in Atlanta. Installations, repairs and fast, safe service. Contact us today.',
    url: 'https://www.aomeelectricllc.com/',
    siteName: 'AomeElectricllc',
    images: [
      {
        url: 'https://www.aomeelectricllc.com/aome/aome-11.jpeg',
        width: 1200,
        height: 630,
        alt: 'AomeElectricllc - Electrical services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AomeElectricllc - Electrical Services in Atlanta',
    description:
      'Professional, reliable residential & commercial electrical services in Atlanta. Installations, repairs and fast, safe service. Contact us today.',
    images: ['https://www.aomeelectricllc.com/aome/aome-11.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
  keywords: ['electrician', 'electrical services', 'residential electrician', 'commercial electrician', 'Atlanta electrician'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* Structured data (JSON-LD) to help search engines understand the business */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'LocalBusiness',
                    '@id': 'https://www.aomeelectricllc.com/#business',
                    name: 'Aome Electric LLC',
                    url: 'https://www.aomeelectricllc.com/',
                    telephone: '+1 (404) 488-0557',
                    image: 'https://www.aomeelectricllc.com/aome/aome-11.jpeg',
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: '6319 Delnorte court',
                      addressLocality: 'Norcross',
                      addressRegion: 'GA',
                      postalCode: '30093',
                      addressCountry: 'US',
                    },
                    sameAs: [
                      'https://www.facebook.com/',
                      'https://www.instagram.com/',
                      'https://www.tiktok.com/',
                      'https://www.youtube.com/',
                    ],
                    priceRange: '$$',
                    contactPoint: [
                      {
                        '@type': 'ContactPoint',
                        telephone: '+1 (404) 488-0557',
                        contactType: 'customer service',
                        areaServed: 'US',
                        availableLanguage: ['English', 'Spanish'],
                      },
                    ],
                  },
                  {
                    '@type': 'Service',
                    '@id': 'https://www.aomeelectricllc.com/#electrical-service',
                    name: 'Electrical Services',
                    serviceType: ['Residential electrical services', 'Commercial electrical services', 'Installations', 'Repairs'],
                    provider: {
                      '@id': 'https://www.aomeelectricllc.com/#business',
                    },
                    areaServed: 'US',
                  },
                  {
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                      {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Home',
                        'item': 'https://www.aomeelectricllc.com/'
                      }
                    ]
                  }
                ]
              }),
            }}
          />
          <NavBar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
