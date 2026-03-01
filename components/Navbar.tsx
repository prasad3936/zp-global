"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" }, // 👈 ADD THIS
    { name: "Technology", href: "/technology" },
    { name: "Case Studies", href: "/case-studies" }, // optional but recommended
    { name: "Contact", href: "/contact" },
  ];

  const linkClasses = (href: string) =>
    `relative transition-colors ${
      pathname === href
        ? "text-white font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          ZP Global Systems
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={linkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
