import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "../data";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a192f] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            No hidden fees. Choose a plan that fits your business size.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-10 rounded-3xl transition-all duration-300 ${
                plan.isPopular 
                  ? "bg-white border-2 border-blue-600 shadow-2xl scale-105 z-10" 
                  : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {/* --- DITO YUNG MOST POPULAR BADGE --- */}
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-[#0a192f] mb-6">{plan.name}</h3>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-[#0a192f]">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-400 text-sm">/month</span>}
              </div>

              {/* Dynamic Feature List */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button with Conditional Styling */}
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" 
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;