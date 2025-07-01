import {
  collection,
  getDocs,
  Timestamp
} from 'firebase/firestore';
import { getFirebaseDb } from './firebase';
import { SubscriptionPlan } from '@villma/villma-ts-shared';

// Utility function to convert Firestore Timestamps to Date objects
function convertTimestamps(data: Record<string, unknown>): Record<string, unknown> {
  if (!data) return data;

  const converted = { ...data };

  // Convert known date fields
  const dateFields = ['createdAt', 'updatedAt', 'startDate', 'endDate', 'dueDate', 'paidAt'];

  dateFields.forEach(field => {
    if (converted[field] && converted[field] instanceof Timestamp) {
      converted[field] = (converted[field] as Timestamp).toDate();
    }
  });

  return converted;
}

// Subscription Plan Functions
export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  const db = getFirebaseDb();
  const plansRef = collection(db, 'subscriptionPlans');
  const plansSnap = await getDocs(plansRef);

  return plansSnap.docs.map(doc => ({
    id: doc.id,
    ...convertTimestamps(doc.data())
  })) as unknown as SubscriptionPlan[];
}

export const db = getFirebaseDb();
