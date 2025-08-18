'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path ? 'text-pink-500' : 'hover:text-pink-500';
    }
    return pathname.startsWith(path) ? 'text-pink-500' : 'hover:text-pink-500';
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a202c] text-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center sm:py-4 md:py-0 px-4">
        {/* Logo goes here */}
        <div className="flex items-center gap-x-4">
          <Link href="/">
            <Image
              src="/Villma-Logo_2025-05-21.jpg"
              alt="Villma.ai Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
          <h2 className="font-semibold text-xl text-white">AI Multi-Agent Development Agency</h2>
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
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
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
              <Link href="/about" className={`transition-colors ${isActive('/about')}`}>
                About
              </Link>
            </li>
            <li>
              <a
                href="https://villma-ai-demo-01.myshopify.com/"
                className="transition-colors hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </li>
            <li>
              <Link href="/blog" className={`transition-colors ${isActive('/blog')}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={`transition-colors ${isActive('/pricing')}`}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contacts" className={`transition-colors ${isActive('/contacts')}`}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle Button - Desktop only */}
        <button
          onClick={toggleTheme}
          className="hidden md:block p-2 rounded-lg hover:bg-gray-700 transition-colors"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
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
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
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
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-[#1a202c] bg-opacity-95 transition-opacity duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
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
                  href="/pricing"
                  className={`block transition-colors ${isActive('/pricing')}`}
                  onClick={toggleMobileMenu}
                >
                  Pricing
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
              {/* Theme Toggle Button - Mobile */}
              <li>
                <button
                  onClick={() => {
                    toggleTheme();
                    toggleMobileMenu();
                  }}
                  className="flex items-center space-x-2 text-gray-100 hover:text-pink-500 transition-colors"
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  <span>Theme</span>
                  {theme === 'light' ? (
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
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  ) : (
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
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
