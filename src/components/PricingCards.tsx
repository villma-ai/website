'use client';

import React, { useState } from 'react';
import pricingData from '@/data/pricing/content.json';
import { SubscriptionPlan } from '@villma/villma-ts-shared';

interface GroupedPlans {
  monthly: SubscriptionPlan[];
  yearly: SubscriptionPlan[];
}

interface PricingCardsProps {
  groupedPlans: GroupedPlans;
}

const tabLabels = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'yearly', label: 'Yearly' }
];

const PricingCards: React.FC<PricingCardsProps> = ({ groupedPlans }) => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  const plans = groupedPlans[activeTab];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4">
        {tabLabels.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as 'monthly' | 'yearly')}
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors
              ${
                activeTab === tab.key
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-pink-100 dark:hover:bg-pink-600'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105`}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Optionally add a 'Popular' badge if you add such a field in Firestore */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {plan.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  €{plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  /{plan.billingCycle}
                </span>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string) => (
                    <li key={feature} className="flex items-start">
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
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://myagent.villma.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors text-center"
                >
                  {pricingData.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
