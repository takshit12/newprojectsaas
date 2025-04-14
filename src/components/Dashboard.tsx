
import React from 'react';
import ProductImage1 from './ProductImage1';
import ProductImage2 from './ProductImage2';
import { Home } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-[400px] p-4">
      <div className="flex border-b border-gray-300 bg-white">
        <div className="w-16 bg-gray-50 border-r border-gray-300 flex flex-col py-4">
          <div className="flex justify-center mb-8">
            <div className="w-8 h-1 bg-green-500"></div>
          </div>
          <div className="flex justify-center py-2 bg-gray-100">
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center">
              <Home className="text-white w-3 h-3" />
            </div>
          </div>
          <div className="flex justify-center py-4">
            <span className="text-lg font-bold">ti</span>
          </div>
          <div className="flex flex-col items-center gap-5 mt-10">
            <span className="text-gray-400">☰</span>
            <span className="text-gray-400">◯</span>
            <span className="text-gray-400">◎</span>
            <span className="text-gray-400">◉</span>
          </div>
        </div>
        
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Online</button>
              <span>👤</span>
              <span>—</span>
            </div>
          </div>
          
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-xl">Overview</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="dashboard-card">
                <div className="mb-2">Customers</div>
                <div className="text-4xl font-bold">1024</div>
              </div>
              
              <div className="dashboard-card">
                <div className="mb-2">Income</div>
                <div className="text-4xl font-bold">$256k</div>
              </div>
              
              <div className="dashboard-card">
                <div className="mb-2">Popular products</div>
                <div className="flex items-center gap-3 mt-3">
                  <ProductImage1 />
                  <span>791</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <ProductImage2 />
                  <span>688</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mr-4 mt-4">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <span className="font-semibold">791</span>
              <span className="text-sm text-gray-500">zog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
