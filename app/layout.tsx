import type { Metadata } from "next";
import { DM_Serif_Text, Figtree } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capture the Narrative",
  description: "The ultimate election challenge",
};

const dmserif = DM_Serif_Text({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-serif',
});

const figtree = Figtree({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-figtree',
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
