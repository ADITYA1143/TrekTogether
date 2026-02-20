import { Link } from 'react-router-dom';
import { Users, MessageCircle, Receipt, Shield, ArrowRight, Mountain, Star } from 'lucide-react';
import TrekCard from "../components/TrekCard";
import type { Trek } from "../types/Trek";


export default function LandingPage() {
  // Sample trek data
  const featuredTreks: Trek[] = [
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
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      review: 'Found my perfect trekking group! The expense splitter made everything so easy.',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
      review: 'Safe, organized, and amazing people. Best trekking experience ever!',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      review: 'Love how the group chat keeps everyone connected before and during the trek.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603475429038-44361bcde123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMHRyYWlsfGVufDF8fHx8MTc2NzA4NTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Never Trek Alone.
              <br />
              <span className="text-emerald-300">Find Your Tribe.</span>
            </h1>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 leading-relaxed">
              Connect with fellow adventurers, discover breathtaking trails, and create unforgettable memories together. 
              Your next great adventure starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-900 rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Treks
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/create"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-700 text-white rounded-xl hover:bg-emerald-600 transition-all border-2 border-emerald-600"
              >
                Create Trek
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-stone-900 mb-4">Why Trek Together?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Everything you need for a safe, organized, and memorable trekking experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4 group-hover:bg-emerald-600 transition-colors">
                <Users className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg text-stone-900 mb-2">Find Trek Companions</h3>
              <p className="text-stone-600">
                Connect with like-minded trekkers who share your passion for adventure
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-2xl mb-4 group-hover:bg-sky-600 transition-colors">
                <MessageCircle className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg text-stone-900 mb-2">Group Chat</h3>
              <p className="text-stone-600">
                Stay connected with your group before, during, and after the trek
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-4 group-hover:bg-amber-600 transition-colors">
                <Receipt className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg text-stone-900 mb-2">Expense Splitter</h3>
              <p className="text-stone-600">
                Transparent expense tracking and automatic bill splitting
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4 group-hover:bg-red-600 transition-colors">
                <Shield className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg text-stone-900 mb-2">Safety First</h3>
              <p className="text-stone-600">
                Comprehensive safety guidelines and emergency protocols
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treks Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl text-stone-900 mb-2">Featured Treks</h2>
              <p className="text-stone-600">Discover amazing trekking adventures</p>
            </div>
            <Link
              to="/explore"
              className="hidden sm:inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
          
          <div className="text-center sm:hidden">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              View All Treks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-stone-900 mb-4">How It Works</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Start your trekking journey in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 text-2xl">
                  1
                </div>
                <h3 className="text-xl mb-3">Discover or Create a Trek</h3>
                <p className="text-emerald-100">
                  Browse amazing treks or create your own adventure
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 text-2xl">
                  2
                </div>
                <h3 className="text-xl mb-3">Join Companions</h3>
                <p className="text-sky-100">
                  Connect with fellow trekkers and plan together
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 text-2xl">
                  3
                </div>
                <h3 className="text-xl mb-3">Chat, Split & Travel Safely</h3>
                <p className="text-amber-100">
                  Use built-in tools for seamless coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-stone-900 mb-4">What Trekkers Say</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Real experiences from our amazing community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-700 mb-6 leading-relaxed">{testimonial.review}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-stone-900">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">Trekking Enthusiast</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mountain className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
          <h2 className="text-3xl sm:text-4xl mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of trekkers who have found their perfect companions
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
          >
            Start Exploring Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
