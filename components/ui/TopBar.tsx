"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { name: "Home", href: "/" },
  { name: "Listings", href: "/" },
];

const rightLinks = [
  { name: "Let's Move", href: "/" },
  { name: "About Us", href: "/" },
];

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className="hidden flex-1 justify-end space-x-12 md:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest text-gray-600 uppercase transition-colors hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CENTER LOGO */}
          <div className="mx-8 shrink-0">
            <Link href="/">
              <Image
                src="/marci_metzger.png"
                alt="Marci Metzger Homes"
                width={250}
                height={80}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden flex-1 justify-start space-x-12 md:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest text-gray-600 uppercase transition-colors hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-7 md:hidden" />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="animate-in slide-in-from-top duration-500 md:hidden">
          <div className="space-y-1 px-4 pt-2 pb-6">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block border-b border-gray-50 py-4 text-center text-base font-medium text-gray-700 last:border-none"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
