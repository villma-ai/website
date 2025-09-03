'use client';

import React from 'react';
import pricingData from '@/data/pricing/content.json';
import { SubscriptionPlan } from '@villma/villma-ts-shared';

interface GroupedPlans {
  monthly: SubscriptionPlan[];
  yearly: SubscriptionPlan[];
}

interface PurchaseFlowProps {
  groupedPlans: GroupedPlans;
}

const PurchaseFlow: React.FC<PurchaseFlowProps> = ({ groupedPlans }) => {
  const monthlyPlans = groupedPlans.monthly;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Purchase Flow Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {pricingData.purchaseFlow.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {pricingData.purchaseFlow.subtitle}
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {pricingData.purchaseFlow.steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < pricingData.purchaseFlow.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-pink-300 transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Step Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trial Note */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="h-8 w-8 text-white mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            <h3 className="text-2xl font-bold text-white">
              {pricingData.purchaseFlow.trialNote}
            </h3>
          </div>
        </div>
      </div>

      {/* After Trial Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {pricingData.purchaseFlow.afterTrial.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {pricingData.purchaseFlow.afterTrial.subtitle}
          </p>
        </div>

        {/* Monthly Plans */}
        <div className="grid md:grid-cols-2 gap-8">
          {monthlyPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="p-8 h-full flex flex-col">
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
                  <span className="text-gray-500 dark:text-gray-400">/{plan.billingCycle}</span>
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
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
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
    </div>
  );
};

export default PurchaseFlow;
