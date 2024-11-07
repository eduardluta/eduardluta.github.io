import React from 'react';
import { MathVisualization } from './MathVisualization';

interface MathProblemProps {
  num1: number;
  num2: number;
  operator: '+' | '×';
  onAnswer: (answer: number) => void;
}

export function MathProblem({ num1, num2, operator, onAnswer }: MathProblemProps) {
  const [userAnswer, setUserAnswer] = React.useState('');
  const [showHelp, setShowHelp] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const answer = parseInt(userAnswer, 10);
    if (!isNaN(answer)) {
      onAnswer(answer);
      setUserAnswer('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <div className="text-4xl font-bold">
          {num1} {operator} {num2} = ?
        </div>
        <div className="space-y-4">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-24 text-2xl p-2 border-2 border-blue-300 rounded-lg text-center"
            autoFocus
          />
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Check Answer
            </button>
            <button
              type="button"
              onClick={() => setShowHelp(true)}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Help
            </button>
          </div>
        </div>
      </form>

      {showHelp && (
        <MathVisualization
          num1={num1}
          num2={num2}
          operator={operator}
          onClose={() => setShowHelp(false)}
        />
      )}
    </>
  );
}