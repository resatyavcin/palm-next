import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import TwoFactorSetup from "@/components/feature/auth/TwoFactorSetup";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";

// This would normally come from your backend/API
// For demo purposes, we're using a sample QR code value
const SAMPLE_QR_VALUE =
  "otpauth://totp/Example:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=Example";
const SAMPLE_SECRET = "JBSWY3DPEHPK3PXP";

export default function TwoFactorSetupPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.twoFactorSetup.title}
      description={AUTH_MESSAGES.pages.twoFactorSetup.description}
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signin}>{AUTH_MESSAGES.links.cancel}</Link>
        </Button>
      }
      form={
        <TwoFactorSetup qrCodeValue={SAMPLE_QR_VALUE} secret={SAMPLE_SECRET} />
      }
    />
  );
}
