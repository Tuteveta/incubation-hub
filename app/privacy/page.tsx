'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database, Bell, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Shield size={32} style={{ color: '#8b5cf6' }} />
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111827' }}>
              Privacy Policy
            </h1>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '32px' }}>
            Last updated: December 20, 2024
          </p>

          {/* Quick Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
            <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '12px', textAlign: 'center' }}>
              <Eye size={24} style={{ color: '#8b5cf6', marginBottom: '8px' }} />
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Transparent data practices</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '12px', textAlign: 'center' }}>
              <Lock size={24} style={{ color: '#8b5cf6', marginBottom: '8px' }} />
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Secure data storage</p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '12px', textAlign: 'center' }}>
              <UserCheck size={24} style={{ color: '#8b5cf6', marginBottom: '8px' }} />
              <p style={{ fontSize: '12px', color: '#6b7280' }}>Your data, your control</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#374151', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                1. Introduction
              </h2>
              <p>
                Content Creator Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Database size={20} style={{ color: '#8b5cf6' }} />
                2. Information We Collect
              </h2>
              <p style={{ marginBottom: '16px' }}>
                We collect information in several ways:
              </p>
              
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>
                Information You Provide
              </h3>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <li><strong>Account Information:</strong> Name, email address, password, profile picture</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely by our payment providers)</li>
                <li><strong>Content:</strong> Courses, videos, documents, and other materials you upload</li>
                <li><strong>Communications:</strong> Messages, support requests, and feedback you send us</li>
              </ul>

              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '8px' }}>
                Information Collected Automatically
              </h3>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                <li><strong>Cookies:</strong> Session data, preferences, authentication tokens</li>
                <li><strong>Analytics:</strong> Learning progress, course completion rates, engagement metrics</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                3. How We Use Your Information
              </h2>
              <p style={{ marginBottom: '12px' }}>
                We use the collected information for the following purposes:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your comments, questions, and support requests</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Personalize your experience and provide tailored content recommendations</li>
                <li>Generate analytics for creators about their course performance</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                4. Information Sharing
              </h2>
              <p style={{ marginBottom: '12px' }}>
                We may share your information in the following circumstances:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>With Creators:</strong> When you enroll in a course, creators receive your name and enrollment information</li>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our platform (payment processors, hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                <strong>We never sell your personal information to third parties.</strong>
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={20} style={{ color: '#8b5cf6' }} />
                5. Data Security
              </h2>
              <p style={{ marginBottom: '12px' }}>
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure data centers with physical security measures</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                6. Your Rights and Choices
              </h2>
              <p style={{ marginBottom: '12px' }}>
                You have the following rights regarding your personal data:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Cookies:</strong> Manage cookie preferences through browser settings</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                To exercise these rights, contact us at privacy@creatorhub.com
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                7. Cookies and Tracking
              </h2>
              <p style={{ marginBottom: '12px' }}>
                We use cookies and similar technologies for:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements (with consent)</li>
              </ul>
              <p style={{ marginTop: '12px' }}>
                You can manage cookie preferences through your browser settings or our cookie consent tool.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                8. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information for legal, business, or compliance purposes. When you delete your account, we will delete or anonymize your data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                9. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses approved by relevant authorities.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                10. Children's Privacy
              </h2>
              <p>
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bell size={20} style={{ color: '#8b5cf6' }} />
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page, updating the "Last updated" date, and sending you an email notification. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', marginBottom: '12px' }}>
                12. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '12px' }}>
                <p><strong>Privacy Team</strong></p>
                <p>Email: privacy@creatorhub.com</p>
                <p>Address: 123 Creator Street, San Francisco, CA 94102</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </section>

            {/* GDPR/CCPA Notice */}
            <section style={{ padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px', border: '1px solid #86efac' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#166534', marginBottom: '8px' }}>
                For EU/EEA and California Residents
              </h3>
              <p style={{ color: '#166534', fontSize: '14px' }}>
                If you are a resident of the European Union, European Economic Area, or California, you have additional rights under GDPR and CCPA respectively. These include the right to know what personal information is collected, the right to delete, and the right to opt-out of the sale of personal information. Contact us to exercise these rights.
              </p>
            </section>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{ textAlign: 'center', marginTop: '32px', color: '#6b7280', fontSize: '14px' }}>
          <Link href="/terms" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Terms of Service</Link>
          <span style={{ margin: '0 12px' }}>•</span>
          <Link href="/" style={{ color: '#8b5cf6', textDecoration: 'none' }}>Home</Link>
        </div>
      </main>
    </div>
  );
}
