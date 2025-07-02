"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import content from '@/data/hp/content.json';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

// Define Zod schema for validation
const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to our privacy policy',
  }),
});
type FormData = z.infer<typeof formSchema>;

export default function Teaser() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { privacyConsent: false },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch('/api/teaser-signup', {
        method: 'POST',
        body: JSON.stringify({ email: data.email }),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        // Show error from API
        alert(result.error || 'Something went wrong');
      }
    } catch {
      alert('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.classList.add('teaser-page');
    return () => {
      document.body.classList.remove('teaser-page');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
      <Image
        src={content.teaser.image}
        alt="Villma Hero"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-50"
        priority
      />
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-6 pb-12 rounded-xl shadow-2xl backdrop-blur-md bg-white md:bg-white/60 md:hover:bg-white/90 transition-colors">
        <div className="flex justify-center mb-6">
          <Image
            src="/Villma-Logo_2025-05-21.jpg"
            alt="Villma Logo"
            width={120}
            height={120}
            className="rounded-full shadow-xl bg-white ring-4 ring-sky-500 p-2 object-contain w-20 h-20 md:w-[120px] md:h-[120px]"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center text-sky-700 drop-shadow-lg">{content.teaser.title}</h1>
        <p className="mb-6 text-lg text-center text-gray-700 font-medium">{content.teaser.subtitle}</p>
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-center text-pink-600">{content.teaser.formTitle}</h2>
        <p className="mb-6 text-center text-gray-600">{content.teaser.formDescription}</p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">{content.teaser.successMessage}</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-2 w-full max-w-xs">
            <input
              type="email"
              required
              placeholder={content.teaser.inputPlaceholder}
              {...register('email')}
              className={`border px-3 py-2 rounded w-full ${errors.email ? 'border-red-500' : ''} focus:outline-none focus:ring-2 focus:ring-sky-500`}
              disabled={loading}
            />
            {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email.message as string}</div>}
            <div className="flex items-start mt-2 w-full">
              <input
                type="checkbox"
                id="privacyConsent"
                {...register('privacyConsent')}
                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500 mt-1 focus:outline-none focus:ring-2"
                disabled={loading}
              />
              <label htmlFor="privacyConsent" className="ml-2 text-sm text-gray-700 cursor-pointer">
                I agree to the{' '}
                <Link href="/privacy" className="text-sky-600 hover:text-sky-700 underline" target="_blank">
                  Privacy Policy
                </Link>{' '}
                and consent to the processing of my personal data for the purpose of responding to my inquiry.
              </label>
            </div>
            {errors.privacyConsent && <div className="text-red-600 text-sm mt-1">{errors.privacyConsent.message as string}</div>}
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded w-full font-bold shadow-md transition-colors"
              disabled={loading}
            >
              {loading ? 'Sending...' : content.teaser.buttonText}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 