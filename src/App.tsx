import React from 'react';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;