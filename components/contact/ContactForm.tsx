"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-[var(--radius-card)] border border-ink/8 bg-paper p-6 text-sm text-ink/75">
        Gracias por tu mensaje. Te contactaremos pronto.
      </p>
    );
  }

  const fieldClassName =
    "rounded-[var(--radius-image)] border border-ink/15 bg-paper-warm/80 px-4 py-3.5 text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-ink/35 focus:border-accent focus:bg-paper focus:ring-2 focus:ring-accent/15";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="border-b border-ink/8 pb-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
          Formulario
        </p>
        <h3 className="heading-editorial mt-3 text-2xl tracking-[0.1em] md:text-3xl">
          Cuéntanos tu proyecto
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">
          Respuesta en 1–2 días laborables.
        </p>
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          Nombre
        </span>
        <input
          type="text"
          name="nombre"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          className={fieldClassName}
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          Teléfono
        </span>
        <input
          type="tel"
          name="telefono"
          required
          autoComplete="tel"
          placeholder="+34 …"
          className={fieldClassName}
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
          Mensaje
        </span>
        <textarea
          name="mensaje"
          required
          rows={5}
          placeholder="Vivienda, plazos y qué te gustaría lograr"
          className={`${fieldClassName} min-h-[8.5rem]`}
        />
      </label>
      <Button type="submit" variant="accent" className="mt-1 w-full px-8 py-4">
        Enviar solicitud
      </Button>
    </form>
  );
}
