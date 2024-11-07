import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <img 
            src="https://sennet.in/wp-content/uploads/2019/06/footer-logo-new.png" 
            alt="SENNET Footer Logo" 
            className="h-16 w-auto"
          />
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About SENNET</h3>
            <p className="text-sm">AAKASH INTERNET SERVICES PVT LTD is committed to delivering the fastest, reliable and affordable connectivity across Chennai, Madurai, Sivagangai, Bodi and Theni.</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/payment-terms" className="hover:text-white">Payment - Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 8012511111
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                noc@sennet.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  2/187, 1st Main Road,<br />
                  4th Cross Street,<br />
                  Gomathipuram,<br />
                  Madurai - 625020
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} AAKASH INTERNET SERVICES PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}