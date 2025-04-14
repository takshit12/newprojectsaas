
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CallToAction = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 py-2">
      <Header />
      <div className="mt-12 mb-16 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Transform Your Business with AI</h1>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of companies that are leveraging Dharatal AI to gain insights, 
            automate processes, and make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg py-6 px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8">
              Schedule a Demo
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          <Card className="text-center shadow-lg p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M21 12H8"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Easy Setup</h2>
            <CardContent className="p-0">
              <p className="text-gray-600">
                Get started in minutes with our intuitive onboarding process. No complicated setup required.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg p-6">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Instant Results</h2>
            <CardContent className="p-0">
              <p className="text-gray-600">
                See the value immediately with our powerful AI tools that deliver insights from day one.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg p-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Enterprise Security</h2>
            <CardContent className="p-0">
              <p className="text-gray-600">
                Rest easy knowing your data is protected with our enterprise-grade security measures.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-100 p-8 rounded-xl max-w-3xl w-full text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">
            Join over 10,000+ companies already using Dharatal AI to transform their businesses.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
