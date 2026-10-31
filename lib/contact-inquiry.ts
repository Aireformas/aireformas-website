export const contactServices = [
  "interiorismo",
  "reforma",
  "armarios",
  "cocinas",
  "mobiliario",
  "clima",
  "integral",
] as const;

export const contactSpaces = ["piso", "casa", "oficina", "otro"] as const;

export const contactTimings = ["pronto", "trimestre", "anio", "sin-fecha"] as const;

export type ContactService = (typeof contactServices)[number];
export type ContactSpace = (typeof contactSpaces)[number];
export type ContactTiming = (typeof contactTimings)[number];

const serviceLabel: Record<ContactService, string> = {
  interiorismo: "Interiorismo",
  reforma: "Reforma",
  armarios: "Armarios",
  cocinas: "Cocinas",
  mobiliario: "Mobiliario",
  clima: "Climatización",
  integral: "Proyecto completo",
};

const spaceLabel: Record<ContactSpace, string> = {
  piso: "Piso",
  casa: "Casa",
  oficina: "Oficina o local",
  otro: "Otro",
};

const timingLabel: Record<ContactTiming, string> = {
  pronto: "Cuanto antes",
  trimestre: "En 1–3 meses",
  anio: "Este año",
  "sin-fecha": "Sin fecha",
};

function isListed<T extends string>(list: readonly T[], value: string): value is T {
  return list.some((item) => item === value);
}

export function isContactService(value: string): value is ContactService {
  return isListed(contactServices, value);
}

export function isContactSpace(value: string): value is ContactSpace {
  return isListed(contactSpaces, value);
}

export function isContactTiming(value: string): value is ContactTiming {
  return isListed(contactTimings, value);
}

export function parseContactServices(raw: FormDataEntryValue[]): ContactService[] {
  const seen = new Set<ContactService>();
  for (const entry of raw) {
    if (typeof entry !== "string") continue;
    if (!isContactService(entry)) continue;
    seen.add(entry);
    if (seen.size >= 6) break;
  }
  return [...seen];
}

export function inquiryLabels(fields: {
  servicios: readonly ContactService[];
  espacio: ContactSpace;
  plazo: ContactTiming;
}) {
  return {
    servicio: fields.servicios.map((id) => serviceLabel[id]).join(", "),
    espacio: spaceLabel[fields.espacio],
    plazo: timingLabel[fields.plazo],
  };
}
