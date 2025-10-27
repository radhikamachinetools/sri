// app/components/LoadingSpinner.tsx
"use client";

import { ErrorBoundary } from 'react-error-boundary';

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="inline-block w-8 h-8 bg-gray-200 rounded animate-pulse" title={`Loading error: ${error.message}`}>
      <span className="sr-only">Loading failed</span>
    </div>
  );
}

function LoadingSpinnerComponent({ size = "md", className = "" }: LoadingSpinnerProps) {
  try {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-8 h-8",
      lg: "w-12 h-12"
    };

    // Validate size prop
    const validSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
    const safeClassName = typeof className === 'string' ? className : '';

    return (
      <div className={`inline-block ${sizeClasses[validSize]} ${safeClassName}`}>
        <div className="animate-spin rounded-full border-2 border-gray-300 border-t-brand-green"></div>
      </div>
    );
  } catch (error) {
    console.error('LoadingSpinner render error:', error);
    return <div className="inline-block w-8 h-8 bg-gray-200 rounded animate-pulse" />;
  }
}

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LoadingSpinnerComponent {...props} />
    </ErrorBoundary>
  );
}

// Loading skeleton for product cards
function ProductCardSkeletonComponent() {
  try {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
        <div className="h-64 sm:h-72 bg-gray-200"></div>
        <div className="p-6 space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCardSkeleton render error:', error);
    return <div className="bg-gray-100 rounded-2xl h-96 animate-pulse" />;
  }
}

export function ProductCardSkeleton() {
  return (
    <ErrorBoundary FallbackComponent={() => <div className="bg-gray-100 rounded-2xl h-96 animate-pulse" />}>
      <ProductCardSkeletonComponent />
    </ErrorBoundary>
  );
}

// Loading skeleton for admin product list
function AdminProductSkeletonComponent() {
  try {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          <div className="flex gap-2 mt-4">
            <div className="h-8 bg-gray-200 rounded flex-1"></div>
            <div className="h-8 bg-gray-200 rounded flex-1"></div>
            <div className="h-8 bg-gray-200 rounded w-12"></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminProductSkeleton render error:', error);
    return <div className="bg-gray-100 rounded-xl h-64 p-6 animate-pulse" />;
  }
}

export function AdminProductSkeleton() {
  return (
    <ErrorBoundary FallbackComponent={() => <div className="bg-gray-100 rounded-xl h-64 p-6 animate-pulse" />}>
      <AdminProductSkeletonComponent />
    </ErrorBoundary>
  );
}