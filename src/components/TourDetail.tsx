const highlights = [
  'Bootsfahrt durch den Donaudurchbruch mit majestätischer Naturkulisse.',
  'Exklusiver Zugang zu AUDI-Exponaten in Ingolstadt.',
  'Besuch bei der Hopfenbäuerin inklusive Verkostung.',
  'Exklusiver Parkplatz in der historischen Altstadt von Eichstätt.',
];

const pricing = [
  { label: 'Premium-Paket', price: '1.690,00 € pro Person' },
  { label: 'Exklusiv-Paket', price: '1.890,00 € pro Person' },
  { label: 'Einzelzimmer-Aufpreis', price: '+ 290,00 € pro Person' },
];

export default function TourDetail() {
  return (
    <section className="section-dark">
      <div className="container detail-grid">
        <div>
          <div className="eyebrow">Beispielreise 2026</div>
          <h2>Schwaben &amp; Oberbayern Tour</h2>
          <p className="lead">
            Unser Startpunkt ist das Hotel Schloss Leitheim in Kaisheim. In zwei Tagen erleben Sie
            hügelige Straßen, Donauries, Hallertau, regionale Traditionen und exklusive Stopps.
          </p>
          <div className="price-table">
            {pricing.map((row) => (
              <div className="price-row" key={row.label}>
                <strong>{row.label}</strong>
                <span>{row.price}</span>
              </div>
            ))}
          </div>
          <a className="btn" href="#kontakt">
            Jetzt buchen
          </a>
        </div>
        <div className="detail-box">
          <h4>Highlights der Reise</h4>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
