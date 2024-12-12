import React from 'react';
import { Lock, Mail } from 'lucide-react';
import { useLoginForm } from '../hooks/useLoginForm';
import { InputField } from './InputField';

export function LoginForm() {
  const {
    email,
    password,
    isLoading,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="you@example.com"
        icon={<Mail className="h-5 w-5 text-gray-400" />}
        error={error}
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="••••••••"
        icon={<Lock className="h-5 w-5 text-gray-400" />}
        error={error}
      />

      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}