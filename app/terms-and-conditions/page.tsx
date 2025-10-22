// app/terms-and-conditions/page.tsx
"use client";

import { useState } from "react";
import InfoPageLayout from "../components/InfoPageLayout";
import { Send, CheckCircle } from "lucide-react";

export default function TermsAndConditionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
    section: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/terms-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: 'terms-question'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", question: "", section: "" });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    "Agreement to Terms",
    "Use License & Intellectual Property", 
    "Product Information Disclaimer",
    "Limitation of Liability",
    "Governing Law"
  ];

  return (
    <InfoPageLayout title="Terms & Conditions">
      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing this website, you are agreeing to be bound by these Terms
        and Conditions of Use, all applicable laws and regulations, and agree
        that you are responsible for compliance with any applicable local laws.
      </p>

      <h2>2. Use License & Intellectual Property</h2>
      <p>
        The content, logos, graphics, and other intellectual property on this
        site are the property of Radhika Machineries and are protected by
        copyright and trademark laws. Permission is granted to temporarily
        download one copy of the materials for personal, non-commercial
        transitory viewing only.
      </p>

      <h2>3. Product Information Disclaimer</h2>
      <p>
        The information and specifications of the machinery displayed on this
        website are for general informational purposes only and are subject to
        change without notice. They do not constitute a binding offer. For
        precise, up-to-date specifications and quotations, please contact our
        sales team directly.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        In no event shall Radhika Machineries be liable for any damages arising
        out of the use or inability to use the materials on our website, even if
        we have been notified orally or in writing of the possibility of such
        damage.
      </p>

      <h2>5. Governing Law</h2>
      <p>
        Any claim relating to Radhika Machineries&apos; website shall be
        governed by the laws of the State of Rajasthan, India without regard to
        its conflict of law provisions.
      </p>

      {/* Questions Form */}
      <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border-0">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <Send className="mr-3 h-6 w-6 text-primary" />
          Have Questions About Our Terms?
        </h2>
        <p className="text-slate-600 mb-6">
          We're here to help clarify any concerns you may have about our terms and conditions.
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
            <p className="text-slate-600">Your question has been submitted. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Related Section (Optional)
              </label>
              <select
                value={formData.section}
                onChange={(e) => setFormData({...formData, section: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select a section</option>
                {sections.map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Question *
              </label>
              <textarea
                required
                rows={4}
                value={formData.question}
                onChange={(e) => setFormData({...formData, question: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Please describe your question or concern..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? 'Submitting...' : 'Submit Question'}
            </button>
          </form>
        )}
      </div>
    </InfoPageLayout>
  );
}
