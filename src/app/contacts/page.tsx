import React from 'react';
import ContactForm from '../../components/ContactForm';
import content from '@/data/contacts/content.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  openGraph: {
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: [content.seo.ogImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: content.seo.twitterTitle,
    description: content.seo.twitterDescription,
    images: [content.seo.ogImage]
  }
};

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        {content.header.title}
      </h1>
      <p className="text-xl text-center text-slate-600 mb-8">
        {content.header.description}
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactsPage;
