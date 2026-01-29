
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, TrendingUp, Users, Hash, Plus, Clock, Filter, ShoppingCart, Tag, Zap, ArrowRightLeft, Smile, Flame, GlassWater, Diamond } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'for-you' | 'following'>('for-you');
  const [activeTime, setActiveTime] = useState<'1H' | 'Today' | 'Week' | 'All'>('Today');

  const feedItems = [
    {
      id: '1',
      user: { name: 'whisky_master', avatar: 'https://picsum.photos/100/100?random=10' },
      action: 'purchased',
      item: 'Macallan 1989 Single Cask #1234',
      price: '2.5 ETH',
      fiat: '$4,200',
      time: '5 mins ago',
      thumbnail: 'https://picsum.photos/400/400?random=20',
      likes: 12,
      loves: 8,
      fire: 5,
      comments: [
        { user: '@user1', text: 'Great pick! 🥃' },
        { user: '@user2', text: 'This is going to moon 🚀' }
      ]
    },
    {
      id: '2',
      user: { name: 'collector_pro', avatar: 'https://picsum.photos/100/100?random=11' },
      action: 'listed',
      item: 'Glenfiddich 1978 Rare #5678',
      price: '5.0 ETH',
      fiat: '$8,400',
      time: '23 mins ago',
      thumbnail: 'https://picsum.photos/400/400?random=21',
      likes: 5,
      loves: 2,
      fire: 1,
      comments: []
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in font-sans">
      {/* Header */}
      <div className="bg-white border border-whisky-border rounded-2xl p-8 mb-8 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-whisky-dark mb-2">Community Feed</h1>
        <p className="text-gray-500">Discover trending whisky NFTs and top collectors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Trending & Suggested */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-serif font-bold text-lg text-whisky-dark mb-4">
              <Flame className="w-5 h-5 text-whisky-gold" /> Trending Topics
            </h3>
            <ul className="space-y-4">
              {['#Macallan1989', '#GlenfiddichRare', '#WhiskyInvestment', '#CaskTokenization'].map((tag, i) => (
                <li key={i} className="group cursor-pointer">
                  <p className="text-sm font-bold text-whisky-dark group-hover:text-whisky-gold transition-colors">{tag}</p>
                  <p className="text-xs text-gray-400">{234 - i * 40} activities</p>
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 text-xs text-whisky-gold font-bold hover:underline">View All Topics →</button>
          </div>

          <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-serif font-bold text-lg text-whisky-dark mb-4">
               Suggested Collectors
            </h3>
            <div className="space-y-4">
              {[
                { name: 'whisky_master', stats: '125 NFTs • 45.6 ETH vol' },
                { name: 'collector_pro', stats: '89 NFTs • 32.1 ETH vol' }
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                       <img src={`https://picsum.photos/100/100?random=${50+i}`} alt="av" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-whisky-dark">@{user.name}</p>
                      <p className="text-[10px] text-gray-400">{user.stats}</p>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold text-whisky-gold border border-whisky-gold px-2 py-1 rounded hover:bg-whisky-gold hover:text-white transition-colors">
                    + Follow
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-xs text-whisky-gold font-bold hover:underline">View More →</button>
          </div>
        </aside>

        {/* Main Feed Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tabs & Filters */}
          <div className="bg-white border border-whisky-border rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-6 border-b border-gray-100 mb-4">
              <button 
                onClick={() => setActiveTab('for-you')}
                className={`pb-3 text-sm font-bold transition-all relative ${activeTab === 'for-you' ? 'text-whisky-dark' : 'text-gray-400 hover:text-gray-600'}`}
              >
                For You
                {activeTab === 'for-you' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
              </button>
              <button 
                onClick={() => setActiveTab('following')}
                className={`pb-3 text-sm font-bold transition-all relative ${activeTab === 'following' ? 'text-whisky-dark' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Following
                {activeTab === 'following' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-whisky-gold"></span>}
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Time:</span>
                <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-100">
                  {['1H', 'Today', 'Week', 'All'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setActiveTime(t as any)}
                      className={`px-3 py-1 text-[10px] font-bold rounded transition-colors ${activeTime === t ? 'bg-white text-whisky-dark shadow-sm' : 'text-gray-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Type:</span>
                <div className="flex gap-2">
                  {[
                    { label: 'Buy', icon: ShoppingCart },
                    { label: 'Sell', icon: Tag },
                    { label: 'Auction', icon: Zap }
                  ].map(type => (
                    <label key={type.label} className="flex items-center gap-1 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-3 h-3 rounded border-gray-300 text-whisky-gold focus:ring-0" />
                      <span className="text-[10px] text-gray-600 font-medium">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feed List */}
          {feedItems.map(item => (
            <div key={item.id} className="bg-white border border-whisky-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Link to={`/u/${item.user.name}`} className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src={item.user.avatar} alt="av" className="w-full h-full object-cover" />
                    </Link>
                    <div>
                      <div className="flex items-center gap-2">
                         <Link to={`/u/${item.user.name}`} className="text-sm font-bold text-whisky-dark hover:text-whisky-gold">@{item.user.name}</Link>
                         <button className="text-[10px] font-bold text-whisky-gold hover:underline">Follow +</button>
                      </div>
                      <p className="text-[10px] text-gray-400">{item.time}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-whisky-dark transition-colors"><Share2 className="w-4 h-4" /></button>
                </div>

                {/* Content Body */}
                <div className="mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-whisky-dark">@{item.user.name}</span> {item.action}{' '}
                    <span className="font-bold text-whisky-gold">{item.item}</span> for{' '}
                    <span className="font-mono font-bold">{item.price}</span> ({item.fiat})
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="aspect-video w-full rounded-lg bg-gray-50 border border-gray-100 overflow-hidden mb-6 group cursor-pointer">
                   <img src={item.thumbnail} alt="item" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Meta Actions */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-whisky-gold transition-colors group">
                           <Smile className="w-4 h-4 group-hover:scale-110" /> <span>{item.likes}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-500 transition-colors group">
                           <Heart className="w-4 h-4 group-hover:scale-110" /> <span>{item.loves}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-500 transition-colors group">
                           <Flame className="w-4 h-4 group-hover:scale-110" /> <span>{item.fire}</span>
                        </button>
                      </div>
                      <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-whisky-gold transition-colors group">
                         <MessageCircle className="w-4 h-4 group-hover:scale-110" /> <span>{item.comments.length}</span>
                      </button>
                   </div>
                   <button className="text-xs font-bold text-whisky-gold hover:underline">View Details →</button>
                </div>

                {/* Nested Comments (Partial) */}
                {item.comments.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-50 bg-gray-50/50 -mx-6 px-6 pb-4">
                    <div className="space-y-3">
                      {item.comments.map((comment, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                           <span className="text-[10px] font-bold text-whisky-dark whitespace-nowrap">{comment.user}:</span>
                           <span className="text-[10px] text-gray-600">{comment.text}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-2 text-[10px] text-gray-400 hover:text-whisky-gold">Show more comments...</button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="text-center py-8">
             <button className="px-8 py-3 bg-white border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                Load More Content...
             </button>
          </div>
        </div>

        {/* Right Sidebar: Trending Assets */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-whisky-border rounded-xl p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-serif font-bold text-lg text-whisky-dark mb-4">
              <TrendingUp className="w-5 h-5 text-whisky-gold" /> Trending Whisky NFTs
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Macallan 1989 #123', floor: '2.5 ETH', trend: '+15%', img: 'https://picsum.photos/100/100?random=30' },
                { name: 'Glenfiddich 1978 #456', floor: '5.0 ETH', trend: '+23%', img: 'https://picsum.photos/100/100?random=31' }
              ].map((nft, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 rounded bg-gray-100 overflow-hidden border border-gray-200">
                    <img src={nft.img} alt="nft" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-whisky-dark group-hover:text-whisky-gold transition-colors">{nft.name}</p>
                    <div className="flex justify-between items-center mt-0.5">
                       <p className="text-[10px] text-gray-500">Floor: {nft.floor}</p>
                       <p className="text-[10px] text-green-600 font-bold">{nft.trend}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-xs text-whisky-gold font-bold hover:underline">Explore More →</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Community;
