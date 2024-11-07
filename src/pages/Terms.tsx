import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, AlertCircle, Clock, Wifi } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Service Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>By subscribing to our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Pay all charges associated with your service plan</li>
                <li>Allow authorized personnel access for installation and maintenance</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
            <div className="space-y-4 text-gray-600">
              <p>Our service commitment includes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>99.9% uptime guarantee for business leased lines</li>
                <li>24/7 technical support</li>
                <li>Scheduled maintenance notifications</li>
                <li>Service level agreements as per plan</li>
                <li>Network monitoring and optimization</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>Prohibited activities include:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Unauthorized access to other networks or systems</li>
                <li>Distribution of malware or harmful content</li>
                <li>Spam or unsolicited mass communications</li>
                <li>Copyright infringement or illegal content sharing</li>
                <li>Reselling or sharing service without authorization</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Service Modifications</h2>
            <div className="space-y-4 text-gray-600">
              <p>We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Modify service features and pricing with notice</li>
                <li>Implement fair usage policies</li>
                <li>Suspend service for policy violations</li>
                <li>Update terms and conditions periodically</li>
                <li>Terminate service for repeated violations</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Regulatory Compliance</h2>
            <div className="space-y-4 text-gray-600">
              <p>We operate under:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>TRAI guidelines and regulations</li>
                <li>DoT licensing requirements</li>
                <li>Cybersecurity and data protection laws</li>
                <li>Consumer protection regulations</li>
                <li>Local municipal permissions</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}