import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a202c] text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Villma.ai. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="hover:text-pink-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/gdpr"
              className="hover:text-pink-400 transition-colors"
            >
              GDPR
            </Link>
            <Link
              href="/contacts"
              className="hover:text-pink-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
