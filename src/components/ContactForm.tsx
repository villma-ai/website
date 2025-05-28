'use client';

import React, { useState } from 'react';
import { z, ZodIssue } from 'zod';

// Define the Zod schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Message is required' })
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      setErrors([]);

      // Send data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(validatedData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues);
      } else {
        setSubmissionError('Failed to send message. Please try again later.');
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.some((e) => e.path[0] === 'name')
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
        />
        {errors.some((e) => e.path[0] === 'name') && (
          <p className="mt-1 text-sm text-red-500">
            {errors.find((e) => e.path[0] === 'name')?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.some((e) => e.path[0] === 'email')
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
        />
        {errors.some((e) => e.path[0] === 'email') && (
          <p className="mt-1 text-sm text-red-500">
            {errors.find((e) => e.path[0] === 'email')?.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.some((e) => e.path[0] === 'message')
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
        />
        {errors.some((e) => e.path[0] === 'message') && (
          <p className="mt-1 text-sm text-red-500">
            {errors.find((e) => e.path[0] === 'message')?.message}
          </p>
        )}
      </div>

      {submissionError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {submissionError}
        </div>
      )}

      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition-colors ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
