import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import FeaturedApps from './components/FeaturedApps';
import AIToolsPage from './components/AIToolsPage';
import SubscriptionsPage from './components/SubscriptionsPage';
import CategoriesPage from './components/CategoriesPage';
import OffersPage from './components/OffersPage';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on initial load
  useEffect(() => {
    // In a real app, you would check for a valid auth token here
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogin = () => {
    // In a real app, you would validate credentials and get a token
    const fakeToken = 'fake-jwt-token';
    localStorage.setItem('authToken', fakeToken);
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    // In a real app, you would create a new user and log them in
    const fakeToken = 'fake-jwt-token';
    localStorage.setItem('authToken', fakeToken);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center bg-dark-900">Loading...</div>;
    }
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  // Public Route component
  const PublicRoute = ({ children }) => {
    if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center bg-dark-900">Loading...</div>;
    }
    return !isAuthenticated ? children : <Navigate to="/" />;
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-dark-900">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={
          <PublicRoute>
            <Login onLogin={handleLogin} />
          </PublicRoute>
        } />
        
        <Route path="/signup" element={
          <PublicRoute>
            <Signup onSignup={handleSignup} />
          </PublicRoute>
        } />

        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <div className="min-h-screen bg-dark-900 relative overflow-hidden">
              <Sidebar 
                onPageChange={handlePageChange} 
                isCollapsed={isSidebarCollapsed} 
                onToggleCollapse={toggleSidebar}
                onLogout={handleLogout}
              />
              <div className={`transition-all duration-300 relative z-10 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'} bg-dark-900 min-h-screen`}>
                <main className="p-12 max-w-[1400px] bg-dark-900">
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
                      <HeroBanner />
                      <FeaturedApps />
                    </>
                  )}
                </main>
              </div>
            </div>
          </ProtectedRoute>
        } />

        {/* Redirect all other routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;