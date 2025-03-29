import Link from "next/link";
import { ChevronRight, Code, Database, Lightbulb } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
              <span className="relative px-2">Desarrollo Full-Stack & Consultoría</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Soluciones de desarrollo{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 dark:from-primary dark:to-blue-400 text-transparent bg-clip-text">
                personalizadas
              </span>{" "}
              para tu negocio
            </h1>

            <p className="text-xl text-muted-foreground">
              Transformamos ideas en productos digitales de alta calidad. Desde diseño hasta implementación, ofrecemos soluciones tecnológicas a la medida de tus necesidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contactar ahora
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

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-background rounded-lg"></div>
            <div className="relative overflow-hidden rounded-lg border bg-card shadow-xl">
              <div className="flex items-center justify-between border-b px-4 py-2 bg-muted/50">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-medium">App.tsx</div>
                <div className="text-xs text-muted-foreground">React</div>
              </div>

              <div className="overflow-x-auto p-4 font-mono text-sm">
                <pre className="text-left">
                  <code className="language-tsx">
                    <span className="text-blue-500">import</span>
                    <span className="text-foreground"> React, &#123; useState, useEffect &#125; </span>
                    <span className="text-blue-500">from</span>
                    <span className="text-foreground"> </span>
                    <span className="text-green-500">&apos;react&apos;</span>
                    <span className="text-foreground">;</span>

                    <br /><br />

                    <span className="text-blue-500">import</span>
                    <span className="text-foreground"> &#123; motion &#125; </span>
                    <span className="text-blue-500">from</span>
                    <span className="text-foreground"> </span>
                    <span className="text-green-500">&apos;framer-motion&apos;</span>
                    <span className="text-foreground">;</span>

                    <br /><br />

                    <span className="text-purple-500">interface</span>
                    <span className="text-foreground"> </span>
                    <span className="text-yellow-500">Project</span>
                    <span className="text-foreground">&#123;</span>
                    <br />
                    <span className="text-foreground">  id: </span>
                    <span className="text-yellow-500">number</span>
                    <span className="text-foreground">;</span>
                    <br />
                    <span className="text-foreground">  title: </span>
                    <span className="text-yellow-500">string</span>
                    <span className="text-foreground">;</span>
                    <br />
                    <span className="text-foreground">  description: </span>
                    <span className="text-yellow-500">string</span>
                    <span className="text-foreground">;</span>
                    <br />
                    <span className="text-foreground">  technologies: </span>
                    <span className="text-yellow-500">string</span>
                    <span className="text-foreground">[];</span>
                    <br />
                    <span className="text-foreground">&#125;</span>

                    <br /><br />

                    <span className="text-blue-500">const</span>
                    <span className="text-foreground"> </span>
                    <span className="text-yellow-500">PortfolioShowcase</span>
                    <span className="text-foreground"> = () =&gt; &#123;</span>
                    <br />
                    <span className="text-foreground">  </span>
                    <span className="text-blue-500">const</span>
                    <span className="text-foreground"> [projects, setProjects] = </span>
                    <span className="text-purple-500">useState</span>
                    <span className="text-foreground">&lt;</span>
                    <span className="text-yellow-500">Project</span>
                    <span className="text-foreground">[]&gt;([]);</span>
                    <br /><br />

                    <span className="text-foreground">  </span>
                    <span className="text-purple-500">useEffect</span>
                    <span className="text-foreground">(() =&gt; &#123;</span>
                    <br />
                    <span className="text-foreground">    </span>
                    <span className="text-blue-500">const</span>
                    <span className="text-foreground"> fetchProjects = </span>
                    <span className="text-blue-500">async</span>
                    <span className="text-foreground"> () =&gt; &#123;</span>
                    <br />
                    <span className="text-foreground">      </span>
                    <span className="text-green-500">&#123;// Fetching projects data &#125;</span>
                    <br />
                    <span className="text-foreground">      </span>
                    <span className="text-blue-500">const</span>
                    <span className="text-foreground"> response = </span>
                    <span className="text-blue-500">await</span>
                    <span className="text-foreground"> fetch(</span>
                    <span className="text-green-500">&apos;/api/projects&apos;</span>
                    <span className="text-foreground">);</span>
                    <br />
                    <span className="text-foreground">      </span>
                    <span className="text-blue-500">const</span>
                    <span className="text-foreground"> data = </span>
                    <span className="text-blue-500">await</span>
                    <span className="text-foreground"> response.json();</span>
                    <br />
                    <span className="text-foreground">      setProjects(data);</span>
                    <br />
                    <span className="text-foreground">    &#125;;</span>
                    <br /><br />

                    <span className="text-foreground">    fetchProjects();</span>
                    <br />
                    <span className="text-foreground">  &#125;, []);</span>
                    <br /><br />

                    <span className="text-foreground">  </span>
                    <span className="text-blue-500">return</span>
                    <span className="text-foreground"> (</span>
                    <br />
                    <span className="text-foreground">    </span>
                    <span className="text-purple-500">&lt;motion.div&gt;</span>
                    <br />
                    <span className="text-foreground">      </span>
                    <span className="text-green-500">&#123;/* Component content */&#125;</span>
                    <br />
                    <span className="text-foreground">    </span>
                    <span className="text-purple-500">&lt;/motion.div&gt;</span>
                    <br />
                    <span className="text-foreground">  );</span>
                    <br />
                    <span className="text-foreground">&#125;;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

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