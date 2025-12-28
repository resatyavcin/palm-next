import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import TwoFactorVerifyForm from "@/components/feature/auth/TwoFactorVerifyForm";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";

export default function TwoFactorVerifyPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.twoFactorVerify.title}
      description={AUTH_MESSAGES.pages.twoFactorVerify.description}
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.twoFactorSetup}>
            {AUTH_MESSAGES.links.backToSetup}
          </Link>
        </Button>
      }
      form={<TwoFactorVerifyForm />}
    />
  );
}
