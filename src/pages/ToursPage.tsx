const tours = [
  { name: 'Schwaben & Oberbayern', date: '30.04.2026 – 03.05.2026', price: '1.690 €' },
  { name: 'Bäderfahrt nach Tschechien', date: '11.05.2026 – 14.05.2026', price: '1.690 €' },
  { name: 'Sachsen Klassiker Tour', date: '14.05.2026 – 17.05.2026', price: '1.690 €' },
];

export function ToursPage() {
  return (
    <section>
      <h1>Reisen 2026</h1>
      <div className="cardGrid">
        {tours.map((tour) => (
          <article key={tour.name} className="card">
            <h2>{tour.name}</h2>
            <p>{tour.date}</p>
            <strong>{tour.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
