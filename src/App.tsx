import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToursPage } from './pages/ToursPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const links = [
  { to: '/', label: 'Home' },
  { to: '/reisen', label: 'Reisen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container navWrap">
          <div className="brand">Oldtimer Urlaubsreisen</div>
          <nav>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="container mainContent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reisen" element={<ToursPage />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Oldtimer Urlaubsreisen · Premium Driving Experiences</div>
      </footer>
    </div>
  );
}
