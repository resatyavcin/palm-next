export const ACCOUNT_ROUTES = {
  account: "/account",
} as const;

export type AccountRoute = (typeof ACCOUNT_ROUTES)[keyof typeof ACCOUNT_ROUTES];
