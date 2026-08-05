function CtaBlock({ title, links }) {
  return (
    <section className="text-center bg-[#c98a3e] rounded-2xl py-12 px-6 sm:px-10 flex flex-col items-center gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-6 py-3 rounded-full font-semibold bg-[#1f2a2e] text-[#f4e9db] hover:bg-[#362117] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default CtaBlock;
