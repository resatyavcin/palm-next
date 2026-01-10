export const tr = {
  // Common
  common: {
    language: "Dil",
  },

  // Account page
  account: {
    page: {
      title: "Hesap Ayarları",
      description:
        "Hesap ayarlarınızı ve güvenlik tercihlerinizi yönetin",
    },
    links: {
      account: "Hesabım",
    },
    twoFactor: {
      enabled: {
        title: "İki faktörlü kimlik doğrulama etkin",
        description:
          "İki faktörlü kimlik doğrulama (2FA, daha fazla bilgi) yalnızca parola yerine ek bir güvenlik katmanı ekleyerek hesabınızın güvenliğini artırır.",
        disableButton: "Devre Dışı Bırak",
        disableTitle: "İki faktörlü kimlik doğrulamayı devre dışı bırak",
        openButton: "Devre Dışı Bırak",
      },
      disabled: {
        title: "İki faktörlü kimlik doğrulamayı etkinleştir",
        description:
          "İki faktörlü kimlik doğrulama (2FA, daha fazla bilgi) yalnızca parola yerine ek bir güvenlik katmanı ekleyerek hesabınızın güvenliğini artırır.",
        setupInstructions:
          "Aşağıdaki 2FA kurulum anahtarını 1Password, Authy, Microsoft Authenticator veya Google Authenticator gibi bir uygulamaya tarayın veya kopyalayın, veya tarayıcınızda, işletim sisteminizde veya üçüncü taraf bir parola yöneticisinde saklayın.",
        verifyTitle: "Kimlik doğrulayıcı uygulamanızı doğrulayın",
        verifyDescription:
          "Kurulumu tamamlamak için parolanızı ve kimlik doğrulayıcı uygulamanızdan 6 haneli kodu girin.",
        enterManually: "Veya bu kodu manuel olarak girin:",
        learnMore: "daha fazla bilgi",
        openButton: "Etkinleştir",
      },
      secretKeyModal: {
        title: "2FA için kurulum anahtarınız",
        copySuccess: "Kurulum anahtarı panoya kopyalandı",
        copyError: "Kurulum anahtarı kopyalanamadı",
        description:
          "Kopyalamak için yukarıdaki anahtara tıklayın. Bu anahtarı kimlik doğrulayıcı uygulamanıza veya parola yöneticinize ekleyin.",
      },
      forms: {
        currentPassword: {
          label: "Mevcut parola",
          placeholder: "Mevcut parolanızı girin",
        },
        twoFactorCode: {
          label: "İki faktörlü kimlik doğrulama kodu",
        },
        enable: {
          button: "Etkinleştir",
          submitting: "Etkinleştiriliyor...",
        },
        disable: {
          button: "Devre Dışı Bırak",
          submitting: "Devre dışı bırakılıyor...",
        },
        verify: {
          button: "Doğrula",
          submitting: "Doğrulanıyor...",
        },
      },
      learnMoreUrl:
        "https://www.youtube.com/watch?v=0mvCeNsTa1g&feature=youtu.be",
    },
    passwordChange: {
      title: "Parolayı değiştir",
      description:
        "Hesabınızın güvenliğini korumak için hesap parolanızı güncelleyin",
      success: "Parola başarıyla değiştirildi",
      error: "Parola değiştirilemedi. Lütfen tekrar deneyin.",
      forms: {
        currentPassword: {
          label: "Mevcut parola",
          placeholder: "Mevcut parolanızı girin",
        },
        newPassword: {
          label: "Yeni parola",
          placeholder: "Yeni parolanızı girin",
        },
        confirmNewPassword: {
          label: "Yeni parolayı onayla",
          placeholder: "Yeni parolanızı onaylayın",
        },
        button: "Parolayı değiştir",
        submitting: "Parola değiştiriliyor...",
      },
    },
  },

  // Auth messages
  auth: {
    pages: {
      signin: {
        title: "Hesabınıza giriş yapın",
        description: "Hesabınıza giriş yapmak için e-posta adresinizi girin",
      },
      signup: {
        title: "Hesap oluştur",
        description: "Hesabınızı oluşturmak için bilgilerinizi girin",
      },
      forgotPassword: {
        title: "Parolanızı mı unuttunuz?",
        description:
          "E-posta adresinizi girin, size parola sıfırlama bağlantısı gönderelim",
      },
      resetPasswordSent: {
        title: "E-postanızı kontrol edin",
        description:
          "E-posta adresinize bir parola sıfırlama bağlantısı gönderdik. Lütfen gelen kutunuzu kontrol edin ve talimatları izleyin.",
      },
      twoFactorSetup: {
        title: "İki Faktörlü Kimlik Doğrulamayı Ayarlayın",
        description:
          "2FA'yı etkinleştirmek için QR kodunu kimlik doğrulayıcı uygulamanızla tarayın",
      },
      twoFactorVerify: {
        title: "İki Faktörlü Kimlik Doğrulamayı Doğrulayın",
        description:
          "Kimlik doğrulayıcı uygulamanızdan 6 haneli kodu girin",
      },
    },
    fields: {
      email: {
        label: "E-posta",
        placeholder: "ornek@email.com",
      },
      password: {
        label: "Parola",
        placeholder: "********",
      },
      confirmPassword: {
        label: "Parolayı Onayla",
        placeholder: "********",
      },
      verificationCode: {
        label: "Doğrulama Kodu",
        placeholder: "000000",
      },
    },
    buttons: {
      signin: {
        default: "Giriş Yap",
        submitting: "Giriş yapılıyor...",
      },
      signup: {
        default: "Kayıt Ol",
        submitting: "Kayıt yapılıyor...",
      },
      forgotPassword: {
        default: "Sıfırlama Bağlantısı Gönder",
        submitting: "Gönderiliyor...",
      },
      verify: {
        default: "Doğrula",
        submitting: "Doğrulanıyor...",
      },
      twoFactorSetup: {
        continue: "Doğrulamaya Devam Et",
      },
    },
    links: {
      signUp: "Kayıt Ol",
      signIn: "Giriş Yap",
      forgotPassword: "Parolanızı mı unuttunuz?",
      backToSignIn: "Giriş sayfasına dön",
      backToSetup: "Kuruluma Dön",
      cancel: "İptal",
      backToLogin: "Giriş Sayfasına Dön",
      resendLink: "Bağlantıyı Tekrar Gönder",
    },
    helpers: {
      resetPasswordSent: {
        noEmailReceived:
          "E-posta gelmedi mi? Spam klasörünüzü kontrol edin veya tekrar göndermeyi deneyin.",
      },
      twoFactorSetup: {
        scanInstructions:
          "Bu QR kodunu kimlik doğrulayıcı uygulamanızla (Google Authenticator, Authy, vb.) tarayın",
        manualEntry: "Veya bu kodu manuel olarak girin:",
      },
      twoFactorVerify: {
        instructions: "Kimlik doğrulayıcı uygulamanızdan 6 haneli kodu girin",
      },
    },
  },
  // Home page
  home: {
    links: {
      account: "Hesabım",
    },
  },
} as const;

