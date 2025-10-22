// app/components/InfoPageLayout.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type InfoPageLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function InfoPageLayout({
  title,
  children,
}: InfoPageLayoutProps) {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-gray-700">
            <style jsx global>{`
              .prose h2 { color: #1f2937; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; }
              .prose p { margin-bottom: 1rem; line-height: 1.7; }
              .prose ul { margin: 1rem 0; }
              .prose li { margin: 0.5rem 0; }
            `}</style>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
