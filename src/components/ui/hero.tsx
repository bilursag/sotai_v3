import Link from "next/link";
import { ChevronRight, Code, Database, Lightbulb } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-background" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
            <span className="relative px-2">Desarrollo Full-Stack & Consultoría</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Soluciones de desarrollo{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 text-transparent bg-clip-text">
              personalizadas
            </span>{" "}
            para tu negocio
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformamos ideas en productos digitales de alta calidad. Desde diseño hasta implementación, ofrecemos soluciones tecnológicas a la medida de tus necesidades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Empecemos a conversar
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Services Cards */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Code className="h-6 w-6" />}
            title="Desarrollo Web"
            description="Creamos aplicaciones web modernas con React, Next.js y otras tecnologías de vanguardia."
          />
          <ServiceCard
            icon={<Database className="h-6 w-6" />}
            title="Backend & API"
            description="Desarrollamos backends robustos y APIs eficientes para potenciar tus aplicaciones."
          />
          <ServiceCard
            icon={<Lightbulb className="h-6 w-6" />}
            title="Consultoría"
            description="Asesoramos en estrategias tecnológicas para optimizar tus procesos y productos digitales."
          />
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="mb-4 inline-flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-primary">
        <span>Saber más</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </div>
    </div>
  );
}