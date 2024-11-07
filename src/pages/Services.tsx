import React from 'react';
import { Network, Radio, Wifi, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "Broadband Internet",
      description: "High-speed fiber broadband for homes and small businesses",
      features: [
        "Speeds up to 1 Gbps",
        "Unlimited data usage",
        "Low latency gaming",
        "4K streaming support",
        "24/7 technical support"
      ],
      suitable: "Perfect for homes and small offices"
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Leased Line",
      description: "Dedicated enterprise-grade connectivity solutions",
      features: [
        "1:1 dedicated bandwidth",
        "99.9% uptime guarantee",
        "Symmetric upload/download",
        "24x7 priority support",
        "Static IP addresses"
      ],
      suitable: "Ideal for large businesses and corporations"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Public WiFi",
      description: "Secure and reliable WiFi solutions for public spaces",
      features: [
        "High-density coverage",
        "Secure authentication",
        "Usage analytics",
        "Customizable portal",
        "Content filtering"
      ],
      suitable: "Great for hotels, cafes, and public venues"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "VOIP Services",
      description: "Crystal-clear voice communication over IP",
      features: [
        "HD voice quality",
        "Video conferencing",
        "Mobile integration",
        "Call recording",
        "Virtual numbers"
      ],
      suitable: "Perfect for business communications"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive internet and communication solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-3 divide-x divide-gray-100">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <p className="text-sm text-gray-500">{service.suitable}</p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Get Started</h3>
                      <p className="text-gray-600 mb-6">
                        Contact us for customized pricing and packages tailored to your needs.
                      </p>
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}