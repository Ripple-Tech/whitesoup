import React from 'react';
import SubHeading from './SubHeading';
import Image from 'next/image';

// Mock image - replace with your actual image
const WelcomeImage = () => (
  <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
    {/* You can replace this with your actual image */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#DCCA87]/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-[#DCCA87]/30" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-[#DCCA87]/20" />
    
    {/* Placeholder for your image */}
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-[#DCCA87] text-4xl mb-4">✨</div>
        <p className="text-[#DCCA87] font-serif text-lg">Fine Dining Experience</p>
      </div>
    </div>
  </div>
);

const Header = () => {
  return (
    <div className="bg-black pt-20 lg:pt-24 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8" id="home">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <SubHeading title="Chase the new flavour" />
            
            <h1 className="font-serif text-[#DCCA87] font-bold uppercase tracking-wider leading-tight mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px]">
                The Key To
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[100px] mt-2">
                Fine Dining
              </span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi 
              facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.
            </p>
            
            <button 
              type="button" 
              className="bg-[#DCCA87] text-black px-8 py-4 font-serif font-bold text-lg uppercase tracking-wider hover:bg-[#C8B46E] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Explore Menu
            </button>
            
            {/* Decorative elements */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full border border-[#DCCA87] flex items-center justify-center">
                  <span className="text-[#DCCA87] text-lg">★</span>
                </div>
                <div className="ml-4">
                  <p className="text-white font-serif text-xl">50+</p>
                  <p className="text-gray-400 text-sm">Premium Dishes</p>
                </div>
              </div>
              
              <div className="h-12 w-px bg-gray-700" />
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full border border-[#DCCA87] flex items-center justify-center">
                  <span className="text-[#DCCA87] text-lg">⏱️</span>
                </div>
                <div className="ml-4">
                  <p className="text-white font-serif text-xl">24/7</p>
                  <p className="text-gray-400 text-sm">Open Service</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative">
            <WelcomeImage />
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#DCCA87]/50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#DCCA87]/50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#DCCA87]/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#DCCA87]/50" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="mt-16 lg:mt-20 flex justify-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-[#DCCA87] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#DCCA87] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;