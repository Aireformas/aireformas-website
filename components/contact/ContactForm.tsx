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

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink/80">Nombre</span>
        <input
          type="text"
          name="nombre"
          required
          autoComplete="name"
          className="rounded-[var(--radius-image)] border border-ink/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-2"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink/80">Teléfono</span>
        <input
          type="tel"
          name="telefono"
          required
          autoComplete="tel"
          className="rounded-[var(--radius-image)] border border-ink/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-2"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink/80">Mensaje</span>
        <textarea
          name="mensaje"
          required
          rows={4}
          className="resize-y rounded-[var(--radius-image)] border border-ink/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-2"
        />
      </label>
      <Button type="submit" className="mt-2 w-full sm:w-auto">
        Enviar solicitud
      </Button>
    </form>
  );
}
