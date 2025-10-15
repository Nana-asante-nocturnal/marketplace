import React, { useState } from 'react';
import { Home, Grid, CreditCard, Users, Star, Package, Code } from 'lucide-react';

const Sidebar = ({ onPageChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const menuItems = [
    { icon: Home, label: 'AI Tools', highlight: false, page: 'aitools' },
    { icon: Grid, label: 'Categories', highlight: false, page: 'categories' },
    { icon: CreditCard, label: 'Subscriptions', highlight: true, page: 'subscriptions' },
    { 
      icon: Users, 
      label: 'Partners', 
      highlight: false, 
      page: 'partners',
      disabled: true,
      badge: 'Coming Soon'
    },
    { icon: Star, label: 'Featured', highlight: false, page: 'featured' },
    { icon: Package, label: 'Offers', highlight: false, page: 'offers' },
    { 
      icon: Code, 
      label: 'Coder Showcase', 
      highlight: false, 
      page: 'codershowcase',
      disabled: true,
      badge: 'Coming Soon'
    },
  ];

  const handleMenuClick = (index, page) => {
    setActiveIndex(index);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-64 bg-dark-800 h-screen fixed left-0 top-0 overflow-y-auto border-r border-dark-700">
      {/* Logo/Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Tools</h1>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <div className={`w-full ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                  <button
                    onClick={() => !item.disabled && handleMenuClick(index, item.page)}
                    disabled={item.disabled}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                      activeIndex === index && !item.disabled
                        ? 'text-white bg-primary-600'
                        : item.highlight
                        ? 'text-primary-400 hover:bg-dark-700'
                        : 'text-gray-400 hover:bg-dark-700 hover:text-gray-200'
                    } ${item.disabled ? 'cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className={`text-sm ${item.highlight ? 'font-semibold' : 'font-medium'}`}>
                        {item.label}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="text-xs bg-dark-700 text-gray-400 px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
