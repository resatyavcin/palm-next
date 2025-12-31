import { apiRequest } from "./client";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/auth";

export const authApi = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    return apiRequest<LoginResponse>("/auth/login", {
      method: "POST",
      body: {
        email: data.email,
        password: data.password,
      },
    });
  },

  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    return apiRequest<RegisterResponse>("/auth/register", {
      method: "POST",
      body: {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
    });
  },
};
