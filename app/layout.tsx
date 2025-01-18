import type { Metadata } from "next";
import "./globals.css";

import GradientDiv from "@/components/GradientDiv";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GradientDiv>
          {children}
      </GradientDiv>
    </html>
  );
}
