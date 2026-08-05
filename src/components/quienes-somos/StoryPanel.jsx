function StoryPanel({ cards }) {
  return (
    <div className="bg-[#1f2a2e] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-lg">
      {cards.map((card) => (
        <div
          key={card.id}
          className="border-l-4 border-[#c98a3e] pl-4 flex flex-col gap-2"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-[#f4e9db]">
            {card.label}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-[#cbc0b3]">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StoryPanel;
