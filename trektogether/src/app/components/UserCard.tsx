import { Award, MapPin } from "lucide-react";
import type { User } from "../types/User";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-stone-200">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-emerald-400 to-emerald-600">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-white">
            <Award className="w-3.5 h-3.5 text-amber-500" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-stone-900 truncate mb-1">{user.name}</h4>
          <p className="text-sm text-emerald-700 mb-2">{user.experienceLevel}</p>

          <div className="flex items-center gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>{user.treksCompleted} Treks</span>
            </div>
            {user.location && (
              <div className="flex items-center gap-1 truncate">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{user.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
