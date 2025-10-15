import React from 'react';
import { ChevronRight } from 'lucide-react';

const SubscriptionsPage = () => {
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

  const apps = [
    {
      id: 1,
      title: 'Top Coders: Expl',
      subtitle: 'one Projects',
      type: 'coder',
      bgColor: 'bg-gray-200',
    },
    {
      id: 2,
      title: "Coder's Explore",
      subtitle: 'Experience',
      type: 'coder',
      bgColor: 'bg-gray-300',
    },
    {
      id: 3,
      title: 'Top Coders: Explore Projects',
      subtitle: 'Coder Portfolio',
      type: 'dashboard',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-dark-800 via-dark-700 to-dark-800 rounded-3xl overflow-hidden mb-8 border border-dark-600">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-transparent"></div>
        
        <div className="relative px-10 py-14 flex items-center justify-between">
          <div className="flex-1 z-10">
            <p className="text-white/70 text-sm font-medium mb-3 tracking-wide">
              Bundle Submits Subscriptions
            </p>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Bundle Subscriptions:<br />
              Save 20%
            </h2>
            <div className="flex gap-2.5 mt-8">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/50 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/50 rounded-full"></div>
            </div>
          </div>
          
          <div className="hidden md:block relative z-10">
            <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-300">
              {/* Tablet/Device Frame */}
              <div className="w-80 h-56 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-2xl p-1 border-4 border-dark-700">
                {/* Screen */}
                <div className="w-full h-full bg-dark-800 rounded-xl overflow-hidden">
                  {/* Top bar */}
                  <div className="bg-dark-700 px-4 py-2 flex items-center gap-2 border-b border-dark-600">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-dark-600 rounded w-3/4"></div>
                        <div className="h-2 bg-dark-600 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Exclusive */}
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

      {/* Featured Grips */}
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

      {/* Featured Apps */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Independent Apps</h2>
          <button className="text-gray-400 hover:text-gray-300 flex items-center gap-1 text-sm font-medium">
            Coder Showcase
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all hover:-translate-y-1 duration-200"
            >
              {app.type === 'coder' ? (
                <div className={`${app.bgColor} h-72 flex items-end p-8 relative`}>
                  {/* Mock person image placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-xl mb-2">{app.title}</h3>
                    <p className="text-white/90 text-sm">{app.subtitle}</p>
                  </div>
                </div>
              ) : (
                <div className={`${app.bgColor} h-72 p-6 relative`}>
                  {/* Mock dashboard interface */}
                  <div className="bg-white/10 rounded-xl h-full p-5 backdrop-blur-sm">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-white/30 rounded w-3/4"></div>
                      <div className="h-2 bg-white/30 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                        <div className="h-16 bg-white/20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white font-bold text-xl mb-2">{app.title}</h3>
                    <p className="text-white/90 text-sm">{app.subtitle}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
