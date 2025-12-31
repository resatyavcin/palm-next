export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}
