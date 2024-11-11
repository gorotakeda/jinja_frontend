export type LoginCredentials = {
  username: string;
  password: string;
};

export type AuthResponse = {
  access: string;
  refresh: string;
};