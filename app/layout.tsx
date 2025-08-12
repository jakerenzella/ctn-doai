import type { Metadata } from "next";
import { DM_Serif_Text, Figtree } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capture the Narrative | Day of AI Australia",
  description:
    "Register now for Australia's ultimate election challenge. Create AI bots to capture the narrative in a simulated election over three weeks.",
};

const dmserif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmserif.variable} ${figtree.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
