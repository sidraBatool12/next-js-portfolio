'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#001233] text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="OMG Logo"
          className="h-10 w-20 sm:h-12 sm:w-24 md:h-20 md:w-32 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transform transition duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`md:hidden overflow-hidden bg-[#001233] px-4 transition-all duration-500 ease-in-out transform ${
          isOpen ? 'max-h-60 translate-y-0 opacity-100' : 'max-h-0 -translate-y-10 opacity-0'
        }`}
      >
        <Link
          href="/"
          className="block py-2 hover:text-blue-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 hover:text-blue-400 transition"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/projects"
          className="block py-2 hover:text-blue-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="block py-2 hover:text-blue-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
