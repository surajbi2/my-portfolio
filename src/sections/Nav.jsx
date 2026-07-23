import { site } from '../data';

const links = [
  { label: 'Work', id: 'work' },
  { label: 'Research', id: 'research' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

const Nav = ({ onNavigate }) => (
  <nav className="nav" aria-label="Main">
    <button type="button" className="nav-brand" onClick={() => onNavigate('top')}>
      <span className="nav-brand-name">{site.shortName}</span>
      <span className="nav-brand-role mono">Dev / Scholar</span>
    </button>

    <ul className="nav-links mono">
      {links.map((link) => (
        <li key={link.id}>
          <button type="button" onClick={() => onNavigate(link.id)}>
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
