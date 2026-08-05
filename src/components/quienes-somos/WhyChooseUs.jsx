function WhyChooseUs({ reasons }) {
  return (
    <section className="bg-[#26332f] rounded-2xl py-12 px-6 sm:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#f4e9db] mb-10">
        ¿Por qué elegirnos?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-[#1f2a2e] rounded-xl p-6 flex flex-col gap-2 hover:bg-[#2c3a36] transition-colors"
          >
            <h3 className="text-lg font-semibold text-[#e6a95c]">
              {reason.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#cbc0b3]">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
