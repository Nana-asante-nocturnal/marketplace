import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedGrips = () => {
  const grips = [
    {
      id: 1,
      name: 'Independent Apps',
      category: 'SUBSCRIBED',
      icon: '▶',
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
    },
    {
      id: 2,
      name: 'Independent Apps',
      category: 'SUBSCRIBED',
      icon: 'AI',
      bgColor: 'bg-gray-900',
    },
    {
      id: 3,
      name: 'Independent Apps',
      category: 'SUBSCRIBED',
      icon: '⊡',
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      id: 4,
      name: 'Coder Showcase Apps',
      category: 'SUBSCRIBED',
      icon: '◇',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      id: 5,
      name: 'Coder Showcase Apps',
      category: 'SUBSCRIBED',
      icon: '◉',
      bgColor: 'bg-gray-900',
    },
    {
      id: 6,
      name: 'Independent Apps',
      category: 'SUBSCRIBED',
      icon: 'AI',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Featured Independent Grips</h2>
        <button className="text-gray-400 hover:text-gray-300 flex items-center gap-1 text-sm font-medium">
          See All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {grips.map((grip) => (
          <div key={grip.id} className="group cursor-pointer">
            <div className="bg-dark-800 rounded-2xl p-5 mb-3 border border-dark-700 hover:border-primary-500/50 transition-all hover:-translate-y-1 duration-200">
              <div
                className={`w-full aspect-square rounded-2xl flex items-center justify-center text-white text-3xl font-bold ${
                  grip.gradient ? `bg-gradient-to-br ${grip.gradient}` : grip.bgColor
                }`}
              >
                {grip.icon}
              </div>
            </div>
            <h3 className="font-bold text-white text-base mb-1 group-hover:text-primary-400 transition-colors">
              {grip.name}
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{grip.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrips;
