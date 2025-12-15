"use client"
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Link from 'next/link';

// Custom golden color palette for restaurant theme
const GOLDEN_COLORS = {
  golden: '#DCCA87',
  goldenDark: '#C8B46E',
  goldenLight: '#F4E9C9',
  black: '#0C0C0C',
  gray: '#AAAAAA'
};

const Logo = () => (
  <div className="text-2xl font-bold text-[#DCCA87] font-serif tracking-wider">
    White Soup
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#DCCA87] transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Login/Book Table - Right */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="#login"
              className="text-gray-300 hover:text-[#DCCA87] transition-colors duration-300 text-sm font-medium"
            >
              Log In / Registration
            </Link>
            <div className="w-px h-6 bg-gray-600" />
            <Link
              href="/reservation"
              className="flex items-center gap-2 bg-[#DCCA87] text-black px-6 py-3 rounded-sm hover:bg-[#C8B46E] transition-colors duration-300 font-medium text-sm"
            >
              <Phone size={16} />
              Book Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              href="/reservation"
              className="bg-[#DCCA87] text-black px-4 py-2 rounded-sm text-sm font-medium"
            >
              Book Table
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#DCCA87] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col items-center justify-start h-full pt-12">
          <ul className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl text-[#DCCA87] hover:text-white transition-colors duration-300 font-serif py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="w-full text-center border-t border-gray-800 pt-8 mt-8">
              <Link
                href="#login"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-[#DCCA87] transition-colors duration-300 py-2 block"
              >
                Log In / Registration
              </Link>
            </li>
          </ul>
        </div>

        {/* Close button for mobile menu */}
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-[#DCCA87] hover:text-white p-2"
            aria-label="Close menu"
          >
            <MdOutlineRestaurantMenu className="h-8 w-8" />
          </button>
        )}
      </div>

      {/* Add custom styles for smooth transitions */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .slide-bottom {
          animation: slide-bottom 0.5s ease-out;
        }
        
        @keyframes slide-bottom {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;