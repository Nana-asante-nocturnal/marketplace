import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const CategoryFilter = () => {
  const categories = [
    'All',
    'AI Tools',
    'Productivity',
    'Design',
    'Development',
    'Marketing',
    'Analytics',
  ];

  return (
    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-primary-500 transition-colors whitespace-nowrap">
        <SlidersHorizontal className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Filters</span>
      </button>
      
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
            index === 0
              ? 'bg-primary-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
