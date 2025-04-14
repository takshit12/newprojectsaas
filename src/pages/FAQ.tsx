
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b py-4">
      <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
        <h3 className="text-xl font-medium">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4">
        <p className="text-gray-600">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Dharatal AI?",
      answer: "Dharatal AI is a cutting-edge artificial intelligence platform that helps businesses analyze data, automate processes, and gain valuable insights to make better decisions."
    },
    {
      question: "How do I get started with Dharatal AI?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our guided onboarding process. Our platform is designed to be user-friendly with no technical expertise required."
    },
    {
      question: "Do I need technical knowledge to use your platform?",
      answer: "No, our platform is designed to be user-friendly for everyone. While technical knowledge can be helpful for advanced features, our intuitive interface and guided workflows make it accessible for users of all skill levels."
    },
    {
      question: "Can I integrate Dharatal AI with my existing tools?",
      answer: "Yes, we offer extensive integration capabilities with popular business tools, databases, and platforms. Our API allows for seamless connection with your existing workflow. If you need help with integration, our support team is ready to assist you."
    },
    {
      question: "Is my data secure with Dharatal AI?",
      answer: "Absolutely. We take data security very seriously. Our platform employs enterprise-grade security measures, including encryption at rest and in transit, regular security audits, and compliance with major security standards. Your data is never shared with third parties without your explicit consent."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide multiple levels of support based on your plan. All users have access to our comprehensive documentation and community forums. Professional and Enterprise plans include priority email and chat support, while Enterprise customers also benefit from dedicated support representatives and custom training sessions."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. For monthly plans, you'll continue to have access until the end of your current billing cycle. For annual plans, please refer to our refund policy for details on partial refunds."
    },
    {
      question: "Do you offer custom solutions for specific industries?",
      answer: "Yes, we offer specialized solutions for various industries including healthcare, finance, retail, and manufacturing. Our Enterprise plan includes customization options to meet your specific requirements. Contact our sales team to discuss your industry-specific needs."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 py-2">
      <Header />
      <div className="mt-12 mb-16 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Find answers to common questions about Dharatal AI</p>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
