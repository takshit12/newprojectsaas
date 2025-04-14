
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrowserFrame from '@/components/BrowserFrame';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 py-2">
      <Header />
      <Hero />
      <div className="mt-8 mb-12">
        <BrowserFrame>
          <Dashboard />
        </BrowserFrame>
      </div>
    </div>
  );
};

export default Index;
