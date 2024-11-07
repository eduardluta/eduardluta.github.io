import { useState, useCallback, useEffect } from 'react';
import { MathProblem } from './components/MathProblem';
import { ScoreBoard } from './components/ScoreBoard';
import { GameControls } from './components/GameControls';
import { UserNameInput } from './components/UserNameInput';
import { Celebration } from './components/Celebration';
import { playCorrectSound, playIncorrectSound, playCelebrationSound } from './components/SoundEffects';

export function App() {
  const [userName, setUserName] = useState<string>('');
  const [operator, setOperator] = useState<'+' | '×'>('+');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('mathGameHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [numbers, setNumbers] = useState(() => generateNumbers());
  const [message, setMessage] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);

  function generateNumbers() {
    return {
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    };
  }

  useEffect(() => {
    if (score.correct > highScore) {
      setHighScore(score.correct);
      localStorage.setItem('mathGameHighScore', score.correct.toString());
    }
  }, [score.correct, highScore]);

  useEffect(() => {
    if (score.correct > 0 && score.correct % 25 === 0) {
      setShowCelebration(true);
      playCelebrationSound();
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    }
  }, [score.correct]);

  const checkAnswer = useCallback((userAnswer: number) => {
    const correctAnswer = operator === '+' 
      ? numbers.num1 + numbers.num2 
      : numbers.num1 * numbers.num2;

    const isCorrect = userAnswer === correctAnswer;
    
    if (isCorrect) {
      playCorrectSound();
    } else {
      playIncorrectSound();
    }

    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    setMessage(isCorrect 
      ? '🎉 Correct! Great job!' 
      : `Try again! The answer was ${correctAnswer}`);

    setNumbers(generateNumbers());
  }, [numbers, operator]);

  const handleOperatorChange = (newOperator: '+' | '×') => {
    setOperator(newOperator);
    setNumbers(generateNumbers());
    setMessage('');
  };

  if (!userName) {
    return <UserNameInput onSubmit={setUserName} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          {userName}'s Math Practice
        </h1>
        
        <div className="flex justify-center">
          <GameControls 
            onOperatorChange={handleOperatorChange}
            currentOperator={operator}
          />
        </div>

        <div className="text-center">
          <ScoreBoard 
            correct={score.correct} 
            total={score.total}
            highScore={highScore}
          />
        </div>

        <MathProblem
          num1={numbers.num1}
          num2={numbers.num2}
          operator={operator}
          onAnswer={checkAnswer}
        />

        {message && (
          <div className={`text-center text-lg font-medium ${
            message.includes('Correct') ? 'text-green-600' : 'text-red-600'
          }`}>
            {message}
          </div>
        )}
      </div>

      {showCelebration && (
        <Celebration 
          userName={userName} 
          score={score.correct} 
        />
      )}
    </div>
  );
}