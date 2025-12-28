import SuccessCardComponent from "@/components/feature/auth/SuccessCard";
import { AUTH_MESSAGES } from "@/app/constants/messages";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetPasswordSentPage() {
  return (
    <SuccessCardComponent
      title={AUTH_MESSAGES.pages.resetPasswordSent.title}
      description={AUTH_MESSAGES.pages.resetPasswordSent.description}
      extraInfo={AUTH_MESSAGES.helpers.resetPasswordSent.noEmailReceived}
      actions={
        <>
          <Button asChild className="w-full">
            <Link href={AUTH_ROUTES.signin}>
              {AUTH_MESSAGES.links.backToLogin}
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href={AUTH_ROUTES.forgotPassword}>
              {AUTH_MESSAGES.links.resendLink}
            </Link>
          </Button>
        </>
      }
    />
  );
}
