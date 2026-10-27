"use server";

import { Resend } from "resend";
import {
  inquiryLabels,
  isContactService,
  isContactSpace,
  isContactTiming,
} from "@/lib/contact-inquiry";

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
  email: string;
  servicio: string;
  espacio: string;
  zona: string;
  plazo: string;
  mensaje: string;
};

function readField(formData: FormData, name: string, max: number): string {
  const value = formData.get(name);
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = readField(formData, "nombre", 120);
  const telefono = readField(formData, "telefono", 40);
  const email = readField(formData, "email", 120);
  const servicio = readField(formData, "servicio", 40);
  const espacio = readField(formData, "espacio", 40);
  const zona = readField(formData, "zona", 80);
  const plazo = readField(formData, "plazo", 40);
  const mensaje = readField(formData, "mensaje", 4000);

  const fields = {
    nombre,
    telefono,
    email,
    servicio,
    espacio,
    zona,
    plazo,
    mensaje,
    revision: _prev.revision + 1,
  };

  const inquiryOk =
    isContactService(servicio) && isContactSpace(espacio) && isContactTiming(plazo);
  const emailOk = email === "" || isEmail(email);

  if (!nombre || !telefono || !mensaje || !inquiryOk || !emailOk) {
    return { status: "error", ...fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact form: RESEND_API_KEY is not set");
    return { status: "error", ...fields };
  }

  const labels = inquiryLabels({ servicio, espacio, plazo });
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email || undefined,
    subject: `Consulta web — ${labels.servicio} — ${nombre}`,
    text: [
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Email: ${email || "—"}`,
      `Servicio: ${labels.servicio}`,
      `Espacio: ${labels.espacio}`,
      `Zona: ${zona || "—"}`,
      `Plazo: ${labels.plazo}`,
      "",
      mensaje,
    ].join("\n"),
  });

  if (error) {
    console.error("contact form send failed", error.name, error.message);
    return { status: "error", ...fields };
  }

  return { status: "ok", ...fields };
}
