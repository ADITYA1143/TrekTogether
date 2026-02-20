import { MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Trek } from "../types/Trek";

type Props = {
  trek: Trek;
};

export default function TrekCard({ trek }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition">
      <img
        src={trek.imageUrl}
        alt={trek.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-stone-900">
          {trek.name}
        </h3>

        <div className="flex items-center gap-2 text-stone-600 text-sm">
          <MapPin className="w-4 h-4" />
          {trek.location}
        </div>

        <div className="flex items-center gap-2 text-stone-600 text-sm">
          <Calendar className="w-4 h-4" />
          {trek.date} • {trek.duration}
        </div>

        <div className="flex items-center gap-2 text-stone-600 text-sm">
          <Users className="w-4 h-4" />
          {trek.participants}/{trek.maxParticipants} joined
        </div>

        <Link
          to={`/trek/${trek.id}`}
          className="block mt-4 text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
