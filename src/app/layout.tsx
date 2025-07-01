'use client';

import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from '@/components/Loading';
import ChatbotDemo from '@/components/ChatbotDemo';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the website to load completely
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    // Also check if page is loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Creative Auto Boutique - Premium Auto Detailing</title>
        <meta name="description" content="Premium auto detailing services with exceptional quality and attention to detail. Transform your vehicle with our professional detailing expertise." />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Loading isLoading={isLoading} />
        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </div>
        <ChatbotDemo />
      </body>
    </html>
  );
}
