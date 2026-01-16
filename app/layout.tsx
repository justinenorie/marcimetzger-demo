import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

// fonts
const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Marci Metzger Homes",
  description: "Real-estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
