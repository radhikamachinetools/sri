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
      <section className="pt-28 pb-20 bg-gradient-to-r from-primary to-primary-dark text-secondary">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-secondary/80 max-w-2xl mx-auto">
            Comprehensive after-sales support for your stone processing machinery
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary/90 mb-1">24/7</div>
              <div className="text-sm text-secondary/70">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary/90 mb-1">500+</div>
              <div className="text-sm text-secondary/70">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary/90 mb-1">25+</div>
              <div className="text-sm text-secondary/70">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary/90 mb-1">100%</div>
              <div className="text-sm text-secondary/70">Quality</div>
            </div>
          </div>
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
