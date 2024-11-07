import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PaymentTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Payment - Terms & Conditions</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Please read these terms carefully before using our online payment facility.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Online Payments */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Online Payments</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                This online payment system is provided by AAKASH INTERNET SERVICES PVT LTD. AAKASH INTERNET SERVICES PVT LTD may update these terms from time to time and any changes will be effective immediately on being set out here. Please ensure you are aware of the current terms. The country of domicile for AAKASH INTERNET SERVICES PVT LTD is India.
              </p>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Please read these terms carefully before using the online payment facility. Using the online payment facility on this website indicates that you accept these terms. If you do not accept these terms do not use this facility.
              </p>
              <p className="font-semibold">All payments are subject to the following conditions:-</p>
              <ul className="list-disc list-inside space-y-3 pl-4">
                <li>The description of services of match making are specific to your need, when you log in with your unique password. Normally payment is required in advance (i.e. before you commence your activity).</li>
                <li>All Fees quoted are in Indian Rupees. The AAKASH INTERNET SERVICES PVT LTD reserves the right to change the fees at any time.</li>
                <li>Your payment will normally reach the AAKASH INTERNET SERVICES PVT LTD account to which you are making a payment within two working days.</li>
                <li>We cannot accept liability for a payment not reaching the correct AAKASH INTERNET SERVICES PVT LTD account due to you quoting an incorrect account number or incorrect personal details. Neither can we accept liability if payment is refused or declined by the credit/debit card supplier for any reason.</li>
                <li>If the card supplier declines payment the AAKASH INTERNET SERVICES PVT LTD is under no obligation to bring this fact to your attention. You should check with your bank/credit/debit card supplier that payment has been deducted from your account.</li>
                <li>In no event will the AAKASH INTERNET SERVICES PVT LTD be liable for any damages whatsoever arising out of the use, inability to use, or the results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.</li>
              </ul>
            </div>
          </section>

          {/* Refund Policy */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If the Customer leaves the AAKASH INTERNET SERVICES PVT LTD before they complete their service period, there shall be no entitlement to a refund of paid service fees.
              </p>
              <p>
                Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the AAKASH INTERNET SERVICES PVT LTD to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been paid.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                This Privacy Policy applies to all of the products, services and websites offered by AAKASH INTERNET SERVICES PVT LTD. Sometimes, we may post product specific privacy notices or Help Centre materials to explain our products in more detail.
              </p>
              <p>
                If you have any questions about this Privacy Policy, please feel free to contact us through our website or write to us at
              </p>
              <p>
                Information we collect and how we use it for our AAKASH INTERNET SERVICES PVT LTD.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Changes to our Privacy Policy</h3>
              <p>
                AAKASH INTERNET SERVICES PVT LTD reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between AAKASH INTERNET SERVICES PVT LTD and any user visiting the AAKASH INTERNET SERVICES PVT LTD website or providing identifying information of any kind.
              </p>
            </div>
          </section>

          {/* DND Policy */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">DND Policy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email: noc@sennet.in with your mobile numbers and you will be excluded from the alerts list.
              </p>
            </div>
          </section>

          {/* Contact Details */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Email: accounts@sennet
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PaymentTerms;