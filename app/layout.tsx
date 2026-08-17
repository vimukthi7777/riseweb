import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["900"] });

export const metadata: Metadata = {
  title: "RISE LK",
  description: "Join the most competitive gaming tournaments in Sri Lanka. Rise among champions.",
  icons: {
    icon: '/RiseLogo.ico', // File placed in the public/ folder
  },
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