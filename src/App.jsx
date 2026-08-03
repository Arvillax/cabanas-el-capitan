import PageBanner from "./components/contacto/PageBanner";
import SiteHeader from "./components/contacto/SiteHeader";
import ContactInfo from "./components/contacto/ContactInfo";
import ContactForm from "./components/contacto/ContactForm";
import SiteFooter from "./components/contacto/SiteFooter";

function App() {
  return (
    <div className="min-h-screen bg-[#f6efe6] text-[#362117]">
      <SiteHeader />
      <PageBanner />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
