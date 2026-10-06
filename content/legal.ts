import { site } from "@/content/site";

const contactEmail = site.email;

export const privacyPageMeta = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de datos personales en aireformas.",
} as const;

export const privacyPage = {
  label: "Legal",
  title: "Política de privacidad",
  intro: `En aireformas respetamos tu privacidad. Esta política describe qué datos recogemos, para qué los usamos y cuáles son tus derechos según el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). Responsable del tratamiento: aireformas. Contacto: ${contactEmail}.`,
  sections: [
    {
      heading: "Datos que tratamos",
      body: `Podemos tratar: nombre y apellidos, teléfono, correo electrónico, dirección o zona de la vivienda, descripción del proyecto y cualquier información que nos facilites por formulario web, correo, teléfono o WhatsApp. Al navegar, solo tratamos datos técnicos opcionales si aceptas cookies de análisis (ver política de cookies).`,
    },
    {
      heading: "Finalidad y base legal",
      body: `Atender consultas, elaborar presupuestos, gestionar la relación precontractual y contractual de reformas, armarios e interiorismo (art. 6.1.b RGPD). Enviar comunicaciones comerciales solo si nos has dado consentimiento expreso o existe relación previa conforme a la normativa (art. 6.1.a y normativa de servicios de la sociedad de la información). Cumplir obligaciones legales (art. 6.1.c). Mejorar el sitio web mediante analítica agregada, solo con tu consentimiento de cookies (art. 6.1.a).`,
    },
    {
      heading: "Conservación",
      body: `Conservamos los datos mientras mantengamos la relación comercial o sea necesario para la finalidad indicada. Tras su cierre, los bloquearemos durante los plazos legales de prescripción y responsabilidad (habitualmente hasta 6 años en materia contractual y fiscal, según el caso).`,
    },
    {
      heading: "Destinatarios y transferencias",
      body: `No vendemos ni cedemos tus datos con fines comerciales a terceros. Podemos compartirlos con proveedores que nos prestan servicios (hosting, correo, herramientas de gestión) bajo contrato de encargo de tratamiento y solo con instrucciones documentadas. Si algún proveedor está fuera del Espacio Económico Europeo, exigiremos garantías adecuadas (cláusulas tipo u otras medidas aprobadas).`,
    },
    {
      heading: "Tus derechos",
      body: `Puedes ejercer acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a ${contactEmail}, acreditando tu identidad. Tienes derecho a retirar el consentimiento en cualquier momento sin afectar a la licitud del tratamiento previo. Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
    },
    {
      heading: "Menores",
      body: `Nuestros servicios están dirigidos a mayores de edad. No recogemos intencionadamente datos de menores de 14 años. Si detectamos ese supuesto, procederemos a su eliminación.`,
    },
    {
      heading: "Seguridad",
      body: `Aplicamos medidas técnicas y organizativas razonables para proteger la confidencialidad e integridad de los datos. Ningún sistema en Internet es totalmente infalible; te recomendamos no enviar información especialmente sensible por canales no cifrados si no es necesario.`,
    },
    {
      heading: "Cookies",
      body: `El uso de cookies y tecnologías similares se detalla en nuestra política de cookies. Puedes gestionar tu consentimiento desde el aviso del sitio o el enlace «Configurar cookies» del pie de página.`,
    },
    {
      heading: "Cambios",
      body: `Podemos actualizar esta política para reflejar cambios legales o de nuestros servicios. Publicaremos la versión vigente en esta URL con la fecha de revisión que corresponda.`,
    },
  ],
} as const;

export const termsPageMeta = {
  title: "Términos y condiciones",
  description: "Condiciones de uso del sitio web y contratación de servicios de aireformas.",
} as const;

export const termsPage = {
  label: "Legal",
  title: "Términos y condiciones",
  intro: `Estos términos regulan el acceso y uso del sitio web de aireformas (${site.url.replace(/^https?:\/\//, "")}) y el marco general de contratación de nuestros servicios de reformas, armarios a medida e interiorismo. Al usar el sitio, aceptas estas condiciones. Si no estás de acuerdo, no utilices la web.`,
  sections: [
    {
      heading: "Identificación",
      body: `Titular del sitio: aireformas. Ámbito de actuación: ${site.address}. Contacto: ${contactEmail}, ${site.phone}.`,
    },
    {
      heading: "Objeto del sitio",
      body: `La web tiene carácter informativo y comercial: presenta servicios, proyectos y canales de contacto. Los contenidos (textos, imágenes, diseños) son propiedad de aireformas o se usan con licencia. Queda prohibida su reproducción o explotación sin autorización escrita, salvo uso privado no comercial.`,
    },
    {
      heading: "Uso permitido",
      body: `Te comprometes a usar el sitio de forma lícita, sin intentar dañar, sobrecargar o acceder sin autorización a sistemas o datos. No está permitido el uso automatizado abusivo (scraping masivo, bots maliciosos) ni suplantar la identidad de terceros en formularios o comunicaciones.`,
    },
    {
      heading: "Presupuestos y contratación",
      body: `Las solicitudes de presupuesto o información no vinculan a aireformas hasta la firma de un presupuesto o contrato específico. Los plazos, precios, materiales y alcance se detallarán por escrito en cada propuesta. Las imágenes del sitio pueden ser orientativas o de proyectos reales; el resultado final depende del proyecto acordado.`,
    },
    {
      heading: "Pagos y garantías",
      body: `Las condiciones económicas, calendario de pagos, garantías legales y postventa se establecerán en el contrato o presupuesto aceptado, con sujeción a la normativa de consumo y contratación que resulte aplicable según seas consumidor o profesional.`,
    },
    {
      heading: "Enlaces a terceros",
      body: `El sitio puede enlazar a webs externas (por ejemplo, WhatsApp o mapas). No controlamos su contenido ni políticas; el acceso es bajo tu responsabilidad.`,
    },
    {
      heading: "Limitación de responsabilidad",
      body: `Procuramos que la información del sitio sea exacta y esté actualizada, pero puede contener errores u omisiones. aireformas no garantiza la disponibilidad ininterrumpida del sitio. En la medida permitida por la ley, no respondemos por daños indirectos derivados del uso de la web salvo dolo o negligencia grave. Nada de lo aquí expuesto limita derechos irrenunciables de consumidores.`,
    },
    {
      heading: "Propiedad intelectual",
      body: `La marca aireformas, logotipos, textos y diseño del sitio están protegidos. Cualquier uso no autorizado puede constituir infracción de derechos de propiedad intelectual o industrial.`,
    },
    {
      heading: "Protección de datos",
      body: `El tratamiento de datos personales se rige por nuestra política de privacidad. El uso de cookies se rige por la política de cookies.`,
    },
    {
      heading: "Legislación y jurisdicción",
      body: `Estas condiciones se interpretan según la legislación española. Para consumidores, serán competentes los juzgados del domicilio del consumidor cuando la ley lo establezca; en otros supuestos, los tribunales de Madrid, salvo norma imperativa en contrario.`,
    },
    {
      heading: "Modificaciones",
      body: `Podemos modificar estos términos. La versión publicada en el sitio en el momento de tu acceso será la aplicable. Te recomendamos revisarla periódicamente.`,
    },
  ],
} as const;
