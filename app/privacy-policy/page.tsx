// app/privacy-policy/page.tsx
"use client";

import { useState } from "react";
import InfoPageLayout from "../components/InfoPageLayout";
import { Shield, CheckCircle, Send } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    concern: "",
    dataType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/privacy-concerns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          type: 'privacy-concern'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", concern: "", dataType: "" });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const dataTypes = [
    "Personal Information",
    "Contact Details",
    "Website Usage Data",
    "Marketing Communications",
    "Other"
  ];

  return (
    <InfoPageLayout title="Privacy Policy">
      <p>
        <strong>Effective Date:</strong> September 18, 2025
      </p>

      <h2>1. Introduction</h2>
      <p>
        Radhika Machineries (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
        is committed to protecting your privacy. This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you
        visit our website.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We may collect personal information that you voluntarily provide to us
        when you fill out a contact form, request a quote, or otherwise contact
        us. This information may include your name, email address, phone number,
        and company name.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries and service requests.</li>
        <li>
          Send you marketing and promotional communications, with an option to
          opt-out.
        </li>
        <li>Improve our website and product offerings.</li>
        <li>Maintain the security and integrity of our website.</li>
      </ul>

      <h2>4. Disclosure of Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personally
        identifiable information to outside parties. This does not include
        trusted third parties who assist us in operating our website or
        servicing you, so long as those parties agree to keep this information
        confidential.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of
        your personal information. However, no method of transmission over the
        Internet is 100% secure.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions regarding this privacy policy, you may contact
        us using the information on our Contact page.
      </p>

      {/* Privacy Concerns Form */}
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-0">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
          <Shield className="mr-3 h-6 w-6 text-blue-600" />
          Privacy Concerns or Data Requests
        </h2>
        <p className="text-slate-600 mb-6">
          Have concerns about your data privacy or want to request data deletion? We're here to help.
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-600 mb-2">Request Received!</h3>
            <p className="text-slate-600">We'll review your privacy concern and respond within 48 hours.</p>
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Data Type (Optional)
              </label>
              <select
                value={formData.dataType}
                onChange={(e) => setFormData({...formData, dataType: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select data type</option>
                {dataTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Concern or Request *
              </label>
              <textarea
                required
                rows={4}
                value={formData.concern}
                onChange={(e) => setFormData({...formData, concern: e.target.value})}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Please describe your privacy concern or data request..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
            >
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </InfoPageLayout>
  );
}
