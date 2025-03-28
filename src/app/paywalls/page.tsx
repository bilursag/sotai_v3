import {
  CreditCard,
  Shield,
  BarChart,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Footer } from "@/components/ui/footer";

const gateways = [
  {
    id: "webpay",
    name: "WebPay",
    logo: "/webpay-logo.png",
    description:
      "Pasarela de pago líder en Chile desarrollada por Transbank, que permite procesar pagos con tarjetas de crédito y débito nacionales.",
    features: [
      "WebPay Plus: Integración estándar para transacciones seguras",
      "WebPay OneClick: Almacenamiento seguro de tarjetas para pagos recurrentes",
      "WebPay Mall: Procesamiento de compras para múltiples comercios",
      "Soporte para tarjetas de crédito, débito y prepago",
    ],
  },
  {
    id: "mercadopago",
    name: "MercadoPago",
    logo: "/mercadopago-logo.png",
    description:
      "Solución de pagos líder en Latinoamérica, que facilita la aceptación de múltiples medios de pago online con una única integración.",
    features: [
      "Checkout Pro: Experiencia de pago completamente integrada",
      "Checkout API: Personalización total de la experiencia de pago",
      "Pagos recurrentes y suscripciones",
      "Múltiples medios de pago locales e internacionales",
    ],
  },
];

// Casos de estudio (puedes reemplazar con casos reales)
const caseStudies = [
  {
    title: "Tienda de comercio electrónico de moda",
    challenge:
      "Una tienda de moda necesitaba implementar un sistema de pagos que permitiera compras rápidas y recurrentes para aumentar las ventas.",
    solution:
      "Implementamos WebPay OneClick y optimizamos el proceso de checkout, reduciendo el abandono de carrito en un 35%.",
    results: [
      "Aumento del 28% en la tasa de conversión",
      "Incremento del 40% en clientes recurrentes",
      "Reducción del 35% en abandono de carrito",
    ],
  },
  {
    title: "Plataforma de servicios por suscripción",
    challenge:
      "Una empresa SaaS necesitaba un sistema de cobros recurrentes fiable y que ofreciera reportes detallados.",
    solution:
      "Implementamos MercadoPago con pagos recurrentes y un panel personalizado para el seguimiento de transacciones.",
    results: [
      "Automatización completa del proceso de facturación",
      "Reducción del 50% en facturas impagas",
      "Panel de control en tiempo real para finanzas",
    ],
  },
];

export default function PaymentGatewaysPage() {
  return (
    <>
      <PageHeader
        title="Integración de Pasarelas de Pago"
        description="Implementación profesional de WebPay, MercadoPago y otras soluciones de pago para tu negocio online"
        breadcrumbs={[
          { title: "Servicios", href: "/services" },
          { title: "Pasarelas de Pago", href: "/servicios/paywalls" },
        ]}
      />

      <div className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Introducción */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Procesos de pago seguros y eficientes
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              La integración correcta de pasarelas de pago es crucial para el
              éxito de tu negocio online. Una experiencia de pago fluida y
              confiable no solo aumenta las conversiones, sino que también
              construye confianza con tus clientes.
            </p>
            <p className="text-lg text-muted-foreground">
              Me especializo en implementar soluciones de pago robustas, seguras
              y personalizadas que se adaptan perfectamente a tu modelo de
              negocio y a las expectativas de tus clientes.
            </p>
          </div>

          {/* Beneficios */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center">
              Beneficios de una integración profesional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4 mx-auto">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Seguridad de primer nivel
                </h3>
                <p className="text-muted-foreground">
                  Implementación conforme a estándares PCI DSS para proteger la
                  información sensible de tus clientes.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4 mx-auto">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Experiencia optimizada
                </h3>
                <p className="text-muted-foreground">
                  Procesos de checkout fluidos y rápidos que reducen el abandono
                  y aumentan la conversión.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4 mx-auto">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Analítica detallada
                </h3>
                <p className="text-muted-foreground">
                  Reportes y métricas detallados para entender los patrones de
                  pago y optimizar tu estrategia.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary mb-4 mx-auto">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Opciones para tus clientes
                </h3>
                <p className="text-muted-foreground">
                  Múltiples métodos de pago para adaptarse a las preferencias de
                  diferentes segmentos de clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Pasarelas disponibles */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center">
              Pasarelas de pago que implemento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gateways.map((gateway) => (
                <div
                  key={gateway.id}
                  className="border rounded-lg p-6 bg-card shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-md mr-4">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{gateway.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {gateway.description}
                  </p>
                  <h4 className="font-medium mb-2">
                    Características principales:
                  </h4>
                  <ul className="space-y-2">
                    {gateway.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Casos de estudio */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center">
              Casos de éxito
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-6 bg-card shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-muted-foreground">
                      EL DESAFÍO
                    </h4>
                    <p className="mt-1">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-sm text-muted-foreground">
                      LA SOLUCIÓN
                    </h4>
                    <p className="mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">
                      RESULTADOS
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso de implementación */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center">
              Proceso de implementación
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Línea de tiempo vertical */}
                <div className="absolute left-9 top-0 h-full w-0.5 bg-border"></div>

                {/* Pasos */}
                <div className="space-y-12">
                  <div className="relative flex items-start">
                    <div className="absolute left-0 rounded-full bg-primary/20 p-2.5 text-primary">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        1
                      </span>
                    </div>
                    <div className="ml-20">
                      <h3 className="text-xl font-semibold">
                        Análisis y planificación
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Evaluamos tu modelo de negocio, volumen de transacciones
                        y requisitos específicos para seleccionar la mejor
                        pasarela y definir la estrategia de implementación.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 rounded-full bg-primary/20 p-2.5 text-primary">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        2
                      </span>
                    </div>
                    <div className="ml-20">
                      <h3 className="text-xl font-semibold">
                        Configuración de cuenta y credenciales
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Te ayudo con la creación y configuración de cuentas en
                        las pasarelas seleccionadas, obteniendo las credenciales
                        necesarias para ambientes de prueba y producción.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 rounded-full bg-primary/20 p-2.5 text-primary">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        3
                      </span>
                    </div>
                    <div className="ml-20">
                      <h3 className="text-xl font-semibold">
                        Implementación técnica
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Desarrollo e integración de la pasarela en tu
                        plataforma, implementando todas las funcionalidades
                        requeridas como pagos únicos, suscripciones o pagos
                        recurrentes.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 rounded-full bg-primary/20 p-2.5 text-primary">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        4
                      </span>
                    </div>
                    <div className="ml-20">
                      <h3 className="text-xl font-semibold">
                        Pruebas exhaustivas
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Realizo pruebas completas en ambiente de testing,
                        verificando todos los escenarios posibles: pagos
                        exitosos, rechazos, expiración de sesiones, etc.
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="absolute left-0 rounded-full bg-primary/20 p-2.5 text-primary">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        5
                      </span>
                    </div>
                    <div className="ml-20">
                      <h3 className="text-xl font-semibold">
                        Puesta en producción y monitoreo
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Migración al ambiente de producción, configuración de
                        webhooks y sistemas de notificación, e implementación de
                        herramientas de monitoreo para el seguimiento de
                        transacciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Listo para implementar un sistema de pagos robusto?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contáctame para discutir cómo puedo ayudarte a implementar la
              mejor solución de pago para tu negocio.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
