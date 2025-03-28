"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Globe, Server, Palette, Cpu, ArrowRight, CreditCard } from "lucide-react";

// Datos de tecnologías
const technologies = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    items: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Redux/Zustand", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 5 }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "NestJS", level: 3 },
      { name: "Python", level: 3 },
      { name: "Django", level: 3 },
      { name: "RESTful APIs", level: 5 },
      { name: "GraphQL", level: 4 }
    ]
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-5 w-5" />,
    items: [
      { name: "MongoDB", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "Redis", level: 3 },
      { name: "Firebase", level: 4 },
      { name: "Prisma", level: 4 },
      { name: "Supabase", level: 3 }
    ]
  },
  {
    category: "Pasarelas de Pago",
    icon: <CreditCard className="h-5 w-5" />,
    items: [
      { name: "WebPay Plus", level: 5 },
      { name: "WebPay OneClick", level: 4 },
      { name: "MercadoPago Checkout", level: 5 },
      { name: "MercadoPago API", level: 4 },
      { name: "PayPal", level: 3 },
      { name: "Stripe", level: 3 },
      { name: "Integración POS", level: 3 }
    ]
  },
  {
    category: "DevOps",
    icon: <Cpu className="h-5 w-5" />,
    items: [
      { name: "Docker", level: 3 },
      { name: "GitHub Actions", level: 4 },
      { name: "AWS", level: 3 },
      { name: "Vercel", level: 5 },
      { name: "Netlify", level: 4 },
      { name: "CI/CD", level: 3 },
      { name: "Kubernetes", level: 2 }
    ]
  },
  {
    category: "UI/UX",
    icon: <Palette className="h-5 w-5" />,
    items: [
      { name: "Figma", level: 4 },
      { name: "Responsive Design", level: 5 },
      { name: "Accesibilidad", level: 4 },
      { name: "UI/UX Principles", level: 4 },
      { name: "Design Systems", level: 4 },
      { name: "Shadcn UI", level: 5 },
      { name: "Framer Motion", level: 3 }
    ]
  },
  {
    category: "Otros",
    icon: <Code className="h-5 w-5" />,
    items: [
      { name: "Git", level: 5 },
      { name: "Websockets", level: 3 },
      { name: "Testing (Jest/Cypress)", level: 3 },
      { name: "PWAs", level: 3 },
      { name: "Metodologías Ágiles", level: 4 },
      { name: "SEO", level: 3 },
      { name: "SSR/SSG", level: 4 }
    ]
  }
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState(technologies[0].category);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-primary">Stack Tecnológico</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Herramientas y tecnologías que <span className="text-primary">domino</span>
          </h2>
          <p className="text-muted-foreground">
            Utilizo un stack moderno y eficiente para crear aplicaciones rápidas,
            escalables y con excelente experiencia de usuario. Mi expertise cubre el ciclo completo
            de desarrollo, desde el frontend hasta el backend y despliegue.
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 justify-center">
          {technologies.map((tech) => (
            <button
              key={tech.category}
              onClick={() => setActiveCategory(tech.category)}
              className={cn(
                "flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                activeCategory === tech.category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.category}
            </button>
          ))}
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies
            .find((tech) => tech.category === activeCategory)
            ?.items.map((item) => (
              <div
                key={item.name}
                className="relative overflow-hidden rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "w-2 h-2 rounded-full",
                          i < item.level ? "bg-primary" : "bg-primary/20"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA de tecnologías */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras la tecnología que necesitas para tu proyecto?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Contáctame para discutir tus requerimientos específicos
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}