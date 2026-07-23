const SectionHead = ({ index, label, title }) => (
  <header className="section-head">
    <div className="section-head-meta mono" data-reveal>
      <span>({index})</span>
      <span>{label}</span>
    </div>
    <h2 className="section-title" data-reveal>{title}</h2>
  </header>
);

export default SectionHead;
