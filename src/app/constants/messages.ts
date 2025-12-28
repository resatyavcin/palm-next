export const AUTH_MESSAGES = {
  // Page titles
  pages: {
    signin: {
      title: "Login to your account",
      description: "Enter your email below to login to your account",
    },
    signup: {
      title: "Create an account",
      description: "Enter your information to create your account",
    },
    forgotPassword: {
      title: "Forgot your password?",
      description:
        "Enter your email address and we'll send you a link to reset your password",
    },
    resetPasswordSent: {
      title: "Check your email",
      description:
        "We've sent a password reset link to your email address. Please check your inbox and follow the instructions.",
    },
    twoFactorSetup: {
      title: "Set up Two-Factor Authentication",
      description: "Scan the QR code with your authenticator app to enable 2FA",
    },
    twoFactorVerify: {
      title: "Verify Two-Factor Authentication",
      description: "Enter the 6-digit code from your authenticator app",
    },
  },

  // Form fields
  fields: {
    email: {
      label: "Email",
      placeholder: "someone@example.com",
    },
    password: {
      label: "Password",
      placeholder: "********",
    },
    confirmPassword: {
      label: "Confirm Password",
      placeholder: "********",
    },
    verificationCode: {
      label: "Verification Code",
      placeholder: "000000",
    },
  },

  // Buttons
  buttons: {
    signin: {
      default: "Login",
      submitting: "Logging in...",
    },
    signup: {
      default: "Sign Up",
      submitting: "Signing up...",
    },
    forgotPassword: {
      default: "Send Reset Link",
      submitting: "Sending...",
    },
    verify: {
      default: "Verify",
      submitting: "Verifying...",
    },
    twoFactorSetup: {
      continue: "Continue to Verify",
    },
  },

  // Links
  links: {
    signUp: "Sign Up",
    signIn: "Sign In",
    forgotPassword: "Forgot your password?",
    backToSignIn: "Back to Sign In",
    backToSetup: "Back to Setup",
    cancel: "Cancel",
    backToLogin: "Back to Login",
    resendLink: "Resend Link",
  },

  // Helper texts
  helpers: {
    resetPasswordSent: {
      noEmailReceived:
        "Didn't receive the email? Check your spam folder or try resending.",
    },
    twoFactorSetup: {
      scanInstructions:
        "Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)",
      manualEntry: "Or enter this code manually:",
    },
    twoFactorVerify: {
      instructions: "Enter the 6-digit code from your authenticator app",
    },
  },
} as const;
