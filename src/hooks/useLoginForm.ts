import { useState } from 'react';
import { LoginFormState, LoginCredentials } from '../types/auth';
import { validateEmail, validatePassword } from '../utils/validation';

export function useLoginForm() {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    isLoading: false,
    error: null,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      email: e.target.value,
      error: null,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      password: e.target.value,
      error: null,
    }));
  };

  const validateForm = (): boolean => {
    if (!validateEmail(formState.email)) {
      setFormState(prev => ({ ...prev, error: 'Please enter a valid email address' }));
      return false;
    }

    if (!validatePassword(formState.password)) {
      setFormState(prev => ({ ...prev, error: 'Password must be at least 8 characters long' }));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call
      const credentials: LoginCredentials = {
        email: formState.email,
        password: formState.password,
      };
      
      console.log('Login attempt:', credentials);
      
      // Add actual authentication logic here
      
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: 'Login failed. Please try again.',
      }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return {
    ...formState,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}