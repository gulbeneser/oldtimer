const items = [
  {
    icon: '⇌',
    title: '2 Speed-Gruppen',
    text: 'Sportlich oder entspannt fahren. Bei jeder Etappe entscheiden Sie individuell.',
  },
  {
    icon: '★',
    title: 'Exklusive Erlebnisse',
    text: 'Einzigartige Momente, die man allein nicht erleben würde.',
  },
  {
    icon: '◉',
    title: 'Foto & Video',
    text: 'Momente, die bleiben. Von Profis eingefangen und direkt teilbar.',
  },
];

export default function ConceptIcons() {
  return (
    <section className="concept-bg">
      <div className="container center narrow">
        <div className="eyebrow">Unser Konzept für anspruchsvolle Fahrer</div>
        <h2>Die Unterschiede auf einen Blick</h2>
        <p className="lead">
          Fahrspaß mit außergewöhnlichem Rahmenprogramm. Für ambitionierte Enthusiasten genauso wie
          für genussvolle Entdecker.
        </p>
      </div>
      <div className="container concept-icons">
        {items.map((item) => (
          <div key={item.title}>
            <div className="icon" aria-hidden="true">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
