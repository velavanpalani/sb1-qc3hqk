import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import NewConnection from './pages/NewConnection';
import Contact from './pages/Contact';
import PaymentTerms from './pages/PaymentTerms';
import AllPlans from './pages/AllPlans';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/new-connection" element={<NewConnection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment-terms" element={<PaymentTerms />} />
            <Route path="/all-plans" element={<AllPlans />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;