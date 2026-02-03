'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'ABOUT', href: '/about' },
  { label: 'WHY MULTIFAMILY', href: '/why-multifamily' },
  { label: 'STRATEGY', href: '/strategy' },
  { label: 'PROCESS', href: '/process' },
  { label: 'RESOURCES', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'CONTACT', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine background based on scroll state and page
  const getHeaderBg = () => {
    if (isScrolled) {
      return 'bg-white/95 backdrop-blur-md shadow-lg';
    }
    if (isHomePage) {
      return 'bg-transparent';
    }
    return 'bg-dark-darker';
  };

  return (
    <>
      <header className={`fixed w-full z-50 top-0 transition-all duration-500 overflow-x-hidden ${getHeaderBg()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/luxos-capital-logo.png"
              alt="Luxos Capital"
              width={150}
              height={60}
              className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-0' : ''}`}
              priority
            />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-item text-sm transition-colors duration-300 ${
                  pathname === link.href 
                    ? 'text-gold font-semibold' 
                    : isScrolled 
                      ? 'text-gray-800 hover:text-gold' 
                      : 'text-white/90 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/invest"
              className={`px-4 sm:px-5 py-2.5 uppercase text-xs font-bold ml-2 transition-all duration-300 whitespace-nowrap ${
                isScrolled 
                  ? 'bg-gold text-white hover:bg-gold-dark rounded-none' 
                  : 'border border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-white rounded-none'
              }`}
            >
              Invest Now
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 lg:hidden">
          <div className="flex flex-col items-center space-y-6 py-8 text-dark">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${pathname === link.href ? 'text-gold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/invest"
              onClick={() => setIsOpen(false)}
              className="btn-gold px-8 py-3 mt-4"
            >
              Invest Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
