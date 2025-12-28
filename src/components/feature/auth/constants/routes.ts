export const AUTH_ROUTES = {
  signin: "/auth/signin",
  signup: "/auth/signup",
  forgotPassword: "/auth/forgot-password",
  twoFactorSetup: "/auth/2fa/setup",
  twoFactorVerify: "/auth/2fa/verify",
} as const;

export type AuthRoute = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
