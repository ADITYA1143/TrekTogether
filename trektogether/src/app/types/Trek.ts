export type Trek = {
  id: string;
  name: string;
  location: string;
  difficulty: "Beginner" | "Intermediate" | "Pro";
  date: string;
  duration: string;
  participants: number;
  maxParticipants: number;
  imageUrl: string;
};
