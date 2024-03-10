import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import siteMetadata from "@/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Create Next App",
  // description: "Generated by create next app",
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  creator: siteMetadata.creator,
  // themeColor: siteConfig.themeColor,
  // icons: siteConfig.icons,
  // metadataBase: siteConfig.metadataBase,
  // openGraph: siteConfig.openGraph,
  // twitter: siteConfig.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='cupcake'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
