"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/admin";
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-primary-dark to-primary flex overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-bold mb-6">
            Shree Radhey Industries
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Leading manufacturer of premium stone processing machinery with 25+ years of excellence
          </p>
          
          {/* Factory Info Cards */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏭</span>
                <div>
                  <h3 className="font-semibold">Manufacturing Excellence</h3>
                  <p className="text-orange-100 text-sm">25+ years of precision machinery manufacturing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">⚙️</span>
                <div>
                  <h3 className="font-semibold">Advanced Technology</h3>
                  <p className="text-orange-100 text-sm">State-of-the-art automation systems</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <h3 className="font-semibold">Quality Assurance</h3>
                  <p className="text-orange-100 text-sm">ISO certified premium quality standards</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200">500+</div>
              <div className="text-sm text-orange-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-200">99.9%</div>
              <div className="text-sm text-orange-100">Uptime Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Login Form */}
      <div className="w-full max-w-md bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600">Access the admin dashboard</p>
          </div>
          
          {/* Login Credentials Info */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Demo Credentials:</h3>
            <p className="text-sm text-gray-600">Username: <span className="font-mono bg-gray-200 px-1 rounded">admin</span></p>
            <p className="text-sm text-gray-600">Password: <span className="font-mono bg-gray-200 px-1 rounded">rmt2024</span></p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              required
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}