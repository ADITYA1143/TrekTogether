import { useState } from 'react';
import { Calendar, MessageCircle, Receipt } from 'lucide-react';
import TrekCard from "../components/TrekCard";
import type { Trek } from "../types/Trek";

export default function MyTreksPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');

  const upcomingTreks: Trek[] = [
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
  ];

  const completedTreks: Trek[] = [
    {
      id: '3',
      name: 'Mountain Peak Expedition',
      location: 'Rocky Mountains, Colorado',
      difficulty: 'Intermediate',
      date: 'Nov 10-14, 2024',
      duration: '4 Days',
      participants: 12,
      maxParticipants: 15,
      imageUrl: 'https://images.unsplash.com/photo-1729365948862-6aedcaa2513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmVra2luZyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjcxMDY2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const currentTreks = activeTab === 'upcoming' ? upcomingTreks : completedTreks;

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-stone-900 mb-3">My Treks</h1>
          <p className="text-lg text-stone-600">Track and manage your trekking adventures</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeTab === 'upcoming'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Upcoming ({upcomingTreks.length})</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeTab === 'completed'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100'
            }`}
          >
            Completed ({completedTreks.length})
          </button>
        </div>

        {/* Trek Cards */}
        {currentTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTreks.map((trek) => (
              <div key={trek.id} className="relative">
                <TrekCard trek={trek} />
                {activeTab === 'upcoming' && (
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 py-2.5 px-4 bg-sky-100 hover:bg-sky-200 text-sky-900 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4" />
                      Chat
                    </button>
                    <button className="flex-1 py-2.5 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                      <Receipt className="w-4 h-4" />
                      Expenses
                    </button>
                  </div>
                )}
                {activeTab === 'completed' && (
                  <div className="mt-4">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <p className="text-sm text-emerald-800 text-center">✓ Trek Completed</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="text-xl text-stone-900 mb-2">
              No {activeTab} treks yet
            </h3>
            <p className="text-stone-600 mb-6">
              Start exploring amazing treks and join the adventure!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
