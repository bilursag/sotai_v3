import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">組態 Sotai</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones de desarrollo personalizadas para sus negocios
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span>Valdivia, Chile</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a href="mailto:contacto@sotai-dev.com" className="hover:underline">
                  contacto@sotai-dev.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span>+56 9 8762 3350</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:ml-auto md:text-right">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Backend & API
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Consultoría Técnica
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Desarrollo Mobile
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Pasarelas de Pago
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline mt-6 inline-block font-medium text-primary">
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} Sotai. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}