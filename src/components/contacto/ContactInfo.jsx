import { siteConfig } from "../../../data/site";

const formattedPhone = siteConfig.telefono.replace(/^\+504(\d{4})(\d{4})$/, "+504 $1-$2");
const whatsappLink = `${siteConfig.whatsappLink}?text=${encodeURIComponent("Hola quiero hacer una consulta")}`;

function ContactInfo() {
  return (
    <aside className="rounded-[1.5rem] bg-[#5f4334] p-8 text-[#f7efe7] shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
      <h2 className="text-2xl font-semibold">Información de contacto</h2>

      <div className="mt-8 space-y-6">
        <div>
          <strong className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#ead8c2]">Dirección</strong>
          <p className="mt-2 leading-7">{siteConfig.direccion}</p>
        </div>

        <div>
          <strong className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#ead8c2]">Teléfono / WhatsApp</strong>
          <a href={`tel:${siteConfig.telefono}`} className="mt-2 inline-block text-[#f0c97d] hover:text-[#ffe6b3]">
            {formattedPhone}
          </a>
        </div>

        <div>
          <strong className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#ead8c2]">Redes sociales</strong>
          <div className="mt-2 space-y-1">
            <a href={siteConfig.redes.facebook} target="_blank" rel="noreferrer" className="block text-[#f7efe7] underline decoration-[#ead8c2] underline-offset-4">
              Facebook
            </a>
            <a href={siteConfig.redes.tiktok} target="_blank" rel="noreferrer" className="block text-[#f7efe7] underline decoration-[#ead8c2] underline-offset-4">
              TikTok
            </a>
          </div>
        </div>

        <div>
          <strong className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#ead8c2]">Horario de atención</strong>
          <p className="mt-2 leading-7">{siteConfig.horario}</p>
        </div>

        <div>
          <strong className="block text-sm font-semibold uppercase tracking-[0.2em] text-[#ead8c2]">WhatsApp directo</strong>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[#8a5a35] px-6 py-3 font-semibold text-white transition hover:bg-[#6e4627]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </aside>
  );
}

export default ContactInfo;
