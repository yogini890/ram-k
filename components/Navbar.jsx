'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building2 } from 'lucide-react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => pathname === href || (href === '/home' && pathname === '/home');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2e44] shadow-lg' : 'bg-[#1a2e44]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#c8963e] rounded-sm flex items-center justify-center">
              <Building2 size={22} className="text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none tracking-wide">RK</div>
              <div className="text-[#c8963e] text-xs font-medium tracking-wider uppercase">Enterprises</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-[#c8963e] border-b-2 border-[#c8963e]'
                    : 'text-gray-200 hover:text-[#c8963e]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                pathname === '/about' ? 'text-[#c8963e] border-b-2 border-[#c8963e]' : 'text-gray-200 hover:text-[#c8963e]'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-[#c8963e] text-white text-sm font-semibold rounded-sm hover:bg-[#b0832e] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1a2e44] border-t border-[#c8963e]/30 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium border-b border-white/10 ${
                isActive(link.href) ? 'text-[#c8963e]' : 'text-gray-200'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/about" className="block py-3 text-sm font-medium border-b border-white/10 text-gray-200" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block mt-3 px-5 py-2 bg-[#c8963e] text-white text-sm font-semibold text-center rounded-sm" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
