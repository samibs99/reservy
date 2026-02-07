"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname() || "/";

  const navLinks = [
    { href: "/coiffeur", label: "Coiffeur" },
    { href: "/barbier", label: "Barbier" },
    { href: "/manucure", label: "Manucure" },
    { href: "/institut", label: "Institut de beauté" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/reservy" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            R.
          </div>
          <span className="text-xl font-bold hidden sm:inline">Reservy.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-2 ${isActive ? 'text-purple-600 font-semibold' : 'hover:text-gray-900'}`}
              >
                {isActive && <span className="w-2 h-2 rounded-full bg-purple-600 inline-block" />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/pro/login" className="px-6 py-2.5 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 whitespace-nowrap">Je suis un professionnel de beauté</Link>
          <Link href="/pro/login" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium hidden lg:inline">Mon Compte</span>
          </Link>
        </div>
      </div>
    </header>
  );
}