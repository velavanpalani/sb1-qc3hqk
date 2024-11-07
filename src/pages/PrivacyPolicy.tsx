import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, Bell } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-600">
              <p>We collect information to provide better services to our users, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Installation address and billing information</li>
                <li>Service usage data and network statistics</li>
                <li>Technical information about your devices and connections</li>
                <li>Customer service interactions and communications</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>We use the collected information for various purposes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and maintain our internet services</li>
                <li>To process payments and send billing information</li>
                <li>To improve our network performance and customer service</li>
                <li>To comply with legal obligations and regulatory requirements</li>
                <li>To communicate about service updates and promotional offers</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <div className="space-y-4 text-gray-600">
              <p>We implement appropriate security measures including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Encryption of sensitive data during transmission</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Physical security measures at our facilities</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Compliance with Laws</h2>
            <div className="space-y-4 text-gray-600">
              <p>We comply with various Indian laws and regulations, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Information Technology Act, 2000</li>
                <li>TRAI regulations for Internet Service Providers</li>
                <li>Consumer Protection Act, 2019</li>
                <li>Department of Telecommunications (DoT) guidelines</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <div className="space-y-4 text-gray-600">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Opt-out of marketing communications</li>
                <li>File complaints about data handling</li>
                <li>Request information about data sharing practices</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}