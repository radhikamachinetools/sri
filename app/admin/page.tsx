"use client";

import Link from "next/link";
import { Package, Mail, Image, BarChart3, Plus, Eye, Settings, TrendingUp, FileText, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    pendingContacts: 0,
    completedContacts: 0,
    totalProducts: 5
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
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
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600 text-lg">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="bg-gradient-to-r from-orange-100 to-red-100 text-primary px-6 py-3 rounded-full text-lg font-semibold">
          🏭 Admin Panel
        </div>
      </motion.div>

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
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                  {stat.title}
                </h3>
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <p className="text-sm text-slate-500">{stat.change}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="admin-card p-8"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link key={index} href={action.href}>
                <div className={`bg-gradient-to-r ${action.color} hover:opacity-90 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center`}>
                  <IconComponent className="h-8 w-8 mx-auto mb-3" />
                  <div className="font-semibold">{action.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Management Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <Link
          href="/admin/products"
          className="admin-card p-8 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Package className="text-white h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Products</h3>
              <p className="text-slate-600">Manage machinery products</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/contacts"
          className="admin-card p-8 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Mail className="text-white h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Contact Messages</h3>
              <p className="text-slate-600">View customer inquiries</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/media"
          className="admin-card p-8 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Image className="text-white h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Media</h3>
              <p className="text-slate-600">Manage images and videos</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/terms-questions"
          className="admin-card p-8 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <FileText className="text-white h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Terms Questions</h3>
              <p className="text-slate-600">View T&C inquiries</p>
            </div>
          </div>
        </Link>

        <Link
          href="/admin/privacy-concerns"
          className="admin-card p-8 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Shield className="text-white h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Privacy Concerns</h3>
              <p className="text-slate-600">Handle data requests</p>
            </div>
          </div>
        </Link>
      </div>

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