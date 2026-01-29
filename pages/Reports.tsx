
import React from 'react';
import { Download, FileSpreadsheet, PieChart, FileText, ChevronRight, BarChart3, TrendingUp, Calendar } from 'lucide-react';

const Reports: React.FC = () => {
  // Mock transaction data for preview
  const recentTransactions = [
    { id: '1', date: 'Dec 01, 2025', item: 'Macallan 1989 #1234', type: 'Purchase', value: '12,450 USDC', status: 'Completed' },
    { id: '2', date: 'Nov 28, 2025', item: 'Springbank 21yo #105', type: 'Listing', value: '4,500 USDC', status: 'Completed' },
    { id: '3', date: 'Nov 15, 2025', item: 'Bowmore 1965', type: 'Transfer', value: 'N/A', status: 'Completed' },
    { id: '4', date: 'Nov 10, 2025', item: 'Glenfiddich 40yo', type: 'Sale', value: '8,900 USDC', status: 'Completed' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-serif font-bold text-whisky-dark mb-2">Reports & Analytics</h1>
          <p className="text-gray-500">Preview your performance data and export professional financial reports.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Table Preview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-whisky-border rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-serif font-bold text-xl text-whisky-dark flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-whisky-gold" /> Transaction Preview
                </h3>
                <span className="text-xs text-gray-400">Showing last 4 records</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50/50 text-gray-400 uppercase text-[10px] tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Item / Asset</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4 text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50 transition-colors group cursor-default">
                        <td className="px-6 py-4 text-gray-500 font-mono text-xs">{tx.date}</td>
                        <td className="px-6 py-4 font-bold text-whisky-dark">{tx.item}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            tx.type === 'Purchase' ? 'bg-green-100 text-green-700' : 
                            tx.type === 'Sale' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {tx.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-mono font-bold text-whisky-dark">{tx.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                <button className="text-sm font-bold text-whisky-gold hover:underline flex items-center justify-center gap-1 mx-auto">
                  View full history <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-whisky-border shadow-sm flex items-center gap-4">
                 <div className="p-3 bg-green-50 rounded-xl">
                   <TrendingUp className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-400 uppercase font-bold tracking-tight">Portfolio ROI</p>
                   <p className="text-xl font-bold text-whisky-dark">+14.2%</p>
                 </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-whisky-border shadow-sm flex items-center gap-4">
                 <div className="p-3 bg-whisky-gold/10 rounded-xl">
                   <Calendar className="w-6 h-6 text-whisky-gold" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-400 uppercase font-bold tracking-tight">Avg. Holding Period</p>
                   <p className="text-xl font-bold text-whisky-dark">342 Days</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Export Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-whisky-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif font-bold text-xl text-whisky-dark mb-6">Export Data</h3>
              
              <div className="space-y-4">
                <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-whisky-gold hover:bg-white transition-all group">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-whisky-dark">CSV Transaction Log</p>
                    <p className="text-[10px] text-gray-400 uppercase">Accounting format</p>
                  </div>
                  <Download className="w-4 h-4 ml-auto text-gray-300" />
                </button>

                <button className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-whisky-gold hover:bg-white transition-all group">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-whisky-dark">PDF Investment Report</p>
                    <p className="text-[10px] text-gray-400 uppercase">Professional Portfolio PDF</p>
                  </div>
                  <Download className="w-4 h-4 ml-auto text-gray-300" />
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Scheduled Delivery</h4>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                   <div className="text-xs">
                     <p className="font-bold text-whisky-dark">Monthly Email Summary</p>
                     <p className="text-gray-400">Sent on the 1st</p>
                   </div>
                   <div className="w-10 h-5 bg-whisky-gold rounded-full relative shadow-inner">
                      <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
