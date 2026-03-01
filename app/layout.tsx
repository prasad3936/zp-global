import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ZP Global Systems",
    template: "%s | ZP Global Systems",
  },
  description:
    "ZP Global Systems Pvt Ltd – Engineering Digital Infrastructure across Web, Mobile and Cloud ecosystems.",
  keywords: [
    "Web Development",
    "Mobile Development",
    "DevOps Services",
    "SaaS Development",
    "Cloud Infrastructure",
  ],
  authors: [{ name: "ZP Global Systems Pvt Ltd" }],
  openGraph: {
    title: "ZP Global Systems",
    description:
      "Engineering Digital Infrastructure across Web, Mobile and Cloud ecosystems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative bg-black text-white min-h-screen overflow-x-hidden flex flex-col">
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black"></div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow pt-24 pb-16">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
