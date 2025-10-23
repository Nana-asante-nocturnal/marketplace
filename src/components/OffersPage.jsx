import React, { useState } from 'react';
import { Zap, Clock, Tag, Star, Check, ArrowRight } from 'lucide-react';

const OffersPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Offers' },
    { id: 'ai', name: 'AI Tools' },
    { id: 'web', name: 'Web Services' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
  ];

  const offers = [
    {
      id: 1,
      title: 'Premium AI Assistant',
      description: 'Advanced AI assistant with natural language processing and automation capabilities.',
      price: 29.99,
      originalPrice: 49.99,
      discount: 40,
      category: 'ai',
      featured: true,
      limited: true,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Web Hosting Pro',
      description: 'Lightning-fast hosting with 99.9% uptime and free SSL certificate included.',
      price: 9.99,
      originalPrice: 19.99,
      discount: 50,
      category: 'web',
      featured: false,
      limited: false,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'UI/UX Design Package',
      description: 'Complete design package for your next big project, including wireframes and prototypes.',
      price: 299,
      originalPrice: 499,
      discount: 40,
      category: 'design',
      featured: true,
      limited: true,
      rating: 4.9,
    },
    {
      id: 4,
      title: 'SEO Optimization',
      description: 'Get your website to the top of search results with our expert SEO services.',
      price: 199,
      originalPrice: 399,
      discount: 50,
      category: 'marketing',
      featured: false,
      limited: true,
      rating: 4.7,
    },
  ];

  const filteredOffers = activeCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === activeCategory);

  const featuredOffer = offers.find(offer => offer.featured);

  return (
    <div className="min-h-screen bg-dark-900 text-white p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 mb-12 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full mb-4">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Exclusive Deals</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Amazing Offers Just For You</h1>
          <p className="text-lg text-white/80 mb-8">Discover exclusive deals and save big on top tools and services.</p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2">
            View All Deals
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full"></div>
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full"></div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Offer */}
      {featuredOffer && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold">Deal of the Week</h2>
          </div>
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-6 border border-dark-600">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="inline-block bg-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {featuredOffer.discount}% OFF
                </div>
                <h3 className="text-2xl font-bold mb-2">{featuredOffer.title}</h3>
                <p className="text-gray-400 mb-6">{featuredOffer.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">${featuredOffer.price}</span>
                  <span className="text-gray-400 line-through">${featuredOffer.originalPrice}</span>
                  <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-yellow-400" />
                    <span className="text-sm font-medium">{featuredOffer.rating}</span>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Get This Deal
                </button>
              </div>
              <div className="w-full md:w-1/3 bg-dark-600 rounded-xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-blue-400" />
                  </div>
                  {featuredOffer.limited && (
                    <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>Limited Time</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Offers Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All Offers</h2>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Showing {filteredOffers.length} offers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-dark-800 rounded-2xl overflow-hidden border border-dark-700 hover:border-blue-500/30 transition-colors group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-400" />
                  </div>
                  {offer.discount > 0 && (
                    <div className="bg-primary-500/20 text-primary-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      {offer.discount}% OFF
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{offer.description}</p>
                
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">${offer.price}</span>
                      {offer.originalPrice > offer.price && (
                        <span className="text-gray-500 line-through text-sm">${offer.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < Math.floor(offer.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{offer.rating}</span>
                    </div>
                  </div>
                  <button className="bg-blue-500/10 hover:bg-blue-500/30 text-blue-400 hover:text-white p-2 rounded-lg transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {offer.limited && (
                <div className="px-6 py-3 bg-dark-700/50 border-t border-dark-600 flex items-center gap-2 text-sm text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>Limited time offer</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to see more offers?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Sign up to get notified about exclusive deals and new offers as they become available.
        </p>
        <div className="flex max-w-md mx-auto gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-dark-800 border border-dark-600 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
