import api from "./axios";

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const loginUser = (data: { email: string; password: string }) =>
  api.post<AuthResponse>("/auth/login", data);

export const registerUser = (data: {
  name: string;
  email: string;
  password: string;
}) => api.post<AuthResponse>("/auth/register", data);

export const getMe = () => api.get("/users/me");