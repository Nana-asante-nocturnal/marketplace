import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import FeaturedApps from './components/FeaturedApps';
import AIToolsPage from './components/AIToolsPage';
import SubscriptionsPage from './components/SubscriptionsPage';
import CategoriesPage from './components/CategoriesPage';
import OffersPage from './components/OffersPage';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar onPageChange={handlePageChange} />

      {/* Main Content */}
      <div className="ml-64 relative z-10">
        {/* Main Content Area */}
        <main className="p-12 max-w-[1400px]">
          {activePage === 'aitools' ? (
            <AIToolsPage />
          ) : activePage === 'subscriptions' ? (
            <SubscriptionsPage />
          ) : activePage === 'categories' ? (
            <CategoriesPage />
          ) : activePage === 'offers' ? (
            <OffersPage />
          ) : (
            <>
              {/* Hero Banner */}
              <HeroBanner />

              {/* Featured Apps - Trending Now Section */}
              <FeaturedApps />
            </>
          )}
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-dark-900 hover:bg-dark-800 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 border-2 border-dark-700">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;
