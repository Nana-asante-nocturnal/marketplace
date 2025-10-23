import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-3xl overflow-hidden mb-8 border border-dark-700">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-transparent"></div>
      
      <div className="relative px-12 py-16 flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 z-10">
          {/* Featured Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center transform rotate-12">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-dark-900">✓</div>
            </div>
            <span className="text-primary-400 text-sm font-bold uppercase tracking-wider">Featured</span>
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            AI Tool of<br />
            The Month
          </h2>
          
          {/* Carousel Dots */}
          <div className="flex gap-2 mt-8">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Right Side - Robot Illustration */}
        <div className="hidden lg:block relative z-10">
          <div className="relative w-96 h-80">
            {/* Featured Badge Top Right */}
            <div className="absolute -top-4 right-8 z-20">
              <div className="relative animate-bounce">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
                  <svg className="w-10 h-10 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-dark-900 mt-12">Featured</span>
                </div>
              </div>
            </div>
            
            {/* Robot/AI Placeholder */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-3xl"></div>
              {/* Robot Head */}
              <div className="absolute top-8 right-12 w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl border-4 border-primary-500">
                {/* Eyes */}
                <div className="flex gap-4 justify-center mt-8">
                  <div className="w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
                  <div className="w-6 h-6 bg-primary-400 rounded-full animate-pulse"></div>
                </div>
                {/* Mouth line */}
                <div className="w-12 h-1 bg-primary-400 mx-auto mt-4 rounded-full"></div>
              </div>
              
              {/* Robot Body */}
              <div className="absolute top-44 right-8 w-40 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl border-4 border-primary-500/50">
                <div className="flex gap-2 justify-center mt-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Featured Badge Bottom Right */}
              <div className="absolute bottom-4 right-0 z-20">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center transform -rotate-12">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-dark-900 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-xs font-bold text-dark-900">Featured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Cards Section */}
      <div className="relative bg-white rounded-t-3xl -mb-8 pt-8 px-12 pb-16">
        <div className="grid grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-dark-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-4">
              <div className="grid grid-cols-3 gap-1 p-2">
                <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-white font-semibold text-sm">Trending Apps</h3>
          </div>
          
          {/* Card 2 */}
          <div className="bg-dark-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm">Trending Now</h3>
          </div>
          
          {/* Card 3 */}
          <div className="bg-dark-900 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm">Trending Now</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
