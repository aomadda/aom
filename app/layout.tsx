import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalSearch from "@/components/GlobalSearch";
import QuizUserSync from "@/components/QuizUserSync";
import { getSession } from "@/lib/auth/session";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "AOM Adda",
  description: "AOM Adda is an online preparation platform, designed for candidates studying for the Assistant Operations Manager (AOM) and related departmental or promotional examinations.",
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png" }],
    shortcut: [{ url: "/favicon.png?v=2", type: "image/png" }],
    apple: [{ url: "/favicon.png?v=2", type: "image/png" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user: {
    id: string
    fullName: string
    email: string
    role: 'user' | 'admin'
  } | null = null
  try {
    const session = await getSession()
    if (session) {
      user = {
        id: session.userId,
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
        <QuizUserSync userId={user?.id ?? null} />
        <Navbar user={user} />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <GlobalSearch />
      </body>
    </html>
  );
}
