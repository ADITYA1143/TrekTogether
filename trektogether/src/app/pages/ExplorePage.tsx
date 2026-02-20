import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import TrekCard from "../components/TrekCard";
import type { Trek } from "../types/Trek";



export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');

  // Sample trek data
  const allTreks: Trek[] = [
    {
      id: '1',
      name: 'Himalayan Base Camp Trek',
      location: 'Nepal, Himalayas',
      difficulty: 'Pro',
      date: 'Jan 15-22, 2025',
      duration: '7 Days',
      participants: 8,
      maxParticipants: 12,
      imageUrl: 'https://images.unsplash.com/photo-1758468204916-136f96fd6dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjB0cmVrJTIwcGVha3N8ZW58MXx8fHwxNzY3MTA2NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '2',
      name: 'Forest Trail Adventure',
      location: 'Oregon, USA',
      difficulty: 'Beginner',
      date: 'Feb 5-6, 2025',
      duration: '2 Days',
      participants: 5,
      maxParticipants: 8,
      imageUrl: 'https://images.unsplash.com/photo-1622030491255-cf4dd9ce0c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVrJTIwbmF0dXJlfGVufDF8fHx8MTc2NzEwNjYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '3',
      name: 'Mountain Peak Expedition',
      location: 'Rocky Mountains, Colorado',
      difficulty: 'Intermediate',
      date: 'Mar 10-14, 2025',
      duration: '4 Days',
      participants: 10,
      maxParticipants: 15,
      imageUrl: 'https://images.unsplash.com/photo-1729365948862-6aedcaa2513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmVra2luZyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjcxMDY2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '4',
      name: 'Coastal Backpacking Trip',
      location: 'Pacific Coast Trail, California',
      difficulty: 'Intermediate',
      date: 'Apr 1-5, 2025',
      duration: '5 Days',
      participants: 6,
      maxParticipants: 10,
      imageUrl: 'https://images.unsplash.com/photo-1610227397820-1d423e3e5467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2luZyUyMG1vdW50YWluJTIwdmlld3xlbnwxfHx8fDE3NjcxMDY2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '5',
      name: 'Alpine Camping Adventure',
      location: 'Swiss Alps, Switzerland',
      difficulty: 'Pro',
      date: 'May 20-27, 2025',
      duration: '7 Days',
      participants: 4,
      maxParticipants: 8,
      imageUrl: 'https://images.unsplash.com/photo-1663648681648-df9b0465ce4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwYWR2ZW50dXJlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjcxMDY2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '6',
      name: 'Weekend Mountain Hike',
      location: 'Blue Ridge Mountains, Virginia',
      difficulty: 'Beginner',
      date: 'Feb 12-13, 2025',
      duration: '2 Days',
      participants: 7,
      maxParticipants: 10,
      imageUrl: 'https://images.unsplash.com/photo-1603475429038-44361bcde123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsfGVufDF8fHx8MTc2NzA4NTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  // Filter logic
  const filteredTreks = allTreks.filter(trek => {
    const matchesSearch = trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          trek.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || trek.difficulty === selectedDifficulty;
    const matchesDuration = selectedDuration === 'all' || 
                           (selectedDuration === 'short' && trek.duration.includes('2 Days')) ||
                           (selectedDuration === 'medium' && (trek.duration.includes('4 Days') || trek.duration.includes('5 Days'))) ||
                           (selectedDuration === 'long' && trek.duration.includes('7 Days'));
    
    return matchesSearch && matchesDifficulty && matchesDuration;
  });

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl text-stone-900 mb-3">Explore Treks</h1>
          <p className="text-lg text-stone-600">
            Discover amazing trekking adventures and find your perfect match
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search by trek name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="all">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Pro">Pro</option>
              </select>
            </div>

            {/* Duration Filter */}
            <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (1-2 Days)</option>
                <option value="medium">Medium (3-5 Days)</option>
                <option value="long">Long (6+ Days)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-stone-600">
            Showing <span className="text-emerald-700">{filteredTreks.length}</span> trek{filteredTreks.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Trek Grid */}
        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-stone-400" />
            </div>
            <h3 className="text-xl text-stone-900 mb-2">No Treks Found</h3>
            <p className="text-stone-600 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDifficulty('all');
                setSelectedDuration('all');
              }}
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
