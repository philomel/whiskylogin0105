
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, List, Filter, ChevronDown, CheckSquare, Plus, ExternalLink, RefreshCw, Download, AlertTriangle, Coins, TrendingUp } from 'lucide-react';
import NFTCard from '../components/NFTCard';
import { NFT, Offer, ActivityItem } from '../types';

interface MyAccountProps {
  section: 'my-nfts' | 'listings' | 'offers-received' | 'my-offers' | 'favorites' | 'created' | 'royalties' | 'transactions';
}

const MyAccount: React.FC<MyAccountProps> = ({ section }) => {
  const [viewMode, setViewMode] = useState<'GRID' | 'LIST'>('GRID');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  
  const myNFTs: NFT[] = Array.from({ length: 6 }).map((_, i) => ({
    id: i.toString(),
    name: `Exclusive Cask #${100+i}`,
    collection: 'Speyside Rare',
    image: `https://picsum.photos/400/400?random=${200+i}`,
    price: 3.5,
    currency: 'ETH',
    likes: 12,
    status: 'buy_now',
    type: 'Cask',
    isListed: i % 2 === 0
  }));

  const renderHeader = (title: string, subtitle?: string) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h1 className="text-3xl font-serif font-bold text-whisky-dark">{title}</h1>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
             {section === 'my-nfts' && (
                <div className="flex bg-white rounded-lg border border-whisky-border p-1 shadow-sm">
                    <button onClick={() => setViewMode('GRID')} className={`p-2 rounded ${viewMode === 'GRID' ? 'bg-whisky-button text-whisky-button-text' : 'text-gray-400 hover:text-whisky-dark'}`}><Grid className="w-4 h-4" /></button>
                    <button onClick={() => setViewMode('LIST')} className={`p-2 rounded ${viewMode === 'LIST' ? 'bg-whisky-button text-whisky-button-text' : 'text-gray-400 hover:text-whisky-dark'}`}><List className="w-4 h-4" /></button>
                </div>
             )}
        </div>
    </div>
  );

  const renderMyNFTs = () => (
    <>
        <div className="mb-10 animate-fade-in">
            <div className="bg-white border border-whisky-gold/20 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                    <Coins className="w-48 h-48 text-whisky-gold" />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-whisky-gold/10 flex items-center justify-center border border-whisky-gold/20 shadow-sm">
                            <Coins className="w-10 h-10 text-whisky-gold" />
                        </div>
                        <div>
                            <h3 className="text-whisky-muted text-xs font-bold uppercase tracking-[0.2em] mb-2">Total TWR Token Balance</h3>
                            <div className="flex items-baseline gap-3">
                                <span className="text-5xl font-bold text-whisky-dark font-mono tracking-tight">1,250.00</span>
                                <span className="text-whisky-gold font-bold text-xl tracking-widest">TWR</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 w-px bg-whisky-border hidden md:block"></div>
                    <div className="flex flex-col md:items-end">
                        <p className="text-whisky-muted text-xs mb-1">Estimated Asset Value</p>
                        <p className="text-3xl font-bold text-whisky-dark">$1,625.00 <span className="text-sm text-whisky-muted font-normal">USD</span></p>
                        <div className="flex items-center gap-2 text-green-600 text-xs font-bold mt-1">
                            <TrendingUp className="w-3 h-3" /> +1.8% (24h)
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <button className="w-full bg-whisky-button text-whisky-button-text px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all text-sm shadow-md uppercase tracking-widest">
                            Manage Tokens
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {renderHeader("My NFT Portfolio")}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                {['All (32)', 'Not Listed (20)', 'Listed (12)'].map(tab => (
                    <button key={tab} className="px-4 py-2 bg-white border border-whisky-border rounded-full text-sm text-gray-500 hover:text-whisky-dark whitespace-nowrap shadow-sm">
                        {tab}
                    </button>
                ))}
            </div>
            <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-white hover:border-whisky-dark bg-white shadow-sm font-sans">
                Sort: Newest Listing <ChevronDown className="w-4 h-4" />
            </button>
        </div>

        {viewMode === 'GRID' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {myNFTs.map(nft => (
                    <div key={nft.id} className="relative group">
                        <NFTCard nft={nft} />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-whisky-border translate-y-full group-hover:translate-y-0 transition-transform flex justify-between items-center z-20 rounded-b-xl shadow-lg">
                            <span className="text-xs text-whisky-muted uppercase font-bold tracking-tighter">{nft.isListed ? 'Listed' : 'Vaulted'}</span>
                            <div className="flex gap-2">
                                <Link to={`/profile/list-nft/${nft.id}`} className="text-xs bg-whisky-button text-whisky-button-text px-3 py-1.5 rounded font-bold hover:opacity-90">List</Link>
                                <Link to={`/profile/transfer/${nft.id}`} className="text-xs border border-whisky-border text-whisky-muted px-3 py-1.5 rounded hover:bg-gray-50">Transfer</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="bg-white border border-whisky-border rounded-xl p-20 text-center text-whisky-muted italic shadow-sm">
                List view loading...
            </div>
        )}
    </>
  );

  const renderContent = () => {
    switch(section) {
        case 'my-nfts': return renderMyNFTs();
        case 'listings': return renderMyNFTs();
        default: return <div className="p-20 text-center text-whisky-muted font-sans uppercase tracking-widest text-xs">Loading Content...</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in min-h-screen">
       {renderContent()}
    </div>
  );
};

export default MyAccount;
