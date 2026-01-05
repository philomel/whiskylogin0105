import React, { useState } from 'react';
import { Search, List, TrendingUp, BarChart3, PieChart, Wallet, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OTCDeal } from '../types';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const OTC: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');

  const mockDeals: OTCDeal[] = [
    {
      id: '1',
      project: 'Macallan 72yo Genesis',
      logo: 'https://picsum.photos/60?random=50',
      type: 'sell',
      amount: '1 Cask',
      price: 120000,
      fdv: '$46,694,666',
      status: 'active',
      listedDate: '19/11/2025',
      vesting: 'Instant'
    },
    {
      id: '2',
      project: 'Karuizawa 1960 Cask',
      logo: 'https://picsum.photos/60?random=51',
      type: 'sell',
      amount: '2 Casks',
      price: 350000,
      fdv: '$12,500,000',
      status: 'active',
      listedDate: '18/11/2025',
      vesting: 'Bonded Warehouse'
    },
    {
      id: '3',
      project: 'Springbank 1919',
      logo: 'https://picsum.photos/60?random=52',
      type: 'buy',
      amount: '1 Bottle',
      price: 85000,
      fdv: 'N/A',
      status: 'active',
      listedDate: '15/11/2025',
    }
  ];

  const tokenData = [
    { name: '10:00', price: 1.20 },
    { name: '11:00', price: 1.22 },
    { name: '12:00', price: 1.21 },
    { name: '13:00', price: 1.25 },
    { name: '14:00', price: 1.28 },
    { name: '15:00', price: 1.30 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in font-sans">
      
      {/* SECTION 1: Platform Token Economics */}
      <section className="mb-8 bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-serif font-bold text-whisky-dark mb-6 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-whisky-gold" /> Platform Token Economics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Net Valuation</p>
                <p className="text-4xl font-bold text-whisky-dark">$42,500,000</p>
                <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +5.2% last 24h
                </p>
            </div>
            <div className="space-y-1">
                <p className="text-sm text-gray-500 uppercase tracking-wide">TWR Token Price</p>
                <p className="text-4xl font-bold text-whisky-dark">$1.30</p>
                 <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +1.8% last 24h
                </p>
            </div>
            <div className="h-24 md:h-full min-h-[100px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={tokenData}>
                         <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#d4a574" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#d4a574" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#e5e7eb', fontSize: '12px' }} />
                        <Line type="monotone" dataKey="price" stroke="#d4a574" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
      </section>

      {/* SECTION 2: NFT Overall Summary */}
      <section className="mb-12 bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-serif font-bold text-whisky-dark mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-whisky-gold" /> NFT Market Summary
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 divide-x divide-gray-100">
            <div className="px-4 first:pl-0">
                <p className="text-xs text-gray-500 mb-1">Total Assets</p>
                <p className="text-2xl font-bold text-whisky-dark">1,245</p>
            </div>
             <div className="px-4">
                <p className="text-xs text-gray-500 mb-1">Avg. Price</p>
                <p className="text-2xl font-bold text-whisky-dark">$8,450</p>
            </div>
             <div className="px-4">
                <p className="text-xs text-gray-500 mb-1">Total Market Cap</p>
                <p className="text-2xl font-bold text-whisky-dark">$10.5M</p>
            </div>
             <div className="px-4">
                <p className="text-xs text-gray-500 mb-1">Tx Frequency (24h)</p>
                <p className="text-2xl font-bold text-whisky-dark">142</p>
            </div>
             <div className="px-4">
                <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3 h-3 text-gray-400" />
                    <p className="text-xs text-gray-500">Holders</p>
                </div>
                <p className="text-2xl font-bold text-whisky-dark">850</p>
            </div>
        </div>
      </section>

      <div className="border-t border-whisky-border my-12"></div>

      {/* SECTION 3: OTC Deals */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-2">OTC Deals</h1>
        <p className="text-gray-600 mb-6">Submit interest in OTC deals, in partnership with SecondLane.</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
             <div className="relative flex-grow">
                <input 
                    type="text" 
                    placeholder="Search by project name..." 
                    className="w-full h-14 bg-white border border-whisky-border rounded-xl pl-12 pr-4 text-whisky-dark focus:border-whisky-button outline-none shadow-sm font-sans"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex gap-4">
                <Link to="/otc/deal/create-otc" className="flex items-center justify-center h-14 px-6 bg-whisky-button text-whisky-button-text font-bold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shadow-md">
                    Submit your OTC deal
                </Link>
                <Link to="/otc/my-deals" className="flex items-center justify-center h-14 px-6 bg-white border border-whisky-border text-whisky-dark font-bold rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm gap-2">
                    <List className="w-4 h-4" /> My Deals
                </Link>
            </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white border border-whisky-border rounded-xl p-4 mb-8 flex gap-8 px-8 shadow-sm inline-flex">
            <button onClick={() => setActiveTab('sell')} className={`flex items-center gap-2 ${activeTab === 'sell' ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity`}>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-sans">Wants To Sell</span>
                <span className="text-xl font-bold text-whisky-dark">96</span>
            </button>
            <div className="w-px bg-gray-200"></div>
            <button onClick={() => setActiveTab('buy')} className={`flex items-center gap-2 ${activeTab === 'buy' ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity`}>
                <span className="text-gray-500 text-sm uppercase tracking-wider font-sans">Wants To Buy</span>
                <span className="text-xl font-bold text-whisky-dark">78</span>
            </button>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDeals.filter(d => d.type === activeTab).map((deal) => (
                <Link key={deal.id} to={`/otc/deal/${deal.id}`} className="bg-white border border-whisky-border rounded-xl p-6 hover:border-whisky-button transition-all group block shadow-sm hover:shadow-md">
                    <div className="flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 p-1 flex-shrink-0 bg-gray-50">
                                <img src={deal.logo} alt="logo" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-lg text-whisky-dark group-hover:text-whisky-gold transition-colors line-clamp-1">{deal.project}</h3>
                                <span className={`text-xs px-2 py-0.5 rounded font-medium ${deal.type === 'sell' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {deal.type === 'sell' ? 'Offer to Sell' : 'Offer to Buy'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3 mb-6 flex-grow font-sans">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">FDV / Amount</span>
                                <div className="text-right">
                                    <span className="block font-mono text-whisky-dark font-bold">{deal.fdv || '-'}</span>
                                    <span className="block text-xs text-gray-500">{deal.amount}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Deal Type</span>
                                <span className="text-gray-800">{deal.vesting || 'Spot'}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500">Listed Date</span>
                                <span className="text-gray-800">{deal.listedDate}</span>
                            </div>
                        </div>

                        <div className="w-full py-3 bg-gray-50 border border-whisky-border text-whisky-dark rounded-lg text-center group-hover:bg-whisky-button group-hover:text-whisky-button-text font-medium transition-all font-sans">
                            Click to View Details
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OTC;