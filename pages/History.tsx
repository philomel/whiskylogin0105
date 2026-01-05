import React, { useState } from 'react';
import { ShoppingCart, Tag, ArrowRightLeft, History as HistoryIcon, Download } from 'lucide-react';

interface HistoryRecord {
  id: string;
  type: 'Purchase' | 'Sale' | 'Listing' | 'Transfer';
  item: string;
  details: string;
  price?: string;
  date: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
}

const History: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Purchases' | 'Sales' | 'Listings' | 'Transfers'>('All');

  const historyData: HistoryRecord[] = [
    { id: '1', type: 'Purchase', item: 'Macallan Sherry Oak #2891', details: 'Bought from @User882', price: '12,450 USDC', date: 'Dec 1, 2025', status: 'Completed' },
    { id: '2', type: 'Listing', item: 'Springbank 21yo #105', details: 'Listed for sale', price: '4,500 USDC', date: 'Nov 28, 2025', status: 'Completed' },
    { id: '3', type: 'Transfer', item: 'Bowmore 1965', details: 'Transferred to 0x4a...9b21', date: 'Nov 15, 2025', status: 'Completed' },
    { id: '4', type: 'Sale', item: 'Glenfiddich 40yo', details: 'Sold to @WhaleCollector', price: '8,900 USDC', date: 'Nov 10, 2025', status: 'Completed' },
    { id: '5', type: 'Purchase', item: 'Yamazaki 25yo', details: 'Bought from @JapanRare', price: '15,000 USDC', date: 'Oct 25, 2025', status: 'Completed' },
  ];

  const filteredData = filter === 'All' ? historyData : historyData.filter(h => h.type + 's' === filter || h.type === filter.slice(0, -1));

  const getIcon = (type: string) => {
    switch(type) {
      case 'Purchase': return <ShoppingCart className="w-4 h-4 text-green-600" />;
      case 'Sale': return <ShoppingCart className="w-4 h-4 text-blue-600" />;
      case 'Listing': return <Tag className="w-4 h-4 text-orange-600" />;
      case 'Transfer': return <ArrowRightLeft className="w-4 h-4 text-purple-600" />;
      default: return <HistoryIcon className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-whisky-dark">History</h1>
          <p className="text-gray-500 mt-1">View your complete transaction and activity history.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-600">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm">
        {/* Filters */}
        <div className="border-b border-gray-200 px-6 py-4 flex gap-4 overflow-x-auto">
          {['All', 'Purchases', 'Sales', 'Listings', 'Transfers'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f 
                  ? 'bg-whisky-button text-whisky-button-text' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4">Details</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-gray-100 rounded-full border border-gray-200">
                        {getIcon(record.type)}
                      </div>
                      <span className="font-medium text-gray-700">{record.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-whisky-dark">{record.item}</td>
                  <td className="px-6 py-4 text-gray-600">{record.details}</td>
                  <td className="px-6 py-4 font-mono font-medium text-gray-800">{record.price || '-'}</td>
                  <td className="px-6 py-4 text-gray-500">{record.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No history records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;