export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aireformas.com",
  name: "aireformas",
  logo: {
    src: "/logo-airereformas-transparent.png",
    alt: "aireformas",
    width: 1024,
    height: 411,
    isotipo: {
      src: "/logo-isotipo@2x.png",
      width: 400,
      height: 404,
    },
    color: {
      src: "/logo-color.png",
      width: 464,
      height: 187,
    },
  },
  tagline: "Reformas, armarios a medida e interiorismo",
  phone: "+34 675 784 752",
  phoneHref: "tel:+34675784752",
  email: "info@aireformas.com",
  emailHref: "mailto:info@aireformas.com",
  whatsapp: "https://wa.me/34675784752",
  address: "Madrid y alrededores",
  copyright: `© ${new Date().getFullYear()} aireformas. Todos los derechos reservados.`,
} as const;
