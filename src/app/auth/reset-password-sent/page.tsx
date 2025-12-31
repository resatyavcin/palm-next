import SuccessCardComponent from "@/components/feature/auth/SuccessCard";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { LinkButton } from "@/components/feature/auth/LinkButton";

export default function ResetPasswordSentPage() {
  return (
    <SuccessCardComponent
      title={AUTH_MESSAGES.pages.resetPasswordSent.title}
      description={AUTH_MESSAGES.pages.resetPasswordSent.description}
      extraInfo={AUTH_MESSAGES.helpers.resetPasswordSent.noEmailReceived}
      actions={
        <>
          <LinkButton
            href={AUTH_ROUTES.signin}
            variant="default"
            className="w-full"
          >
            {AUTH_MESSAGES.links.backToLogin}
          </LinkButton>
          <LinkButton
            variant="outline"
            href={AUTH_ROUTES.forgotPassword}
            className="w-full"
          >
            {AUTH_MESSAGES.links.resendLink}
          </LinkButton>
        </>
      }
    />
  );
}
