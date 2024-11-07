import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet, Calendar, AlertCircle, RefreshCw, Shield, FileText } from 'lucide-react';

function PaymentTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Payment Terms and Conditions</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Clear and transparent payment policies for our valued customers
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Online Payments Introduction */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">Online Payments</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-600">
                <p>
                  This online payment system is provided by AAKASH INTERNET SERVICES PVT LTD. AAKASH INTERNET SERVICES PVT LTD may update these terms from time to time and any changes will be effective immediately on being set out here. Please ensure you are aware of the current terms. The country of domicile for AAKASH INTERNET SERVICES PVT LTD is India.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <p className="text-blue-800">
                    Please read these terms carefully before using the online payment facility. Using the online payment facility on this website indicates that you accept these terms. If you do not accept these terms do not use this facility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">Payment Conditions</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-600">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <p>All Fees quoted are in Indian Rupees. The AAKASH INTERNET SERVICES PVT LTD reserves the right to change the fees at any time.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <p>Your payment will normally reach the AAKASH INTERNET SERVICES PVT LTD account to which you are making a payment within two working days.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <p>We cannot accept liability for a payment not reaching the correct AAKASH INTERNET SERVICES PVT LTD account due to you quoting an incorrect account number or incorrect personal details.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <p>If the card supplier declines payment, the AAKASH INTERNET SERVICES PVT LTD is under no obligation to bring this fact to your attention. You should check with your bank/credit/debit card supplier that payment has been deducted from your account.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">Refund Policy</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-600">
                <p>If the Customer leaves the AAKASH INTERNET SERVICES PVT LTD before they complete their service period, there shall be no entitlement to a refund of paid service fees.</p>
                <p>Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the AAKASH INTERNET SERVICES PVT LTD to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been paid.</p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">Privacy Policy</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-600">
                <p>This Privacy Policy applies to all of the products, services and websites offered by AAKASH INTERNET SERVICES PVT LTD. Sometimes, we may post product specific privacy notices or Help Centre materials to explain our products in more detail.</p>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                  <p className="text-yellow-800">
                    AAKASH INTERNET SERVICES PVT LTD reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between AAKASH INTERNET SERVICES PVT LTD and any user visiting the AAKASH INTERNET SERVICES PVT LTD website or providing identifying information of any kind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DND Policy */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">DND Policy</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4 text-gray-600">
                <p>If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email to noc@sennet.in with your mobile numbers and you will be excluded from the alerts list.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is available 24/7 to assist you with any payment-related queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918012511111"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Call Support
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaymentTerms;