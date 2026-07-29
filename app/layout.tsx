import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalSearch from "@/components/GlobalSearch";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "AOM Aspirant",
  description: "AOM Aspirant is a platform for AOM aspirants to prepare for the AOM examination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} flex min-h-screen flex-col bg-white antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <GlobalSearch />
      </body>
    </html>
  );
}
