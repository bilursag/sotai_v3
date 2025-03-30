import { Code, Database, Server, Globe, Lightbulb, GitBranch, Lock, Search, Smartphone, CreditCard } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/ui/footer";

const servicesData = [
  {
    id: "desarrollo-web",
    icon: <Code className="h-10 w-10" />,
    title: "Desarrollo Web Frontend",
    description:
      "Creación de interfaces modernas, atractivas y altamente funcionales con las últimas tecnologías web.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
    ],
    benefits: [
      "Interfaces de usuario intuitivas y atractivas",
      "Código modular y mantenible",
      "Alta velocidad de carga y rendimiento",
      "Experiencias web responsivas para todos los dispositivos",
    ],
  },
  {
    id: "backend-api",
    icon: <Server className="h-10 w-10" />,
    title: "Desarrollo Backend & API",
    description:
      "Construcción de sistemas backend robustos y APIs eficientes para potenciar tus aplicaciones.",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "API RESTful",
      "GraphQL",
      "Webhooks",
    ],
    benefits: [
      "Arquitecturas escalables y seguras",
      "APIs bien documentadas y fáciles de consumir",
      "Optimización para alto rendimiento",
      "Integración con servicios de terceros",
    ],
  },
  {
    id: "pasarelas-pago",
    icon: <CreditCard className="h-10 w-10" />,
    title: "Integración de Pasarelas de Pago",
    description:
      "Implementación de sistemas de pago seguros y eficientes para tu negocio online.",
    technologies: [
      "WebPay",
      "MercadoPago",
      "PayPal",
      "Stripe",
      "OpenPay",
      "Checkout Pro",
    ],
    benefits: [
      "Transacciones seguras y conformes a estándares PCI",
      "Experiencia de checkout optimizada y personalizada",
      "Múltiples opciones de pago para tus clientes",
      "Gestión automatizada de transacciones y conciliaciones",
    ],
  },
  {
    id: "bases-datos",
    icon: <Database className="h-10 w-10" />,
    title: "Bases de Datos & Almacenamiento",
    description:
      "Diseño e implementación de estructuras de datos eficientes y escalables para tus necesidades.",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "Prisma",
      "TypeORM",
      "Supabase",
    ],
    benefits: [
      "Modelos de datos optimizados",
      "Consultas eficientes y rápidas",
      "Soluciones escalables para datos en crecimiento",
      "Backup y estrategias de recuperación",
    ],
  },
  {
    id: "aplicaciones-fullstack",
    icon: <Globe className="h-10 w-10" />,
    title: "Aplicaciones Full-Stack",
    description:
      "Desarrollo integral de aplicaciones web completas, desde la interfaz hasta la infraestructura.",
    technologies: [
      "MERN Stack",
      "Next.js",
      "Jamstack",
      "tRPC",
      "Auth Strategies",
      "CDN",
    ],
    benefits: [
      "Desarrollo coordinado de todas las capas",
      "Integración perfecta entre frontend y backend",
      "Arquitecturas modernas y eficientes",
      "Despliegue y CI/CD optimizado",
    ],
  },
  {
    id: "desarrollo-movil",
    icon: <Smartphone className="h-10 w-10" />,
    title: "Desarrollo Móvil",
    description:
      "Creación de aplicaciones móviles nativas y multiplataforma con tecnologías modernas.",
    technologies: [
      "React Native",
      "Expo",
      "Native APIs",
      "App Store & Play Store",
      "Offline First",
    ],
    benefits: [
      "Un solo código para múltiples plataformas",
      "Experiencia de usuario nativa",
      "Rendimiento optimizado para dispositivos móviles",
      "Compatibilidad con características específicas de dispositivos",
    ],
  },
  {
    id: "consultoria",
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Consultoría Técnica",
    description:
      "Asesoramiento estratégico en decisiones tecnológicas y mejores prácticas de desarrollo.",
    technologies: [
      "Arquitectura de Software",
      "Revisiones de Código",
      "Auditorías Técnicas",
      "Planificación Tecnológica",
    ],
    benefits: [
      "Evaluación y mejora de procesos existentes",
      "Selección de tecnologías adecuadas para tu negocio",
      "Estrategias para reducir deuda técnica",
      "Optimización de flujos de trabajo de desarrollo",
    ],
  },
  {
    id: "seguridad",
    icon: <Lock className="h-10 w-10" />,
    title: "Seguridad & Autenticación",
    description:
      "Implementación de sistemas de seguridad robustos y soluciones de autenticación avanzadas.",
    technologies: [
      "JWT",
      "OAuth",
      "2FA/MFA",
      "CSRF/XSS Protection",
      "Role-Based Access",
      "Encryption",
    ],
    benefits: [
      "Protección contra amenazas comunes",
      "Gestión segura de datos sensibles",
      "Sistemas de autenticación multi-factor",
      "Auditorías de seguridad periódicas",
    ],
  },
  {
    id: "optimizacion-rendimiento",
    icon: <Search className="h-10 w-10" />,
    title: "SEO & Optimización",
    description:
      "Mejora del rendimiento y posicionamiento de tu sitio web en buscadores.",
    technologies: [
      "Web Vitals",
      "Core Web Metrics",
      "Lighthouse",
      "Schema.org",
      "SEO Técnico",
      "Análisis de Datos",
    ],
    benefits: [
      "Mejora en métricas de carga y rendimiento",
      "Mayor visibilidad en buscadores",
      "Experiencia de usuario optimizada",
      "Análisis y monitoreo constante",
    ],
  },
  {
    id: "ci-cd",
    icon: <GitBranch className="h-10 w-10" />,
    title: "CI/CD & DevOps",
    description:
      "Configuración de procesos automatizados para integración y despliegue continuo.",
    technologies: [
      "GitHub Actions",
      "Docker",
      "Vercel",
      "Netlify",
      "AWS",
      "Testing Automatizado",
    ],
    benefits: [
      "Entrega continua de nuevas funcionalidades",
      "Reducción de errores en producción",
      "Flujos de trabajo eficientes para equipos",
      "Despliegues más rápidos y seguros",
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHeader 
        title="Nuestros Servicios" 
        description="Soluciones digitales a medida para impulsar tu negocio con las últimas tecnologías"
        breadcrumbs={[
          { title: "Servicios", href: "/services" }
        ]}
      />
      <div className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-4">
              <span className="text-sm font-medium text-primary">Nuestros servicios</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Soluciones a medida para cada <span className="text-primary">desafío</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ofrecemos un conjunto completo de servicios de desarrollo y consultoría
              para ayudarte a llevar tus ideas al siguiente nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="flex flex-col h-full rounded-lg border bg-card shadow-sm transition-all hover:shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-md bg-primary/10 p-3 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 5 && (
                      <span className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground">
                        +{service.technologies.length - 5} más
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-sm font-medium mb-2">Beneficios principales:</h4>
                  <ul className="space-y-1.5 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 mt-0.5 text-primary">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">¿No estás seguro de qué servicio necesitas?</h2>
            <p className="text-muted-foreground mb-6">
              Agenda una consulta gratuita y te ayudaremos a identificar la mejor solución para tu proyecto.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Reservar consulta gratuita
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}