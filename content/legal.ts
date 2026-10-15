import { site } from "@/content/site";
import { defineCopy } from "@/lib/i18n";

const contactEmail = site.email;
const host = site.url.replace(/^https?:\/\//, "");

export const legalCopy = defineCopy({
  es: {
    privacy: {
      meta: {
        title: "Política de privacidad",
        description: "Información sobre el tratamiento de datos personales en aireformas.",
      },
      page: {
        label: "Legal",
        title: "Política de privacidad",
        intro: `En aireformas respetamos tu privacidad. Esta política describe qué datos recogemos, para qué los usamos y cuáles son tus derechos según el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD). Responsable del tratamiento: aireformas. Contacto: ${contactEmail}.`,
        sections: [
          { heading: "Datos que tratamos", body: "Podemos tratar: nombre y apellidos, teléfono, correo electrónico, dirección o zona de la vivienda, descripción del proyecto y cualquier información que nos facilites por formulario web, correo, teléfono o WhatsApp. Al navegar, solo tratamos datos técnicos opcionales si aceptas cookies de análisis (ver política de cookies)." },
          { heading: "Finalidad y base legal", body: "Atender consultas, elaborar presupuestos, gestionar la relación precontractual y contractual de reformas, armarios e interiorismo (art. 6.1.b RGPD). Enviar comunicaciones comerciales solo si nos has dado consentimiento expreso o existe relación previa conforme a la normativa (art. 6.1.a y normativa de servicios de la sociedad de la información). Cumplir obligaciones legales (art. 6.1.c). Mejorar el sitio web mediante analítica agregada, solo con tu consentimiento de cookies (art. 6.1.a)." },
          { heading: "Conservación", body: "Conservamos los datos mientras mantengamos la relación comercial o sea necesario para la finalidad indicada. Tras su cierre, los bloquearemos durante los plazos legales de prescripción y responsabilidad (habitualmente hasta 6 años en materia contractual y fiscal, según el caso)." },
          { heading: "Destinatarios y transferencias", body: "No vendemos ni cedemos tus datos con fines comerciales a terceros. Podemos compartirlos con proveedores que nos prestan servicios (hosting, correo, herramientas de gestión) bajo contrato de encargo de tratamiento y solo con instrucciones documentadas. Si algún proveedor está fuera del Espacio Económico Europeo, exigiremos garantías adecuadas (cláusulas tipo u otras medidas aprobadas)." },
          { heading: "Tus derechos", body: `Puedes ejercer acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a ${contactEmail}, acreditando tu identidad. Tienes derecho a retirar el consentimiento en cualquier momento sin afectar a la licitud del tratamiento previo. Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).` },
          { heading: "Menores", body: "Nuestros servicios están dirigidos a mayores de edad. No recogemos intencionadamente datos de menores de 14 años. Si detectamos ese supuesto, procederemos a su eliminación." },
          { heading: "Seguridad", body: "Aplicamos medidas técnicas y organizativas razonables para proteger la confidencialidad e integridad de los datos. Ningún sistema en Internet es totalmente infalible; te recomendamos no enviar información especialmente sensible por canales no cifrados si no es necesario." },
          { heading: "Cookies", body: "El uso de cookies y tecnologías similares se detalla en nuestra política de cookies. Puedes gestionar tu consentimiento desde el aviso del sitio o el enlace «Configurar cookies» del pie de página." },
          { heading: "Cambios", body: "Podemos actualizar esta política para reflejar cambios legales o de nuestros servicios. Publicaremos la versión vigente en esta URL con la fecha de revisión que corresponda." },
        ],
      },
    },
    terms: {
      meta: {
        title: "Términos y condiciones",
        description: "Condiciones de uso del sitio web y contratación de servicios de aireformas.",
      },
      page: {
        label: "Legal",
        title: "Términos y condiciones",
        intro: `Estos términos regulan el acceso y uso del sitio web de aireformas (${host}) y el marco general de contratación de nuestros servicios de reformas, armarios a medida e interiorismo. Al usar el sitio, aceptas estas condiciones. Si no estás de acuerdo, no utilices la web.`,
        sections: [
          { heading: "Identificación", body: `Titular del sitio: aireformas. Ámbito de actuación: ${site.address}. Contacto: ${contactEmail}, ${site.phone}.` },
          { heading: "Objeto del sitio", body: "La web tiene carácter informativo y comercial: presenta servicios, proyectos y canales de contacto. Los contenidos (textos, imágenes, diseños) son propiedad de aireformas o se usan con licencia. Queda prohibida su reproducción o explotación sin autorización escrita, salvo uso privado no comercial." },
          { heading: "Uso permitido", body: "Te comprometes a usar el sitio de forma lícita, sin intentar dañar, sobrecargar o acceder sin autorización a sistemas o datos. No está permitido el uso automatizado abusivo (scraping masivo, bots maliciosos) ni suplantar la identidad de terceros en formularios o comunicaciones." },
          { heading: "Presupuestos y contratación", body: "Las solicitudes de presupuesto o información no vinculan a aireformas hasta la firma de un presupuesto o contrato específico. Los plazos, precios, materiales y alcance se detallarán por escrito en cada propuesta. Las imágenes del sitio pueden ser orientativas o de proyectos reales; el resultado final depende del proyecto acordado." },
          { heading: "Pagos y garantías", body: "Las condiciones económicas, calendario de pagos, garantías legales y postventa se establecerán en el contrato o presupuesto aceptado, con sujeción a la normativa de consumo y contratación que resulte aplicable según seas consumidor o profesional." },
          { heading: "Enlaces a terceros", body: "El sitio puede enlazar a webs externas (por ejemplo, WhatsApp o mapas). No controlamos su contenido ni políticas; el acceso es bajo tu responsabilidad." },
          { heading: "Limitación de responsabilidad", body: "Procuramos que la información del sitio sea exacta y esté actualizada, pero puede contener errores u omisiones. aireformas no garantiza la disponibilidad ininterrumpida del sitio. En la medida permitida por la ley, no respondemos por daños indirectos derivados del uso de la web salvo dolo o negligencia grave. Nada de lo aquí expuesto limita derechos irrenunciables de consumidores." },
          { heading: "Propiedad intelectual", body: "La marca aireformas, logotipos, textos y diseño del sitio están protegidos. Cualquier uso no autorizado puede constituir infracción de derechos de propiedad intelectual o industrial." },
          { heading: "Protección de datos", body: "El tratamiento de datos personales se rige por nuestra política de privacidad. El uso de cookies se rige por la política de cookies." },
          { heading: "Legislación y jurisdicción", body: "Estas condiciones se interpretan según la legislación española. Para consumidores, serán competentes los juzgados del domicilio del consumidor cuando la ley lo establezca; en otros supuestos, los tribunales de Madrid, salvo norma imperativa en contrario." },
          { heading: "Modificaciones", body: "Podemos modificar estos términos. La versión publicada en el sitio en el momento de tu acceso será la aplicable. Te recomendamos revisarla periódicamente." },
        ],
      },
    },
  },
  en: {
    privacy: {
      meta: {
        title: "Privacy policy",
        description: "Information about the processing of personal data at aireformas.",
      },
      page: {
        label: "Legal",
        title: "Privacy policy",
        intro: `At aireformas we respect your privacy. This policy describes what data we collect, what we use it for and your rights under Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD). Controller: aireformas. Contact: ${contactEmail}.`,
        sections: [
          { heading: "Data we process", body: "We may process: name and surname, phone, email, address or area of the home, a description of the project and any information you send us by web form, email, phone or WhatsApp. While you browse, we only process optional technical data if you accept analytics cookies (see the cookie policy)." },
          { heading: "Purpose and legal basis", body: "To answer enquiries, prepare quotes and manage the pre-contractual and contractual relationship for renovations, wardrobes and interiors (Art. 6.1.b GDPR). To send commercial communications only if you have given express consent or a prior relationship exists under the applicable rules (Art. 6.1.a and information-society services law). To meet legal obligations (Art. 6.1.c). To improve the website through aggregated analytics, only with your cookie consent (Art. 6.1.a)." },
          { heading: "Retention", body: "We keep the data while the commercial relationship lasts or as long as needed for the stated purpose. After it ends, we block it for the legal limitation and liability periods (typically up to 6 years for contract and tax matters, depending on the case)." },
          { heading: "Recipients and transfers", body: "We do not sell or share your data with third parties for commercial purposes. We may share it with providers that serve us (hosting, email, management tools) under a processing agreement and only with documented instructions. If a provider is outside the European Economic Area, we will require appropriate safeguards (standard clauses or other approved measures)." },
          { heading: "Your rights", body: `You can exercise access, rectification, erasure, objection, restriction and portability by writing to ${contactEmail} and proving your identity. You may withdraw consent at any time without affecting the lawfulness of prior processing. If you believe we have not handled your request properly, you can complain to the Spanish Data Protection Agency (www.aepd.es).` },
          { heading: "Minors", body: "Our services are aimed at adults. We do not knowingly collect data from children under 14. If we detect that case, we will delete the data." },
          { heading: "Security", body: "We apply reasonable technical and organisational measures to protect the confidentiality and integrity of the data. No system on the internet is completely infallible; we recommend not sending especially sensitive information over unencrypted channels unless it is necessary." },
          { heading: "Cookies", body: "The use of cookies and similar technologies is set out in our cookie policy. You can manage consent from the site notice or the “Cookie settings” link in the footer." },
          { heading: "Changes", body: "We may update this policy to reflect legal changes or changes to our services. We will publish the current version at this URL with the relevant review date." },
        ],
      },
    },
    terms: {
      meta: {
        title: "Terms and conditions",
        description: "Terms of use of the website and engagement of aireformas services.",
      },
      page: {
        label: "Legal",
        title: "Terms and conditions",
        intro: `These terms govern access to and use of the aireformas website (${host}) and the general framework for engaging our renovation, bespoke wardrobe and interior services. By using the site, you accept these terms. If you do not agree, do not use the site.`,
        sections: [
          { heading: "Identification", body: `Site owner: aireformas. Area of work: Madrid and surrounding areas. Contact: ${contactEmail}, ${site.phone}.` },
          { heading: "Purpose of the site", body: "The site is informational and commercial: it presents services, projects and contact channels. The contents (text, images, designs) belong to aireformas or are used under licence. Reproduction or exploitation without written authorisation is prohibited, except for private non-commercial use." },
          { heading: "Permitted use", body: "You agree to use the site lawfully, without trying to damage, overload or access systems or data without authorisation. Abusive automated use (mass scraping, malicious bots) and impersonating third parties in forms or communications are not allowed." },
          { heading: "Quotes and engagement", body: "Requests for a quote or information do not bind aireformas until a specific quote or contract is signed. Timelines, prices, materials and scope are set out in writing in each proposal. Images on the site may be indicative or from real projects; the final result depends on the agreed project." },
          { heading: "Payments and warranties", body: "Economic terms, payment schedule, legal warranties and aftercare are set in the accepted contract or quote, subject to the consumer and contract law that applies depending on whether you are a consumer or a professional." },
          { heading: "Third-party links", body: "The site may link to external sites (for example WhatsApp or maps). We do not control their content or policies; access is at your own responsibility." },
          { heading: "Limitation of liability", body: "We try to keep the information on the site accurate and up to date, but it may contain errors or omissions. aireformas does not guarantee uninterrupted availability of the site. To the extent allowed by law, we are not liable for indirect damage arising from use of the site except in cases of wilful misconduct or gross negligence. Nothing here limits non-waivable consumer rights." },
          { heading: "Intellectual property", body: "The aireformas brand, logos, texts and site design are protected. Any unauthorised use may infringe intellectual or industrial property rights." },
          { heading: "Data protection", body: "The processing of personal data is governed by our privacy policy. The use of cookies is governed by the cookie policy." },
          { heading: "Law and jurisdiction", body: "These terms are interpreted under Spanish law. For consumers, the courts of the consumer's domicile are competent when the law so provides; otherwise, the courts of Madrid, unless a mandatory rule says otherwise." },
          { heading: "Changes", body: "We may change these terms. The version published on the site at the time you access it applies. We recommend reviewing it periodically." },
        ],
      },
    },
  },
});
