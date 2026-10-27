"use server";

import { Resend } from "resend";

/**
 * Resend testing sender can only deliver to the account address.
 * Gmail plus-address lands in tomasg27@gmail.com. Swap once a domain is verified.
 */
const CONTACT_TO = "tomasg27+aireformas@gmail.com";
const CONTACT_FROM = "aireformas <onboarding@resend.dev>";

export type ContactFormState = {
  status: "idle" | "ok" | "error";
  revision: number;
  nombre: string;
  telefono: string;
  mensaje: string;
};

function readField(formData: FormData, name: string, max: number): string {
  const value = formData.get(name);
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);
}

export async function sendContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = readField(formData, "nombre", 120);
  const telefono = readField(formData, "telefono", 40);
  const mensaje = readField(formData, "mensaje", 4000);

  const fields = { nombre, telefono, mensaje, revision: _prev.revision + 1 };

  if (!nombre || !telefono || !mensaje) {
    return { status: "error", ...fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "error", ...fields };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    subject: `Consulta web — ${nombre}`,
    text: [`Nombre: ${nombre}`, `Teléfono: ${telefono}`, "", mensaje].join("\n"),
  });

  if (error) {
    console.error("contact form send failed", error.name, error.message);
    return { status: "error", ...fields };
  }

  return { status: "ok", revision: fields.revision, nombre: "", telefono: "", mensaje: "" };
}
