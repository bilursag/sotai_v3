import Link from "next/link";
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Columna 1: Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">DevStudio</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones de desarrollo personalizadas para tu negocio
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span>Ciudad, País</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a href="mailto:contacto@tudominio.com" className="hover:underline">
                  contacto@tudominio.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Columna 2: Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/servicios/web" className="hover:underline">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/servicios/backend" className="hover:underline">
                  Backend & API
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria" className="hover:underline">
                  Consultoría Técnica
                </Link>
              </li>
              <li>
                <Link href="/servicios/mobile" className="hover:underline">
                  Desarrollo Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recursos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:underline">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="hover:underline">
                  Recursos gratuitos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacidad" className="hover:underline">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:underline">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Política de Cookies
                </Link>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="mt-6">
              <h4 className="text-sm font-medium">Síguenos</h4>
              <div className="mt-2 flex space-x-3">
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} DevStudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}