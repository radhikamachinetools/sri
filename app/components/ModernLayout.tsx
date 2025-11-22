"use client";

import { ReactNode } from 'react';

type ModernLayoutProps = {
  children: ReactNode;
};

export default function ModernLayout({ children }: ModernLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8fafc' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}