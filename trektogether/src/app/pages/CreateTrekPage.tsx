import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, Mountain } from 'lucide-react';
import DifficultyBadge from '../components/DifficultyBadge';

export default function CreateTrekPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    difficulty: 'Beginner' as 'Beginner' | 'Intermediate' | 'Pro',
    description: '',
    maxParticipants: '10',
    estimatedBudget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Trek created successfully!');
  };

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </Link>
          <h1 className="text-3xl sm:text-4xl text-stone-900 mb-3">Create Your Trek</h1>
          <p className="text-lg text-stone-600">
            Plan your adventure and invite fellow trekkers to join
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
              {/* Trek Name */}
              <div>
                <label className="block text-sm text-stone-700 mb-2">Trek Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="e.g., Himalayan Base Camp Trek"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm text-stone-700 mb-2">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="e.g., Nepal, Himalayas"
                  />
                </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-700 mb-2">Start Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-700 mb-2">End Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="block text-sm text-stone-700 mb-2">Difficulty Level *</label>
                <div className="flex gap-3">
                  {(['Beginner', 'Intermediate', 'Pro'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData({ ...formData, difficulty: level })}
                      className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                        formData.difficulty === level
                          ? 'border-emerald-600 bg-emerald-50'
                          : 'border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <DifficultyBadge level={level} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-stone-700 mb-2">Description *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe your trek, what to expect, highlights..."
                />
              </div>

              {/* Max Participants & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-700 mb-2">Max Participants *</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="number"
                      required
                      min="2"
                      value={formData.maxParticipants}
                      onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-stone-700 mb-2">Estimated Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="text"
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="e.g., $500-$700"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-sm hover:shadow-md"
              >
                Create Trek
              </button>
            </form>
          </div>

          {/* Live Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 sticky top-24">
              <h3 className="text-lg text-stone-900 mb-4">Preview</h3>
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Mountain className="w-12 h-12 text-white/50" />
                </div>
                <div>
                  <div className="mb-3">
                    <DifficultyBadge level={formData.difficulty} />
                  </div>
                  <h4 className="text-lg text-stone-900 mb-2">
                    {formData.name || 'Trek Name'}
                  </h4>
                  <p className="text-sm text-stone-600 mb-3">
                    {formData.location || 'Location'}
                  </p>
                  {formData.startDate && formData.endDate && (
                    <div className="flex items-center gap-2 text-sm text-stone-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(formData.startDate).toLocaleDateString()} - {new Date(formData.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {formData.maxParticipants && (
                    <div className="flex items-center gap-2 text-sm text-stone-600">
                      <Users className="w-4 h-4" />
                      <span>0/{formData.maxParticipants} Joined</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
