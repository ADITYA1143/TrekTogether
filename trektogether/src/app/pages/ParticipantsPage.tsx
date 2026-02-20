import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import UserCard from "../components/UserCard";
import type { User } from "../types/User";

export default function ParticipantsPage() {
  const { id } = useParams();

  const participants: User[] = [
    { id: '1', name: 'Alex Kumar', avatar: 'https://i.pravatar.cc/150?img=12', experienceLevel: 'Expert Trekker', treksCompleted: 24, location: 'Mumbai, India' },
    { id: '2', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=1', experienceLevel: 'Intermediate', treksCompleted: 12, location: 'Denver, CO' },
    { id: '3', name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=3', experienceLevel: 'Beginner', treksCompleted: 4, location: 'Seattle, WA' },
    { id: '4', name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=5', experienceLevel: 'Advanced', treksCompleted: 18, location: 'Portland, OR' },
    { id: '5', name: 'James Lee', avatar: 'https://i.pravatar.cc/150?img=8', experienceLevel: 'Intermediate', treksCompleted: 9, location: 'Austin, TX' },
    { id: '6', name: 'Sophia Rodriguez', avatar: 'https://i.pravatar.cc/150?img=9', experienceLevel: 'Expert Trekker', treksCompleted: 32, location: 'Boulder, CO' },
    { id: '7', name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=13', experienceLevel: 'Beginner', treksCompleted: 3, location: 'San Francisco, CA' },
    { id: '8', name: 'Lisa Patel', avatar: 'https://i.pravatar.cc/150?img=16', experienceLevel: 'Advanced', treksCompleted: 20, location: 'New York, NY' },
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Link
          to={`/trek/${id}`}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Trek Details
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl text-stone-900 mb-3">Trek Participants</h1>
          <p className="text-lg text-stone-600">
            {participants.length} fellow trekkers have joined this adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {participants.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
