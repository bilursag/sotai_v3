import { CheckCircle, Coffee, Code, FileSearch, MessageCircle, Settings, Zap } from "lucide-react";

// Datos de las etapas del proceso
const workflowSteps = [
  {
    id: 1,
    title: "Descubrimiento y Planificación",
    description: "Nos reunimos para entender tus objetivos, analizar requerimientos y establecer el alcance del proyecto.",
    icon: <FileSearch className="h-8 w-8 text-primary" />,
    details: [
      "Entrevistas con stakeholders",
      "Definición de objetivos y KPIs",
      "Investigación de mercado y competencia",
      "Definición de arquitectura técnica"
    ]
  },
  {
    id: 2,
    title: "Diseño y Prototipado",
    description: "Creamos wireframes y prototipos para visualizar la solución antes de comenzar el desarrollo.",
    icon: <Coffee className="h-8 w-8 text-primary" />,
    details: [
      "Wireframes y maquetas",
      "Diseño de experiencia de usuario (UX)",
      "Prototipado interactivo",
      "Aprobación de diseños"
    ]
  },
  {
    id: 3,
    title: "Desarrollo Ágil",
    description: "Implementamos la solución utilizando metodologías ágiles, con ciclos cortos de desarrollo e iteraciones frecuentes.",
    icon: <Code className="h-8 w-8 text-primary" />,
    details: [
      "Desarrollo por sprints",
      "Revisiones de código regulares",
      "Testing continuo",
      "Demostraciones periódicas"
    ]
  },
  {
    id: 4,
    title: "Pruebas y Calidad",
    description: "Realizamos pruebas exhaustivas para garantizar que la solución funciona correctamente y cumple con los estándares de calidad.",
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    details: [
      "Pruebas unitarias e integración",
      "Testing de UX y usabilidad",
      "Optimización de rendimiento",
      "Revisión de seguridad"
    ]
  },
  {
    id: 5,
    title: "Despliegue",
    description: "Implementamos la solución en producción con procesos automatizados para minimizar riesgos.",
    icon: <Zap className="h-8 w-8 text-primary" />,
    details: [
      "Configuración de CI/CD",
      "Estrategia de lanzamiento gradual",
      "Monitoreo de producción",
      "Plan de contingencia"
    ]
  },
  {
    id: 6,
    title: "Soporte y Evolución",
    description: "Ofrecemos soporte continuo y trabajamos en mejoras incrementales basadas en feedback real de usuarios.",
    icon: <Settings className="h-8 w-8 text-primary" />,
    details: [
      "Soporte técnico proactivo",
      "Actualizaciones de seguridad",
      "Mejoras continuas",
      "Análisis de métricas"
    ]
  }
];

export function Workflow() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-primary">Metodología</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Un proceso <span className="text-primary">estructurado</span> para resultados excepcionales
          </h2>
          <p className="text-muted-foreground">
            Mi enfoque metodológico garantiza proyectos entregados a tiempo,
            dentro del presupuesto y con la calidad que esperas. Cada fase está
            diseñada para minimizar riesgos y maximizar el valor.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="relative mb-12 last:mb-0">
              {/* Conector vertical (excepto para el último elemento) */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
              )}

              <div className="flex items-start gap-6">
                {/* Icono con círculo */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border">
                  {step.icon}
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <div className="rounded-full bg-secondary px-3 py-1 text-sm font-medium">
                      Fase {step.id}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{step.description}</p>

                  {/* Detalles en una cuadrícula */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="h-5 w-5 shrink-0 text-primary mt-0.5">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 shadow-sm">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="text-sm">
              ¿Tienes preguntas sobre mi proceso de trabajo?{" "}
              <a href="/contact" className="font-medium text-primary hover:underline">
                Agenda una consulta gratuita
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}