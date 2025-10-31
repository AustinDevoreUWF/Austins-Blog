import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Poppins,
  Manufacturing_Consent,
} from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
});

const manufacturingConsent = Manufacturing_Consent({
  subsets: ["latin"],
  variable: "--font-manufacturing-consent",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Blog",
  description: "A blog to track what I'm learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manufacturingConsent.variable} ${cormorantGaramond.variable} ${poppins.variable} bg-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
