import { FiMoon, FiSun } from 'react-icons/fi';
import { site } from '../data';

const links = [
  { label: 'Work', id: 'work' },
  { label: 'Research', id: 'research' },
  { label: 'Experience', id: 'experience', hideSm: true },
  { label: 'Contact', id: 'contact' },
];

const Nav = ({ onNavigate, theme, onToggleTheme }) => (
  <nav className="nav" aria-label="Main">
    <button type="button" className="nav-brand" onClick={() => onNavigate('top')}>
      <span className="nav-brand-name">{site.shortName}</span>
      <span className="nav-brand-role mono">Dev / Scholar</span>
    </button>

    <div className="nav-end">
      <ul className="nav-links mono">
        {links.map((link) => (
          <li key={link.id} className={link.hideSm ? 'hide-sm' : undefined}>
            <button type="button" onClick={() => onNavigate(link.id)}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  </nav>
);

export default Nav;
