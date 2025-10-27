"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);
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
    } catch (error) {
      console.error('Login error:', error);
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setError("Connection failed. Please check your internet connection and try again.");
      } else if (error instanceof Error) {
        setError(`Login failed: ${error.message}`);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      
      setRetryCount(prev => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-lg text-white">
          <h1 className="text-5xl font-bold mb-6">
            Shree Radhey Industries
          </h1>
          <p className="text-xl text-blue-100 mb-8 font-medium">
            Leading manufacturer of premium stone processing machinery with 25+ years of excellence
          </p>
          
          {/* Modern Info Cards */}
          <div className="space-y-6 mb-10">
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Manufacturing Excellence</h3>
                  <p className="text-blue-100 text-sm font-medium">25+ years of precision machinery manufacturing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Advanced Technology</h3>
                  <p className="text-blue-100 text-sm font-medium">State-of-the-art automation systems</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Quality Assurance</h3>
                  <p className="text-blue-100 text-sm font-medium">ISO certified premium quality standards</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-blue-200 font-medium">Happy Clients</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-sm text-blue-200 font-medium">Uptime Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Login Form */}
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-md flex items-center justify-center p-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <LogIn className="text-white" size={36} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Portal</h1>
            <p className="text-slate-600 text-lg font-medium">Secure access to dashboard</p>
          </div>
          
          {/* Modern Credentials Info */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-8">
            <h3 className="font-bold text-blue-800 mb-3">Demo Credentials:</h3>
            <p className="text-sm text-blue-700 font-medium">Username: <span className="font-mono bg-blue-100 px-2 py-1 rounded-lg">admin</span></p>
            <p className="text-sm text-blue-700 font-medium">Password: <span className="font-mono bg-blue-100 px-2 py-1 rounded-lg">rmt2024</span></p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">
              Username
            </label>
            <input
              type="text"
              required
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="modern-input w-full"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">
              Password
            </label>
            <input
              type="password"
              required
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="modern-input w-full"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-sm">
              <div className="flex items-center justify-between">
                <div>
                  <strong>Error:</strong> {error}
                  {retryCount > 0 && (
                    <div className="text-xs text-red-500 mt-1">
                      Attempt {retryCount + 1}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    setError("");
                    setRetryCount(0);
                  }}
                  className="text-red-400 hover:text-red-600 ml-2"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full admin-button-primary disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                Accessing...
              </div>
            ) : (
              "Access Dashboard"
            )}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}