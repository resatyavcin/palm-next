import Link from "next/link";
import { Button } from "@/components/ui/button";
import FormCardComponent from "@/components/feature/auth/FormCard";
import ForgotPasswordForm from "@/components/feature/auth/ForgotPasswordForm";
import { AUTH_ROUTES } from "@/components/feature/auth/constants/routes";
import { AUTH_MESSAGES } from "@/components/feature/auth/constants/messages";

export default function ForgotPasswordPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.forgotPassword.title}
      description={AUTH_MESSAGES.pages.forgotPassword.description}
      action={
        <Button variant="link" asChild>
          <Link href={AUTH_ROUTES.signin}>
            {AUTH_MESSAGES.links.backToSignIn}
          </Link>
        </Button>
      }
      form={<ForgotPasswordForm />}
      footer={null}
      logo={"/logo.svg"}
    />
  );
}
