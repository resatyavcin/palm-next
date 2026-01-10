export const ACCOUNT_MESSAGES = {
  // Account page
  page: {
    title: "Account Settings",
    description: "Manage your account settings and security preferences",
  },

  // Links
  links: {
    account: "My Account",
  },

  // Two-factor authentication
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
} as const;
