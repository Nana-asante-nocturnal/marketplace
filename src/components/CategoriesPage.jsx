import React, { useState } from 'react';
import { Search, Briefcase, Bot, HeartPulse, Palette, BarChart3, Check, Wallet, Users, Gamepad2, BookOpen, Shield, Megaphone, Settings } from 'lucide-react';

const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 1,
      name: 'Productivity',
      icon: <Briefcase className="w-10 h-10" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-primary-400',
    },
    {
      id: 2,
      name: 'Chatbots',
      icon: <Bot className="w-10 h-10" />,
      bgColor: 'bg-primary-600',
      iconColor: 'text-white',
    },
    {
      id: 3,
      name: 'Healthcare',
      icon: <HeartPulse className="w-10 h-10" />,
      bgColor: 'bg-gray-100',
      iconColor: 'text-primary-500',
    },
    {
      id: 4,
      name: 'Creative',
      icon: <Palette className="w-10 h-10" />,
      bgColor: 'bg-gray-100',
      iconColor: 'text-primary-400',
    },
    {
      id: 5,
      name: 'Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-white',
    },
    {
      id: 6,
      name: 'Analytics',
      icon: <Check className="w-10 h-10" />,
      bgColor: 'bg-gray-100',
      iconColor: 'text-primary-400',
    },
    {
      id: 7,
      name: 'Finance',
      icon: <Wallet className="w-10 h-10" />,
      bgColor: 'bg-gray-100',
      iconColor: 'text-primary-500',
    },
    {
      id: 8,
      name: 'Social',
      icon: <Users className="w-10 h-10" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-primary-400',
    },
    {
      id: 9,
      name: 'Social',
      icon: <BarChart3 className="w-6 h-6" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-primary-400',
    },
    {
      id: 10,
      name: 'Games',
      icon: <Gamepad2 className="w-10 h-10" />,
      bgColor: 'bg-gray-100',
      iconColor: 'text-primary-500',
    },
    {
      id: 11,
      name: 'Search',
      icon: <Search className="w-10 h-10" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-primary-400',
    },
    {
      id: 12,
      name: 'Education',
      icon: <BookOpen className="w-10 h-10" />,
      bgColor: 'bg-primary-600',
      iconColor: 'text-white',
    },
    {
      id: 13,
      name: 'Security',
      icon: <Shield className="w-10 h-10" />,
      bgColor: 'bg-gray-100',
      iconColor: 'text-primary-500',
    },
    {
      id: 14,
      name: 'Marketing',
      icon: <Megaphone className="w-10 h-10" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-primary-400',
    },
    {
      id: 15,
      name: 'Automation',
      icon: <Settings className="w-10 h-10" />,
      bgColor: 'bg-dark-900',
      iconColor: 'text-white',
    },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-dark-900 text-white px-6 py-3 rounded-xl font-semibold text-sm">
            Filter by Category
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search AI apps"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 pl-4 pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="group cursor-pointer"
          >
            <div
              className={`${category.bgColor} rounded-3xl p-8 mb-3 flex items-center justify-center aspect-square hover:scale-105 transition-transform duration-200`}
            >
              <div className={`text-5xl ${category.iconColor}`}>
                {category.icon}
              </div>
            </div>
            <h3 className="text-center font-semibold text-white text-base">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
