import FormCardComponent from "@/components/feature/auth/FormCard";
import TwoFactorVerifyForm from "@/components/feature/auth/form/TwoFactorVerifyForm";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { LinkButton } from "@/components/feature/auth/LinkButton";

export default function TwoFactorVerifyPage() {
  return (
    <FormCardComponent
      title={AUTH_MESSAGES.pages.twoFactorVerify.title}
      description={AUTH_MESSAGES.pages.twoFactorVerify.description}
      action={
        <LinkButton href={AUTH_ROUTES.twoFactorSetup}>
          {AUTH_MESSAGES.links.backToSetup}
        </LinkButton>
      }
      form={<TwoFactorVerifyForm />}
    />
  );
}
