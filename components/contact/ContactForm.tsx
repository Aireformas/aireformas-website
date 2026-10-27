"use client";

import { useActionState } from "react";
import { sendContact, type ContactFormState } from "@/app/contacto/actions";
import { useLocale } from "@/components/locale/LocaleProvider";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { chrome } from "@/content/chrome";
import { site } from "@/content/site";

type ContactFormProps = {
  variant?: "default" | "landing";
};

const initialState: ContactFormState = {
  status: "idle",
  revision: 0,
  nombre: "",
  telefono: "",
  mensaje: "",
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const form = chrome[useLocale()].form;
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const isLanding = variant === "landing";

  if (state.status === "ok") {
    return (
      <p className="rounded-editorial border border-outline/15 bg-cream-base p-6 text-body-sm text-on-surface-variant">
        {form.thanks}
      </p>
    );
  }

  const fieldClassName = isLanding
    ? "w-full rounded-lg border border-outline/30 bg-cream-base px-4 py-3.5 text-ink-primary text-body-md transition-colors focus:border-slate-deep focus:outline-none focus:ring-0"
    : "w-full rounded-lg border border-outline/30 bg-paper px-4 py-3.5 text-ink-primary outline-none transition-[border-color] focus:border-accent focus:ring-2 focus:ring-accent/15";

  const labelClassName = isLanding
    ? "mb-2 block text-label-uppercase text-warm-label uppercase"
    : "mb-2 block text-label-uppercase text-warm-label";

  return (
    <form key={state.revision} action={formAction} className="space-y-6">
      {isLanding ? (
        <div className="mb-8">
          <h3 className="text-headline-md mb-1 font-light text-ink-primary">
            {form.title}
          </h3>
          <p className="text-body-sm font-light text-warm-label">
            {form.response}
          </p>
        </div>
      ) : (
        <div className="mb-6 border-b border-outline/15 pb-5">
          <h3 className="text-headline-sm text-ink-primary">{form.title}</h3>
          <p className="mt-2 text-body-sm text-on-surface-variant">
            {form.response}
          </p>
        </div>
      )}

      <div>
        <label className={labelClassName} htmlFor="nombre">
          {form.name}
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          required
          defaultValue={state.nombre}
          autoComplete="name"
          placeholder={form.namePlaceholder}
          className={fieldClassName}
        />
      </div>

      <div>
        <label className={labelClassName} htmlFor="telefono">
          {form.phone}
        </label>
        <input
          id="telefono"
          type="tel"
          name="telefono"
          required
          defaultValue={state.telefono}
          autoComplete="tel"
          placeholder="+34"
          className={fieldClassName}
        />
      </div>

      <div>
        <label className={labelClassName} htmlFor="mensaje">
          {form.message}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          defaultValue={state.mensaje}
          rows={4}
          placeholder={form.messagePlaceholder}
          className={fieldClassName}
        />
      </div>

      {state.status === "error" ? (
        <p role="alert" className="text-body-sm text-ink-primary">
          {form.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={
          isLanding
            ? "w-full rounded-full bg-slate-deep py-4 text-label-uppercase text-white shadow-md transition-colors hover:bg-ink-primary disabled:opacity-60"
            : "w-full rounded-full bg-slate-accent py-3.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep disabled:opacity-60"
        }
      >
        {pending ? form.sending : form.submit}
      </button>

      {isLanding ? (
        <div className="border-t border-outline/15 pt-6">
          <p className="mb-3 text-center text-body-sm font-light text-warm-label">
            {form.orWhatsapp}
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#25D366]/35 bg-[#25D366]/10 py-3.5 text-label-uppercase text-ink-primary transition-colors hover:bg-[#25D366]/15"
          >
            <WhatsAppIcon branded className="h-5 w-5" />
            {site.phone}
          </a>
        </div>
      ) : null}
    </form>
  );
}
