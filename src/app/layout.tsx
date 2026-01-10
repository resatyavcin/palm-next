import "@/styles/globals.css";
import type { Metadata } from "next";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";
import { Toaster } from "sonner";
import { LanguageSelector } from "@/components/LanguageSelector";

export const metadata: Metadata = {
  title: "Palm Next Auth",
  description: "Palm Next Auth",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <QueryProvider>
            <div className="relative min-h-screen">
              <div className="fixed top-4 right-4 z-50">
                <LanguageSelector />
              </div>
              {children}
            </div>
          </QueryProvider>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
