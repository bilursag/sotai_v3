"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Páginas actuales del sitio
const navItems = [
  { title: "Inicio", href: "/" },
  { title: "Servicios", href: "/services" },
  { title: "Contacto", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Función para verificar si un enlace está activo
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Sotai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  isActive(item.href) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Cambiar tema"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contacto
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium",
                  isActive(item.href) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
