import SectionHead from './SectionHead';
import { skillCategories } from '../data';

const tickerItems = [...new Set(Object.values(skillCategories).flat())];

const Skills = () => (
  <section className="section skills" id="stack">
    <SectionHead
      index="05"
      label="Stack"
      title={
        <>
          Tools chosen for <em>the long run.</em>
        </>
      }
    />

    <div className="skill-ticker" aria-hidden="true">
      <div className="skill-ticker-track" data-ticker>
        {[...tickerItems, ...tickerItems].map((skill, index) => (
          <span key={`${skill}-${index}`}>
            {skill}
            <i>·</i>
          </span>
        ))}
      </div>
    </div>

    <dl className="skill-table">
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div className="skill-line" key={category} data-reveal>
          <dt className="mono">{category}</dt>
          <dd>{skills.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Skills;
