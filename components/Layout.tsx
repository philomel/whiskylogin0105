
import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Wallet, Menu, User, Home, Compass, PlusCircle, Repeat, X, LogOut, Grid, List, Heart, Settings as SettingsIcon, Vote, History, Globe, BarChart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onLogout?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate('/login');
    }
  };

  const toggleWallet = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div className="min-h-screen flex flex-col bg-whisky-main text-whisky-dark relative transition-colors duration-300 font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-whisky-border bg-whisky-main/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-whisky-button flex items-center justify-center shadow-lg text-whisky-button-text">
              <span className="font-serif text-xl font-bold">R</span>
            </div>
            <span className="font-serif text-2xl font-bold text-whisky-dark tracking-wide group-hover:text-whisky-gold transition-colors">
              The Whisky Reserve
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/otc" className={`text-sm font-medium hover:text-whisky-gold transition-colors font-sans ${isActive('/otc') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              OTC Deals
            </Link>
            <Link to="/explore" className={`text-sm font-medium hover:text-whisky-gold transition-colors font-sans ${isActive('/explore') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              Portfolio
            </Link>
            <Link to="/community" className={`text-sm font-medium hover:text-whisky-gold transition-colors font-sans ${isActive('/community') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              Community
            </Link>
            <Link to="/dao" className={`text-sm font-medium hover:text-whisky-gold transition-colors font-sans ${isActive('/dao') ? 'text-whisky-gold font-bold' : 'text-gray-600'}`}>
              DAO
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search cask, bottles..." 
                className="bg-white border border-whisky-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-whisky-button w-48 xl:w-64 text-whisky-dark placeholder-gray-400 transition-all focus:ring-1 focus:ring-whisky-button font-sans"
              />
            </div>

            <Link to="/notifications" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group">
              <Bell className="w-5 h-5 text-gray-600 group-hover:text-whisky-gold" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </Link>

            <div className="relative hidden md:block">
              <button onClick={toggleUserMenu} className="flex p-2 hover:bg-gray-100 rounded-full transition-colors group">
                <User className={`w-5 h-5 group-hover:text-whisky-gold ${isActive('/profile') ? 'text-whisky-gold' : 'text-gray-600'}`} />
              </button>
              
              {isUserMenuOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-whisky-border rounded-xl shadow-xl z-20 py-2 animate-fade-in font-sans">
                    <div className="px-4 py-3 border-b border-whisky-border bg-gray-50">
                      <p className="font-bold text-whisky-dark">@WhiskyConnoisseur</p>
                      <p className="text-xs text-gray-500 font-mono">0x1234...5678</p>
                    </div>
                    <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <Link to="/profile/my-nfts" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <Grid className="w-4 h-4" /> My NFTs
                    </Link>
                    <Link to="/reports" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <BarChart className="w-4 h-4" /> Reports
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-whisky-gold transition-colors">
                      <SettingsIcon className="w-4 h-4" /> Settings
                    </Link>
                    <div className="border-t border-whisky-border mt-2 pt-2">
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-whisky-dark font-bold hover:bg-gray-100 transition-colors text-left">
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button 
              onClick={toggleWallet}
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md font-sans ${isWalletConnected ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-whisky-button text-whisky-button-text hover:opacity-90'}`}
            >
              <Wallet className="w-4 h-4" />
              <span>{isWalletConnected ? '0x12...5678' : 'Connect'}</span>
            </button>
            
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-whisky-dark" /> : <Menu className="w-6 h-6 text-whisky-dark" />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-whisky-border md:hidden z-50 pb-safe shadow-[0_-5px_15px_rgba(0,0,0,0.05)] font-sans">
        <div className="grid grid-cols-5 h-16 items-center">
          <Link to="/otc" className={`flex flex-col items-center justify-center gap-1 ${isActive('/otc') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Repeat className="w-5 h-5" />
            <span className="text-[10px] font-medium">OTC</span>
          </Link>
          <Link to="/explore" className={`flex flex-col items-center justify-center gap-1 ${isActive('/explore') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Compass className="w-5 h-5" />
            <span className="text-[10px] font-medium">Portfolio</span>
          </Link>
          <Link to="/" className={`flex flex-col items-center justify-center gap-1 ${isActive('/') ? 'text-whisky-gold' : 'text-gray-400'}`}>
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link to="/community" className={`flex flex-col items-center justify-center gap-1 ${isActive('/community') ? 'text-whisky-gold' : 'text-gray-400'}`}>
             <Globe className="w-5 h-5" />
             <span className="text-[10px] font-medium">Community</span>
          </Link>
           <Link to="/dao" className={`flex flex-col items-center justify-center gap-1 ${isActive('/dao') ? 'text-whisky-gold' : 'text-gray-400'}`}>
             <Vote className="w-5 h-5" />
             <span className="text-[10px] font-medium">DAO</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
