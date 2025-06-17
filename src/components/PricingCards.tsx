'use client';

import React from 'react';
import { Tooltip } from '@/components/ui/tooltip';
import pricingData from '@/data/pricing.json';

const PricingCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {pricingData.plans.map((plan) => (
        <div
          key={plan.name}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 ${
            plan.isPopular ? 'border-2 border-pink-500' : ''
          }`}
        >
          <div className="p-8">
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg">
                Popular
              </div>
            )}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {plan.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {plan.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                €{plan.monthlyPrice}
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                or €{plan.yearlyPrice}/year
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature.name} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-pink-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature.tooltip ? (
                    <Tooltip content={feature.tooltip}>
                      <span className="text-gray-600 dark:text-gray-300 cursor-help">
                        {feature.name}
                      </span>
                    </Tooltip>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <button className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
