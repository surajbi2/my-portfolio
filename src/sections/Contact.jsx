import { site } from '../data';

const year = new Date().getFullYear();

const Contact = () => (
  <footer className="contact" id="contact">
    <div className="contact-inner">
      <p className="contact-kicker mono">(07) — Contact</p>
      <h2 className="contact-title">
        Have a build —<br />
        <em>or a research question?</em>
      </h2>
      <a className="contact-mail" href={`mailto:${site.email}`}>
        {site.email}
      </a>

      <div className="contact-links mono">
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>
    </div>

    <div className="contact-footline mono">
      <span>© {year} {site.name}</span>
      <span>{site.location}</span>
      <span>React · GSAP · Lenis</span>
    </div>
  </footer>
);

export default Contact;
