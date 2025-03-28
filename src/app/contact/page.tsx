import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="Estoy aquí para responder tus preguntas y ayudarte con tu próximo proyecto"
        breadcrumbs={[{ title: "Contacto", href: "/contact" }]}
      />

      <div className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Hablemos sobre tu proyecto
              </h2>
              <p className="text-muted-foreground mb-8">
                Estoy comprometido a ofrecer soluciones de desarrollo de alta
                calidad para tu negocio. Ya sea que tengas un proyecto en mente
                o simplemente quieras hacer algunas preguntas, estaré encantado
                de ayudarte.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respuesta dentro de 24 horas
                    </p>
                    <a
                      href="mailto:contacto@tudominio.com"
                      className="text-primary hover:underline mt-1 block"
                    >
                      contacto@tudominio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Teléfono</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Disponible en horario laboral
                    </p>
                    <a
                      href="tel:+123456789"
                      className="text-primary hover:underline mt-1 block"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Ubicación</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Disponible para proyectos remotos
                    </p>
                    <p className="mt-1">Ciudad, País</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Horario</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lunes - Viernes
                    </p>
                    <p className="mt-1">9:00 AM - 6:00 PM (Hora local)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 border-t pt-6">
                <h3 className="text-xl font-medium">
                  Otras formas de contacto
                </h3>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">
                      Formulario de contacto
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Completa el formulario para discutir tu proyecto o
                      consulta.
                    </p>
                    <p className="text-primary mt-2">
                      Respuesta garantizada en 24-48 horas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Correo directo</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Envíame un correo directamente para consultas urgentes o
                      detalladas.
                    </p>
                    <a
                      href="mailto:contacto@tudominio.com"
                      className="inline-flex items-center text-primary hover:underline mt-2"
                    >
                      contacto@tudominio.com
                      <Send className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">
                  Envíame un mensaje
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">
                  ¿Cuál es tu proceso de trabajo?
                </h3>
                <p className="text-muted-foreground">
                  Mi proceso incluye una fase inicial de descubrimiento,
                  planificación detallada, desarrollo iterativo con feedback
                  constante, pruebas exhaustivas y soporte posterior al
                  lanzamiento. Cada proyecto es único y adaptamos el proceso
                  según tus necesidades.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  ¿Cuánto cuesta desarrollar un proyecto?
                </h3>
                <p className="text-muted-foreground">
                  El costo varía según la complejidad, alcance y requisitos
                  específicos. Ofrezco presupuestos personalizados después de
                  entender completamente tu proyecto durante la consulta inicial
                  gratuita.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  ¿Cuánto tiempo toma completar un proyecto?
                </h3>
                <p className="text-muted-foreground">
                  El tiempo de desarrollo depende del alcance y complejidad. Un
                  sitio web básico puede tomar 2-4 semanas, mientras que una
                  aplicación compleja puede requerir varios meses. Proporciono
                  estimaciones detalladas después de la fase de planificación.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  ¿Ofreces mantenimiento después del lanzamiento?
                </h3>
                <p className="text-muted-foreground">
                  Sí, ofrezco planes de mantenimiento para garantizar que tu
                  sitio o aplicación permanezca actualizado, seguro y
                  funcionando correctamente. También puedo implementar mejoras y
                  nuevas funcionalidades según las necesidades de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
