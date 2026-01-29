
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import OTC from './pages/OTC';
import OTCDealDetail from './pages/OTCDealDetail';
import CreateOTCDeal from './pages/CreateOTCDeal';
import MyOTCDeals from './pages/MyOTCDeals';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';
import Community from './pages/Community';
import Settings from './pages/Settings';
import NFTDetail from './pages/NFTDetail';
import NFTPurchase from './pages/NFTPurchase';
import MyAccount from './pages/MyAccount';
import NFTManagement from './pages/NFTManagement';
import Notifications from './pages/Notifications';
import DAO from './pages/DAO';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import Reports from './pages/Reports';

const App: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Guard Component for Protected Routes
  const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return <Layout onLogout={handleLogout}>{children}</Layout>;
  };

  return (
    <Router>
      <Routes>
        {/* Public/Auth Routes */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onLogin={handleLogin} />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
        
        {/* OTC Routes */}
        <Route path="/otc" element={<ProtectedRoute><OTC /></ProtectedRoute>} />
        <Route path="/otc/deal/create-otc" element={<ProtectedRoute><CreateOTCDeal /></ProtectedRoute>} />
        <Route path="/otc/deal/:id" element={<ProtectedRoute><OTCDealDetail /></ProtectedRoute>} />
        <Route path="/otc/my-deals" element={<ProtectedRoute><MyOTCDeals /></ProtectedRoute>} />

        {/* DAO Route */}
        <Route path="/dao" element={<ProtectedRoute><DAO /></ProtectedRoute>} />

        <Route path="/activity" element={<ProtectedRoute><Activity /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        
        {/* Profile Routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/u/:username" element={<ProtectedRoute><PublicProfile /></ProtectedRoute>} />
        
        {/* Profile Management Routes */}
        <Route path="/profile/my-nfts" element={<ProtectedRoute><MyAccount section="my-nfts" /></ProtectedRoute>} />
        <Route path="/profile/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/profile/my-listings" element={<ProtectedRoute><MyAccount section="listings" /></ProtectedRoute>} />
        <Route path="/profile/offers-received" element={<ProtectedRoute><MyAccount section="offers-received" /></ProtectedRoute>} />
        <Route path="/profile/my-offers" element={<ProtectedRoute><MyAccount section="my-offers" /></ProtectedRoute>} />
        <Route path="/profile/favorites" element={<ProtectedRoute><MyAccount section="favorites" /></ProtectedRoute>} />
        <Route path="/profile/created" element={<ProtectedRoute><MyAccount section="created" /></ProtectedRoute>} />
        <Route path="/profile/royalties" element={<ProtectedRoute><MyAccount section="royalties" /></ProtectedRoute>} />
        <Route path="/profile/transactions" element={<ProtectedRoute><MyAccount section="transactions" /></ProtectedRoute>} />

        {/* NFT Actions */}
        <Route path="/profile/list-nft/:id" element={<ProtectedRoute><NFTManagement action="list" /></ProtectedRoute>} />
        <Route path="/profile/transfer/:id" element={<ProtectedRoute><NFTManagement action="transfer" /></ProtectedRoute>} />
        <Route path="/profile/withdraw" element={<ProtectedRoute><NFTManagement action="withdraw" /></ProtectedRoute>} />

        {/* Reports Standalone Route */}
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />

        {/* Settings Sub-routes */}
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/settings/wallets" element={<ProtectedRoute><Settings initialTab="wallets" /></ProtectedRoute>} />
        <Route path="/settings/privacy" element={<ProtectedRoute><Settings initialTab="privacy" /></ProtectedRoute>} />

        <Route path="/nft/:id" element={<ProtectedRoute><NFTDetail /></ProtectedRoute>} />
        <Route path="/nft/:id/purchase" element={<ProtectedRoute><NFTPurchase /></ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><div className="p-20 text-center text-whisky-dark">Create Feature Coming Soon</div></ProtectedRoute>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
