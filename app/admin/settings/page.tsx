"use client";

import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

type Settings = {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    stats: { number: string; label: string }[];
  };
  about: {
    title: string;
    description: string;
    features: string[];
  };
  contact: {
    office: string;
    factory: string;
    phones: string[];
    email: string;
    website: string;
  };
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings');
      const data = await res.json();
      if (data.success) {
        setSettings(data.settings);
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      if (res.ok) {
        alert('Settings saved successfully!');
      }
    } catch (error) {
      alert('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!settings) return <div className="p-8">Failed to load settings</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Website Settings</h1>
        <button
          onClick={saveSettings}
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Save size={20} />
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Hero Section</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={settings.hero.title}
              onChange={(e) => setSettings({
                ...settings,
                hero: { ...settings.hero, title: e.target.value }
              })}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subtitle</label>
            <textarea
              value={settings.hero.subtitle}
              onChange={(e) => setSettings({
                ...settings,
                hero: { ...settings.hero, subtitle: e.target.value }
              })}
              className="w-full p-3 border rounded-lg h-24"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">CTA Button Text</label>
            <input
              type="text"
              value={settings.hero.ctaText}
              onChange={(e) => setSettings({
                ...settings,
                hero: { ...settings.hero, ctaText: e.target.value }
              })}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Office Address</label>
            <textarea
              value={settings.contact.office}
              onChange={(e) => setSettings({
                ...settings,
                contact: { ...settings.contact, office: e.target.value }
              })}
              className="w-full p-3 border rounded-lg h-20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Factory Address</label>
            <textarea
              value={settings.contact.factory}
              onChange={(e) => setSettings({
                ...settings,
                contact: { ...settings.contact, factory: e.target.value }
              })}
              className="w-full p-3 border rounded-lg h-20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={settings.contact.email}
              onChange={(e) => setSettings({
                ...settings,
                contact: { ...settings.contact, email: e.target.value }
              })}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Website</label>
            <input
              type="text"
              value={settings.contact.website}
              onChange={(e) => setSettings({
                ...settings,
                contact: { ...settings.contact, website: e.target.value }
              })}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}