import React from "react";
import { CheckCircle2 } from "lucide-react";
import { whyChooseUsData } from "../data";

const WhyChooseUs = () => {
  const statColors = [
    "text-blue-400",  
    "text-emerald-400",
    "text-purple-400", 
    "text-orange-400",
  ];

  return (
    <section id="about" className="py-24 bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Why Partner With FinExpert?
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-lg">
              We believe in proactive accounting. Instead of just reporting what happened, 
              we help you plan for what's next. Our team of CPAs and financial advisors are 
              dedicated to your success.
            </p>

            <ul className="space-y-5">
              {whyChooseUsData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="text-emerald-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-gray-200 font-medium text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {whyChooseUsData.stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-xl"
              >
                <div className={`text-4xl font-extrabold mb-2 ${statColors[index]}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;