const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export interface ApiError {
  message: string;
  status?: number;
}

export interface ApiRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body } = options;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  // Token varsa ekle
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }
  }

  const config: RequestInit = {
    method,
    headers: defaultHeaders,
  };

  if (body && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));

    const apiError: ApiError = {
      message: error.message || "Request failed",
      status: response.status,
    };

    throw apiError;
  }

  return response.json();
}
