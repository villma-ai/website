'server only';

import { Firestore, DocumentSnapshot } from '@google-cloud/firestore';
import { SubscriptionPlan } from '@villma/villma-ts-shared';

export function getFirestoreDb(): Firestore {
  return new Firestore({
    projectId: process.env.GOOGLE_CLOUD_PROJECT,
    databaseId: process.env.FIRESTORE_DATABASE_NAME,
  });
}

// Utility function to convert Firestore Timestamps to Date objects
function convertTimestamps(data: Record<string, unknown>): Record<string, unknown> {
  if (!data) return data;

  const converted = { ...data };

  // Convert known date fields
  const dateFields = ['createdAt', 'updatedAt', 'startDate', 'endDate', 'dueDate', 'paidAt'];

  dateFields.forEach((field) => {
    if (converted[field] && converted[field] instanceof Date) {
      converted[field] = converted[field] as Date;
    }
  });

  return converted;
}

// Subscription Plan Functions
export async function getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
  const db = getFirestoreDb() as Firestore;
  const plansRef = db.collection('subscriptionPlans');
  const plansSnap = await plansRef.get();

  return plansSnap.docs.map((doc: DocumentSnapshot) => ({
    id: doc.id,
    ...convertTimestamps(doc.data() as Record<string, unknown>)
  })) as unknown as SubscriptionPlan[];
}

export const db = getFirestoreDb();
