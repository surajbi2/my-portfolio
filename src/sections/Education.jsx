import SectionHead from './SectionHead';
import { educationData } from '../data';

const Education = () => (
  <section className="section education" id="education">
    <SectionHead
      index="06"
      label="Education"
      title={
        <>
          A decade of <em>formal study.</em>
        </>
      }
    />

    <ul className="education-list">
      {educationData.map((edu) => (
        <li className="education-row" key={`${edu.degree}-${edu.duration}`} data-reveal>
          <span className="education-duration mono">{edu.duration}</span>
          <div className="education-main">
            <h3>{edu.degree}</h3>
            <span>{edu.institution}</span>
          </div>
          <span className="education-grade mono">{edu.grade}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
