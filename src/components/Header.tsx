'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a202c] text-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center sm:py-4 md:py-0 px-4">
        {/* Logo goes here */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Villma-Logo_2025-05-21.jpg"
              alt="Villma.ai Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-100 focus:outline-none z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-pink-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-pink-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/demo"
                className="hover:text-pink-500 transition-colors"
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-pink-500 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="hover:text-pink-500 transition-colors"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-[#1a202c] bg-opacity-95 transition-opacity duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? 'opacity-100 z-40'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="h-full flex items-center justify-center">
            <ul className="flex flex-col items-center space-y-8 text-xl">
              <li>
                <Link
                  href="/"
                  className="block hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="block hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="block hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
