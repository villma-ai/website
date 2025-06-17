import React from 'react';
import PricingCards from '@/components/PricingCards';
import pricingData from '@/data/pricing.json';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {pricingData.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {pricingData.subtitle}
          </p>
        </div>

        <PricingCards />

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-300">
          <p>{pricingData.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
