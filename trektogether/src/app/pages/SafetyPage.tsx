import { Shield, AlertTriangle, CheckCircle, Phone, MapPin, Heart } from 'lucide-react';

export default function SafetyPage() {
  const safetyRules = [
    'Always inform someone about your trek plans and expected return time',
    'Check weather conditions before starting your trek',
    'Carry sufficient water, food, and emergency supplies',
    'Never trek alone in unfamiliar or dangerous terrain',
    'Bring a first-aid kit and know basic first aid',
    'Stay on marked trails and follow local guidelines',
    'Respect wildlife and maintain safe distances',
    'Be prepared for sudden weather changes',
  ];

  const preparationChecklist = [
    'Proper trekking boots and comfortable clothing',
    'Weather-appropriate gear (rain jacket, warm layers)',
    'Navigation tools (map, compass, GPS)',
    'Emergency whistle and flashlight',
    'Fully charged mobile phone and power bank',
    'Sufficient food and at least 2 liters of water',
    'First-aid kit and personal medications',
    'Sun protection (sunscreen, hat, sunglasses)',
    'Emergency contact information',
  ];

  const emergencyTips = [
    'Stay calm and assess the situation',
    'Call emergency services (911 or local number)',
    'If lost, stay in one place and make yourself visible',
    'Use a whistle to signal for help (3 short blasts)',
    'Conserve your phone battery for emergencies',
    'Find or create shelter if weather turns bad',
    'Stay hydrated and preserve energy',
    'Never attempt risky maneuvers without proper equipment',
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-stone-900 mb-3">Safety & Guidelines</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Your safety is our top priority. Follow these guidelines for a secure and enjoyable trekking experience.
          </p>
        </div>

        {/* Safety Rules */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl text-stone-900">Trek Safety Rules</h2>
          </div>
          <div className="space-y-3">
            {safetyRules.map((rule, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-stone-700">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-sky-600" />
            <h2 className="text-2xl text-stone-900">Preparation Checklist</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {preparationChecklist.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-sky-50 rounded-lg">
                <div className="w-5 h-5 rounded border-2 border-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-sky-600 rounded-sm"></div>
                </div>
                <p className="text-sm text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Tips */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl text-stone-900">Emergency Protocol</h2>
          </div>
          <div className="space-y-3">
            {emergencyTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                  {index + 1}
                </div>
                <p className="text-stone-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl text-stone-900">Emergency Contacts</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-sm text-amber-900 mb-2">Emergency Services</h3>
              <p className="text-2xl text-amber-700">911</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-sm text-amber-900 mb-2">TrekTogether Support</h3>
              <p className="text-xl text-amber-700">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-stone-50 rounded-xl">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-600 mt-0.5" />
              <div>
                <h4 className="text-stone-900 mb-1">Share Your Location</h4>
                <p className="text-sm text-stone-600">
                  Always share your trek location with emergency contacts and keep your phone charged for GPS tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Behavior */}
        <div className="mt-8 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-6 sm:p-8 border border-emerald-200">
          <h2 className="text-2xl text-stone-900 mb-4">Community Behavior Guidelines</h2>
          <ul className="space-y-2 text-stone-700">
            <li>• Treat all trekkers with respect and kindness</li>
            <li>• Follow "Leave No Trace" principles - pack out all waste</li>
            <li>• Respect local cultures and traditions</li>
            <li>• Help fellow trekkers when needed</li>
            <li>• Report any safety concerns to trek organizers</li>
            <li>• Contribute positively to the trekking community</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
