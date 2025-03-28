import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: {
    title: string;
    href: string;
  }[];
}

export function PageHeader({
  title,
  description,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex mb-4 text-sm text-muted-foreground">
            <ol className="flex items-center flex-wrap">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center hover:text-foreground transition-colors"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Inicio</span>
                </Link>
                <ChevronRight className="mx-1 h-4 w-4" />
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index < breadcrumbs.length - 1 ? (
                    <>
                      <Link
                        href={crumb.href}
                        className="hover:text-foreground transition-colors"
                      >
                        {crumb.title}
                      </Link>
                      <ChevronRight className="mx-1 h-4 w-4" />
                    </>
                  ) : (
                    <span className="text-foreground font-medium">
                      {crumb.title}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Page Title */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>

        {/* Optional Description */}
        {description && (
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
