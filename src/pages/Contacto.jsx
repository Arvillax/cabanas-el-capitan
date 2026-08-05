import PageBanner from "../components/contacto/PageBanner";
import ContactForm from "../components/contacto/ContactForm";
import ContactInfo from "../components/contacto/ContactInfo";

export default function Contacto() {
  return (
    <>
      <PageBanner />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
