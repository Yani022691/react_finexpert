import React from "react";
import { siteData } from "../data";

const Hero = () => {
  const { hero } = siteData;

  return (
    <section id="home" className="relative h-screen flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.bgImage}')` }}>
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-8 backdrop-blur-md">
            <span className="text-blue-300 mr-2">●</span> {hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            {hero.heading} <span className="text-blue-400">{hero.headingAccent}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">{hero.subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg">{hero.primaryBtn}</button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition backdrop-blur-sm">{hero.secondaryBtn}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;