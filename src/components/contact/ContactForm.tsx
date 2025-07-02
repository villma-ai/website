'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

const requestReasons = [
  {
    id: 'pre-sales',
    label: 'Implement a pre-sales system',
    description:
      'Intelligent AI agents that answer and suggest products, quote generation, and customer tracking.'
  },
  {
    id: 'post-sales',
    label: 'Implement a post-sales system',
    description:
      'Intelligent AI agents will enhance customer satisfaction with efficient order management, delivery tracking, and after-sales support.'
  },
  {
    id: 'claim',
    label: 'Implement a claim system',
    description:
      'Automate customer complaints and warranty claims effectively with our comprehensive claim management system.'
  },
  {
    id: 'other',
    label: 'Other',
    description:
      "Have a different requirement? Let us know and we'll help you find the right solution."
  }
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  requestReasons: z.array(z.string()).min(1, 'Please select at least one option'),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to our privacy policy'
  })
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredReason, setHoveredReason] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestReasons: []
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Additional client-side validation
    if (!data.name || !data.email || !data.message || data.requestReasons.length === 0) {
      toast.error('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || '',
          company: data.company?.trim() || '',
          message: data.message.trim(),
          requestReasons: data.requestReasons
        })
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
      } else {
        console.error('Contact form error:', result);
        const errorMessage = result.error || 'Failed to send message. Please try again.';
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.company ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What would you like to implement? *
        </label>
        <div className="space-y-3">
          {requestReasons.map((reason) => (
            <div key={reason.id} className="relative">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id={reason.id}
                    value={reason.id}
                    {...register('requestReasons')}
                    className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor={reason.id}
                    className="text-sm text-gray-700 cursor-pointer"
                    onMouseEnter={() => setHoveredReason(reason.id)}
                    onMouseLeave={() => setHoveredReason(null)}
                  >
                    {reason.label}
                  </label>
                </div>
              </div>
              {hoveredReason === reason.id && (
                <div className="absolute z-10 mt-1 w-64 rounded-md bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5">
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {errors.requestReasons && (
          <p className="mt-1 text-sm text-red-500">{errors.requestReasons.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={`w-full px-3 py-2 border rounded-md ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id="privacyConsent"
              {...register('privacyConsent')}
              className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="privacyConsent" className="text-sm text-gray-700 cursor-pointer">
              I agree to the{' '}
              <Link
                href="/privacy"
                className="text-sky-600 hover:text-sky-700 underline"
                target="_blank"
              >
                Privacy Policy
              </Link>{' '}
              and consent to the processing of my personal data for the purpose of responding to my
              inquiry.
            </label>
          </div>
        </div>
        {errors.privacyConsent && (
          <p className="mt-1 text-sm text-red-500">{errors.privacyConsent.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition-colors flex items-center justify-center ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
