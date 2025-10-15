import React from 'react';

const FeaturedApps = () => {
  const apps = [
    {
      id: 1,
      title: 'Top Coders',
      subtitle: 'The new opportunity for top coders using requirements of clients',
      bgColor: 'bg-gradient-to-br from-dark-900 to-dark-800',
      featured: true,
    },
    {
      id: 2,
      title: 'Top Coders',
      subtitle: 'The ultimate AI-powered development platform',
      bgColor: 'bg-gradient-to-br from-primary-600 to-primary-700',
      featured: true,
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold text-white">Trending Now</h2>
        <button className="px-6 py-2 border-2 border-primary-500 text-primary-400 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-colors">
          featured
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="group cursor-pointer rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className={`${app.bgColor} h-80 p-8 relative flex items-end`}>
              {/* Featured Badge */}
              {app.featured && (
                <div className="absolute top-8 left-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
                      <svg className="w-10 h-10 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-dark-900 mt-14">Featured</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Mock Person Image Placeholder */}
              <div className="absolute right-8 bottom-0 w-48 h-64 bg-gradient-to-t from-transparent to-white/5 rounded-t-3xl">
                {/* Person silhouette placeholder */}
                <div className="absolute bottom-0 right-0 w-40 h-56 bg-gradient-to-br from-gray-600/30 to-gray-800/30 rounded-t-full"></div>
              </div>
              
              {/* Text Content */}
              <div className="relative z-10 max-w-md">
                <h3 className="text-white font-bold text-2xl mb-3">{app.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{app.subtitle}</p>
                
                {/* Featured Tag */}
                {app.featured && (
                  <div className="inline-block mt-4 px-4 py-1.5 bg-yellow-400 text-dark-900 rounded-full text-xs font-bold">
                    featured
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedApps;
