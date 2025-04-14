
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 py-2">
      <Header />
      <div className="mt-12 mb-16">
        <h1 className="text-4xl font-bold text-center mb-2">Our Features</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Discover what makes Dharatal AI stand out</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
                </div>
                Advanced AI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our state-of-the-art AI provides deep insights and analytics for your data, helping you make informed decisions.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                </div>
                Enterprise Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Your data is protected with enterprise-grade security measures, ensuring confidentiality and compliance.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><rect width="18" height="10" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="16" y1="16" y2="16"></line></svg>
                </div>
                Seamless Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Easily integrate with your existing tools and workflows with our comprehensive API and connectors.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                </div>
                Real-time Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Monitor your metrics and performance in real-time with interactive dashboards and alerts.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
                </div>
                24/7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our dedicated support team is available around the clock to help you succeed with our platform.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path></svg>
                </div>
                One-Click Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Deploy your AI models with a single click, no complex setup or configuration required.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
