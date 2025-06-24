import React from 'react';
import PricingCards from '@/components/PricingCards';
import pricingData from '@/data/pricing.json';
import { Metadata } from 'next';
import { getSubscriptionPlans } from '@/lib/firestore';
import { SubscriptionPlan } from '@villma/villma-ts-shared';

export const metadata: Metadata = {
  title: pricingData.seo.title,
  description: pricingData.seo.description,
  keywords: pricingData.seo.keywords,
  openGraph: {
    title: pricingData.seo.ogTitle,
    description: pricingData.seo.ogDescription,
    type: pricingData.seo.ogType as 'website'
  },
  twitter: {
    card: pricingData.seo.twitterCard as 'summary_large_image',
    title: pricingData.seo.ogTitle,
    description: pricingData.seo.ogDescription
  }
};

function groupPlansByBillingCycle(plans: SubscriptionPlan[]) {
  return {
    monthly: plans.filter((plan) => plan.billingCycle === 'monthly'),
    yearly: plans.filter((plan) => plan.billingCycle === 'yearly')
  };
}

const PricingPage = async () => {
  const plans = await getSubscriptionPlans();
  const groupedPlans = groupPlansByBillingCycle(plans);

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

        <PricingCards groupedPlans={groupedPlans} />

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-white mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-3xl font-bold text-white">
                30-Day Money Back Guarantee
              </h2>
            </div>
            <p className="text-xl text-green-100 font-medium">
              Try our services risk-free! If you&apos;re not completely
              satisfied within 30 days, we&apos;ll give you a full refund. No
              questions asked.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-300">
          <p>{pricingData.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
