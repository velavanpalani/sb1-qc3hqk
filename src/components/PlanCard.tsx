import React from 'react';
import { Check } from 'lucide-react';

interface PlanCardProps {
  name: string;
  speed: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PlanCard({ name, speed, price, features, popular }: PlanCardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm relative ${popular ? 'border-2 border-blue-500' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">₹{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <p className="text-blue-600 font-semibold mb-4">Up to {speed} Mbps</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}