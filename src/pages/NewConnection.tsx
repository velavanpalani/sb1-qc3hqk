import React from 'react';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';

export default function NewConnection() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-6">Get Connected</h1>
          <p className="text-xl max-w-2xl">
            Start your journey with SENNET today. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Connection Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-6">New Connection Request</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Installation Address
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Plan
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Basic Broadband</option>
                      <option>Premium Fiber</option>
                      <option>Business Leased Line</option>
                      <option>Public WiFi Solution</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

            {/* Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Connection Process</h3>
                <div className="space-y-4">
                  {[
                    'Submit the connection request form',
                    'Our team will verify the availability in your area',
                    'Choose your preferred plan and make the payment',
                    'Schedule installation at your convenience',
                    'Get connected within 24-48 hours'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Chennai, Madurai, Sivagangai, Theni</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">support@sennet.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}