import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a202c] text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Villma.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
