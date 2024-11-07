import React from 'react';

interface UserNameInputProps {
  onSubmit: (name: string) => void;
}

export function UserNameInput({ onSubmit }: UserNameInputProps) {
  const [name, setName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome to Math Practice!
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Enter your name to begin:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              autoFocus
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
          >
            Start Playing!
          </button>
        </form>
      </div>
    </div>
  );
}