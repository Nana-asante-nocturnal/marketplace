import React, { useState } from 'react';
import { 
  Home, 
  Grid, 
  CreditCard, 
  Users, 
  Star, 
  Package, 
  Code, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  User,
  Wrench
} from 'lucide-react';

const Sidebar = ({ onPageChange, isCollapsed, onToggleCollapse, onLogout }) => {
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

  const handleLogout = (e) => {
    e.preventDefault();
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-dark-800 h-screen fixed left-0 top-0 overflow-y-auto border-r border-dark-700 transition-all duration-300 flex flex-col`}>
      <div className="flex-1">
        {/* Logo/Header */}
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Tools</h1>
            </div>
          )}
          <button 
            onClick={onToggleCollapse}
            className="p-1 rounded-md hover:bg-dark-700 text-gray-400 hover:text-white transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-2">
          <ul className="space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <div className={`${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                      onClick={() => !item.disabled && handleMenuClick(index, item.page)}
                      disabled={item.disabled}
                      className={`w-full flex items-center ${isCollapsed ? 'justify-center p-3' : 'justify-between px-4 py-2.5'} rounded-lg transition-all duration-200 ${
                        activeIndex === index && !item.disabled
                          ? 'text-white bg-primary-600'
                          : item.highlight
                          ? 'text-primary-400 hover:bg-dark-700'
                          : 'text-gray-400 hover:bg-dark-700 hover:text-gray-200'
                      } ${item.disabled ? 'cursor-not-allowed' : ''}`}
                      title={isCollapsed ? item.label : ''}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && (
                          <span className={`text-sm ${item.highlight ? 'font-semibold' : 'font-medium'}`}>
                            {item.label}
                          </span>
                        )}
                      </div>
                      {!isCollapsed && item.badge && (
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

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-dark-700">
        {!isCollapsed && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-dark-700 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">User Name</p>
                <p className="text-xs text-gray-400">Free Plan</p>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleLogout}
          className={`w-full flex items-center ${
            isCollapsed ? 'justify-center' : 'justify-between px-3'
          } py-2.5 text-gray-400 hover:bg-dark-700 hover:text-white rounded-lg transition-colors duration-200`}
          title={isCollapsed ? 'Logout' : ''}
        >
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5" />
            {!isCollapsed && <span className="text-sm">Logout</span>}
          </div>
          {!isCollapsed && (
            <span className="text-xs bg-dark-700 text-gray-400 px-2 py-1 rounded-full">
              Esc
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
