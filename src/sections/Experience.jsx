import SectionHead from './SectionHead';
import { internships } from '../data';

const Experience = () => (
  <section className="section experience" id="experience">
    <SectionHead
      index="04"
      label="Experience"
      title={
        <>
          Internships across <em>product and AI.</em>
        </>
      }
    />

    <ul className="experience-list">
      {internships.map((item) => (
        <li className="experience-row" key={`${item.company}-${item.title}`} data-reveal>
          <span className="experience-duration mono">{item.duration}</span>
          <div className="experience-main">
            <h3>{item.title}</h3>
            <span className="experience-company">{item.company}</span>
          </div>
          <p className="experience-desc">{item.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
