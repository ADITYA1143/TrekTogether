import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  DollarSign,
  Mountain,
  MessageCircle,
  Receipt,
  ArrowLeft,
  Star,
  Shield,
} from 'lucide-react';
import DifficultyBadge from '../components/DifficultyBadge';

export default function TrekDetailsPage() {
  const { id } = useParams();

  // Mock data
  const trek = {
    id: id || '1',
    name: 'Himalayan Base Camp Trek',
    location: 'Nepal, Himalayas',
    difficulty: 'Pro' as const,
    date: 'Jan 15-22, 2025',
    duration: '7 Days / 6 Nights',
    participants: 8,
    maxParticipants: 12,
    estimatedCost: '$1,200 - $1,500',
    bestSeason: 'October - November, March - May',
    imageUrl: 'https://images.unsplash.com/photo-1758468204916-136f96fd6dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjB0cmVrJTIwcGVha3N8ZW58MXx8fHwxNzY3MTA2NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Embark on an unforgettable journey to the Himalayan Base Camp, one of the world\'s most iconic trekking destinations. This challenging trek takes you through breathtaking landscapes, traditional Sherpa villages, and offers stunning views of the world\'s highest peaks.',
    organizer: {
      name: 'Alex Kumar',
      avatar: 'https://i.pravatar.cc/150?img=12',
      treks: 24,
      rating: 4.9,
    },
    highlights: [
      'Stunning mountain vistas including Mt. Everest',
      'Experience authentic Sherpa culture',
      'Trek through Sagarmatha National Park',
      'Professional guide and porter support',
      'Acclimatization days included',
      'Tea house accommodation',
    ],
    itinerary: [
      'Day 1: Arrival in Kathmandu',
      'Day 2-3: Trek to Namche Bazaar (acclimatization)',
      'Day 4-5: Trek to Tengboche and Dingboche',
      'Day 6: Reach Base Camp',
      'Day 7: Descent and return',
    ],
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-96 bg-stone-900">
        <img
          src={trek.imageUrl}
          alt={trek.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back Button */}
        <Link
          to="/explore"
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Explore</span>
        </Link>
        
        {/* Trek Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="container mx-auto">
            <div className="mb-3">
              <DifficultyBadge level={trek.difficulty} />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-2">{trek.name}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{trek.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <h2 className="text-2xl text-stone-900 mb-4">Trek Overview</h2>
              <p className="text-stone-600 leading-relaxed mb-6">{trek.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 mb-1">Date</p>
                    <p className="text-sm text-stone-900">{trek.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 mb-1">Duration</p>
                    <p className="text-sm text-stone-900">{trek.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 mb-1">Best Season</p>
                    <p className="text-sm text-stone-900">{trek.bestSeason}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 mb-1">Estimated Cost</p>
                    <p className="text-sm text-stone-900">{trek.estimatedCost}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 mb-1">Participants</p>
                    <p className="text-sm text-stone-900">{trek.participants}/{trek.maxParticipants}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <h2 className="text-2xl text-stone-900 mb-4">Trek Highlights</h2>
              <ul className="space-y-3">
                {trek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <span className="text-stone-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <h2 className="text-2xl text-stone-900 mb-4">Day-by-Day Itinerary</h2>
              <div className="space-y-3">
                {trek.itinerary.map((day, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      {index < trek.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-stone-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-stone-700">{day.split(': ')[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organizer Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 sticky top-24">
              <h3 className="text-lg text-stone-900 mb-4">Trek Organizer</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600">
                  <img
                    src={trek.organizer.avatar}
                    alt={trek.organizer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-stone-900">{trek.organizer.name}</p>
                  <div className="flex items-center gap-1 text-sm text-stone-600">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{trek.organizer.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-stone-600 mb-6">{trek.organizer.treks} treks organized</p>
              
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-sm hover:shadow-md">
                  Join Trek
                </button>
                
                <Link
                  to={`/trek/${id}/participants`}
                  className="block w-full py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 text-center rounded-xl transition-colors"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>See Participants</span>
                  </div>
                </Link>
                
                <Link
                  to={`/trek/${id}/chat`}
                  className="block w-full py-3 px-4 bg-sky-100 hover:bg-sky-200 text-sky-900 text-center rounded-xl transition-colors"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Group Chat</span>
                  </div>
                </Link>
                
                <Link
                  to={`/trek/${id}/expenses`}
                  className="block w-full py-3 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 text-center rounded-xl transition-colors"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Receipt className="w-4 h-4" />
                    <span>View Expenses</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Safety Reminder */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-red-900 mb-2">Safety Reminder</h4>
                  <p className="text-sm text-red-800 leading-relaxed mb-3">
                    Always check weather conditions, carry proper gear, and inform someone of your plans.
                  </p>
                  <Link
                    to="/safety"
                    className="text-sm text-red-700 hover:text-red-800 underline"
                  >
                    Read Safety Guidelines →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
