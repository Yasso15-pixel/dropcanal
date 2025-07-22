import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Needer ✨ Maker",
  description: "A cozy place where needers and makers connect.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FFFDF8] text-[#3B2F2F]`}>
        {children}
      </body>
    </html>
  );
}
