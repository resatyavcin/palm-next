import { useState } from "react";
import { toast } from "sonner";
import { ACCOUNT_MESSAGES } from "@/app/account/constants/messages";

interface UseCopyToClipboardOptions {
  text: string;
  successMessage?: string;
  errorMessage?: string;
  resetDelay?: number;
}

export function useCopyToClipboard({
  text,
  successMessage = ACCOUNT_MESSAGES.twoFactor.secretKeyModal.copySuccess,
  errorMessage = ACCOUNT_MESSAGES.twoFactor.secretKeyModal.copyError,
  resetDelay = 2000,
}: UseCopyToClipboardOptions) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success(successMessage);
      setTimeout(() => setIsCopied(false), resetDelay);
    } catch (error) {
      toast.error(errorMessage);
      console.error("Failed to copy:", error);
    }
  };

  return {
    isCopied,
    handleCopy,
  };
}
