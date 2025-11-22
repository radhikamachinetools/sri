"use client";

import Link from "next/link";
import { Package, Mail, Image, BarChart3, Plus, Eye, Settings, TrendingUp, FileText, Shield, Users, MessageSquare, Camera, HelpCircle, Lock, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    pendingContacts: 0,
    completedContacts: 0,
    totalProducts: 5
  });
  const [statsError, setStatsError] = useState<string | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setStatsLoading(true);
      setStatsError(null);
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.success) {
        const contacts = data.contacts;
        setStats({
          totalContacts: contacts.length,
          pendingContacts: contacts.filter((c: {status?: string}) => c.status === 'pending' || !c.status).length,
          completedContacts: contacts.filter((c: {status?: string}) => c.status === 'completed').length,
          totalProducts: 5
        });
      } else {
        setStatsError('Failed to load dashboard statistics');
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStatsError('Unable to connect to server. Please check your connection.');
    } finally {
      setStatsLoading(false);
    }
  };

  const quickActions = [
    {
      title: "Add New Product",
      href: "/admin/products/create",
      icon: Plus,
      color: "bg-gradient-primary"
    },
    {
      title: "Upload Media",
      href: "/admin/media/create",
      icon: Image,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "View Inquiries",
      href: "/admin/contacts",
      icon: Eye,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      color: "bg-gradient-accent"
    }
  ];

  const statCards = [
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-gradient-primary",
      change: "+2 this month"
    },
    {
      title: "Total Contacts",
      value: stats.totalContacts,
      icon: Mail,
      color: "from-green-500 to-emerald-500",
      change: "+12 this week"
    },
    {
      title: "Pending Queries",
      value: stats.pendingContacts,
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      change: "Needs attention"
    },
    {
      title: "Completed",
      value: stats.completedContacts,
      icon: TrendingUp,
      color: "bg-gradient-accent",
      change: "+5 today"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-12"
      >
        <div>
          <h1 className="text-5xl font-bold text-slate-900 mb-3 bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">Dashboard</h1>
          <p className="text-slate-600 text-xl font-medium">Welcome back! Here's your business overview at a glance.</p>
        </div>
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 text-teal-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-sm">
          Control Center
        </div>
      </motion.div>

      {/* Stats Error Banner */}
      {statsError && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl mb-6">
          <div className="flex items-center justify-between">
            <div>
              <strong>Stats Error:</strong> {statsError}
            </div>
            <button
              onClick={() => fetchStats()}
              className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="admin-stat-card"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-xs font-semibold">+12%</span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {stat.title}
                </h3>
                <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-sm text-slate-600 font-medium">{stat.change}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modern Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="wellness-card mb-12"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} href={action.href}>
                <div className={`bg-gradient-to-br ${action.color} hover:scale-105 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group`}>
                  <IconComponent className="h-10 w-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-lg">{action.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Enhanced Management Links with Better Icon Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-yellow-500" />
          Management Center
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <Link
            href="/admin/products"
            className="group relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="admin-card p-8 relative overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Package className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* Floating particles effect */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">Products</h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Manage machinery products</p>
                  <div className="flex items-center text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">5 Active Products</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link
            href="/admin/contacts"
            className="group relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="admin-card p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <MessageSquare className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors duration-300">Contact Messages</h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">View customer inquiries</p>
                  <div className="flex items-center text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">{stats.pendingContacts} Pending</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link
            href="/admin/media"
            className="group relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="admin-card p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-600 to-rose-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Camera className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Image className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">Media</h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Manage images and videos</p>
                  <div className="flex items-center text-sm text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">Gallery Management</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link
            href="/admin/terms-questions"
            className="group relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="admin-card p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <HelpCircle className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">Terms Questions</h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">View T&C inquiries</p>
                  <div className="flex items-center text-sm text-orange-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">Legal Inquiries</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link
            href="/admin/privacy-concerns"
            className="group relative overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="admin-card p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Lock className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">Privacy Concerns</h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">Handle data requests</p>
                  <div className="flex items-center text-sm text-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-semibold">Data Protection</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* Website Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border-0"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Website Performance
            </h3>
            <p className="text-slate-600">
              Your website is performing well with modern design and optimized user experience.
            </p>
          </div>
          <Link href="/">
            <div className="admin-button-primary flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              View Website
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}