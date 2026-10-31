"use client";

import { useActionState, useId, useState } from "react";
import { sendContact, type ContactFormState } from "@/app/contacto/actions";
import { useLocale } from "@/components/locale/LocaleProvider";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { chrome } from "@/content/chrome";
import { site } from "@/content/site";
import type { ContactService } from "@/lib/contact-inquiry";

type ContactFormProps = {
  variant?: "default" | "landing";
  service?: ContactService;
};

const initialState: ContactFormState = {
  status: "idle",
  revision: 0,
  nombre: "",
  telefono: "",
  email: "",
  servicio: "",
  espacio: "",
  zona: "",
  plazo: "",
  mensaje: "",
};

function parseSelected(servicio: string, fallback?: ContactService): ContactService[] {
  const fromState = servicio
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean) as ContactService[];
  if (fromState.length > 0) return fromState;
  return fallback ? [fallback] : [];
}

export function ContactForm({ variant = "default", service }: ContactFormProps) {
  const form = chrome[useLocale()].form;
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const fieldId = useId();
  const isLanding = variant === "landing";
  const [selected, setSelected] = useState<ContactService[]>(() =>
    parseSelected(state.servicio, service),
  );

  if (state.status === "ok") {
    return <ContactReceived state={state} />;
  }

  const fieldClassName = isLanding
    ? "w-full rounded-md border border-outline/30 bg-cream-base px-3 py-2 text-body-sm text-ink-primary outline-none transition-colors focus:border-slate-deep"
    : "w-full rounded-md border border-outline/30 bg-paper px-3 py-2 text-body-sm text-ink-primary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15";

  const labelClassName = "mb-1 block text-label-uppercase text-warm-label";
  const selectClassName = `${fieldClassName} cursor-pointer appearance-none bg-none pr-10`;

  function toggleService(id: ContactService) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  return (
    <form key={state.revision} action={formAction} className="space-y-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-body-md font-medium text-ink-primary">{form.title}</h3>
        <p className="text-body-sm text-warm-label">{form.response}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor={`${fieldId}-nombre`}>
            {form.name}
            <RequiredMark />
          </label>
          <input
            id={`${fieldId}-nombre`}
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
          <label className={labelClassName} htmlFor={`${fieldId}-telefono`}>
            {form.phone}
            <RequiredMark />
          </label>
          <input
            id={`${fieldId}-telefono`}
            type="tel"
            name="telefono"
            required
            defaultValue={state.telefono}
            autoComplete="tel"
            placeholder="+34"
            className={fieldClassName}
          />
        </div>
      </div>

      <fieldset>
        <legend className={labelClassName}>
          {form.service}
          <RequiredMark />
        </legend>
        <p className="mb-2 text-body-sm text-warm-label">{form.serviceHint}</p>
        <div className="flex flex-wrap gap-1.5">
          {form.services.map((option) => {
            const checked = selected.includes(option.id as ContactService);
            return (
              <label key={option.id} className="cursor-pointer">
                <input
                  type="checkbox"
                  name="servicio"
                  value={option.id}
                  checked={checked}
                  onChange={() => toggleService(option.id as ContactService)}
                  className="peer sr-only"
                />
                <span className="inline-block rounded-full border border-outline/30 px-3 py-1 text-body-sm text-ink-primary transition-colors peer-checked:border-slate-deep peer-checked:bg-slate-deep peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-slate-accent/40">
                  {option.label}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor={`${fieldId}-espacio`}>
            {form.space}
            <RequiredMark />
          </label>
          <div className="relative">
            <select
              id={`${fieldId}-espacio`}
              name="espacio"
              required
              defaultValue={state.espacio}
              className={selectClassName}
            >
              <option value="" disabled>
                {form.spacePlaceholder}
              </option>
              {form.spaces.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
        </div>
        <div>
          <label className={labelClassName} htmlFor={`${fieldId}-plazo`}>
            {form.timing}
            <RequiredMark />
          </label>
          <div className="relative">
            <select
              id={`${fieldId}-plazo`}
              name="plazo"
              required
              defaultValue={state.plazo}
              className={selectClassName}
            >
              <option value="" disabled>
                {form.timingPlaceholder}
              </option>
              {form.timings.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <SelectChevron />
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={labelClassName} htmlFor={`${fieldId}-zona`}>
            {form.area}
          </label>
          <input
            id={`${fieldId}-zona`}
            type="text"
            name="zona"
            defaultValue={state.zona}
            placeholder={form.areaPlaceholder}
            className={fieldClassName}
          />
        </div>
        <div>
          <label className={labelClassName} htmlFor={`${fieldId}-email`}>
            {form.email}
          </label>
          <input
            id={`${fieldId}-email`}
            type="email"
            name="email"
            defaultValue={state.email}
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className={fieldClassName}
          />
        </div>
      </div>

      <div>
        <label className={labelClassName} htmlFor={`${fieldId}-mensaje`}>
          {form.message}
          <RequiredMark />
        </label>
        <textarea
          id={`${fieldId}-mensaje`}
          name="mensaje"
          required
          defaultValue={state.mensaje}
          rows={3}
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
        disabled={pending || selected.length === 0}
        className={
          isLanding
            ? "w-full rounded-full bg-slate-deep py-2.5 text-label-uppercase text-white transition-colors hover:bg-ink-primary disabled:opacity-60"
            : "w-full rounded-full bg-slate-accent py-2.5 text-label-uppercase text-white transition-colors hover:bg-slate-deep disabled:opacity-60"
        }
      >
        {pending ? form.sending : form.submit}
      </button>
    </form>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-slate-deep">
      {" *"}
    </span>
  );
}

function SelectChevron() {
  return (
    <MaterialIcon
      name="expand_more"
      className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[20px] leading-none text-warm-label"
    />
  );
}

function optionLabels(
  options: readonly { id: string; label: string }[],
  ids: string,
): string {
  return ids
    .split(",")
    .map((id) => options.find((option) => option.id === id.trim())?.label)
    .filter(Boolean)
    .join(", ");
}

function ContactReceived({ state }: { state: ContactFormState }) {
  const form = chrome[useLocale()].form;
  const firstName = state.nombre.trim().split(/\s+/)[0] ?? "";
  const rows = [
    { label: form.service, value: optionLabels(form.services, state.servicio) },
    {
      label: form.space,
      value: form.spaces.find((option) => option.id === state.espacio)?.label ?? "",
    },
    {
      label: form.timing,
      value: form.timings.find((option) => option.id === state.plazo)?.label ?? "",
    },
    { label: form.area, value: state.zona },
    { label: form.phone, value: state.telefono },
    { label: form.email, value: state.email },
  ].filter((row) => row.value);

  return (
    <div role="status" className="rounded-editorial border border-outline/15 bg-cream-base px-4 py-4">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-deep text-white">
          <MaterialIcon name="check" className="text-[20px]" />
        </span>
        <div className="min-w-0">
          <p className="text-label-uppercase text-warm-label">{form.thanksLabel}</p>
          <p className="mt-1 text-body-md font-medium text-ink-primary">
            {form.thanksName.replace("{name}", firstName)}
          </p>
          <p className="mt-1 text-body-sm text-on-surface-variant">{form.thanks}</p>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-outline/15 pt-3">
        {rows.map((row) => (
          <div key={row.label} className="min-w-0">
            <dt className="text-label-uppercase text-warm-label">{row.label}</dt>
            <dd className="truncate text-body-sm text-ink-primary">{row.value}</dd>
          </div>
        ))}
      </dl>

      {state.mensaje ? (
        <p className="mt-3 line-clamp-2 border-t border-outline/15 pt-3 text-body-sm text-on-surface-variant">
          {state.mensaje}
        </p>
      ) : null}

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-body-sm text-slate-deep underline-offset-4 hover:underline"
      >
        <WhatsAppIcon className="h-4 w-4" />
        {form.thanksWhatsapp}
      </a>
    </div>
  );
}
