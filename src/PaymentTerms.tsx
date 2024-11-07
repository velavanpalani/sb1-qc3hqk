import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PaymentTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Payment Terms and Conditions</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Payment Methods</h2>
            <p className="text-gray-600">We accept payments through various methods including:</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
              <li>UPI</li>
              <li>Digital Wallets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Billing Cycle</h2>
            <p className="text-gray-600">
              Bills are generated on the 1st of every month. Payment is due within 15 days of bill generation.
              Late payments may result in service interruption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Late Payment Charges</h2>
            <p className="text-gray-600">
              A late payment fee of 2% per month will be charged on outstanding amounts after the due date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Service Interruption</h2>
            <p className="text-gray-600">
              Services may be suspended if payment is not received within 7 days after the due date.
              A reconnection fee may apply for restored services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Refunds</h2>
            <p className="text-gray-600">
              Refunds are processed within 7-10 working days. Refund policies vary based on the service plan
              and circumstances of the refund request.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} AAKASH INTERNET SERVICES PVT LTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PaymentTerms;