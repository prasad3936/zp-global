import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ZP Global Systems",
  description: "Engineering Digital Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white min-h-screen overflow-x-hidden">
  <div className="absolute inset-0 -z-10 bg-linear-to-br from-indigo-900/30 via-purple-900/20 to-black blur-3xl"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
