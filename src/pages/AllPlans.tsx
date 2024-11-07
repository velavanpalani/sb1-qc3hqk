import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const allPlans = {
  chennai: {
    name: "Chennai Plans",
    plans: [
      { name: "Sennet Base", speed: "25", price: "299", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Sennet Starter", speed: "50", price: "449", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Sennet Smart", speed: "75", price: "599", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Sennet Catchy", speed: "100", price: "699", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Sennet Pronto", speed: "150", price: "899", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" }
    ]
  },
  madurai: {
    name: "Madurai Plans",
    plans: [
      { name: "SENMDURA-10MB-100GB", speed: "10", price: "299", data: "100 GB", postFup: "512 Kbps", validity: "1 MONTH" },
      { name: "SENMDURA-16MB-250GB", speed: "16", price: "499", data: "250 GB", postFup: "512 Kbps", validity: "1 MONTH" },
      { name: "SENMDUFB-40MB-400GB", speed: "40", price: "599", data: "400 GB", postFup: "512 Kbps", validity: "1 MONTH" },
      { name: "SENMDUFB-50MB-500GB", speed: "50", price: "799", data: "500 GB", postFup: "512 Kbps", validity: "1 MONTH" },
      { name: "SENMDUFB-75MB-750GB", speed: "75", price: "999", data: "750 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENMDUFB-100MB-1000GB", speed: "100", price: "1,499", data: "1000 GB", postFup: "1 Mbps", validity: "1 MONTH" }
    ]
  },
  sivagangai: {
    name: "Sivagangai Plans",
    plans: [
      { name: "SENSVAGA-4MB-10GB", speed: "4", price: "299", data: "10 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-8MB-60GB", speed: "8", price: "599", data: "60 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-8MB-120GB", speed: "8", price: "666", data: "120 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-16MB-20GB", speed: "16", price: "599", data: "20 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-20MB-60GB", speed: "20", price: "499", data: "60 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-20MB-120GB", speed: "20", price: "777", data: "120 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-20MB-150GB", speed: "20", price: "899", data: "150 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-20MB-200GB", speed: "20", price: "999", data: "200 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-20MB-300GB", speed: "20", price: "1199", data: "300 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-32MB-400GB", speed: "32", price: "1499", data: "400 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-32MB-600GB", speed: "32", price: "1899", data: "600 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-32MB-800GB", speed: "32", price: "1999", data: "800 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-60MB-600GB", speed: "60", price: "777", data: "600 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-64MB-600GB", speed: "64", price: "2799", data: "600 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-70MB-700GB", speed: "70", price: "899", data: "700 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-110MB-1200GB", speed: "110", price: "1499", data: "1200 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SENSVAGA-128MB-300GB", speed: "128", price: "2999", data: "300 GB", postFup: "1 Mbps", validity: "1 MONTH" }
    ]
  },
  bodi: {
    name: "Bodi Plans",
    plans: [
      { name: "Bodi-UL-5", speed: "5", price: "400", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Bodi-UL-10", speed: "10", price: "750", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Bodi-UL-15", speed: "15", price: "1000", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Bodi-UL-20", speed: "20", price: "1500", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Bodi-UL-25", speed: "25", price: "2000", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "Bodi-Limited-10", speed: "10", price: "500", data: "100 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Limited-15", speed: "15", price: "600", data: "150 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Limited-25", speed: "25", price: "750", data: "250 GB", postFup: "2 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Limited-30", speed: "30", price: "1000", data: "300 GB", postFup: "2 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Limited-40", speed: "40", price: "1250", data: "400 GB", postFup: "2 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Limited-50", speed: "50", price: "1500", data: "500 GB", postFup: "2 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Commerical-10", speed: "10", price: "1500", data: "1000 GB", postFup: "10 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Commerical-15", speed: "15", price: "2000", data: "1500 GB", postFup: "15 Mbps", validity: "1 MONTH" },
      { name: "Bodi-Commerical-20", speed: "20", price: "2500", data: "2000 GB", postFup: "20 Mbps", validity: "1 MONTH" }
    ]
  },
  theni: {
    name: "Theni Plans",
    plans: [
      { name: "SEN-TNI-NEW-10MB-UL", speed: "10", price: "500", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-15MB-UL", speed: "15", price: "600", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-20MB-UL", speed: "20", price: "800", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-30MB-UL", speed: "30", price: "1,000", data: "Unlimited", postFup: "Unlimited", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-30MB-300GB", speed: "30", price: "400", data: "300 GB", postFup: "512 Kbps", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-50MB-500GB", speed: "50", price: "500", data: "500 GB", postFup: "1 Mbps", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-70MB-750GB", speed: "70", price: "700", data: "750 GB", postFup: "2 Mbps", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-100MB-1000GB", speed: "100", price: "900", data: "1000 GB", postFup: "4 Mbps", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-100MB-1250GB", speed: "100", price: "1,000", data: "1250 GB", postFup: "4 Mbps", validity: "1 MONTH" },
      { name: "SEN-TNI-NEW-150MB-1500GB", speed: "150", price: "1,200", data: "1500 GB", postFup: "4 Mbps", validity: "1 MONTH" }
    ]
  }
};

export default function AllPlans() {
  const [selectedLocation, setSelectedLocation] = useState('chennai');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">All Internet Plans</h1>

        <div className="mb-8">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Select Location
          </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="max-w-xs w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.entries(allPlans).map(([key, value]) => (
              <option key={key} value={key}>{value.name}</option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Speed (Mbps)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price (₹)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data Limit
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Post FUP
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Validity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allPlans[selectedLocation].plans.map((plan, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {plan.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plan.speed}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plan.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plan.data}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plan.postFup}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {plan.validity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Link
                        to="/new-connection"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Get Started
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}