
import React, { useState } from 'react';
import { Search, ChevronDown, CheckCircle, XCircle, Clock, ExternalLink, FileText, Megaphone, Download } from 'lucide-react';

const DAO: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'closed' | 'announcements'>('active');

  const announcements = [
    {
      id: 'a1',
      title: 'Q4 2025 Speyside Reserve Cask Audit Report',
      type: 'Audit Report',
      date: 'Dec 01, 2025',
      content: 'We are pleased to release the comprehensive audit results for our Speyside bonded warehouse reserves for the fourth quarter of 2025. Our independent third-party auditors have conducted a full physical inspection and verified the integrity of over 500 premium casks. The report confirms that 100% of the platform-managed assets are physically secured. You can download the full PDF report below to review specific cask identification numbers and reconciliation data.',
      link: '#'
    },
    {
      id: 'a2',
      title: 'Phase II TWR Token Expansion Notice',
      type: 'Token Issuance',
      date: 'Nov 20, 2025',
      content: 'Following the successful acquisition of the 1990s vintage Islay portfolio, The Whisky Reserve is officially initiating the Phase II expansion of TWR tokens. This new issuance will facilitate fractional ownership for an additional 250 rare casks recently integrated into our vaults. Existing DAO members will receive priority whitelist access for the initial liquidity provisioning phase.',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in font-sans">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-whisky-dark mb-3">DAO Governance</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto font-sans">
                Shape the future of the platform through community voting and stay informed with our latest announcements.
            </p>
            <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search proposals or announcements..." 
                    className="w-full bg-white border border-whisky-border rounded-full py-3 pl-12 pr-4 text-whisky-dark focus:border-whisky-button outline-none shadow-md font-sans"
                />
            </div>
        </div>

        <div className="bg-white border border-whisky-border rounded-xl p-6 mb-12 shadow-md">
            <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider font-sans">Governance Stats:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                        <FileText className="w-5 h-5 text-whisky-gold" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-whisky-dark">47</p>
                        <p className="text-xs text-gray-500 font-sans">Total Proposals</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600 font-sans">Passed: <span className="text-whisky-dark font-bold">32</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                             <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-gray-600 font-sans">Rejected: <span className="text-whisky-dark font-bold">8</span></span>
                        </div>
                     </div>
                     <div className="h-8 w-px bg-gray-200"></div>
                     <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                         <span className="text-sm text-gray-600 font-sans">Active: <span className="text-whisky-dark font-bold">7</span></span>
                     </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                         <div className="w-5 h-5 flex items-center justify-center font-bold text-whisky-dark text-xs">VP</div>
                    </div>
                     <div>
                        <p className="text-2xl font-bold text-whisky-dark">15,234</p>
                        <p className="text-xs text-gray-500 font-sans">Total Voters</p>
                    </div>
                </div>
                 <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-whisky-gold animate-pulse"></div>
                        <span className="text-sm text-whisky-dark font-bold font-sans">Your Voting Power</span>
                    </div>
                    <span className="text-gray-700 font-mono font-bold">1,250 tokens</span>
                </div>
            </div>
        </div>

        <div>
            <div className="flex items-center gap-6 border-b border-gray-200 mb-6 overflow-x-auto">
                <button onClick={() => setActiveTab('active')} className={`pb-4 px-2 text-lg font-serif font-bold transition-colors relative whitespace-nowrap ${activeTab === 'active' ? 'text-whisky-button' : 'text-gray-400 hover:text-gray-600'}`}>
                    Active Proposals
                    {activeTab === 'active' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-button"></span>}
                </button>
                <button onClick={() => setActiveTab('closed')} className={`pb-4 px-2 text-lg font-serif font-bold transition-colors relative whitespace-nowrap ${activeTab === 'closed' ? 'text-whisky-button' : 'text-gray-400 hover:text-gray-600'}`}>
                    Closed Proposals
                    {activeTab === 'closed' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-button"></span>}
                </button>
                <button onClick={() => setActiveTab('announcements')} className={`pb-4 px-2 text-lg font-serif font-bold transition-colors relative whitespace-nowrap ${activeTab === 'announcements' ? 'text-whisky-button' : 'text-gray-400 hover:text-gray-600'}`}>
                    Announcements
                    {activeTab === 'announcements' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-button"></span>}
                </button>
            </div>

            {activeTab === 'announcements' ? (
                <div className="space-y-6">
                    {announcements.map((ann) => (
                        <div key={ann.id} className="bg-white border border-whisky-border rounded-xl p-6 hover:border-whisky-gold/50 transition-all shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="bg-whisky-gold/10 text-whisky-gold text-[10px] font-bold px-3 py-1 rounded border border-whisky-gold/20 flex items-center gap-1 font-sans uppercase tracking-widest">
                                        <Megaphone className="w-3 h-3" /> {ann.type}
                                    </span>
                                    <span className="text-whisky-muted text-xs font-sans">{ann.date}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-whisky-dark mb-4 font-serif">{ann.title}</h3>
                            <p className="text-whisky-muted text-sm leading-relaxed mb-6 font-sans">{ann.content}</p>
                            <div className="flex justify-end">
                                <a href={ann.link} className="flex items-center gap-2 bg-whisky-button text-whisky-button-text px-5 py-2 rounded-lg font-bold hover:opacity-90 transition-all text-xs font-sans shadow-md">
                                    <Download className="w-4 h-4" /> Download Report (PDF)
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="bg-white border border-whisky-border rounded-xl p-6 hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-200 flex items-center gap-1 font-sans uppercase">
                                    ACTIVE
                                </span>
                                <span className="text-gray-500 text-sm font-sans">Proposal #47</span>
                            </div>
                            <span className="text-sm text-gray-500 font-sans">Ends: Dec 05, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold text-whisky-dark mb-6 font-serif">Reduce Platform Transaction Fees to 2%</h3>
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 bg-whisky-button text-whisky-button-text px-6 py-2 rounded-lg font-bold hover:opacity-90 shadow-md font-sans">
                                Vote on Snapshot <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default DAO;
