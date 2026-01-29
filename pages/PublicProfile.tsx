
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Added Diamond and Search to the imports from lucide-react
import { Mail, Share2, MoreHorizontal, Check, UserPlus, Globe, Twitter, Send, Lock, Grid, Activity, Users, Star, AlertTriangle, Diamond, Search } from 'lucide-react';
import NFTCard from '../components/NFTCard';

const PublicProfile: React.FC = () => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState<'collection' | 'activity' | 'followers' | 'following'>('collection');
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock Profile Data
  const profile = {
    username: username || 'whisky_connoisseur',
    address: '0x1234...5678',
    bio: 'Passionate whisky collector and investor. Focus on rare Macallan and Glenfiddich releases.',
    joined: 'Nov 2025',
    volume: '125.5 ETH',
    stats: {
      nfts: 45,
      followers: '1.2K',
      following: 234
    },
    privacy: {
        hideCollection: false
    }
  };

  const nfts = Array.from({ length: 4 }).map((_, i) => ({
    id: `n-${i}`,
    name: `Exclusive Cask #${100+i}`,
    collection: 'Speyside Rare',
    image: `https://picsum.photos/400/400?random=${100+i}`,
    price: 3.5,
    currency: 'ETH',
    likes: 12,
    status: 'buy_now',
    type: 'Cask',
    isListed: i % 2 === 0
  }));

  return (
    <div className="animate-fade-in font-sans">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gray-200 relative">
         <img src="https://picsum.photos/1920/600?grayscale&blur=5" className="w-full h-full object-cover opacity-50" alt="cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-whisky-main to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
         {/* Profile Info Header */}
         <div className="relative -mt-16 mb-8 flex flex-col md:flex-row items-center md:items-end gap-6 pb-6 border-b border-gray-100">
            <div className="relative">
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
                  <img src={`https://picsum.photos/200/200?random=${profile.username}`} className="w-full h-full object-cover" alt="av" />
               </div>
            </div>

            <div className="flex-grow text-center md:text-left md:pb-4">
               <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h1 className="text-3xl font-serif font-bold text-whisky-dark">@{profile.username}</h1>
                  <span className="text-xs text-gray-400 font-mono hidden md:block">{profile.address}</span>
               </div>
               <p className="text-sm text-gray-500 mb-4 max-w-lg leading-relaxed">{profile.bio}</p>
               <div className="flex items-center justify-center md:justify-start gap-4">
                  <a href="#" className="p-2 bg-white border border-gray-100 rounded-lg hover:text-whisky-gold transition-colors shadow-sm"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="p-2 bg-white border border-gray-100 rounded-lg hover:text-whisky-gold transition-colors shadow-sm"><Send className="w-4 h-4" /></a>
                  <a href="#" className="p-2 bg-white border border-gray-100 rounded-lg hover:text-whisky-gold transition-colors shadow-sm"><Globe className="w-4 h-4" /></a>
               </div>
            </div>

            <div className="flex items-center gap-3 md:pb-4">
               <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all shadow-md ${isFollowing ? 'bg-gray-100 text-gray-600 border border-gray-200' : 'bg-whisky-button text-whisky-button-text'}`}
               >
                 {isFollowing ? <Check className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                 {isFollowing ? 'Following' : 'Follow'}
               </button>
               <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm"><Mail className="w-5 h-5 text-gray-500" /></button>
               <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm"><Share2 className="w-5 h-5 text-gray-500" /></button>
               <button className="p-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm"><MoreHorizontal className="w-5 h-5 text-gray-500" /></button>
            </div>
         </div>

         {/* Profile Stats Summary */}
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
               <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Cask Portfolio</p>
               <p className="text-2xl font-bold text-whisky-dark">{profile.stats.nfts} NFTs</p>
            </div>
            <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
               <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Trading Volume</p>
               <p className="text-2xl font-bold text-whisky-dark">{profile.volume}</p>
            </div>
            <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
               <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Followers</p>
               <p className="text-2xl font-bold text-whisky-dark">{profile.stats.followers}</p>
            </div>
            <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
               <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Member Since</p>
               <p className="text-2xl font-bold text-whisky-dark">{profile.joined}</p>
            </div>
         </div>

         {/* Tabs Section */}
         <div className="mb-12">
            <div className="flex items-center gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
               {[
                  { id: 'collection', label: 'Collection', icon: Grid },
                  { id: 'activity', label: 'Activity', icon: Activity },
                  { id: 'followers', label: 'Followers', icon: Users },
                  { id: 'following', label: 'Following', icon: Star }
               ].map(tab => (
                  <button 
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id as any)}
                     className={`flex items-center gap-2 pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${activeTab === tab.id ? 'text-whisky-dark' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                     <tab.icon className="w-4 h-4" />
                     {tab.label}
                     {activeTab === tab.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
                  </button>
               ))}
            </div>

            {/* Tab Content Rendering */}
            {activeTab === 'collection' && (
               <div>
                  {profile.privacy.hideCollection ? (
                     <div className="bg-gray-50 border border-gray-200 rounded-2xl p-20 text-center">
                        <Lock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">Private Collection</h3>
                        <p className="text-gray-500 max-w-md mx-auto">This user has hidden their NFT collection. Only they can view their private assets.</p>
                     </div>
                  ) : (
                     <div className="space-y-8">
                        <div className="flex justify-between items-center">
                           <h3 className="text-xl font-serif font-bold text-whisky-dark">Portfolio ({profile.stats.nfts})</h3>
                           <div className="flex gap-4">
                              <select className="bg-white border border-gray-200 rounded-lg text-xs font-bold p-2 outline-none">
                                 <option>Recently Added</option>
                                 <option>Price: High to Low</option>
                                 <option>Price: Low to High</option>
                              </select>
                           </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                           {nfts.map(nft => (
                              <NFTCard key={nft.id} nft={nft} />
                           ))}
                        </div>
                        <div className="text-center py-8">
                           <button className="text-whisky-gold font-bold hover:underline">Show all assets...</button>
                        </div>
                     </div>
                  )}
               </div>
            )}

            {activeTab === 'activity' && (
               <div className="max-w-4xl mx-auto space-y-4">
                  {[
                     { type: 'Purchased', icon: ShoppingCart, item: 'Macallan 1989', price: '2.5 ETH', date: '2 hours ago' },
                     { type: 'Listed', icon: Tag, item: 'Glenfiddich 1978', price: '5.0 ETH', date: '1 day ago' },
                     { type: 'Sold', icon: Diamond, item: 'Bowmore 1966', price: '3.2 ETH', date: '3 days ago' }
                  ].map((act, i) => (
                     <div key={i} className="bg-white border border-whisky-border rounded-xl p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded bg-gray-50 flex items-center justify-center border border-gray-100">
                              <act.icon className="w-5 h-5 text-whisky-gold" />
                           </div>
                           <div>
                              <p className="text-sm text-gray-700">
                                 <span className="font-bold text-whisky-dark">{act.type}</span> {act.item}
                              </p>
                              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{act.date}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-bold text-whisky-dark">{act.price}</p>
                        </div>
                     </div>
                  ))}
               </div>
            )}

            {activeTab === 'followers' && (
                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" placeholder="Search followers..." className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:border-whisky-gold" />
                    </div>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center justify-between bg-white border border-whisky-border rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                                    <img src={`https://picsum.photos/100/100?random=${200+i}`} className="w-full h-full object-cover" alt="av" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-whisky-dark">@collector_{i}</p>
                                    <p className="text-[10px] text-gray-400">23 NFTs • Joined Oct 2025</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="text-[10px] font-bold text-whisky-gold border border-whisky-gold px-3 py-1.5 rounded-lg hover:bg-whisky-gold hover:text-white transition-colors">View Profile</button>
                                <button className="text-[10px] font-bold bg-whisky-button text-whisky-button-text px-3 py-1.5 rounded-lg">Follow</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

// Internal Sub-components for mock logic
const ShoppingCart = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
const Tag = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>;

export default PublicProfile;
