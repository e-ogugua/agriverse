import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Tractor, BarChart3, Users, Play, Settings, Coins, Trophy, MapPin, Calendar } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('farm');
  const [crops] = useState([
    { id: 1, name: 'Wheat', growth: 75, profit: 1250, season: 'Summer' },
    { id: 2, name: 'Corn', growth: 45, profit: 890, season: 'Spring' },
    { id: 3, name: 'Tomatoes', growth: 90, profit: 2100, season: 'Summer' },
    { id: 4, name: 'Carrots', growth: 60, profit: 750, season: 'Fall' }
  ]);

  const equipment = [
    { id: 1, name: 'Tractor Pro', efficiency: 95, condition: 'Excellent' },
    { id: 2, name: 'Harvester X1', efficiency: 88, condition: 'Good' },
    { id: 3, name: 'Irrigation System', efficiency: 92, condition: 'Excellent' },
    { id: 4, name: 'Seed Planter', efficiency: 85, condition: 'Fair' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-green-900">
      {/* Header */}
      <header className="border-b border-green-700/50 backdrop-blur-sm bg-green-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">AgriVerse</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-green-300 hover:text-white transition-colors">Farm</a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">Market</a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">Equipment</a>
              <a href="#" className="text-green-300 hover:text-white transition-colors">Community</a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Coins className="w-5 h-5" />
                <span className="font-semibold">$12,450</span>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Dashboard */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Your
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Digital Farm</span>
            </h2>
            <p className="text-xl text-green-300 mb-8 max-w-3xl mx-auto">
              Build, manage, and grow your virtual agricultural empire. Plant crops, manage livestock, 
              trade in global markets, and become the ultimate farming tycoon.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <MapPin className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-white">2.5k</span>
              </div>
              <h3 className="text-green-300 text-sm font-medium">Acres Owned</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <Sprout className="w-8 h-8 text-emerald-400" />
                <span className="text-2xl font-bold text-white">12</span>
              </div>
              <h3 className="text-green-300 text-sm font-medium">Crop Types</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold text-white">Level 8</span>
              </div>
              <h3 className="text-green-300 text-sm font-medium">Farm Level</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">45</span>
              </div>
              <h3 className="text-green-300 text-sm font-medium">Workers</h3>
            </motion.div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-green-800/50 rounded-lg p-1 backdrop-blur-sm border border-green-700/50">
              {['farm', 'equipment', 'market'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'text-green-300 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Farm Management */}
          {activeTab === 'farm' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {crops.map((crop) => (
                <div key={crop.id} className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50 hover:border-green-500/50 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <Sprout className="w-8 h-8 text-green-400" />
                    <span className="text-xs px-2 py-1 bg-green-600/30 text-green-300 rounded-full">
                      {crop.season}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{crop.name}</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-300">Growth</span>
                        <span className="text-white">{crop.growth}%</span>
                      </div>
                      <div className="w-full bg-green-900/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all"
                          style={{ width: `${crop.growth}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-300 text-sm">Profit</span>
                      <span className="text-yellow-400 font-semibold">${crop.profit}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Harvest
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {/* Equipment Management */}
          {activeTab === 'equipment' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {equipment.map((item) => (
                <div key={item.id} className="bg-green-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Tractor className="w-8 h-8 text-green-400" />
                      <div>
                        <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                        <p className="text-green-300 text-sm">Condition: {item.condition}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-white">{item.efficiency}%</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-300">Efficiency</span>
                        <span className="text-white">{item.efficiency}%</span>
                      </div>
                      <div className="w-full bg-green-900/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                          style={{ width: `${item.efficiency}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors">
                        Upgrade
                      </button>
                      <button className="flex-1 px-4 py-2 border border-green-600 text-green-300 rounded-lg hover:bg-green-800 transition-colors">
                        Repair
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Market */}
          {activeTab === 'market' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BarChart3 className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Global Agricultural Market</h3>
              <p className="text-green-300 max-w-2xl mx-auto mb-8">
                Trade your crops in the global marketplace. Monitor prices, negotiate deals, 
                and expand your agricultural business worldwide.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all">
                Open Market
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Action Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-green-800/90 backdrop-blur-sm rounded-full px-6 py-3 border border-green-700/50 flex items-center space-x-4">
          <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all">
            <Play className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-white">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Day 127 - Summer</span>
          </div>
          <button className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-600 transition-colors text-sm">
            Save Game
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 border-t border-green-700/50 py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AgriVerse</span>
          </div>
          <p className="text-green-400 mb-4">Professional Farm Simulation - Build Your Agricultural Empire</p>
          <div className="flex justify-center space-x-6 text-green-400">
            <a href="#" className="hover:text-white transition-colors">Tutorial</a>
            <a href="#" className="hover:text-white transition-colors">Leaderboard</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
