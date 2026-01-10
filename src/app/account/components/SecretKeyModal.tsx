"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";
import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";

interface SecretKeyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  secret: string;
}

function formatSecretKey(secret: string): string {
  // Remove any existing hyphens and spaces, convert to uppercase
  const cleaned = secret.replace(/[-\s]/g, "").toUpperCase();
  // Group by 4 characters and join with hyphens
  const groups = cleaned.match(/.{1,4}/g);
  return groups ? groups.join("-") : cleaned;
}

export default function SecretKeyModal({
  open,
  onOpenChange,
  secret,
}: SecretKeyModalProps) {
  const formattedSecret = formatSecretKey(secret);
  const { isCopied, handleCopy } = useCopyToClipboard({
    text: secret,
    successMessage: ACCOUNT_MESSAGES.twoFactor.secretKeyModal.copySuccess,
    errorMessage: ACCOUNT_MESSAGES.twoFactor.secretKeyModal.copyError,
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {ACCOUNT_MESSAGES.twoFactor.secretKeyModal.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div
            onClick={handleCopy}
            className={cn(
              "p-4 bg-muted rounded-lg border cursor-pointer transition-all hover:bg-muted/80 active:bg-muted/60",
              isCopied && "ring-2 ring-green-500"
            )}
          >
            <code className="block text-center text-lg font-mono text-foreground tracking-wider leading-relaxed break-all select-all">
              {formattedSecret}
            </code>
          </div>
          <DialogDescription>
            {ACCOUNT_MESSAGES.twoFactor.secretKeyModal.description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
