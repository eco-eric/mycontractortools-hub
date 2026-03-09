import React from 'react';
import { Hammer, Receipt, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 text-orange-600">
            <Hammer size={64} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            My Contractor Tools
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            The ultimate resource hub for service professionals. Simple, powerful tools to build, document, and grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#apps" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
              Explore Apps
            </a>
            <a href="https://workedge.pro" className="bg-white border border-slate-200 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition">
              Visit WorkEdge Pro
            </a>
          </div>
        </div>
      </header>

      {/* App Grid */}
      <main id="apps" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">The Professional Suite</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* WorkEdge Pro */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">WorkEdge Pro</h3>
            <p className="text-slate-600 mb-6">
              Bulletproof field documentation and evidence gathering. Protect your work and your profits.
            </p>
            <a href="https://workedge.pro" className="text-blue-600 font-bold hover:underline">Learn more →</a>
          </div>

          {/* OttoPay */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
              <Receipt size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">OttoPay</h3>
            <p className="text-slate-600 mb-6">
              Fast, professional invoicing designed for contractors. Get paid on-site, instantly.
            </p>
            <a href="https://ottopay.pro" className="text-emerald-600 font-bold hover:underline">Learn more →</a>
          </div>

          {/* Truficient */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Truficient</h3>
            <p className="text-slate-600 mb-6">
              Smart energy solutions and advanced HVAC services. Efficiency meets expertise.
            </p>
            <a href="https://truficient.com" className="text-orange-600 font-bold hover:underline">Learn more →</a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center">
        <p className="mb-4">© 2026 My Contractor Tools. All rights reserved.</p>
        <p className="text-sm">Smart Savings, Sustainable Solutions</p>
      </footer>
    </div>
  );
}
