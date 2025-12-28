"use client";

import QRCodeSVG from "react-qr-code";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { AUTH_ROUTES } from "@/app/constants/routes";
import { AUTH_MESSAGES } from "@/app/constants/messages";

interface TwoFactorSetupProps {
  qrCodeValue: string;
  secret: string;
}

export default function TwoFactorSetup({
  qrCodeValue,
  secret,
}: TwoFactorSetupProps) {
  return (
    <div className="flex flex-col gap-6">
      <CardContent>
        <div className="flex flex-col gap-6 items-center">
          <div className="p-4 bg-white rounded-lg border">
            <QRCodeSVG value={qrCodeValue} size={200} />
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {AUTH_MESSAGES.helpers.twoFactorSetup.scanInstructions}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">
                {AUTH_MESSAGES.helpers.twoFactorSetup.manualEntry}
              </p>
              <code className="px-4 py-2 bg-muted rounded-md text-sm font-mono">
                {secret}
              </code>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-6">
        <Button asChild className="w-full">
          <Link href={AUTH_ROUTES.twoFactorVerify}>
            {AUTH_MESSAGES.buttons.twoFactorSetup.continue}
          </Link>
        </Button>
      </CardFooter>
    </div>
  );
}
