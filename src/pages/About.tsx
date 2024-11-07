import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-6">About SENNET</h1>
          <p className="text-xl max-w-2xl">
            AAKASH INTERNET SERVICES PVT LTD (SENNET) is a leading Internet Service Provider committed to delivering high-speed connectivity solutions across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to bridge the digital divide, SENNET has grown to become one of the most trusted ISPs in Tamil Nadu. Our journey began with a simple mission: to provide reliable, high-speed internet connectivity at affordable prices.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers across Chennai, Madurai, Sivagangai, and Theni, delivering cutting-edge internet solutions for homes and businesses alike.
                </p>
                <p>
                  Our state-of-the-art infrastructure and dedicated team of professionals ensure that we maintain our commitment to excellence in service delivery and customer support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Happy Customers', value: '10,000+' },
                { label: 'Cities Covered', value: '4' },
                { label: 'Network Uptime', value: '99.9%' },
                { label: 'Team Members', value: '100+' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Reliability',
                description: 'We ensure consistent and dependable service delivery.'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority.'
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: 'Innovation',
                description: 'Continuously improving our technology and services.'
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Excellence',
                description: 'Maintaining the highest standards in everything we do.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, high-speed internet connectivity that empowers individuals and businesses to thrive in the digital age, while maintaining the highest standards of customer service and technical excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred internet service provider in Tamil Nadu, known for our innovation, reliability, and customer-centric approach to connectivity solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}