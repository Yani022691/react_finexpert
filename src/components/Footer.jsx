import React from "react";
import { Calculator } from "lucide-react";
import { footerData } from "../data";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div>
                <Calculator size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">FinExpert</h2>
            </div>
            <p className="max-w-xs leading-relaxed">
              Professional accounting services you can trust. Helping businesses grow since 2008.
            </p>
          </div>

          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
               
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm">
          <p>© 2025 FinExpert Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;