import FormCardComponent from "@/components/feature/auth/FormCard";
import ForgotPasswordForm from "@/components/feature/auth/form/ForgotPasswordForm";
import { ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { LinkButton } from "@/components/LinkButton";

export default function ForgotPasswordPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.forgotPassword.title}
      description={AUTH_MESSAGES.pages.forgotPassword.description}
      action={
        <LinkButton href={ROUTES.AUTH_SIGNIN}>
          {AUTH_MESSAGES.links.backToSignIn}
        </LinkButton>
      }
      form={<ForgotPasswordForm />}
    />
  );
}
