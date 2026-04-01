import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={20} className="text-blue-600" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <Mail size={20} className="text-blue-600" />,
      label: "Email",
      value: "contact@finexpert.com",
    },
    {
      icon: <MapPin size={20} className="text-blue-600" />,
      label: "Office",
      value: "100 Financial District, Suite 400, New York, NY 10005",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Discuss Your Finances</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Ready to take the first step towards financial clarity? Fill out the form and our team will reach out within 24 hours.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{info.label}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition">
                  <option>Tax Preparation</option>
                  <option>Financial Analysis</option>
                  <option>Audit Defense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;