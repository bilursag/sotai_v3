"use client"

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Servicios",
    href: "/servicios",
    children: [
      { title: "Desarrollo Web", href: "/servicios/web" },
      { title: "Backend & API", href: "/servicios/backend" },
      { title: "Consultoría", href: "/servicios/consultoria" },
    ],
  },
  { title: "Proyectos", href: "/proyectos" },
  { title: "Sobre mí", href: "/sobre-mi" },
  { title: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
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
              <div key={item.title} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="flex items-center space-x-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown para submenús */}
                {item.children && (
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-md border bg-background p-2 shadow-md",
                      activeDropdown === item.title ? "block" : "hidden group-hover:block"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block rounded-sm px-3 py-2 text-sm hover:bg-muted"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
              href="/contacto"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contacto
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <div key={item.title} className="py-1">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="flex w-full items-center justify-between rounded-md py-2 text-base font-medium"
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          activeDropdown === item.title ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="ml-4 mt-1 space-y-1 border-l pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-foreground/70"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md py-2 text-base font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}