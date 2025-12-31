"use client";

import { authApi } from "../api/auth";
import type {
  LoginRequest,
  RegisterRequest,
  LoginResponse,
  RegisterResponse,
} from "../types/auth";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { useApiMutation } from "./useApiMutation";

export function useLogin() {
  return useApiMutation<LoginResponse, LoginRequest>({
    mutationFn: (data) => authApi.login(data),
    saveToken: (data) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      return data.token;
    },
    redirectOnSuccess: "/",
  });
}

export function useRegister() {
  return useApiMutation<RegisterResponse, RegisterRequest>({
    mutationFn: (data) => authApi.register(data),
    saveToken: (data) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      return data.token;
    },
    redirectOnSuccess: AUTH_ROUTES.twoFactorSetup,
  });
}
