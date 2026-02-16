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
  title: "Aome - Electrical Services in Atlanta",
  description: "Professional, reliable residential & commercial electrical services in Atlanta. Installations, repairs and fast, safe service. Contact us today.",
  alternates: {
    canonical: '/',
    languages: {
      es: '/?lang=es'
    }
  },
  icons: {
    icon: '/aome111.ico',
    shortcut: '/aome111.ico',
    apple: '/aome111.ico',
  },
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
