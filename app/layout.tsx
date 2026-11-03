
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KHELZO – The World of Football",
    template: "%s | KHELZO"
  },
  description:
    "Explore football players, legends, clubs, careers and statistics from around the world.",
  applicationName: "KHELZO"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
