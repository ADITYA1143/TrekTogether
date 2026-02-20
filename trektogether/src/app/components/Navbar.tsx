import { Link, useLocation } from 'react-router-dom';
import { Mountain, User, Bell } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl tracking-tight text-stone-900">TrekTogether</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/explore') 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/create"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/create') 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Create Trek
            </Link>
            <Link
              to="/my-treks"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/my-treks') 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              My Treks
            </Link>
            <Link
              to="/safety"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/safety') 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              Safety
            </Link>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-600 rounded-full"></span>
            </button>
            <Link
              to="/auth"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
