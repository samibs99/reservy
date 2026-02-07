"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Iconify } from "@/components/iconify";
import { useBoolean } from "@/hooks";
import { m, AnimatePresence } from "framer-motion";
import { varFade } from "@/components/animate";

export default function Header() {
  const pathname = usePathname() || "/";
  const mobileMenu = useBoolean();

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
          <Link href="/pro/login" className="hidden lg:flex px-6 py-2.5 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 whitespace-nowrap">
            Je suis un professionnel de beauté
          </Link>
          <Link href="/pro/login" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Iconify icon="mdi:account-circle" width={20} />
            <span className="text-sm font-medium">Mon Compte</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={mobileMenu.onToggle}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Iconify icon={mobileMenu.value ? "mdi:close" : "mdi:menu"} width={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu.value && (
          <m.div
            {...varFade().inDown}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <nav className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={mobileMenu.onFalse}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-purple-50 text-purple-600 font-semibold' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {isActive && <span className="w-2 h-2 rounded-full bg-purple-600" />}
                    <span>{link.label}</span>
                  </a>
                );
              })}
              <div className="pt-4 space-y-2">
                <Link 
                  href="/pro/login" 
                  onClick={mobileMenu.onFalse}
                  className="flex items-center gap-2 p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <Iconify icon="mdi:account-circle" width={20} />
                  Mon Compte
                </Link>
                <Link 
                  href="/pro/login" 
                  onClick={mobileMenu.onFalse}
                  className="flex items-center justify-center gap-2 p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                >
                  <Iconify icon="mdi:briefcase" width={20} />
                  Espace Professionnel
                </Link>
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}