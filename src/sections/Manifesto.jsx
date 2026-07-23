const segments = [
  { text: 'I build web products end to end — ' },
  { text: 'interfaces, APIs, data', serif: true },
  { text: ' — and I care that they hold up in use, not just in a demo. The doctorate is the same instinct pointed at ' },
  { text: 'machine intelligence', serif: true },
  { text: ' — ask a precise question, build the thing, measure it honestly.' },
];

const words = segments.flatMap((seg, si) =>
  seg.text
    .split(' ')
    .filter(Boolean)
    .map((word, wi) => ({ word, serif: seg.serif, key: `${si}-${wi}` }))
);

const Manifesto = () => (
  <section className="manifesto" id="about" aria-label="About">
    <p className="manifesto-lede mono" data-reveal>(01) — About</p>
    <p className="manifesto-text" data-scrub-words>
      {words.map(({ word, serif, key }) => (
        <span className={serif ? 'w w-serif' : 'w'} key={key}>
          {word}{' '}
        </span>
      ))}
    </p>
    <div className="manifesto-foot" data-reveal>
      <figure className="manifesto-portrait">
        <img src="/profile.jpg" alt="Portrait of Suraj Kumar" loading="lazy" />
      </figure>
      <p className="manifesto-aside">
        Six shipped projects, four internships, one university website in
        production — and a research problem I intend to spend years on.
      </p>
    </div>
  </section>
);

export default Manifesto;
