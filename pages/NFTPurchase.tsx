
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShieldCheck, Plus, X, Coins, ChevronDown } from 'lucide-react';

const NFTPurchase: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [complete, setComplete] = useState(false);
  const [showTradeInModal, setShowTradeInModal] = useState(false);
  const [selectedTradeIns, setSelectedTradeIns] = useState<{id: string, name: string, value: number}[]>([]);

  // Mock Target NFT
  const nft = {
    name: 'Exclusive Speyside Cask #2891',
    price: 12773.75,
    currency: 'USDC',
    image: `https://picsum.photos/800/800?random=${id || 1}`
  };

  // Mock Owned NFTs for Trade-in
  const ownedNFTs = [
    { id: 'owned-1', name: 'Vintage Highland #302', value: 10000.00, img: 'https://picsum.photos/100/100?random=10' },
    { id: 'owned-2', name: 'Islay Mist Cask #9', value: 2500.00, img: 'https://picsum.photos/100/100?random=11' },
    { id: 'owned-3', name: 'Rare Collection Bottle #1', value: 1500.00, img: 'https://picsum.photos/100/100?random=12' },
  ];

  const toggleTradeIn = (item: any) => {
    if (selectedTradeIns.find(i => i.id === item.id)) {
      setSelectedTradeIns(selectedTradeIns.filter(i => i.id !== item.id));
    } else {
      setSelectedTradeIns([...selectedTradeIns, { id: item.id, name: item.name, value: item.value }]);
    }
  };

  const tradeInTotal = selectedTradeIns.reduce((sum, i) => sum + i.value, 0);
  const platformFee = nft.price * 0.025;
  const gasFee = 12.50;
  const finalTotal = Math.max(0, nft.price + platformFee + gasFee - tradeInTotal);

  const handlePurchase = () => {
    setProcessing(true);
    setTimeout(() => {
        setProcessing(false);
        setComplete(true);
    }, 2000);
  };

  if (complete) {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center animate-fade-in">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-lg">
                <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-whisky-dark mb-4">Transaction Confirmed</h1>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Purchase completed successfully. {selectedTradeIns.length > 0 && "Your trade-in assets have been escrowed and "}The new asset has been transferred to your wallet.
            </p>
            <div className="flex gap-4">
                <button onClick={() => navigate('/profile/my-nfts')} className="bg-whisky-button text-whisky-button-text px-8 py-3 rounded-xl font-bold hover:opacity-90">
                    View My Assets
                </button>
                 <button onClick={() => navigate('/')} className="border border-gray-300 text-gray-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100">
                    Back Home
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in font-sans">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-whisky-dark mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to NFT
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Summary & Trade-in */}
        <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-whisky-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif font-bold text-xl mb-6 text-whisky-dark">Purchase Summary</h3>
                <div className="flex gap-6 mb-6">
                     <img src={nft.image} alt={nft.name} className="w-28 h-28 rounded-xl object-cover border border-gray-100" />
                     <div className="flex-grow">
                         <h2 className="font-serif font-bold text-xl text-whisky-dark">{nft.name}</h2>
                         <p className="text-sm text-gray-400 mb-4">Rare Distillery Cask • Fractional Ownership</p>
                         <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm">Base Price</span>
                            <span className="font-mono font-bold text-whisky-dark">{nft.price.toLocaleString(undefined, { minimumFractionDigits: 2 })} {nft.currency}</span>
                         </div>
                     </div>
                </div>

                {/* Trade-in Section */}
                <div className="border-t border-gray-100 pt-6 mt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-whisky-dark flex items-center gap-2 uppercase tracking-widest text-[10px]">
                            <Coins className="w-4 h-4 text-whisky-gold" /> Trade-in / Exchange
                        </h4>
                        <button 
                            onClick={() => setShowTradeInModal(true)}
                            className="text-xs font-bold text-whisky-gold flex items-center gap-1 hover:underline"
                        >
                            <Plus className="w-3 h-3" /> Add NFT for exchange
                        </button>
                    </div>

                    <div className="space-y-2">
                        {selectedTradeIns.length > 0 ? (
                            selectedTradeIns.map(item => (
                                <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100 group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-gray-200"></div>
                                        <span className="text-xs font-bold text-gray-700">{item.name}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono font-bold text-green-600">-{item.value.toLocaleString()} USDC</span>
                                        <button onClick={() => toggleTradeIn(item)} className="text-gray-300 hover:text-red-500"><X className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-gray-50/50 border border-dashed border-gray-200 rounded-xl p-4 text-center">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">No assets selected for exchange</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                <ShieldCheck className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                    <h4 className="font-bold text-sm text-blue-900">Exchange Guarantee</h4>
                    <p className="text-xs text-blue-800/70 mt-1 leading-relaxed">
                        By opting for an exchange, your selected NFTs will be appraised at the displayed floor value. Upon confirmation, these items will be transferred to platform escrow to offset your purchase price.
                    </p>
                </div>
            </div>
        </div>

        {/* Right: Payment Detail */}
        <div className="lg:col-span-5">
            <div className="bg-white border border-whisky-border rounded-2xl p-8 shadow-sm sticky top-24">
                <h1 className="text-2xl font-serif font-bold text-whisky-dark mb-8">Checkout</h1>
                
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="font-mono text-gray-800">{nft.price.toLocaleString(undefined, { minimumFractionDigits: 2 })} {nft.currency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Platform Fee (2.5%)</span>
                        <span className="font-mono text-gray-800">{platformFee.toFixed(2)} {nft.currency}</span>
                    </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Gas Fee (Est.)</span>
                        <span className="font-mono text-gray-800">{gasFee.toFixed(2)} {nft.currency}</span>
                    </div>
                    {tradeInTotal > 0 && (
                        <div className="flex justify-between text-sm pt-2 border-t border-gray-50">
                            <span className="text-green-600 font-bold">Exchange Credit</span>
                            <span className="font-mono font-bold text-green-600">-{tradeInTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })} {nft.currency}</span>
                        </div>
                    )}
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8">
                    <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-400 uppercase text-[10px] tracking-[0.2em]">Payable Difference</span>
                        <span className="font-bold text-3xl text-whisky-dark font-mono">{finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-sans uppercase">{nft.currency}</span></span>
                    </div>
                </div>

                <button 
                    onClick={handlePurchase}
                    disabled={processing}
                    className={`w-full py-5 rounded-xl font-bold text-lg shadow-xl transition-all ${processing ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-whisky-button text-whisky-button-text hover:opacity-90'}`}
                >
                    {processing ? 'Processing Transaction...' : `Confirm & Pay Difference`}
                </button>
                 <p className="text-[10px] text-gray-400 text-center mt-6 leading-relaxed">
                    By confirming this transaction, you authorize the transfer of selected assets and the final payable amount from your connected wallet.
                </p>
            </div>
        </div>
      </div>

      {/* Trade-in Selection Modal */}
      {showTradeInModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-fade-in overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="text-xl font-serif font-bold text-whisky-dark">Select Assets for Exchange</h3>
                      <button onClick={() => setShowTradeInModal(false)} className="text-gray-400 hover:text-whisky-dark"><X className="w-5 h-5" /></button>
                  </div>
                  <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
                      {ownedNFTs.map(item => {
                          const isSelected = !!selectedTradeIns.find(i => i.id === item.id);
                          return (
                              <div 
                                key={item.id} 
                                onClick={() => toggleTradeIn(item)}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${isSelected ? 'border-whisky-gold bg-whisky-gold/5' : 'border-gray-100 hover:border-gray-200 bg-gray-50'}`}
                              >
                                  <div className="flex items-center gap-4">
                                      <img src={item.img} className="w-12 h-12 rounded-lg object-cover" alt="item" />
                                      <div>
                                          <p className="text-sm font-bold text-whisky-dark">{item.name}</p>
                                          <p className="text-[10px] text-gray-400 uppercase">Estimated Value</p>
                                      </div>
                                  </div>
                                  <div className="text-right">
                                      <p className="font-mono font-bold text-whisky-dark">{item.value.toLocaleString()} USDC</p>
                                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ml-auto mt-1 ${isSelected ? 'bg-whisky-gold border-whisky-gold' : 'border-gray-300'}`}>
                                          {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
                  <div className="p-6 bg-gray-50 flex gap-4">
                      <button onClick={() => setShowTradeInModal(false)} className="flex-1 py-3 bg-whisky-button text-whisky-button-text font-bold rounded-xl shadow-lg">Done</button>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default NFTPurchase;
