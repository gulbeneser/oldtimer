const features = [
  { num: '01', title: 'Nur 15 Fahrzeuge', text: 'Exklusive Gruppen für entspanntes Fahren, persönliche Begegnungen und stilvolle Etappen.' },
  { num: '02', title: 'Sorglos reisen', text: 'Kein Stress, keine versteckten Kosten. Ankommen, fahren, genießen.' },
  { num: '03', title: 'Persönliche Begleitung', text: 'Erfahrene Tourguides mit Leidenschaft, Ortskenntnis und Organisationstalent.' },
  { num: '04', title: 'Profi-Mechaniker', text: 'Mit Servicefahrzeug dabei, falls unterwegs kleinere oder größere Probleme entstehen.' },
  { num: '05', title: 'Kuratierte Routen', text: 'Handverlesene Strecken und Ziele mit Charakter, fernab vom Massentourismus.' },
  { num: '06', title: 'Alle Klassiker willkommen', text: 'Ob Ikone oder Herzensfahrzeug, Oldtimer bis Baujahr 1990 und Youngtimer auf Nachfrage.' },
];

export default function ConceptFeatures() {
  return (
    <section className="section-warm" id="konzept">
      <div className="container center narrow">
        <div className="eyebrow">Unser Konzept für Liebhaber klassischer Automobile</div>
        <h2>Außergewöhnlich reisen. Individuell statt Katalog-Tour.</h2>
        <p className="lead">
          Überschaubare Gruppen, bewusst gewähltes Tempo, persönliche Guides und ein
          Profi-Mechaniker sorgen für ein Fahrerlebnis, das zu jedem Oldtimer und jeder Fahrweise
          passt.
        </p>
      </div>

      <div className="container features">
        {features.map((f) => (
          <article className="feature" key={f.num}>
            <div className="num">{f.num}</div>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
