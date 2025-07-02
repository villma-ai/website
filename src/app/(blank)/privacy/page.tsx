import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Villma',
  description:
    'Our privacy policy explains how we collect, use, and protect your personal data in compliance with GDPR regulations.',
  keywords: 'privacy policy, GDPR, data protection, personal data, cookies'
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong>{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Villma (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;) is committed to protecting your privacy and
                ensuring the security of your personal data. This Privacy Policy
                explains how we collect, use, and protect your information when
                you use our website and services.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We comply with the General Data Protection Regulation (GDPR) and
                other applicable data protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                2.1 Contact Form Data
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you submit a contact form on our website, we collect the
                following information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Company name (if provided)</li>
                <li>Phone number (if provided)</li>
                <li>Message content</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Important:</strong> We do not store this data in our
                databases. The information is sent directly to our email address
                and is only retained for the time necessary to respond to your
                inquiry.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the information you provide solely for the following
                purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>
                  To respond to your inquiries and provide customer support
                </li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and services</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                We do not use your personal data for marketing purposes without
                your explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our website uses cookies to enhance your browsing experience. We
                use the following types of cookies:
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                4.1 Google Analytics Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use Google Analytics to understand how visitors interact with
                our website. Google Analytics uses cookies to collect anonymous
                information about your browsing behavior, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referral sources</li>
                <li>Device and browser information</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                This information is used solely for website analytics and
                improvement purposes. Google Analytics data is processed in
                accordance with Google&apos;s privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Contact Form Data:</strong> We do not store contact form
                submissions in our databases. The information is sent directly
                to our email and is only retained for the time necessary to
                respond to your inquiry.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Analytics Data:</strong> Google Analytics data is
                retained according to Google&apos;s data retention policies,
                typically for 26 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Your Rights Under GDPR
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Under the GDPR, you have the following rights regarding your
                personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>
                  <strong>Right to Access:</strong> You can request information
                  about what personal data we hold about you
                </li>
                <li>
                  <strong>Right to Rectification:</strong> You can request
                  correction of inaccurate personal data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> You can request deletion of
                  your personal data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You can request a
                  copy of your personal data in a structured format
                </li>
                <li>
                  <strong>Right to Object:</strong> You can object to the
                  processing of your personal data
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> You can withdraw
                  consent at any time
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Secure email transmission</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal data</li>
                <li>Encryption of sensitive information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>
                  <strong>Google Analytics:</strong> For website analytics
                  (privacy policy:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    https://policies.google.com/privacy
                  </a>
                  )
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300">
                These services have their own privacy policies, and we encourage
                you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &ldquo;Last updated&rdquo; date. We
                encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@villma.com"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    info@villma.com
                  </a>
                  <br />
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://villma.com"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    https://villma.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
