import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Anuj Kelodiya - Visual Artist",
  description:
    "A creative video editor crafting cinematic experiences through seamless cuts, dynamic effects, and compelling storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link rel="icon" href="/img/head-logo.png" />
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </head>
        <body className={`antialiased`}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
