"use client";

import { Shield } from "lucide-react";

export function RecaptchaBadge() {
  return (
    <div className="flex items-center text-xs text-muted-foreground mt-2">
      <Shield className="h-3 w-3 mr-1" />
      <span>
        Protegido por reCAPTCHA -
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 hover:text-foreground"
        >
          Privacidad
        </a>
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="underline ml-1 hover:text-foreground"
        >
          Términos
        </a>
      </span>
    </div>
  );
}