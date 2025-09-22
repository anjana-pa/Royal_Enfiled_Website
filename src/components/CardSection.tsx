export function CardSection() {
  const cards = [
    { src: "/Group 18.jpg", alt: "Card 1" },
    { src: "/Group 17.jpg", alt: "Card 2" },
    { src: "/Group 16.jpg", alt: "Card 3" },
  ]

  return (
    <section className="bg-black py-16 px-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, i) => (
          <div key={i} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.src}
              alt={card.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
