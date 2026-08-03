import { useState } from "react";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  asunto: "",
  mensaje: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido.";
    }

    if (formData.telefono && !/^\+?\d{7,15}$/.test(formData.telefono.replace(/\s+/g, ""))) {
      newErrors.telefono = "Ingresa un teléfono válido.";
    }

    if (!formData.asunto.trim()) {
      newErrors.asunto = "El asunto es obligatorio.";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio.";
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <div className="rounded-[1.5rem] bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
      <h2 className="text-2xl font-semibold text-[#1f2d1f]">Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit} className="mt-8" noValidate>
        <fieldset className="border-0 p-0">
          <legend className="sr-only">Datos de contacto</legend>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="mb-2 block text-sm font-semibold text-[#362117]">
                Nombre completo <span className="text-[#b26d3d]">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8cdb7] bg-[#fcf8f2] px-4 py-3 outline-none transition focus:border-[#8a5a35] focus:ring-2 focus:ring-[#e8cfb0]"
                placeholder="Tu nombre completo"
              />
              {errors.nombre && <p className="mt-2 text-sm text-red-600">{errors.nombre}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#362117]">
                Correo electrónico <span className="text-[#b26d3d]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8cdb7] bg-[#fcf8f2] px-4 py-3 outline-none transition focus:border-[#8a5a35] focus:ring-2 focus:ring-[#e8cfb0]"
                placeholder="tucorreo@ejemplo.com"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="telefono" className="mb-2 block text-sm font-semibold text-[#362117]">
                Teléfono <span className="text-sm font-normal text-[#6b5b4b]">(opcional)</span>
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8cdb7] bg-[#fcf8f2] px-4 py-3 outline-none transition focus:border-[#8a5a35] focus:ring-2 focus:ring-[#e8cfb0]"
                placeholder="+504 XXXX-XXXX"
              />
              {errors.telefono && <p className="mt-2 text-sm text-red-600">{errors.telefono}</p>}
            </div>

            <div>
              <label htmlFor="asunto" className="mb-2 block text-sm font-semibold text-[#362117]">
                Asunto <span className="text-[#b26d3d]">*</span>
              </label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#d8cdb7] bg-[#fcf8f2] px-4 py-3 outline-none transition focus:border-[#8a5a35] focus:ring-2 focus:ring-[#e8cfb0]"
                placeholder="¿En qué te podemos ayudar?"
              />
              {errors.asunto && <p className="mt-2 text-sm text-red-600">{errors.asunto}</p>}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold text-[#362117]">
              Mensaje <span className="text-[#b26d3d]">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#d8cdb7] bg-[#fcf8f2] px-4 py-3 outline-none transition focus:border-[#8a5a35] focus:ring-2 focus:ring-[#e8cfb0]"
              placeholder="Escribe tu mensaje aquí..."
            />
            {errors.mensaje && <p className="mt-2 text-sm text-red-600">{errors.mensaje}</p>}
          </div>

          {submitted && (
            <p className="mt-6 rounded-xl border border-[#cce8cf] bg-[#f2fbf2] px-4 py-3 text-sm text-[#2d6b2f]" role="status">
              Tu mensaje ha sido enviado. Nos comunicaremos contigo pronto.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#8a5a35] px-6 py-3 font-semibold text-white transition hover:bg-[#6e4627]"
          >
            Enviar mensaje
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactForm;
