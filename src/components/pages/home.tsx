import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Settings,
  User,
  Zap,
  CheckCircle2,
  ArrowRight,
  Github,
  Loader2,
  Twitter,
  Instagram,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../supabase/auth";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/supabase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import FeaturesSection from "../home/FeaturesSection";
import PricingSection from "../home/PricingSection";
import TestimonialsSection from "../home/TestimonialsSection";

// Define the Plan type
interface Plan {
  id: string;
  object: string;
  active: boolean;
  amount: number;
  currency: string;
  interval: string;
  interval_count: number;
  product: string;
  created: number;
  livemode: boolean;
  [key: string]: any;
}

// Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// Feature interface
interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function LandingPage() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      // Use the Supabase client to call the Edge Function
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-get-plans",
      );

      if (error) {
        throw error;
      }

      setPlans(data || []);
      setError("");
    } catch (error) {
      console.error("Failed to fetch plans:", error);
      setError("Failed to load plans. Please try again later.");
    }
  };

  // Handle checkout process
  const handleCheckout = async (priceId: string) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan.",
        variant: "default",
      });
      window.location.href = "/login?redirect=pricing";
      return;
    }

    setIsLoading(true);
    setProcessingPlanId(priceId);
    setError("");

    try {
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-create-checkout",
        {
          body: {
            price_id: priceId,
            user_id: user.id,
            return_url: `${window.location.origin}/dashboard`,
          },
          headers: {
            "X-Customer-Email": user.email || "",
          },
        },
      );

      if (error) {
        throw error;
      }

      // Redirect to Stripe checkout
      if (data?.url) {
        toast({
          title: "Redirecting to checkout",
          description:
            "You'll be redirected to Stripe to complete your purchase.",
          variant: "default",
        });
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setError("Failed to create checkout session. Please try again.");
      toast({
        title: "Checkout failed",
        description:
          "There was an error creating your checkout session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProcessingPlanId(null);
    }
  };

  // Format currency
  const formatCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: 2,
    });

    return formatter.format(amount / 100);
  };

  // Features are now in a separate component

  // Testimonials are now in a separate component

  // Plan features
  const getPlanFeatures = (planType: string) => {
    const basicFeatures = [
      "Core application features",
      "Basic authentication",
      "1GB storage",
      "Community support",
    ];

    const proFeatures = [
      ...basicFeatures,
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom branding",
    ];

    const enterpriseFeatures = [
      ...proFeatures,
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited storage",
      "SLA guarantees",
    ];

    if (planType.includes("PRO")) return proFeatures;
    if (planType.includes("ENTERPRISE")) return enterpriseFeatures;
    return basicFeatures;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="font-bold text-xl flex items-center text-black"
            >
              <Zap className="h-6 w-6 mr-2 text-black" />
              Tempo Starter Kit
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-black"
                  >
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="gap-2 text-gray-700 hover:text-black"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                          alt={user.email || ""}
                        />
                        <AvatarFallback>
                          {user.email?.[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden md:inline-block">
                        {user.email}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white border-gray-200"
                  >
                    <DropdownMenuLabel className="text-black">
                      My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-200" />
                    <DropdownMenuItem className="text-gray-700 hover:text-black focus:text-black">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700 hover:text-black focus:text-black">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-200" />
                    <DropdownMenuItem
                      onSelect={() => signOut()}
                      className="text-gray-700 hover:text-black focus:text-black"
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-black"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <Badge className="mb-4 bg-gray-200 text-gray-800 hover:bg-gray-300 border-none">
                    New Release v1.0
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Build Faster with Tempo Starter Kit
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-gray-600">
                  A modern full-stack starter kit with React, Supabase, and
                  everything you need to build production-ready applications in
                  record time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black w-full sm:w-auto"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-black" />
                  <span>No credit card required</span>
                  <Separator
                    orientation="vertical"
                    className="h-4 mx-2 bg-gray-300"
                  />
                  <CheckCircle2 className="h-4 w-4 text-black" />
                  <span>Free tier available</span>
                  <Separator
                    orientation="vertical"
                    className="h-4 mx-2 bg-gray-300"
                  />
                  <CheckCircle2 className="h-4 w-4 text-black" />
                  <span>Open source</span>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-gray-200/60 via-gray-400/40 to-black/10 rounded-3xl blur-2xl transform scale-110" />
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                  <div className="p-1 bg-gradient-to-r from-gray-200 via-gray-400 to-black rounded-t-xl">
                    <div className="flex items-center gap-2 px-3 py-1">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                      <div className="ml-2 text-xs text-black font-medium">
                        Tempo App
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <pre className="text-sm text-gray-600 overflow-x-auto">
                      <code>{`import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

// Authentication is simple
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})

// Ready to build your app!`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-gray-200/60 blur-[100px]" />
          <div className="absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-gray-400/40 blur-[100px]" />
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="bg-gradient-to-r from-gray-100 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Ready to Start Building?
                </h2>
                <p className="text-lg md:text-xl mb-8 text-gray-600">
                  Join thousands of developers who are already building amazing
                  products with Tempo Starter Kit.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/signup">
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto"
                    >
                      Get Started Free
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black w-full sm:w-auto"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link
                to="/"
                className="font-bold text-xl flex items-center mb-4 text-black"
              >
                <Zap className="h-5 w-5 mr-2 text-black" />
                Tempo
              </Link>
              <p className="text-gray-600 mb-4">
                A modern full-stack starter kit for building web applications
                quickly and efficiently.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-600 hover:text-black"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-600 hover:text-black"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-600 hover:text-black"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-black">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-black">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4 text-black">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-black">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-200" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Tempo Starter Kit. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-sm text-gray-600 hover:text-black">
                Privacy
              </Link>
              <Link to="#" className="text-sm text-gray-600 hover:text-black">
                Terms
              </Link>
              <Link to="#" className="text-sm text-gray-600 hover:text-black">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
