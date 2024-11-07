import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with our support team. We're here to help you 24/7.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
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
                      Subject
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Technical Support</option>
                      <option>Billing Query</option>
                      <option>New Connection</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Registered Office:</h4>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <p className="text-gray-600">
                        2/187, 1st Main Road, 4th Cross Street,<br />
                        Gomathipuram, Madurai - 625020
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Administrative Office:</h4>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <p className="text-gray-600">
                        No: 1932, Ground Floor, 38th Street,<br />
                        I Block, 18th Main Road, Anna Nagar,<br />
                        Chennai - 600040
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">+91 8012511111</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">noc@sennet.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Working Hours</h4>
                      <p className="text-gray-600">24/7 Customer Support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Live Chat Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Need immediate assistance? Chat with our support team right now.
                </p>
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}