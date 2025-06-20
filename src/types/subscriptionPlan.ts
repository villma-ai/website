export interface SubscriptionPlan {
  id: string;
  name: 'BASE' | 'EXTRA';
  billingCycle: 'monthly' | 'yearly';
  price: number;
  features: string[];
  description: string;
}
