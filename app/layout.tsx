import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["900"] });

export const metadata: Metadata = {
  title: "RISE LK | Sri Lanka's Premier Gaming Platform",
  description: "Join the most competitive gaming tournaments in Sri Lanka. Rise among champions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}