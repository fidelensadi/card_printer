export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export interface LoginFormState {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}