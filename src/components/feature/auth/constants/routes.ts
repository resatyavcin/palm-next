export const AUTH_ROUTES = {
  signin: "/auth/signin",
  signup: "/auth/signup",
} as const;

export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
