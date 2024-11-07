interface ScoreBoardProps {
  correct: number;
  total: number;
  highScore: number;
}

export function ScoreBoard({ correct, total, highScore }: ScoreBoardProps) {
  return (
    <div className="space-y-2">
      <div className="text-xl font-semibold">
        Score: {correct}/{total} ({Math.round((correct / total) * 100) || 0}%)
      </div>
      <div className="text-lg text-purple-600 font-semibold">
        High Score: {highScore} points
      </div>
    </div>
  );
}