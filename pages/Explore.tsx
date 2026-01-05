import React from 'react';
import { Filter, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NFT } from '../types';

const Explore: React.FC = () => {
  // Enriched Mock Data with Cask Specifics
  const nfts: NFT[] = [
    {
      id: '1',
      name: 'Macallan Sherry Hogshead',
      collection: 'Macallan',
      image: '',
      price: 12450,
      currency: 'USDC',
      likes: 120,
      status: 'buy_now',
      type: 'Cask',
      dateFilled: '31 Oct 2025',
      strength: '63.5% ABV',
      bulkLitres: 260.2,
      loa: 165.2,
      caskType: 'HHD (Hogshead)',
      maltType: 'Unpeated',
      location: 'Warehouse 4, Speyside'
    },
    {
      id: '2',
      name: 'Highland Park 1998',
      collection: 'Highland Park',
      image: '',
      price: 8900,
      currency: 'USDC',
      likes: 85,
      status: 'buy_now',
      type: 'Cask',
      dateFilled: '15 May 1998',
      strength: '54.2% ABV',
      bulkLitres: 210.5,
      loa: 114.1,
      caskType: 'Barrel',
      maltType: 'Peated',
      location: 'Warehouse 2, Orkney'
    },
    {
      id: '3',
      name: 'Bowmore First Fill Bourbon',
      collection: 'Bowmore',
      image: '',
      price: 22000,
      currency: 'USDC',
      likes: 210,
      status: 'buy_now',
      type: 'Cask',
      dateFilled: '12 Nov 2018',
      strength: '58.9% ABV',
      bulkLitres: 198.0,
      loa: 116.6,
      caskType: 'Barrel',
      maltType: 'Peated',
      location: 'No. 1 Vaults, Islay'
    },
    {
      id: '4',
      name: 'Springbank Sherry Butt',
      collection: 'Springbank',
      image: '',
      price: 45000,
      currency: 'USDC',
      likes: 300,
      status: 'buy_now',
      type: 'Cask',
      dateFilled: '04 Feb 2015',
      strength: '55.5% ABV',
      bulkLitres: 495.0,
      loa: 274.7,
      caskType: 'Butt',
      maltType: 'Lightly Peated',
      location: 'Campbeltown Bond'
    },
    {
      id: '5',
      name: 'Glenfiddich 2010',
      collection: 'Glenfiddich',
      image: '',
      price: 6500,
      currency: 'USDC',
      likes: 45,
      status: 'buy_now',
      type: 'Cask',
      dateFilled: '20 Aug 2010',
      strength: '59.1% ABV',
      bulkLitres: 245.0,
      loa: 144.8,
      caskType: 'Hogshead',
      maltType: 'Unpeated',
      location: 'Dufftown Warehouse'
    },
    {
      id: '6',
      name: 'Laphroaig Quarter Cask',
      collection: 'Laphroaig',
      image: '',
      price: 4200,
      currency: 'USDC',
      likes: 92,
      status: 'buy_now',
      type: 'Cask',
      dateFilled: '10 Jan 2021',
      strength: '60.2% ABV',
      bulkLitres: 125.0,
      loa: 75.2,
      caskType: 'Quarter Cask',
      maltType: 'Heavily Peated',
      location: 'Islay Warehouse'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white border border-whisky-border rounded-xl p-6 sticky top-24 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-whisky-dark">
              <Filter className="w-5 h-5" />
              <h3 className="font-serif font-bold text-lg">Filters</h3>
            </div>

            <div className="space-y-6">
               {/* Search */}
               <div>
                <input 
                  type="text" 
                  placeholder="Filter by name..." 
                  className="w-full bg-gray-50 border border-whisky-border rounded-lg p-3 text-sm focus:border-whisky-dark outline-none text-whisky-dark font-sans"
                />
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3 font-sans">Price Range (USDC)</h4>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-1/2 bg-gray-50 border border-whisky-border rounded p-2 text-sm outline-none text-whisky-dark font-sans" />
                  <input type="number" placeholder="Max" className="w-1/2 bg-gray-50 border border-whisky-border rounded p-2 text-sm outline-none text-whisky-dark font-sans" />
                </div>
              </div>

              {/* Categories / Brands */}
              <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3 font-sans">Category</h4>
                <div className="space-y-2">
                  {['Macallan', 'Glenfiddich', 'Glenlivet', 'Highland Park', 'Balvenie', 'Laphroaig'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 hover:text-whisky-dark cursor-pointer font-sans">
                      <input type="checkbox" className="rounded border-gray-300 text-whisky-dark focus:ring-0 focus:ring-offset-0" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

               {/* Status */}
               <div>
                <h4 className="text-sm font-bold text-gray-700 mb-3 font-sans">Status</h4>
                <div className="space-y-2">
                  {['Listed', 'Unlisted', 'Sold Out'].map((status) => (
                    <label key={status} className="flex items-center gap-2 text-sm text-gray-600 hover:text-whisky-dark cursor-pointer font-sans">
                      <input type="checkbox" className="rounded border-gray-300 text-whisky-dark focus:ring-0 focus:ring-offset-0" />
                      {status}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-serif font-bold text-whisky-dark">NFT Cask Portfolio</h1>
            
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-whisky-dark bg-white px-4 py-2 rounded-lg border border-whisky-border shadow-sm font-sans">
                  Sort by: Recently Listed <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Table List View */}
          <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200 font-sans">
                <tr>
                  <th className="px-6 py-4 font-semibold">Cask Name</th>
                  <th className="px-6 py-4 font-semibold">Date Filled</th>
                  <th className="px-6 py-4 font-semibold">Strength (%)</th>
                  <th className="px-6 py-4 font-semibold">Bulk (L)</th>
                  <th className="px-6 py-4 font-semibold">LOA (L)</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Malt</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-sans">
                {nfts.map((nft) => (
                  <tr key={nft.id} className="hover:bg-gray-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-whisky-dark">
                      <div className="flex flex-col">
                        <span className="text-base font-serif font-bold">{nft.name}</span>
                        <span className="text-xs text-gray-400">{nft.collection}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{nft.dateFilled}</td>
                    <td className="px-6 py-4 text-gray-600">{nft.strength}</td>
                    <td className="px-6 py-4 text-gray-600">{nft.bulkLitres}L</td>
                    <td className="px-6 py-4 text-gray-600">{nft.loa}L</td>
                    <td className="px-6 py-4 text-gray-600">{nft.caskType}</td>
                    <td className="px-6 py-4 text-gray-600">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${nft.maltType?.includes('Unpeated') ? 'bg-green-50 text-green-700 border-green-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                        {nft.maltType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs max-w-[150px] truncate" title={nft.location}>
                      {nft.location}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link to={`/nft/${nft.id}/purchase`} className="inline-flex items-center gap-2 text-whisky-button hover:text-whisky-gold font-bold text-sm transition-colors group-hover:underline">
                        Intend to buy <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Load More */}
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 border border-gray-300 text-gray-600 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium font-sans">
                Load More Assets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;