"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Package, Mail, Image, LogOut, Settings, BarChart3, Home } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const authCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin-auth='));
      
      if (authCookie && authCookie.split('=')[1] === 'true') {
        setIsAuthenticated(true);
      } else if (pathname !== '/admin/login') {
        router.push('/admin/login');
      }
      setLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  const handleLogout = () => {
    document.cookie = 'admin-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>;
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { href: '/admin', icon: BarChart3, label: 'Dashboard' },
    { href: '/admin/products', icon: Package, label: 'Products' },
    { href: '/admin/contacts', icon: Mail, label: 'Contacts' },
    { href: '/admin/media', icon: Image, label: 'Media' },
    { href: '/admin/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="flex">
        <aside className="w-80 bg-white/95 backdrop-blur-md shadow-2xl border-r border-slate-200/60 min-h-screen">
          <div className="p-8 border-b border-slate-200/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Settings className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Admin Portal</h2>
                <p className="text-sm text-teal-600 font-medium">Shree Radhey Industries</p>
              </div>
            </div>
          </div>
          
          <nav className="p-6">
            <div className="space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
                      isActive 
                        ? 'admin-nav-active shadow-lg' 
                        : 'admin-nav-inactive hover:bg-slate-50'
                    }`}
                  >
                    <item.icon size={22} className={isActive ? 'text-white' : 'text-slate-500'} />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <Link
                href="/"
                className="admin-nav-inactive flex items-center gap-4 px-5 py-4 rounded-2xl mb-3"
              >
                <Home size={22} className="text-slate-500" />
                <span className="font-semibold text-sm">View Website</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-4 px-5 py-4 text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-300 w-full text-left font-semibold text-sm"
              >
                <LogOut size={22} />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>
        
        <main className="flex-1 p-10 bg-gradient-to-br from-teal-50/50 to-white">
          <div className="max-w-8xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}