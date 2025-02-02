import axios from 'axios';
import { AuthResponse, LoginCredentials } from '@/app/types/auth/type';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token/`, credentials);
  return response.data;
};