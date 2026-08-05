function StoryCopy({ title, paragraphs }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#362117]">
        {title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-base sm:text-lg leading-relaxed text-[#5b4536]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default StoryCopy;
