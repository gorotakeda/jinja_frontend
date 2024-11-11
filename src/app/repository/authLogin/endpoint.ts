import axios from 'axios';
import { AuthResponse, LoginCredentials } from '@/app/types/auth/type';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await axios.post('http://localhost:8000/api/token/', credentials);
  return response.data;
};