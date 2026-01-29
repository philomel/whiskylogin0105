
import React, { useState, useEffect } from 'react';
import { User, Shield, Bell, CreditCard, Lock, Plus, Copy, Check, ExternalLink, Link, Mail, FileText, Download, FileSpreadsheet, PieChart, BarChart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Wallet } from '../types';

interface SettingsProps {
    initialTab?: string;
}

const Settings: React.FC<SettingsProps> = ({ initialTab = 'profile' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'wallets') navigate('/settings/wallets');
    else if (tab === 'privacy') navigate('/settings/privacy');
    else navigate('/settings');
  };

  const wallets: Wallet[] = [
    { id: '1', name: 'MetaMask', address: '0x1234...5678', type: 'metamask', balance: 5.42, isPrimary: true, network: 'Ethereum Mainnet' },
    { id: '2', name: 'OKX Wallet', address: '0xabcd...ef01', type: 'okx', balance: 2.15, isPrimary: false, network: 'Ethereum Mainnet' }
  ];

  const renderContent = () => {
      switch(activeTab) {
        case 'wallets':
            return (
                <div className="space-y-8 animate-fade-in">
                     <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-whisky-dark">Connected Wallets</h2>
                        <button className="flex items-center gap-2 text-sm text-whisky-button border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                            <Plus className="w-4 h-4" /> Connect Another Wallet
                        </button>
                     </div>

                     <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 font-sans">
                        <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Primary Wallet</h3>
                        {wallets.filter(w => w.isPrimary).map(wallet => (
                            <div key={wallet.id} className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200">
                                        <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-whisky-dark">{wallet.name}</span>
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded border border-green-200">Active</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                            <span className="font-mono">{wallet.address}</span>
                                            <Copy className="w-3 h-3 cursor-pointer hover:text-whisky-dark" />
                                            <ExternalLink className="w-3 h-3 cursor-pointer hover:text-whisky-dark" />
                                        </div>
                                        <p className="text-sm text-gray-700 mt-1">Balance: {wallet.balance} ETH</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-3 py-1 text-xs bg-gray-200 rounded text-gray-500 cursor-not-allowed">Set as Default</button>
                                    <button className="px-3 py-1 text-xs text-red-500 hover:bg-red-50 rounded border border-transparent hover:border-red-200">Disconnect</button>
                                </div>
                            </div>
                        ))}
                     </div>

                     <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Other Connected Wallets</h3>
                        <div className="space-y-4 font-sans">
                            {wallets.filter(w => !w.isPrimary).map(wallet => (
                                <div key={wallet.id} className="bg-white rounded-xl p-4 border border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center">
                                    <div className="flex items-center gap-4 w-full md:w-auto">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                                             <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-whisky-dark block">{wallet.name}</span>
                                            <span className="font-mono text-sm text-gray-500">{wallet.address}</span>
                                            <p className="text-xs text-gray-600 mt-1">Balance: {wallet.balance} ETH</p>
                                        </div>
                                    </div>
                                     <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                                        <button className="px-3 py-1 text-xs border border-gray-300 text-gray-600 hover:bg-gray-50 rounded">Set as Primary</button>
                                        <button className="px-3 py-1 text-xs text-red-500 hover:bg-red-50 rounded">Disconnect</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>
            );
        case 'privacy':
            return (
                <div className="space-y-8 animate-fade-in font-sans">
                     <h2 className="text-xl font-bold text-whisky-dark">Privacy Settings</h2>

                     <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-whisky-dark mb-4">Profile Visibility</h3>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="profile_vis" defaultChecked className="w-4 h-4 text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600 group-hover:text-whisky-dark">Public - Anyone can view your profile</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="radio" name="profile_vis" className="w-4 h-4 text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600 group-hover:text-whisky-dark">Private - Only you can view your profile</span>
                            </label>
                        </div>
                     </div>

                     <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h3 className="text-lg font-semibold text-whisky-dark mb-4">Activity Visibility</h3>
                         <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="rounded text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600">Show my purchases in public activity feed</span>
                            </label>
                             <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="rounded text-whisky-button bg-gray-100 border-gray-300 focus:ring-whisky-button" />
                                <span className="text-gray-600">Show my sales in public activity feed</span>
                            </label>
                        </div>
                     </div>
                </div>
            );
        default:
             return (
                <div className="space-y-8 animate-fade-in font-sans">
                    <h2 className="text-xl font-bold text-whisky-dark mb-6">Profile Details</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-2">Display Name</label>
                            <input type="text" defaultValue="WhiskyConnoisseur" className="w-full bg-white border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500 mb-2">Bio</label>
                            <textarea rows={4} defaultValue="Collector of rare Speyside single malts." className="w-full bg-white border border-gray-300 rounded-lg p-3 text-whisky-dark focus:border-whisky-button outline-none shadow-sm" />
                        </div>
                    </div>
                </div>
            );
      }
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-8">Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 flex-shrink-0">
                <nav className="space-y-1">
                    {[
                        { id: 'profile', name: 'Profile', icon: User },
                        { id: 'wallets', name: 'Wallets', icon: CreditCard }, 
                        { id: 'notifications', name: 'Notifications', icon: Bell },
                        { id: 'privacy', name: 'Privacy', icon: Lock },
                    ].map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleTabChange(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === item.id ? 'bg-whisky-button text-whisky-button-text shadow-sm' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </button>
                    ))}
                </nav>
            </aside>
            <div className="flex-grow max-w-2xl bg-white border border-whisky-border rounded-xl p-8 min-h-[500px] shadow-lg">
                {renderContent()}
            </div>
        </div>
    </div>
  );
};

export default Settings;
