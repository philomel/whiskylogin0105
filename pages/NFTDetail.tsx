import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, FileText, BarChart2, Truck, ArrowRight, MapPin } from 'lucide-react';

const NFTDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'current' | 'history' | 'movements'>('current');

  // Mock Data for Cask Info
  const caskInfo = {
    caskNumber: '2891',
    caskType: 'HHD (Hogshead)',
    description: 'A rare single cask bottling from the legendary Highland Park distillery. Matured for 50 years in a first-fill European Oak Sherry Butt.',
    status: '1st Fill',
    measurements: {
      volume: '260.2 L',
      abv: '63.5%',
      bulk: '260.2 L',
      loa: '165.2 L',
      strength: '63.5%',
      gross: '320 kg',
      tare: '60 kg',
      net: '260 kg'
    },
    location: {
      location: 'Speyside',
      warehouse: 'Warehouse 4',
      stow: 'Row 12, Bay 3, Level 2'
    },
    details: {
      maltType: 'Peated',
      finish: 'PEDRO XIMENEZ',
      stage: '1st Fill',
      fillDate: '31 Oct 1998',
      warehouseDate: '01 Nov 1998',
      vattedDate: 'N/A'
    }
  };

  const historySnapshots = [
    { id: 1, snapshot: 'Snapshot #2', date: '2025-11-20', volume: '258.1 L', abv: '63.2%', location: 'Speyside', warehouse: 'Warehouse 4', status: 'Maturing', bulk: '258.1 L', loa: '163.1 L', strength: '63.2%' },
    { id: 2, snapshot: 'Snapshot #1', date: '2024-11-20', volume: '260.2 L', abv: '63.5%', location: 'Speyside', warehouse: 'Warehouse 4', status: 'Maturing', bulk: '260.2 L', loa: '165.2 L', strength: '63.5%' },
  ];

  const movements = [
    { id: 1, date: '01 Nov 1998', from: 'Distillery Filling Store', to: 'Warehouse 4', type: 'Intake' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in font-sans">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-200 pb-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-whisky-button text-whisky-button-text text-xs px-2 py-1 rounded uppercase tracking-wider font-bold">Cask Investment</span>
                    <span className="text-gray-500 text-sm">Highland Park</span>
                </div>
                <h1 className="text-4xl font-serif font-bold text-whisky-dark">Cask #{caskInfo.caskNumber} - {caskInfo.caskType}</h1>
            </div>
            
            <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 bg-whisky-button text-whisky-button-text px-6 py-3 rounded-xl font-bold hover:opacity-90 shadow-md transition-all">
                    Request Quote <ArrowRight className="w-4 h-4" />
                </button>
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            <button 
                onClick={() => setActiveTab('current')}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === 'current' ? 'border-whisky-button text-whisky-dark font-bold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                <FileText className="w-4 h-4" /> Current Info
            </button>
            <button 
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === 'history' ? 'border-whisky-button text-whisky-dark font-bold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                <BarChart2 className="w-4 h-4" /> Historical Data
            </button>
            <button 
                onClick={() => setActiveTab('movements')}
                className={`flex items-center gap-2 px-6 py-4 font-medium text-sm transition-colors border-b-2 whitespace-nowrap ${activeTab === 'movements' ? 'border-whisky-button text-whisky-dark font-bold' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
                <Truck className="w-4 h-4" /> Warehouse Movements
            </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
            {activeTab === 'current' && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 animate-fade-in">
                    {/* 1.1 Basic Information */}
                    <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
                        <h3 className="font-serif font-bold text-lg text-whisky-dark mb-4 border-b border-gray-100 pb-2">Basic Information</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500 text-sm">Cask Number</span>
                                <span className="font-mono font-bold text-whisky-dark">{caskInfo.caskNumber}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 text-sm">Cask Type</span>
                                <span className="font-medium text-whisky-dark">{caskInfo.caskType}</span>
                            </div>
                             <div className="flex justify-between">
                                <span className="text-gray-500 text-sm">Status</span>
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-bold">{caskInfo.status}</span>
                            </div>
                            <div>
                                <span className="text-gray-500 text-sm block mb-1">Description</span>
                                <p className="text-sm text-gray-700 leading-relaxed">{caskInfo.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* 1.2 Current Measurements */}
                    <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
                         <h3 className="font-serif font-bold text-lg text-whisky-dark mb-4 border-b border-gray-100 pb-2">Current Measurements</h3>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="text-xs text-gray-500 uppercase">Volume</span>
                                <p className="font-bold text-whisky-dark">{caskInfo.measurements.volume}</p>
                            </div>
                             <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="text-xs text-gray-500 uppercase">ABV</span>
                                <p className="font-bold text-whisky-dark">{caskInfo.measurements.abv}</p>
                            </div>
                             <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="text-xs text-gray-500 uppercase">Bulk</span>
                                <p className="font-bold text-whisky-dark">{caskInfo.measurements.bulk}</p>
                            </div>
                             <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="text-xs text-gray-500 uppercase">LOA</span>
                                <p className="font-bold text-whisky-dark">{caskInfo.measurements.loa}</p>
                            </div>
                             <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="text-xs text-gray-500 uppercase">Gross Weight</span>
                                <p className="font-bold text-whisky-dark">{caskInfo.measurements.gross}</p>
                            </div>
                             <div className="p-3 bg-gray-50 rounded-lg">
                                <span className="text-xs text-gray-500 uppercase">Net Weight</span>
                                <p className="font-bold text-whisky-dark">{caskInfo.measurements.net}</p>
                            </div>
                         </div>
                    </div>

                    {/* 1.3 Location & Status (with Map Placeholder) */}
                    <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm flex flex-col">
                        <h3 className="font-serif font-bold text-lg text-whisky-dark mb-4 border-b border-gray-100 pb-2">Location & Status</h3>
                         <div className="flex-grow bg-gray-100 rounded-lg mb-4 relative overflow-hidden min-h-[150px]">
                            <img src="https://picsum.photos/400/200?grayscale&blur=2" alt="map" className="w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/80 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 shadow-sm text-sm text-gray-700">
                                    <MapPin className="w-4 h-4 text-whisky-button" /> {caskInfo.location.location}
                                </div>
                            </div>
                         </div>
                         <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="text-gray-500 text-sm">Warehouse</span>
                                <span className="font-medium text-whisky-dark">{caskInfo.location.warehouse}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">Stow</span>
                                <span className="font-medium text-whisky-dark">{caskInfo.location.stow}</span>
                            </div>
                         </div>
                    </div>

                    {/* 1.4 Additional Details */}
                    <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm md:col-span-2 xl:col-span-3">
                        <h3 className="font-serif font-bold text-lg text-whisky-dark mb-4 border-b border-gray-100 pb-2">Additional Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <div>
                                <span className="text-xs text-gray-500 uppercase block mb-1">Malt Type</span>
                                <span className="font-bold text-whisky-dark">{caskInfo.details.maltType}</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500 uppercase block mb-1">Finish</span>
                                <span className="font-bold text-whisky-dark">{caskInfo.details.finish}</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500 uppercase block mb-1">Stage</span>
                                <span className="font-bold text-whisky-dark">{caskInfo.details.stage}</span>
                            </div>
                            <div>
                                <span className="text-xs text-gray-500 uppercase block mb-1">Fill Date</span>
                                <span className="font-bold text-whisky-dark">{caskInfo.details.fillDate}</span>
                            </div>
                             <div>
                                <span className="text-xs text-gray-500 uppercase block mb-1">Warehouse Date</span>
                                <span className="font-bold text-whisky-dark">{caskInfo.details.warehouseDate}</span>
                            </div>
                             <div>
                                <span className="text-xs text-gray-500 uppercase block mb-1">Vatted Date</span>
                                <span className="font-bold text-whisky-dark">{caskInfo.details.vattedDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'history' && (
                <div className="animate-fade-in space-y-8">
                     <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                             <h3 className="font-serif font-bold text-lg text-whisky-dark">Cask History Snapshots</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-medium border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4">Snapshot</th>
                                        <th className="px-6 py-4">Date</th>
                                        <th className="px-6 py-4">Volume</th>
                                        <th className="px-6 py-4">ABV</th>
                                        <th className="px-6 py-4">Bulk</th>
                                        <th className="px-6 py-4">LOA</th>
                                        <th className="px-6 py-4">Strength</th>
                                        <th className="px-6 py-4">Location</th>
                                        <th className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {historySnapshots.map(snap => (
                                        <tr key={snap.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-whisky-dark">{snap.snapshot}</td>
                                            <td className="px-6 py-4 text-gray-500">{snap.date}</td>
                                            <td className="px-6 py-4">{snap.volume}</td>
                                            <td className="px-6 py-4">{snap.abv}</td>
                                            <td className="px-6 py-4">{snap.bulk}</td>
                                            <td className="px-6 py-4">{snap.loa}</td>
                                            <td className="px-6 py-4">{snap.strength}</td>
                                            <td className="px-6 py-4 text-gray-600">{snap.warehouse}, {snap.location}</td>
                                            <td className="px-6 py-4"><span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">{snap.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                     </div>

                     <div className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-200">
                             <h3 className="font-serif font-bold text-lg text-whisky-dark">Transaction Records</h3>
                        </div>
                        <div className="p-8 text-center text-gray-400">
                            No past transactions recorded for this cask.
                        </div>
                     </div>
                </div>
            )}

            {activeTab === 'movements' && (
                 <div className="animate-fade-in bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm">
                     <div className="p-6 border-b border-gray-200">
                         <h3 className="font-serif font-bold text-lg text-whisky-dark">Warehouse Movement Log</h3>
                     </div>
                     <div className="p-6">
                        <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                            {movements.map((move, index) => (
                                <div key={move.id} className="mb-8 ml-6 relative">
                                    <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-whisky-button border-2 border-white shadow-sm"></span>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                        <h4 className="text-lg font-bold text-whisky-dark">{move.to}</h4>
                                        <span className="text-sm text-gray-500">{move.date}</span>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
                                        <div className="flex gap-2 mb-1">
                                            <span className="text-gray-500 w-20">Type:</span>
                                            <span className="font-medium text-green-700">{move.type}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-gray-500 w-20">From:</span>
                                            <span className="text-gray-800">{move.from}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                     </div>
                 </div>
            )}
        </div>
    </div>
  );
};

export default NFTDetail;