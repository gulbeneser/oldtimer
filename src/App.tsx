import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { faqs, features, navigation, site, tours, trustStats, type NavigationItem } from './data/site';
import { updateDocumentMeta } from './utils/seo';

const heroImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80';
const portraitImage = 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80';
const sportImage = 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=2200&q=80';
const phoneHref = `tel:${site.phone.replace('(0)', '').replace(/\s/g, '')}`;

type Route = '/' | '/konzept' | '/reisen' | '/sportwagen' | '/ueber-uns' | '/kontakt';

const routeMeta: Record<Route, { title: string; description: string }> = {
  '/': {
    title: 'Oldtimer Urlaubsreisen 2026 | Premium-Reisen für Klassiker',
    description: 'Kuratierte Oldtimer- und Sportwagenreisen 2026 mit kleinen Gruppen, besonderen Hotels, Mechanikerbegleitung und professioneller Reiseleitung.'
  },
  '/konzept': {
    title: 'Reisekonzept | Oldtimer Urlaubsreisen',
    description: 'Das professionelle Konzept hinter Oldtimer Urlaubsreisen: kleine Gruppen, kuratierte Routen, Roadbook, Reiseleitung und Mechaniker-Support.'
  },
  '/reisen': {
    title: 'Oldtimer Reisen 2026 | Termine, Preise und Highlights',
    description: 'Alle Oldtimer Urlaubsreisen 2026 mit Terminen, Preisen, Regionen und Highlights für Klassiker, Youngtimer und Genießer.'
  },
  '/sportwagen': {
    title: 'Sportwagenreisen | Dynamische Premium-Touren',
    description: 'Sportwagenreisen mit Stil: dynamische Etappen, hochwertige Hotels, Foto- und Videomomente und professionelle Organisation.'
  },
  '/ueber-uns': {
    title: 'Über uns | Drivr Society und Reiseleitung',
    description: 'Lernen Sie das Team und die Haltung hinter Oldtimer Urlaubsreisen kennen: Fahrfreude, Organisation, Technik und Gastfreundschaft.'
  },
  '/kontakt': {
    title: 'Kontakt | Oldtimer Urlaubsreise anfragen',
    description: 'Kontaktieren Sie Oldtimer Urlaubsreisen für Beratung, Reservierung oder individuelle Gruppenreisen 2026.'
  }
};

const getRoute = (): Route => {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return Object.keys(routeMeta).includes(path) ? (path as Route) : '/';
};

function Header({ currentRoute, onNavigate }: { currentRoute: Route; onNavigate: (href: NavigationItem['href']) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled || currentRoute !== '/' ? 'is-scrolled' : ''}`}>
      <a className="brand" href="/" aria-label={`${site.name} Startseite`} onClick={(event) => { event.preventDefault(); onNavigate('/'); }}>
        <span>Oldtimer</span>
        <strong>Urlaubsreisen</strong>
        <small>by DRIVR</small>
      </a>

      <nav id="mobile-navigation" className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={currentRoute === item.href ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault();
              setIsOpen(false);
              onNavigate(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="phone" href={phoneHref}>
          {site.phone}
        </a>
        <a className="button button-small" href="/kontakt">
          Beratung anfragen
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          Menü
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" style={{ '--hero-image': `url(${heroImage})` } as CSSProperties}>
      <div className="hero-content">
        <p className="eyebrow">Kuratierte Klassiker-Reisen für 2026</p>
        <h1>Oldtimer fahren. Außergewöhnlich reisen. Sorglos genießen.</h1>
        <p className="lead">
          Premium-Reiseerlebnisse für Menschen, die besondere Straßen, handverlesene Hotels,
          automobile Kultur und persönliche Begleitung schätzen.
        </p>
        <div className="hero-actions">
          <a className="button" href="/reisen">
            Reisen 2026 entdecken
          </a>
          <a className="button button-ghost" href="/konzept">
            Konzept ansehen
          </a>
        </div>
      </div>
      <div className="stats" aria-label="Reise Kennzahlen">
        {trustStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Concept() {
  return (
    <>
      <section className="section section-dark" id="konzept">
        <div className="container split">
          <div>
            <p className="eyebrow">Angetrieben von Leidenschaft & Präzision</p>
            <h2>Keine Katalogtour, sondern ein professionell kuratiertes Fahrerlebnis.</h2>
            <p className="lead">
              Jede Reise wird mit Roadbook, Timing, Hotelqualität, Genussmomenten und fahrbarer
              Etappenlogik geplant. So bleibt mehr Raum für das Wesentliche: fahren, ankommen,
              erleben.
            </p>
            <div className="check-list" aria-label="Leistungsversprechen">
              <span>Persönliche Reiseleitung</span>
              <span>Mechaniker-Support</span>
              <span>Ausgewählte Hotels</span>
              <span>Exklusive Programmpunkte</span>
            </div>
          </div>
          <div className="image-panel" style={{ backgroundImage: `url(${portraitImage})` }} aria-label="Klassischer Sportwagen" />
        </div>
      </section>

      <section className="section section-cream">
        <div className="container intro">
          <p className="eyebrow">Was uns unterscheidet</p>
          <h2>Organisation, die sich unterwegs leicht anfühlt.</h2>
          <p>
            Kleine Gruppen, klare Kommunikation und ein hoher Anspruch an Routen und Gastgeber
            machen jede Tour hochwertig, persönlich und verlässlich.
          </p>
        </div>
        <div className="container feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Tours() {
  return (
    <section className="section section-cream" id="reisen">
      <div className="container intro">
        <p className="eyebrow">Limitierte Plätze · Saison 2026</p>
        <h2>Oldtimer Urlaubsreisen auswählen.</h2>
        <p>
          Von regionaler Kultur bis zu alpinen Panoramastraßen: Die Reisen kombinieren
          Fahrfreude, Komfort, Kulinarik und automobile Begegnungen.
        </p>
      </div>
      <div className="container tour-grid">
        {tours.map((tour) => (
          <article className="tour-card" key={tour.slug}>
            <img src={tour.image} alt={`${tour.title} Reisemotiv`} loading="lazy" />
            <div className="tour-body">
              <p className="tour-meta">{tour.dates} · {tour.region}</p>
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <ul>
                {tour.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tour-footer">
                <span>{tour.duration}</span>
                <strong>{tour.price}</strong>
              </div>
              <a className="button" href="/kontakt">
                Anfrage senden
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sportwagen() {
  return (
    <section className="sport-section" id="sportwagen" style={{ '--sport-image': `url(${sportImage})` } as CSSProperties}>
      <div className="container sport-content">
        <p className="eyebrow">Für moderne Performance-Fahrzeuge</p>
        <h2>Sportwagenreisen mit Stil, Dynamik und Erlebniswert.</h2>
        <p className="lead">
          Für Fahrerinnen und Fahrer, die Präzision und Emotion verbinden möchten: dynamische
          Gruppen, besondere Hotels, Foto- und Videomomente sowie Etappen mit echter Dramaturgie.
        </p>
        <a className="button" href="/kontakt">
          Sportwagen-Konzept anfragen
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-dark" id="ueber-uns">
      <div className="container intro intro-inverted">
        <p className="eyebrow">Drivr Society</p>
        <h2>Menschen, die Fahrfreude leben.</h2>
        <p>
          Hinter jeder Reise steht ein Team aus Organisation, Reiseleitung und Technik. Der Anspruch:
          hochwertige Planung, ehrliche Begeisterung und ein Erlebnis, das lange nachklingt.
        </p>
      </div>
      <div className="container testimonial-grid">
        <figure>
          <blockquote>„Perfekte Organisation, schöne Straßen und echte Begegnungen.“</blockquote>
          <figcaption>Britta & Claudius · Porschefans aus NRW</figcaption>
        </figure>
        <figure>
          <blockquote>„10 Reisen, 8 Länder und Erinnerungen, die bleiben.“</blockquote>
          <figcaption>Aenny & Alex · Oldtimer-Enthusiasten</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.question ?? '');

  return (
    <section className="section section-dark" id="faq">
      <div className="container intro intro-inverted">
        <p className="eyebrow">FAQ</p>
        <h2>Häufige Fragen.</h2>
      </div>
      <div className="container faq-list">
        {faqs.map((faq) => {
          const isOpen = openQuestion === faq.question;
          return (
            <article className="faq-item" key={faq.question}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? '' : faq.question)}>
                <span>{faq.question}</span>
                <strong>{isOpen ? '−' : '+'}</strong>
              </button>
              {isOpen && <p>{faq.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="container contact-card">
        <p className="eyebrow">Persönliche Beratung</p>
        <h2>Bereit für die nächste besondere Etappe?</h2>
        <p>
          Fragen, Reservierung oder individuelle Gruppenreise: Schreiben Sie uns kurz, welche Reise
          Sie interessiert und mit welchem Fahrzeug Sie unterwegs sind.
        </p>
        <div className="contact-actions">
          <a className="button" href={`mailto:${site.email}?subject=Anfrage%20Oldtimer%20Urlaubsreise%202026`}>
            {site.email}
          </a>
          <a className="button button-ghost" href={phoneHref}>
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}


function HomePage() {
  return (
    <>
      <Hero />
      <Concept />
      <Tours />
      <Sportwagen />
      <Contact />
    </>
  );
}

function ConceptPage() {
  return (
    <>
      <Hero />
      <Concept />
      <Faq />
      <Contact />
    </>
  );
}

function ToursPage() {
  return (
    <>
      <Tours />
      <Faq />
      <Contact />
    </>
  );
}

function SportwagenPage() {
  return (
    <>
      <Sportwagen />
      <Concept />
      <Contact />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <About />
      <Faq />
      <Contact />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Contact />
      <Faq />
    </>
  );
}

function Footer({ onNavigate }: { onNavigate: (href: NavigationItem['href']) => void }) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>{site.name}</h2>
          <p>{site.claim} für Klassiker, Youngtimer und Sportwagen.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); onNavigate(item.href); }}>{item.label}</a>
          ))}
        </div>
        <div>
          <h3>Kontakt</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={phoneHref}>{site.phone}</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
      <div className="container footer-bottom">© {year} {site.name} by DRIVR · Professionelles React-TypeScript Konzept.</div>
    </footer>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>(getRoute);

  const navigate = (href: NavigationItem['href']) => {
    const route = (href || '/') as Route;
    window.history.pushState({}, '', route);
    setCurrentRoute(getRoute());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncRoute = () => setCurrentRoute(getRoute());
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  useEffect(() => {
    const meta = routeMeta[currentRoute];
    updateDocumentMeta(meta.title, meta.description, currentRoute);
  }, [currentRoute]);

  const page = {
    '/': <HomePage />,
    '/konzept': <ConceptPage />,
    '/reisen': <ToursPage />,
    '/sportwagen': <SportwagenPage />,
    '/ueber-uns': <AboutPage />,
    '/kontakt': <ContactPage />
  }[currentRoute];

  return (
    <>
      <Header currentRoute={currentRoute} onNavigate={navigate} />
      <main>{page}</main>
      <Footer onNavigate={navigate} />
      <a className="back-to-top" href="/" aria-label="Zurück nach oben" onClick={(event) => { event.preventDefault(); navigate('/'); }}>↑</a>
    </>
  );
}
