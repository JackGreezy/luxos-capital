import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://luxoscapital.com'),
  title: 'Luxos Capital | Multifamily Real Estate Investment',
  description: 'Helping you invest in multifamily real estate. Premium returns through value-add apartment investments in Southern California and select US growth markets.',
  openGraph: {
    title: 'Luxos Capital | Multifamily Real Estate Investment',
    description: 'Helping you invest in multifamily real estate. Premium returns through value-add apartment investments in Southern California and select US growth markets.',
    images: [
      {
        url: '/images/process-investment-process-hero/image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxos Capital Investment Process',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxos Capital | Multifamily Real Estate Investment',
    description: 'Helping you invest in multifamily real estate. Premium returns through value-add apartment investments.',
    images: ['/images/process-investment-process-hero/image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
