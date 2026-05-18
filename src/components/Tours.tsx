import { tours } from '../data/tours';

export default function Tours() {
  return (
    <section className="section-warm" id="reisen">
      <div className="container center narrow">
        <div className="eyebrow">Limitierte Plätze. Große Emotionen.</div>
        <h2>Oldtimer Urlaubsreise auswählen</h2>
        <p className="lead">
          Unsere Reisen verbinden klassisches Fahrgefühl mit liebevoll kuratierten Erlebnissen.
          Kleine Gruppen, besondere Hotels und Routen mit Charakter.
        </p>
      </div>

      <div className="container tours">
        {tours.map((tour) => (
          <article className="tour-card" key={tour.id}>
            <div
              className="tour-img"
              role="img"
              aria-label={tour.title}
              style={{ backgroundImage: `url('${tour.imageUrl}')` }}
            />
            <div className="tour-body">
              <div className="tour-meta">
                {tour.dateRange} · {tour.country}
              </div>
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <div className="tags">
                {tour.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="price">{tour.price}</div>
              <a className="btn" href="#kontakt">
                Jetzt buchen
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
