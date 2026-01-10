/**
 * Centralized routes for the entire application
 * All routes should be accessed from this single source
 */
export const ROUTES = {
  // Auth routes
  AUTH_SIGNIN: "/auth/signin",
  AUTH_SIGNUP: "/auth/signup",
  AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
  AUTH_RESET_PASSWORD_SENT: "/auth/reset-password-sent",
  AUTH_TWO_FACTOR_SETUP: "/auth/2fa/setup",
  AUTH_TWO_FACTOR_VERIFY: "/auth/2fa/verify",

  // App routes
  HOME: "/",
  ACCOUNT: "/account",
  LOGOUT: "/auth/signin",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
