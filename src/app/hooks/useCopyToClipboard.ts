import { useState } from "react";
import { toast } from "sonner";

interface UseCopyToClipboardOptions {
  text: string;
  successMessage?: string;
  errorMessage?: string;
  resetDelay?: number;
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export function useCopyToClipboard({
  text,
  successMessage,
  errorMessage,
  resetDelay = 2000,
  onSuccess,
  onError,
}: UseCopyToClipboardOptions) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      if (successMessage) {
        toast.success(successMessage);
      }

      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => setIsCopied(false), resetDelay);
    } catch (error) {
      if (errorMessage) {
        toast.error(errorMessage);
      }

      console.error("Failed to copy:", error);

      if (onError) {
        onError(error);
      }
    }
  };

  return {
    isCopied,
    handleCopy,
  };
}
