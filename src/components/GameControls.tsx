interface GameControlsProps {
  onOperatorChange: (operator: '+' | '×') => void;
  currentOperator: '+' | '×';
}

export function GameControls({ onOperatorChange, currentOperator }: GameControlsProps) {
  return (
    <div className="space-x-4">
      <button
        onClick={() => onOperatorChange('+')}
        className={`px-4 py-2 rounded-lg ${
          currentOperator === '+' ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
      >
        Addition
      </button>
      <button
        onClick={() => onOperatorChange('×')}
        className={`px-4 py-2 rounded-lg ${
          currentOperator === '×' ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
      >
        Multiplication
      </button>
    </div>
  );
}