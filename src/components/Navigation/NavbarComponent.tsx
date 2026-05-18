"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function NavbarComponent() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <img src="/favicon.svg" className="h-4 w-4" alt="logo" />
          </div>
          <span className="text-[15px] font-semibold text-gray-900 tracking-tight">
            Flowbite React
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-150"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Avatar */}
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          className="w-8 h-8 rounded-full ring-2 ring-violet-400/40"
          alt="Bonnie Green"
        />
      </div>
    </nav>
  );
}
