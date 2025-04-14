
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="text-center mt-8 mb-12 max-w-4xl mx-auto">
      <h1 className="text-6xl font-bold mb-6">
        Unleash And Transform<br />
        Your Business Potential
      </h1>
      <p className="text-xl mx-auto max-w-3xl px-4 leading-relaxed">
        Empower your team, streamline workflows, and scale 
        your operations effortlessly with our intuitive cloud-basdes
      </p>
      
      <div className="mt-10">
        <Button 
          className="rounded-md bg-[hsl(var(--blue-button))] px-10 py-6 text-xl font-medium text-white hover:bg-blue-700"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;
