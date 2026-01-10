export const en = {
  // Common
  common: {
    language: "Language",
  },

  // Account page
  account: {
    page: {
      title: "Account Settings",
      description: "Manage your account settings and security preferences",
    },
    links: {
      account: "My Account",
    },
    twoFactor: {
      enabled: {
        title: "Two-factor authentication is enabled",
        description:
          "Two-factor authentication (2FA, learn more) adds an additional level of security to your account by requiring more than just a password to sign in.",
        disableButton: "Disable",
        disableTitle: "Disable two-factor authentication",
        openButton: "Disable",
      },
      disabled: {
        title: "Enable two-factor authentication",
        description:
          "Two-factor authentication (2FA, learn more) adds an additional level of security to your account by requiring more than just a password to sign in.",
        setupInstructions:
          "Scan or copy the 2FA setup key below into an app like 1Password, Authy, Microsoft Authenticator or Google Authenticator, or store it in your browser, OS or third-party password manager.",
        verifyTitle: "Verify your authenticator app",
        verifyDescription:
          "Enter your password and the 6-digit code from your authenticator app to complete setup.",
        enterManually: "Or enter this code manually:",
        learnMore: "learn more",
        openButton: "Enable",
      },
      secretKeyModal: {
        title: "Your setup key for 2FA",
        copySuccess: "Setup key copied to clipboard",
        copyError: "Failed to copy setup key",
        description:
          "Click the key above to copy it. Add this key to your authenticator app or password manager.",
      },
      forms: {
        currentPassword: {
          label: "Current password",
          placeholder: "Enter your current password",
        },
        twoFactorCode: {
          label: "Two-factor auth code",
        },
        enable: {
          button: "Enable",
          submitting: "Enabling...",
        },
        disable: {
          button: "Disable",
          submitting: "Disabling...",
        },
        verify: {
          button: "Verify",
          submitting: "Verifying...",
        },
      },
      learnMoreUrl:
        "https://www.youtube.com/watch?v=0mvCeNsTa1g&feature=youtu.be",
    },
    passwordChange: {
      title: "Change password",
      description: "Update your account password to keep your account secure",
      success: "Password changed successfully",
      error: "Failed to change password. Please try again.",
      forms: {
        currentPassword: {
          label: "Current password",
          placeholder: "Enter your current password",
        },
        newPassword: {
          label: "New password",
          placeholder: "Enter your new password",
        },
        confirmNewPassword: {
          label: "Confirm new password",
          placeholder: "Confirm your new password",
        },
        button: "Change password",
        submitting: "Changing password...",
      },
    },
  },

  // Auth messages
  auth: {
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
        description:
          "Scan the QR code with your authenticator app to enable 2FA",
      },
      twoFactorVerify: {
        title: "Verify Two-Factor Authentication",
        description: "Enter the 6-digit code from your authenticator app",
      },
    },
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
    links: {
      signUp: "Sign Up",
      signIn: "Sign In",
      forgotPassword: "Forgot password?",
      backToSignIn: "Back to sign in",
      backToSetup: "Back to Setup",
      cancel: "Cancel",
      backToLogin: "Back to Login",
      resendLink: "Resend Link",
    },
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
  },
  // Home page
  home: {
    links: {
      account: "My Account",
    },
  },
} as const;
