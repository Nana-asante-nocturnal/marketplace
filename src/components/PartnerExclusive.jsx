import React from 'react';
import { ChevronRight } from 'lucide-react';

const PartnerExclusive = () => {
  return (
    <div className="bg-dark-800 rounded-xl border border-dark-700 p-6 mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Partner Logo */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">▶</span>
          </div>
          <div className="w-16 h-16 bg-dark-900 rounded-xl flex items-center justify-center border border-dark-700">
            <span className="text-white font-bold text-2xl">AI</span>
          </div>
        </div>
        
        {/* Text Content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            Partner Exclusive: Early Access
          </h3>
          <p className="text-gray-400 text-sm">
            Partner Exclusive: Early Access
          </p>
        </div>
      </div>
      
      {/* CTA Button */}
      <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
        Explore
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PartnerExclusive;
