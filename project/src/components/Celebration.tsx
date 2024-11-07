interface CelebrationProps {
  userName: string;
  score: number;
}

export function Celebration({ userName, score }: CelebrationProps) {
  if (score === 0) return null;

  const isMilestone = score % 25 === 0;
  const is100Points = score === 100;

  if (!isMilestone) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center relative">
        {is100Points ? (
          <h2 className="text-4xl font-bold text-purple-600 mb-4">
            Bravo {userName}! 🎉
          </h2>
        ) : (
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Amazing {userName}! 🌟
          </h2>
        )}
        <p className="text-xl">You've reached {score} points!</p>
        <img 
          src="https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif" 
          alt="Fireworks" 
          className="w-64 h-64 object-cover mx-auto my-4"
        />
      </div>
    </div>
  );
}