export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Fragen oder Anmerkungen?</h4>
          <p>Email: service@oldtimer-urlaubsreisen.de</p>
          <p>Tel: +49 (0)8846 9299 773</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#erleben">Erleben</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#reisen">Reisen 2026</a>
          <a href="#sportwagen">Sportwagen</a>
        </div>
        <div>
          <h4>Service</h4>
          <a href="#kontakt">Newsletter Anmeldung</a>
          <a href="#faq">FAQ</a>
          <a href="#">AGB</a>
          <a href="#">Datenschutz</a>
          <a href="#">Impressum</a>
        </div>
      </div>
      <p className="copy">
        © Copyright Oldtimer Urlaubsreisen® by DRIVR® · Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
