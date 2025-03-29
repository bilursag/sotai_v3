import Link from "next/link";
import { ArrowRight, MessageSquare, Calendar, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                <span className="text-sm font-medium text-primary">
                  Empecemos a colaborar
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Transformemos tus ideas en{" "}
                <span className="text-primary">realidad digital</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl">
                Agenda una consulta gratuita de 30 minutos para discutir tu
                proyecto. Sin compromisos, solo una conversación sobre cómo
                podemos ayudarte a alcanzar tus objetivos.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Reservar consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 h-full">
              <div className="h-full rounded-lg border bg-card p-6 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    ¿Qué incluye la consulta?
                  </h3>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MessageSquare className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Análisis de necesidades
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Identificamos tus requerimientos específicos
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Estimación de tiempos
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Definimos plazos realistas para tu proyecto
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Plan de acción</p>
                        <p className="text-xs text-muted-foreground">
                          Creamos una hoja de ruta clara para tu proyecto
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Duración</p>
                        <p className="text-xs text-muted-foreground">
                          30 minutos
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Precio</p>
                        <p className="text-xs text-muted-foreground">
                          Totalmente gratis
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Solicitar consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}