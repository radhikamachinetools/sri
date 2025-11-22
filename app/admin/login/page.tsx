"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn, Shield, Factory, Settings, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 flex flex-col lg:flex-row overflow-hidden">
      {/* Left Content - Hidden on mobile, visible on desktop */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex flex-1 items-center justify-center p-4 xl:p-8"
      >
        <div className="max-w-lg text-slate-800">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          >
            Shree Radhey Industries
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg xl:text-xl text-slate-600 mb-8 font-medium"
          >
            Leading manufacturer of premium stone processing machinery with 25+ years of excellence
          </motion.p>
          
          {/* Modern Info Cards */}
          <div className="space-y-4 xl:space-y-6 mb-8 xl:mb-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-primary-light/10 backdrop-blur-md p-4 xl:p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Factory className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base xl:text-lg text-slate-800">Manufacturing Excellence</h3>
                  <p className="text-slate-600 text-sm font-medium">25+ years of precision machinery manufacturing</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-primary-light/10 backdrop-blur-md p-4 xl:p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Settings className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base xl:text-lg text-slate-800">Advanced Technology</h3>
                  <p className="text-slate-600 text-sm font-medium">State-of-the-art automation systems</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-primary-light/10 backdrop-blur-md p-4 xl:p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 xl:w-12 xl:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Shield className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base xl:text-lg text-slate-800">Quality Assurance</h3>
                  <p className="text-slate-600 text-sm font-medium">ISO certified premium quality standards</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Modern Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 xl:gap-6"
          >
            <div className="text-center bg-gradient-to-br from-primary/20 to-primary-light/20 backdrop-blur-sm p-3 xl:p-4 rounded-2xl border border-primary/30">
              <div className="text-2xl xl:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs xl:text-sm text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/20 to-primary-light/20 backdrop-blur-sm p-3 xl:p-4 rounded-2xl border border-primary/30">
              <div className="text-2xl xl:text-3xl font-bold text-primary">99.9%</div>
              <div className="text-xs xl:text-sm text-slate-600 font-medium">Uptime Rate</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Modern Login Form - Responsive */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-full lg:max-w-lg xl:max-w-xl bg-white/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-10 min-h-screen lg:min-h-0"
      >
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-8 lg:mb-10"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-xl">
              <LogIn className="text-white" size={28} />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Admin Portal</h1>
            <p className="text-slate-600 text-base lg:text-lg font-medium">Secure access to dashboard</p>
          </motion.div>
          
          {/* Mobile Company Info - Only visible on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:hidden mb-6 text-center"
          >
            <h2 className="text-xl font-bold text-primary mb-2">Shree Radhey Industries</h2>
            <p className="text-sm text-slate-600">Premium Stone Processing Machinery</p>
          </motion.div>
          
          {/* Modern Credentials Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-primary-light/10 border border-primary/30 p-4 lg:p-6 rounded-2xl mb-6 lg:mb-8"
          >
            <h3 className="font-bold text-primary mb-3 text-sm lg:text-base">Demo Credentials:</h3>
            <p className="text-xs lg:text-sm text-slate-700 font-medium mb-1">Username: <span className="font-mono bg-primary/20 px-2 py-1 rounded-lg text-primary">admin</span></p>
            <p className="text-xs lg:text-sm text-slate-700 font-medium">Password: <span className="font-mono bg-primary/20 px-2 py-1 rounded-lg text-primary">rmt2024</span></p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={handleSubmit} 
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Username
              </label>
              <input
                type="text"
                required
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 lg:py-4 text-sm lg:text-base transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none bg-white/80 backdrop-blur-sm"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full border-2 border-primary/20 rounded-xl px-4 py-3 lg:py-4 pr-12 text-sm lg:text-base transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none bg-white/80 backdrop-blur-sm"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-primary transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-600 p-3 lg:p-4 rounded-2xl text-xs lg:text-sm"
              >
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
                    className="text-red-400 hover:text-red-600 ml-2 text-lg"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-primary text-white py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 lg:h-6 lg:w-6 border-2 border-white border-t-transparent mr-3"></div>
                  Accessing...
                </div>
              ) : (
                "Access Dashboard"
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}