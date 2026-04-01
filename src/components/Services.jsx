import React from "react";
import { FileText, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import { servicesData } from "../data";

// Helper para sa icons (BarChart3 ang gamit natin para mas hawig sa target)
const IconComponent = ({ name }) => {
  if (name === "FileText") return <FileText size={28} />;
  if (name === "BarChart") return <BarChart3 size={28} />;
  if (name === "ShieldCheck") return <ShieldCheck size={28} />;
  return null;
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {/* Subheading (Ang words sa itaas) */}
          <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Our Expertise
          </p>

          {/* Main Heading (Malaki at Dark Blue) */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a192f] mb-6 tracking-tight">
            Comprehensive Financial Solutions
          </h2>

          {/* Description (Ang words sa ibaba - Gray) */}
          <p className="text-gray-500 text-lg leading-relaxed px-4">
            From daily bookkeeping to complex tax litigation, we provide a 
            full spectrum of accounting services tailored to your needs.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              {/* Icon Container (May light blue background at border) */}
              <div className="text-blue-600 mb-8 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-2xl border border-blue-100 shadow-sm">
                <IconComponent name={service.iconName} />
              </div>
              
              {/* Card Title (Bold and Dark) */}
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                {service.title}
              </h3>
              
              {/* Card Description (Grayish) */}
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              {/* Learn More Link (Dynamic look) */}
              <a 
                href="#" 
                className="flex items-center gap-2 text-blue-600 font-bold text-lg hover:gap-4 transition-all duration-300"
              >
                Learn more <ArrowRight size={20} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;