'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', textDecoration: 'none' }}>
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '48px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
            Terms of Service
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '32px' }}>
            Last updated: December 20, 2024
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#374151', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Content Creator Hub platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                2. Description of Service
              </h2>
              <p>
                Content Creator Hub is an online platform that enables content creators to create, publish, and monetize educational content including courses, tutorials, and digital products. The platform also provides tools for student enrollment, payment processing, and analytics.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                3. User Accounts
              </h2>
              <p style={{ marginBottom: '12px' }}>
                To use certain features of our Service, you must register for an account. You agree to:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                4. Creator Responsibilities
              </h2>
              <p style={{ marginBottom: '12px' }}>
                As a content creator on our platform, you agree to:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Create original content or have proper rights to distribute the content</li>
                <li>Not upload content that infringes on intellectual property rights</li>
                <li>Provide accurate descriptions of your courses and products</li>
                <li>Respond to student inquiries in a timely manner</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                5. Student Responsibilities
              </h2>
              <p style={{ marginBottom: '12px' }}>
                As a student using our platform, you agree to:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Use purchased content for personal, non-commercial purposes only</li>
                <li>Not share, distribute, or resell course content</li>
                <li>Not attempt to download or copy protected content</li>
                <li>Provide honest and constructive feedback</li>
                <li>Respect other users and creators in community interactions</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                6. Payment Terms
              </h2>
              <p style={{ marginBottom: '12px' }}>
                All payments are processed securely through our payment partners. By making a purchase, you agree that:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>All fees are quoted in USD unless otherwise specified</li>
                <li>You authorize us to charge your payment method for purchases</li>
                <li>Creators receive payouts according to our revenue sharing agreement</li>
                <li>Refunds are subject to our Refund Policy</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                7. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of the Service are owned by Content Creator Hub or its licensors. Creators retain ownership of their original content but grant us a license to host, display, and distribute their content through our platform.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                8. Prohibited Activities
              </h2>
              <p style={{ marginBottom: '12px' }}>
                You may not use our Service to:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Upload malicious code or attempt to hack the platform</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Engage in fraudulent activities</li>
                <li>Scrape or collect user data without permission</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                9. Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason at our sole discretion. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                10. Disclaimer of Warranties
              </h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                11. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONTENT CREATOR HUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                12. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                13. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Email:</strong> legal@creatorhub.com<br />
                <strong>Address:</strong> 123 Creator Street, San Francisco, CA 94102
              </p>
            </section>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{ textAlign: 'center', marginTop: '32px', color: '#6b7280', fontSize: '14px' }}>
          <Link href="/privacy" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Privacy Policy</Link>
          <span style={{ margin: '0 12px' }}>•</span>
          <Link href="/" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Home</Link>
        </div>
      </main>
    </div>
  );
}
