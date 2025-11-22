'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ContactSidebar from './ContactSidebar';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <ContactSidebar />}
      <main className="flex-1">{children}</main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}