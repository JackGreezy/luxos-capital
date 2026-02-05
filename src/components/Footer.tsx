import Link from 'next/link';
import Image from 'next/image';

// Matches main site navigation
const mainLinks = [
  { label: 'About', href: '/about' },
  { label: 'Why Multifamily', href: '/why-multifamily' },
  { label: 'Strategy', href: '/strategy' },
  { label: 'Process', href: '/process' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const ctaLinks = [
  { label: 'Invest Now', href: '/invest' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export function Footer() {
  return (
    <footer className="bg-dark-darkest text-white pt-16 pb-8 border-t border-gray-800 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/luxos-capital-logo.png"
                alt="Luxos Capital"
                width={150}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
                priority={false}
              />
            </Link>
          </div>

          {/* Main navigation */}
          <div>
            <h4 className="gold-text font-bold uppercase tracking-wider mb-6 text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              {mainLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition uppercase font-semibold tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Invest & legal */}
          <div>
            <h4 className="gold-text font-bold uppercase tracking-wider mb-6 text-sm">Invest</h4>
            <ul className="space-y-3 text-sm">
              {ctaLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition uppercase font-semibold tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact – matches contact page */}
          <div>
            <h4 className="gold-text font-bold uppercase tracking-wider mb-6 text-sm">Get in Touch</h4>
            <div className="text-sm space-y-3 text-gray-300">
              <p>
                <a href="mailto:investors@luxoscapital.com" className="text-white hover:text-gold transition">
                  investors@luxoscapital.com
                </a>
              </p>
              <p>
                <a href="tel:+19497497499" className="text-white hover:text-gold transition">
                  +1 (949) 749-7499
                </a>
              </p>
              <p>Orange County, California</p>
              <p className="text-gray-500 text-xs">By appointment only · Mon–Fri 9AM–5PM PT</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Luxos Capital. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
