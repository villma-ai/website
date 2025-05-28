'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-pink-500' : 'hover:text-pink-500';
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
              <Link href="/" className={`transition-colors ${isActive('/')}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`transition-colors ${isActive('/about')}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/demo"
                className={`transition-colors ${isActive('/demo')}`}
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`transition-colors ${isActive('/blog')}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={`transition-colors ${isActive('/contacts')}`}
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
                  className={`block transition-colors ${isActive('/')}`}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block transition-colors ${isActive('/about')}`}
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className={`block transition-colors ${isActive('/demo')}`}
                  onClick={toggleMobileMenu}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`block transition-colors ${isActive('/blog')}`}
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className={`block transition-colors ${isActive('/contacts')}`}
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
