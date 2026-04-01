import { FileText, BarChart, ShieldCheck } from "lucide-react";

export const siteData = {
  navbar: {
    logoName: "FinExpert",
    links: [
      { name: "Services", href: "#services" },
      { name: "About", href: "#about" },
      { name: "Pricing", href: "#pricing" },
      { name: "Contact", href: "#contact" },
    ],
    buttonText: "Get Started"
  },
  hero: {
    badge: "Trusted by 500+ Businesses",
    heading: "Precision Accounting for",
    headingAccent: "Growing Businesses",
    subtext: "We handle the numbers so you can handle the business. Expert tax strategy, bookkeeping, and CFO services tailored to your goals.",
    primaryBtn: "Schedule Consultation",
    secondaryBtn: "View Services",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  }
};

export const servicesData = [
  {
    title: "Tax Preparation",
    desc: "Strategic tax planning and preparation to maximize your returns and ensure compliance.",
    iconName: "FileText",
  },
  {
    title: "Financial Analysis",
    desc: "In-depth reporting and forecasting to help you make informed business decisions.",
    iconName: "BarChart",
  },
  {
    title: "Audit Defense",
    desc: "Expert representation and support during IRS audits and financial reviews.",
    iconName: "ShieldCheck",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$199",
    features: ["Monthly Bookkeeping", "Annual Tax Filing", "Email Support", "Basic Reports"],
    isPopular: false,
  },
  {
    name: "Business",
    price: "$499",
    features: ["Weekly Bookkeeping", "Quarterly Tax Strategy", "Priority Phone Support", "CFO Dashboard", "Payroll Management"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Dedicated Accounting Team", "Daily Reconciliation", "Audit Representation", "Financial Forecasting", "Custom Integrations"],
    isPopular: false,
  },
];

export const whyChooseUsData = {
  benefits: [
    "Certified Public Accountants",
    "24/7 Online Portal Access",
    "Dedicated Account Manager",
    "Transparent Flat-Fee Pricing",
  ],
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Taxes Saved", value: "$2M+" },
    { label: "Clients Served", value: "500+" },
    { label: "Commitment", value: "100%" },
  ],
};

export const footerData = [
  {
    title: "Services",
    links: ["Tax Planning", "Bookkeeping", "Audit Support", "Payroll"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];