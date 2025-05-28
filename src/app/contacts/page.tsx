import React from 'react';
import ContactForm from '../../components/ContactForm';

const ContactsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-700">
        Contact Us
      </h1>
      <ContactForm />
    </div>
  );
};

export default ContactsPage;
