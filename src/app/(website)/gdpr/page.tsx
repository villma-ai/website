import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance - Villma',
  description:
    'Learn about our GDPR compliance practices and how we protect your personal data rights under European data protection regulations.',
  keywords:
    'GDPR, data protection, privacy rights, European data protection, personal data rights'
};

const GDPRPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            GDPR Compliance
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
                What is GDPR?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The General Data Protection Regulation (GDPR) is a comprehensive
                data protection law that came into effect on May 25, 2018. It
                applies to all organizations operating within the EU and those
                that offer goods or services to individuals in the EU,
                regardless of where the organization is based.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                GDPR gives individuals greater control over their personal data
                and requires organizations to be more transparent about how they
                collect, use, and protect personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our GDPR Commitment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Villma, we are committed to full compliance with GDPR and
                protecting the privacy rights of all our users. We have
                implemented comprehensive data protection measures and processes
                to ensure we meet all GDPR requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your GDPR Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Under GDPR, you have the following rights regarding your
                personal data:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    1. Right to Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can request a copy of all personal data we hold about
                    you and information about how we process it.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    2. Right to Rectification
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can request correction of any inaccurate or incomplete
                    personal data we hold about you.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    3. Right to Erasure
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can request deletion of your personal data in certain
                    circumstances (also known as the &ldquo;right to be
                    forgotten&rdquo;).
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    4. Right to Data Portability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can request a copy of your personal data in a
                    structured, machine-readable format.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    5. Right to Object
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can object to the processing of your personal data in
                    certain circumstances.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    6. Right to Withdraw Consent
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can withdraw your consent for data processing at any
                    time.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We Process Your Data
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Important: Minimal Data Processing
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  We follow a &ldquo;data minimization&rdquo; principle. We only
                  collect and process the personal data that is absolutely
                  necessary for the specific purpose for which it was collected.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Contact Form Data
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>
                  <strong>Purpose:</strong> To respond to your inquiries and
                  provide customer support
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interest in providing
                  customer service
                </li>
                <li>
                  <strong>Storage:</strong> We do not store this data in
                  databases - it&apos;s sent directly to our email
                </li>
                <li>
                  <strong>Retention:</strong> Only for the time necessary to
                  respond to your inquiry
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Analytics Data
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>
                  <strong>Purpose:</strong> To understand website usage and
                  improve our services
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interest in website
                  optimization
                </li>
                <li>
                  <strong>Data Type:</strong> Anonymous analytics data via
                  Google Analytics
                </li>
                <li>
                  <strong>Retention:</strong> According to Google Analytics
                  policies (typically 26 months)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Protection Measures
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Measures
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                    <li>Secure HTTPS encryption</li>
                    <li>Email encryption for contact form submissions</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Organizational Measures
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                    <li>Data protection training for staff</li>
                    <li>Regular policy reviews and updates</li>
                    <li>Incident response procedures</li>
                    <li>Data protection impact assessments</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Exercising Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To exercise any of your GDPR rights, please contact us using the
                information below. We will respond to your request within 30
                days of receipt.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mb-4">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                  Free of Charge
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  All GDPR rights requests are processed free of charge. We will
                  not charge you for exercising your rights.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                  Verification Required
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200">
                  We may need to verify your identity before processing certain
                  requests to protect your data security.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Breach Procedures
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In the unlikely event of a data breach that affects your
                personal data, we have procedures in place to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Detect and assess the breach within 72 hours</li>
                <li>Notify the relevant supervisory authority if required</li>
                <li>
                  Notify affected individuals if the breach poses a high risk to
                  their rights and freedoms
                </li>
                <li>
                  Take immediate steps to contain and remediate the breach
                </li>
                <li>Document all breach incidents and our response</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                International Data Transfers
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use Google Analytics, which may involve the transfer of data
                to servers outside the European Economic Area (EEA). Google
                Analytics is certified under the EU-U.S. Privacy Shield
                Framework and provides adequate data protection safeguards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Our Data Protection Officer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about our GDPR compliance or wish to
                exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Contact Information
                    </h3>
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We will respond to all GDPR-related requests within 30
                      days of receipt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Supervisory Authority
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                If you are not satisfied with our response to your GDPR request,
                you have the right to lodge a complaint with your local data
                protection supervisory authority. You can find your local
                authority at:
                <a
                  href="https://edpb.europa.eu/about-edpb/board/members_en"
                  className="text-pink-500 hover:text-pink-600 ml-1"
                >
                  https://edpb.europa.eu/about-edpb/board/members_en
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;
