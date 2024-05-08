import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthProvider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import './globals.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mstry Message",
  description: "Real feedback from real people.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
