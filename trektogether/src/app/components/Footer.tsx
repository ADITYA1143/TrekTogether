import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg text-white">TrekTogether</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Connect with fellow trekking enthusiasts, discover amazing trails, and embark on unforgettable adventures together.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/explore" className="hover:text-emerald-400 transition-colors">
                  Explore Treks
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-emerald-400 transition-colors">
                  Create a Trek
                </Link>
              </li>
              <li>
                <Link to="/my-treks" className="hover:text-emerald-400 transition-colors">
                  My Treks
                </Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-emerald-400 transition-colors">
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Community Guidelines */}
          <div>
            <h3 className="text-white mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Support */}
          <div>
            <h3 className="text-white mb-4">Contact & Support</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:support@trektogether.com" className="hover:text-emerald-400 transition-colors">
                  support@trektogether.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Safety Disclaimer */}
        <div className="mt-10 pt-8 border-t border-stone-800">
          <div className="bg-stone-800/50 rounded-lg p-4 mb-6">
            <h4 className="text-white mb-2">⚠️ Safety Disclaimer</h4>
            <p className="text-xs leading-relaxed">
              TrekTogether is a platform for connecting trekking enthusiasts. All trekking activities carry inherent risks. 
              Users are responsible for their own safety, proper preparation, and adherence to local regulations. 
              Always trek with proper equipment, inform someone of your plans, and assess your fitness level before any trek. 
              TrekTogether is not liable for any incidents during treks organized through this platform.
            </p>
          </div>
          
          <div className="text-center text-sm text-stone-400">
            <p>© 2024 TrekTogether. All rights reserved. | Adventure responsibly, trek safely.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
