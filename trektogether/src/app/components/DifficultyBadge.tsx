type Difficulty = 'Beginner' | 'Intermediate' | 'Pro';

interface DifficultyBadgeProps {
  level: Difficulty;
}

export default function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const styles = {
    Beginner: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    Intermediate: 'bg-amber-100 text-amber-700 border-amber-300',
    Pro: 'bg-red-100 text-red-700 border-red-300',
  };
  
  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-xs border ${styles[level]}`}>
      {level}
    </span>
  );
}
