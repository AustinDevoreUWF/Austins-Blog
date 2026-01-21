import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {Cormorant_Garamond,Poppins, Cinzel} from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "next-themes";

const cormorantGaramond =Cormorant_Garamond({
    subsets:["latin"],
    variable:"--font-cormorant-garamond",
    weight:["400"],
})
const poppins = Poppins({
    subsets:["latin"],
    variable:"--font-poppins",
    weight:["400","600"],
})
const cinzel =Cinzel({
  subsets:['latin'],
  variable:"--font-cinzel",
  weight:['400'],
})


export const metadata = {
  title: "My Blog",
  description: "A blog to track what I'm learning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorantGaramond.variable}
         ${poppins.variable}
          ${cinzel.variable} 
          bg-[#fdfcfb] text-[#1a1a1a] 
          dark:bg-[#121212] dark:text-[#e8e6e3] 
          transition-colors duration-500 `}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
