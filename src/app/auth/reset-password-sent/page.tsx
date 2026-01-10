import SuccessCardComponent from "@/components/SuccessCard";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { ROUTES } from "@/app/constants/routes";
import { LinkButton } from "@/components/LinkButton";

export default function ResetPasswordSentPage() {
  return (
    <SuccessCardComponent
      title={AUTH_MESSAGES.pages.resetPasswordSent.title}
      description={AUTH_MESSAGES.pages.resetPasswordSent.description}
      extraInfo={AUTH_MESSAGES.helpers.resetPasswordSent.noEmailReceived}
      actions={
        <>
          <LinkButton
            href={ROUTES.AUTH_SIGNIN}
            variant="default"
            className="w-full"
          >
            {AUTH_MESSAGES.links.backToLogin}
          </LinkButton>
          <LinkButton
            variant="outline"
            href={ROUTES.AUTH_FORGOT_PASSWORD}
            className="w-full"
          >
            {AUTH_MESSAGES.links.resendLink}
          </LinkButton>
        </>
      }
    />
  );
}
