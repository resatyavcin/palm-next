import "@/styles/globals.css";
import type { Metadata } from "next";
import { QueryProvider } from "@/lib/providers/QueryProvider";
import { Toaster } from "sonner";

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
    <html lang="en">
      <body className="antialiased">
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
