interface MathVisualizationProps {
  num1: number;
  num2: number;
  operator: '+' | '×';
  onClose: () => void;
}

export function MathVisualization({ num1, num2, operator, onClose }: MathVisualizationProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Visual Help</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {operator === '+' ? (
          <div className="space-y-4">
            <p className="text-lg mb-4">Let's visualize: {num1} + {num2}</p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-8 justify-center items-center">
                <div className="space-y-2">
                  <p className="text-center font-semibold">First number: {num1}</p>
                  <div className="flex flex-wrap gap-2 justify-center max-w-[200px]">
                    {[...Array(num1)].map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-blue-500"></div>
                    ))}
                  </div>
                </div>
                <div className="text-2xl">+</div>
                <div className="space-y-2">
                  <p className="text-center font-semibold">Second number: {num2}</p>
                  <div className="flex flex-wrap gap-2 justify-center max-w-[200px]">
                    {[...Array(num2)].map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-green-500"></div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Count all the dots to find the answer!
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-lg mb-4">Let's visualize: {num1} × {num2}</p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center">
                <div className="inline-grid gap-1" 
                  style={{ 
                    gridTemplateColumns: `repeat(${num2}, 1fr)`,
                    gridTemplateRows: `repeat(${num1}, 1fr)`
                  }}>
                  {[...Array(num1 * num2)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-purple-500 rounded-sm"></div>
                  ))}
                </div>
              </div>
              <p className="text-center text-gray-600">
                Count the squares: {num1} rows × {num2} columns
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}