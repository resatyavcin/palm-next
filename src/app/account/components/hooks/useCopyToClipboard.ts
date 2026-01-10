import { useState } from "react";
import { toast } from "sonner";

interface UseCopyToClipboardOptions {
  text: string;
  successMessage?: string;
  errorMessage?: string;
  resetDelay?: number;
}

export function useCopyToClipboard({
  text,
  successMessage = "Copied to clipboard",
  errorMessage = "Failed to copy",
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
