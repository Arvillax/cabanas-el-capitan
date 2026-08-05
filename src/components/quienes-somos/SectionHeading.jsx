function SectionHeading({ kicker, title }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {kicker && (
        <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#8a5a34] mb-3">
          {kicker}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#362117]">
        {title}
      </h1>
    </div>
  );
}

export default SectionHeading;
