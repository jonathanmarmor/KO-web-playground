import type { Metadata } from "next";
import { Abril_Fatface, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./config";

const abril = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abril.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
