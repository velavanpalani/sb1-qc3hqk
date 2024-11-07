import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Network, Radio, Wifi, Phone, CheckCircle2, Download, Upload, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PlanCard from '../components/PlanCard';

const locationPlans = {
  chennai: [
    {
      name: "Sennet Base",
      speed: "25",
      price: "299",
      features: [
        "Unlimited Data",
        "24/7 Support",
        "Free Installation",
        "No Contract"
      ]
    },
    {
      name: "Sennet Starter",
      speed: "50",
      price: "449",
      features: [
        "Unlimited Data",
        "24/7 Priority Support",
        "Free Installation",
        "Static IP"
      ],
      popular: true
    },
    {
      name: "Sennet Smart",
      speed: "75",
      price: "599",
      features: [
        "Unlimited Data",
        "24/7 Premium Support",
        "Free Installation",
        "Multiple Static IPs"
      ]
    }
  ],
  madurai: [
    {
      name: "SENMDURA-10MB-100GB",
      speed: "10",
      price: "299",
      features: [
        "100 GB Data",
        "512 Kbps Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    },
    {
      name: "SENMDURA-16MB-250GB",
      speed: "16",
      price: "499",
      features: [
        "250 GB Data",
        "512 Kbps Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ],
      popular: true
    },
    {
      name: "SENMDUFB-40MB-400GB",
      speed: "40",
      price: "599",
      features: [
        "400 GB Data",
        "512 Kbps Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    }
  ],
  sivagangai: [
    {
      name: "SENSVAGA-4MB-10GB",
      speed: "4",
      price: "299",
      features: [
        "10 GB Data",
        "1 Mbps Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    },
    {
      name: "SENSVAGA-8MB-60GB",
      speed: "8",
      price: "599",
      features: [
        "60 GB Data",
        "1 Mbps Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ],
      popular: true
    },
    {
      name: "SENSVAGA-8MB-120GB",
      speed: "8",
      price: "666",
      features: [
        "120 GB Data",
        "1 Mbps Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    }
  ],
  bodi: [
    {
      name: "Bodi-UL-5",
      speed: "5",
      price: "400",
      features: [
        "Unlimited Data",
        "Unlimited Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    },
    {
      name: "Bodi-UL-10",
      speed: "10",
      price: "750",
      features: [
        "Unlimited Data",
        "Unlimited Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ],
      popular: true
    },
    {
      name: "Bodi-UL-15",
      speed: "15",
      price: "1000",
      features: [
        "Unlimited Data",
        "Unlimited Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    }
  ],
  theni: [
    {
      name: "SEN-TNI-NEW-10MB-UL",
      speed: "10",
      price: "500",
      features: [
        "Unlimited Data",
        "Unlimited Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    },
    {
      name: "SEN-TNI-NEW-15MB-UL",
      speed: "15",
      price: "600",
      features: [
        "Unlimited Data",
        "Unlimited Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ],
      popular: true
    },
    {
      name: "SEN-TNI-NEW-20MB-UL",
      speed: "20",
      price: "800",
      features: [
        "Unlimited Data",
        "Unlimited Post FUP",
        "24/7 Support",
        "1 Month Validity"
      ]
    }
  ]
};

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('chennai');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Network Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Experience Lightning-Fast Internet</h1>
          <p className="text-xl mb-8 max-w-2xl">Connect to the future with SENNET's high-speed internet solutions. Unlimited data, unmatched reliability.</p>
          <div className="flex gap-4">
            <Link to="/new-connection" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
              Get Started
            </Link>
            <Link to="/all-plans" className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-100">
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Perfect Plan</h2>
          <p className="text-gray-600 text-center mb-8">Get the speed you need at prices you'll love</p>
          
          {/* Location Selector */}
          <div className="max-w-xs mx-auto mb-12">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Select Your Location
            </label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="chennai">Chennai</option>
              <option value="madurai">Madurai</option>
              <option value="sivagangai">Sivagangai</option>
              <option value="bodi">Bodi</option>
              <option value="theni">Theni</option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locationPlans[selectedLocation].map((plan, index) => (
              <PlanCard
                key={index}
                name={plan.name}
                speed={plan.speed}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/all-plans" 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Coverage Areas</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                city: "Chennai",
                description: "Metropolitan connectivity",
                bgColor: "bg-blue-100"
              },
              {
                city: "Madurai",
                description: "Temple city coverage",
                bgColor: "bg-green-100"
              },
              {
                city: "Sivagangai",
                description: "Rural broadband",
                bgColor: "bg-yellow-100"
              },
              {
                city: "Bodi",
                description: "Hill station network",
                bgColor: "bg-purple-100"
              },
              {
                city: "Theni",
                description: "Valley connectivity",
                bgColor: "bg-pink-100"
              }
            ].map((area, index) => (
              <div key={index} className={`relative rounded-lg overflow-hidden ${area.bgColor} p-6 text-center hover:shadow-lg transition-shadow`}>
                <h3 className="text-xl font-bold mb-2">{area.city}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}