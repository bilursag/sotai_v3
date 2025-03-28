/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="type" className="block text-sm font-medium mb-1">
          Tipo de mensaje
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          required
        >
          <option value="general">Consulta general</option>
          <option value="project">Cotización de proyecto</option>
          <option value="support">Soporte técnico</option>
          <option value="partnership">Colaboración/Alianza</option>
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nombre completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="tu@ejemplo.com"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Asunto de tu mensaje"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Describe tu proyecto o pregunta"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Enviando...
          </span>
        ) : (
          <span className="flex items-center">
            Enviar mensaje
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </button>

      {submitStatus === "success" && (
        <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4 text-sm text-green-800 dark:text-green-400">
          ¡Mensaje enviado con éxito! Te responderé a la brevedad.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-800 dark:text-red-400">
          Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-4">
        Al enviar este formulario, aceptas nuestra{" "}
        <a href="/privacidad" className="text-primary hover:underline">
          política de privacidad
        </a>{" "}
        y el procesamiento de tus datos personales.
      </p>
    </form>
  );
}
