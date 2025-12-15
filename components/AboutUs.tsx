"use client"
import React from 'react';
import Image from 'next/image';

// Mock components for images - replace with your actual images
const GOverlay = () => (
  <div className="relative w-[391px] h-[415px] opacity-10">
    <div className="absolute inset-0 border-2 border-[#DCCA87] rounded-full flex items-center justify-center">
      <span className="text-[#DCCA87] text-[300px] font-serif font-bold">G</span>
    </div>
  </div>
);

const KnifeImage = () => (
  <div className="relative h-[910px] w-24 lg:w-32">
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Knife handle */}
      <div className="w-8 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full mb-4" />
      
      {/* Knife blade */}
      <div className="w-2 h-[600px] bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 relative">
        {/* Blade edge */}
        <div className="absolute left-0 top-0 w-full h-full">
          <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
          <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 border border-[#DCCA87]/30 rounded-full animate-spin-slow" />
      </div>
    </div>
  </div>
);

const SpoonImage = () => (
  <div className="w-24 h-1 bg-gradient-to-r from-[#DCCA87] to-[#C8B46E] my-4" />
);

const AboutUs = () => {
  return (
    <section className="relative bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="about">
      {/* Background overlay G */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <GOverlay />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* About Us - Left side */}
          <div className="lg:w-2/5 mb-12 lg:mb-0 lg:text-right">
            <h2 className="font-serif text-[#DCCA87] text-5xl lg:text-6xl font-bold uppercase mb-4">
              About Us
            </h2>
            
            <div className="flex justify-end mb-6">
              <SpoonImage />
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md ml-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing 
              ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </p>
            
            <button 
              type="button" 
              className="bg-[#DCCA87] text-black px-8 py-4 font-serif font-bold text-lg uppercase tracking-wider hover:bg-[#C8B46E] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Know More
            </button>
          </div>
          
          {/* Knife - Center */}
          <div className="my-12 lg:my-0 lg:mx-8">
            <KnifeImage />
            
            {/* Decorative circles around knife */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#DCCA87]/10 rounded-full" />
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#DCCA87]/5 rounded-full" />
          </div>
          
          {/* Our History - Right side */}
          <div className="lg:w-2/5 lg:text-left">
            <h2 className="font-serif text-[#DCCA87] text-5xl lg:text-6xl font-bold uppercase mb-4">
              Our History
            </h2>
            
            <div className="flex justify-start mb-6">
              <SpoonImage />
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat 
              morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
            </p>
            
            <button 
              type="button" 
              className="bg-[#DCCA87] text-black px-8 py-4 font-serif font-bold text-lg uppercase tracking-wider hover:bg-[#C8B46E] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Know More
            </button>
          </div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-[#DCCA87] text-4xl mb-4">🍽️</div>
            <h3 className="text-white font-serif text-2xl mb-2">Since 1990</h3>
            <p className="text-gray-400">Serving Excellence</p>
          </div>
          
          <div className="text-center">
            <div className="text-[#DCCA87] text-4xl mb-4">⭐</div>
            <h3 className="text-white font-serif text-2xl mb-2">Award Winning</h3>
            <p className="text-gray-400">5 Star Rating</p>
          </div>
          
          <div className="text-center">
            <div className="text-[#DCCA87] text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-white font-serif text-2xl mb-2">Master Chefs</h3>
            <p className="text-gray-400">Expert Team</p>
          </div>
          
          <div className="text-center">
            <div className="text-[#DCCA87] text-4xl mb-4">🌿</div>
            <h3 className="text-white font-serif text-2xl mb-2">Fresh Ingredients</h3>
            <p className="text-gray-400">Daily Sourced</p>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;