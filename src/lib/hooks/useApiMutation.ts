"use client";

import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { ApiError } from "../api/client";

interface UseApiMutationOptions<TData, TVariables> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: ApiError, variables: TVariables) => void;
  redirectOnSuccess?: string;
  saveToken?: (data: TData) => string | null;
  options?: Omit<
    UseMutationOptions<TData, ApiError, TVariables>,
    "mutationFn" | "onSuccess" | "onError"
  >;
}

export function useApiMutation<TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
  redirectOnSuccess,
  saveToken,
  options,
}: UseApiMutationOptions<TData, TVariables>) {
  const router = useRouter();

  return useMutation({
    mutationFn,
    onSuccess: (data, variables) => {
      // Token kaydetme
      if (saveToken && typeof window !== "undefined") {
        const token = saveToken(data);
        if (token) {
          localStorage.setItem("token", token);
        }
      }

      // Custom success handler
      onSuccess?.(data, variables);

      // Yönlendirme
      if (redirectOnSuccess) {
        router.push(redirectOnSuccess);
      }
    },
    onError: (error, variables) => {
      console.error("API error:", error);
      onError?.(error, variables);
    },
    ...options,
  });
}
