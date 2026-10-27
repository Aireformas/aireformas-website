type ContactEmailInput = {
  nombre: string;
  telefono: string;
  email: string;
  zona: string;
  mensaje: string;
  servicio: string;
  espacio: string;
  plazo: string;
};

const ink = "#2E2A26";
const warm = "#87786A";
const slate = "#3F5D73";
const cream = "#F4F1EC";
const sand = "#E8E2D9";
const font = "Avenir Next, Segoe UI, Helvetica, Arial, sans-serif";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function phoneDigits(value: string): string {
  const digits = value.replace(/[^\d+]/g, "");
  return digits.startsWith("+") ? digits : digits.replace(/\D/g, "");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${sand};font-family:${font};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${warm};width:108px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid ${sand};font-family:${font};font-size:15px;line-height:1.4;color:${ink};vertical-align:top;">${value}</td>
  </tr>`;
}

function button(href: string, label: string, filled: boolean): string {
  const background = filled ? slate : cream;
  const color = filled ? "#ffffff" : slate;
  return `<a href="${escapeHtml(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:10px 18px;border-radius:999px;background:${background};color:${color};font-family:${font};font-size:12px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">${escapeHtml(label)}</a>`;
}

export function contactEmailText(input: ContactEmailInput): string {
  return [
    "Nueva consulta — aireformas",
    "",
    input.nombre,
    `${input.servicio} · ${input.espacio} · ${input.plazo}`,
    "",
    `Teléfono: ${input.telefono}`,
    `Email: ${input.email || "—"}`,
    `Zona: ${input.zona || "—"}`,
    "",
    input.mensaje,
  ].join("\n");
}

export function contactEmailHtml(input: ContactEmailInput): string {
  const nombre = escapeHtml(input.nombre);
  const tel = phoneDigits(input.telefono);
  const telHref = tel.startsWith("+") ? `tel:${tel}` : `tel:+${tel.replace(/\D/g, "")}`;
  const waDigits = tel.replace(/\D/g, "");
  const actions = [
    button(telHref, "Llamar", true),
    waDigits ? button(`https://wa.me/${waDigits}`, "WhatsApp", false) : "",
    input.email ? button(`mailto:${input.email}`, "Responder", false) : "",
  ].join("");

  return `<!DOCTYPE html>
<html lang="es">
  <body style="margin:0;padding:0;background:${cream};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${cream};">
      <tr>
        <td align="center" style="padding:28px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;">
            <tr>
              <td style="background:${slate};padding:22px 28px;border-radius:12px 12px 0 0;">
                <p style="margin:0;font-family:${font};font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#C6E7FF;">Nueva consulta</p>
                <p style="margin:8px 0 0;font-family:${font};font-size:22px;font-weight:400;line-height:1.2;color:#ffffff;">aireformas</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0;font-family:${font};font-size:24px;font-weight:400;line-height:1.25;color:${ink};">${nombre}</p>
                <p style="margin:10px 0 0;font-family:${font};font-size:13px;line-height:1.4;color:${slate};">${escapeHtml(input.servicio)} · ${escapeHtml(input.espacio)} · ${escapeHtml(input.plazo)}</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:18px;">
                  ${row("Teléfono", `<a href="${escapeHtml(telHref)}" style="color:${ink};text-decoration:none;">${escapeHtml(input.telefono)}</a>`)}
                  ${row("Email", input.email ? `<a href="mailto:${escapeHtml(input.email)}" style="color:${ink};text-decoration:none;">${escapeHtml(input.email)}</a>` : "—")}
                  ${row("Zona", escapeHtml(input.zona || "—"))}
                </table>
                <p style="margin:22px 0 8px;font-family:${font};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:${warm};">Mensaje</p>
                <p style="margin:0;padding:14px 16px;background:${cream};border-radius:10px;font-family:${font};font-size:15px;line-height:1.55;color:${ink};">${escapeHtml(input.mensaje).replace(/\n/g, "<br>")}</p>
                <p style="margin:22px 0 0;">${actions}</p>
              </td>
            </tr>
          </table>
          <p style="margin:14px 0 0;font-family:${font};font-size:12px;line-height:1.4;color:${warm};">Enviado desde el formulario de aireformas.com</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
