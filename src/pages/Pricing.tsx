import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useAuth } from '~supabase/auth.tsx';
import { supabase } from '~supabase/supabase';
import { useNavigate } from 'react-router-dom';

const PricingPlan = ({ 
  title, 
  price, 
  description, 
  features,
  stripePriceId,
  isPopular = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[];
  stripePriceId?: string;
  isPopular?: boolean;
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = async () => {
    console.log("[handleGetStarted] Clicked!");
    if (!user) {
      console.log("[handleGetStarted] No user found, redirecting to login.");
      navigate('/login?redirect=/pricing');
      return;
    }
    console.log("[handleGetStarted] User found:", user.email);
    
    if (!stripePriceId) {
      console.log("[handleGetStarted] No stripePriceId provided.");
      if (title === 'Enterprise') {
        console.log('Contacting sales for Enterprise plan...');
      } else {
        console.error('Stripe Price ID is missing for this plan.');
      }
      return;
    }
    console.log(`[handleGetStarted] Using Price ID: ${stripePriceId}`);

    const returnUrl = `${window.location.origin}/success`;
    console.log(`[handleGetStarted] Return URL: ${returnUrl}`);

    try {
      console.log(`[handleGetStarted] Invoking create-checkout function...`);
      const { data, error } = await supabase.functions.invoke('supabase-functions-create-checkout', {
        body: { 
          price_id: stripePriceId, 
          user_id: user.id, 
          return_url: returnUrl
        },
        headers: {
          'X-Customer-Email': user.email 
        }
      });
      console.log("[handleGetStarted] Function invoke result:", { data, error });

      if (error) {
        throw error;
      }

      if (data?.url) {
        console.log('[handleGetStarted] Redirecting to Stripe Checkout:', data.url);
        window.location.href = data.url;
      } else {
        console.error('[handleGetStarted] No checkout URL received from function.', data);
      }
    } catch (err) {
      console.error('[handleGetStarted] Error during function invocation or processing:', err);
    }
  };

  return (
    <Card className={`flex flex-col border ${isPopular ? 'border-blue-500 shadow-xl' : 'shadow-lg'} rounded-xl`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-2 rounded-t-xl">
          Most Popular
        </div>
      )}
      <CardHeader className={`${!isPopular ? 'rounded-t-xl' : ''}`}>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500">/month</span>}
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 pb-6">
        <Button 
          className={`w-full ${isPopular ? 'bg-blue-500 hover:bg-blue-600' : ''}`} 
          onClick={handleGetStarted}
          disabled={title === 'Enterprise' && !stripePriceId}
        >
          {title === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: "$49",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic AI analysis",
        "1GB storage",
        "Email support",
        "Community access"
      ],
      stripePriceId: "PRICE_ID_STARTER"
    },
    {
      title: "Professional",
      price: "$99",
      description: "Ideal for growing businesses and teams",
      features: [
        "Unlimited projects",
        "Advanced AI analysis",
        "10GB storage",
        "Priority support",
        "API access",
        "Custom reports"
      ],
      isPopular: true,
      stripePriceId: "PRICE_ID_PROFESSIONAL"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "Dedicated support team",
        "Custom AI model training",
        "SLA guarantees",
        "On-premise deployment option",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 py-2">
      <Header />
      <div className="mt-12 mb-16">
        <h1 className="text-4xl font-bold text-center mb-2">Simple, Transparent Pricing</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Choose the plan that's right for you</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              stripePriceId={plan.stripePriceId}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need something different? Contact us for a custom solution.</p>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
