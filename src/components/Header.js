'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-emerald-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with animation */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-glow">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                SevaForAll
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/volunteer', label: 'Volunteer' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 font-medium relative group ${
                  pathname === item.href ? 'text-emerald-400 bg-emerald-500/20' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/volunteer"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-emerald-400 focus:outline-none p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-700/50 mb-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/volunteer', label: 'Volunteer' },
                { href: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 font-medium ${
                    pathname === item.href ? 'text-emerald-400 bg-emerald-500/20' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/volunteer"
                  className="block w-full text-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
