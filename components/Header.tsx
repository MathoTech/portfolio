"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "À propos", href: "/apropos" },
  { label: "Contact", href: "/contact" }
] as const satisfies { label: string; href: Route }[];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex flex-col leading-tight text-white">
          <span className="text-xs uppercase tracking-[0.5em] text-white/50">Matho</span>
          <span className="text-lg font-semibold">Thomas Lopez</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 font-medium transition",
                  active ? "bg-white/15 text-white" : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-gradient-to-r from-accent-iris to-accent-electric px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-glow md:inline-flex"
        >
          Disponibilité
        </Link>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-white md:hidden"
        >
          {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>
      {isOpen && (
        <nav
          id="menu-mobile"
          className="border-t border-white/10 bg-base/95 px-6 py-6 text-sm text-white md:hidden"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-2xl border border-white/5 bg-white/5 px-4 py-3",
                    pathname === link.href ? "text-white" : "text-white/70"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block rounded-2xl bg-gradient-to-r from-accent-iris to-accent-magenta px-4 py-3 text-center font-semibold text-white shadow-glow"
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
