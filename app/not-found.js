'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link href="/">
            Go to Homepage
        </Link>
      </div>
    </div> 
  );
}
