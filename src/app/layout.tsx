import type { Metadata } from "next";
import { Inter, Bungee_Spice } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "sonner";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mint Me Coffee",
  description: "Supporting Creators Monetize Their Work - Onchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Toaster position="bottom-center" />
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
