"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">ZP Global Systems</h1>
        <div className="space-x-6 hidden md:block">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
