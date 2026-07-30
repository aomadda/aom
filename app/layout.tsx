import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalSearch from "@/components/GlobalSearch";
import { getSession } from "@/lib/auth/session";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user: { fullName: string; email: string; role: 'user' | 'admin' } | null = null
  try {
    const session = await getSession()
    if (session) {
      user = {
        fullName: session.fullName,
        email: session.email,
        role: session.role,
      }
    }
  } catch {
    user = null
  }

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} flex min-h-screen flex-col bg-white antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar user={user} />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <GlobalSearch />
      </body>
    </html>
  );
}
