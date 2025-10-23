import React from 'react';
import { ChevronRight, Bell, User } from 'lucide-react';

const AIToolsPage = () => {
  const featuredTools = [
    {
      id: 1,
      title: 'Top Partner AI Offers',
      description: 'Investment agent composite convergence tools.',
      icon: '✓',
      bgColor: 'bg-gray-50',
    },
    {
      id: 2,
      title: 'Top Partner Offers',
      description: 'Closest cafe near you. Find and explore instantly.',
      icon: '📦',
      bgColor: 'bg-gray-50',
    },
    {
      id: 3,
      title: 'Trending Independent Apps',
      description: 'Trending independent apps and services.',
      icon: '⬇',
      bgColor: 'bg-gray-50',
    },
  ];

  const coderShowcase = [
    {
      id: 1,
      title: 'Coder Showcase',
      description: 'Discover developers with classical projects.',
      type: 'dark',
      bgColor: 'bg-gray-900',
    },
    {
      id: 2,
      title: 'Projects Independent.',
      description: 'Designers development enterprise project.',
      type: 'person',
      bgColor: 'bg-gray-300',
    },
    {
      id: 3,
      title: 'Coder Showcase',
      description: 'Customers listen especially to direct.',
      type: 'code',
      bgColor: 'bg-gray-900',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Top Header */}
      <header className="bg-dark-800 border border-dark-700 px-8 py-4 flex items-center justify-between mb-8 rounded-2xl">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Marketplace</h1>
          </div>
          <span className="text-gray-400 text-sm">Find a tool</span>
        </div>
        
        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 bg-dark-700 border border-dark-600 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="relative p-2 hover:bg-dark-700 rounded-lg">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
          </button>
          
          <button className="p-2 hover:bg-dark-700 rounded-lg">
            <User className="w-5 h-5 text-gray-400" />
          </button>
          <div className="w-10 h-10 bg-dark-700 rounded-full overflow-hidden border border-dark-600">
            <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-700"></div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 rounded-3xl overflow-hidden mb-12 border border-dark-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent"></div>
        
        <div className="relative px-12 py-16 flex items-center justify-between">
          <div className="flex-1 z-10">
            <p className="text-primary-500 text-sm font-semibold mb-3 tracking-wide">
             Welcome to the AI Marketplace
            </p>
            <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
              Featured AI Tools
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-md">
             Some random text to be fixed later<br />
              Lorem ipsum
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold transition-colors">
              Lorem ipsum
            </button>
            <div className="flex gap-2.5 mt-8">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-primary-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            </div>
          </div>
          
          <div className="hidden lg:block relative z-10">
            <div className="relative">
              {/* Laptop Illustration */}
              <div className="w-96 h-64 relative">
                {/* Laptop Screen */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl transform perspective-1000 rotate-y-12">
                  <div className="w-full h-full bg-primary-500 rounded-xl p-6 relative overflow-hidden">
                    {/* Screen Content */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-primary-600 rounded-xl"></div>
                    <div className="absolute top-24 left-6 right-6 space-y-2">
                      <div className="h-3 bg-white/30 rounded w-3/4"></div>
                      <div className="h-3 bg-white/30 rounded w-1/2"></div>
                      <div className="h-3 bg-white/30 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-xl shadow-lg"></div>
                <div className="absolute top-12 -left-8 w-12 h-12 bg-white rounded-lg shadow-lg"></div>
                <div className="absolute bottom-8 -left-6">
                  <div className="w-16 h-20 bg-green-500 rounded-t-full"></div>
                  <div className="w-16 h-4 bg-primary-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-4 right-12 w-12 h-12 bg-white rounded-lg shadow-lg"></div>
                <div className="absolute -bottom-4 right-4 w-16 h-16 bg-primary-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured AI Tools Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured AI Tools</h2>
          <button className="text-gray-400 hover:text-gray-300 flex items-center gap-2 text-sm font-medium">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-dark-800 border border-dark-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary-500/50 transition-all hover:-translate-y-1 duration-200 cursor-pointer"
            >
              <div className="w-20 h-20 bg-dark-900 border border-dark-700 rounded-2xl flex items-center justify-center text-4xl mb-6">
                <span className="text-primary-500 text-3xl font-bold">{tool.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coder Showcase Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Coder Showcase</h2>
          <button className="text-gray-400 hover:text-gray-300 flex items-center gap-2 text-sm font-medium">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coderShowcase.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all hover:-translate-y-1 duration-200 cursor-pointer"
            >
              {item.type === 'dark' ? (
                <div className={`${item.bgColor} h-72 p-8 relative`}>
                  <div className="absolute top-8 right-8 w-20 h-20 bg-primary-500 rounded-2xl transform rotate-45"></div>
                  <div className="relative z-10">
                    <h3 className="text-primary-500 text-xl font-bold mb-2">Coder</h3>
                    <h3 className="text-primary-500 text-xl font-bold mb-4">Showcase</h3>
                    <p className="text-gray-400 text-sm mb-8">
                      Trending display<br />
                      Developers.
                    </p>
                  </div>
                  <div className="absolute bottom-8 right-8 w-24 h-24 bg-primary-500/20 rounded-2xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-xl"></div>
                  </div>
                </div>
              ) : item.type === 'person' ? (
                <div className={`${item.bgColor} h-72 flex items-end p-8 relative`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ) : (
                <div className={`${item.bgColor} h-72 p-6 relative`}>
                  <div className="absolute top-6 right-6 w-12 h-12 bg-primary-500 rounded-lg"></div>
                  <div className="bg-gray-800 rounded-xl h-full p-4 relative overflow-hidden">
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom User Info */}
      <div className="flex items-center gap-3 mt-8">
        <div className="w-12 h-12 bg-dark-700 rounded-full overflow-hidden border border-dark-600">
          <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-700"></div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Meebishop</p>
          <p className="text-xs text-gray-500">User Type</p>
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;
