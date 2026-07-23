import SectionHead from './SectionHead';
import { research } from '../data';

const Research = () => (
  <section className="section research" id="research">
    <SectionHead
      index="02"
      label="Research"
      title={
        <>
          Doctoral work in <em>machine intelligence.</em>
        </>
      }
    />

    <div className="research-body">
      <p className="research-summary" data-reveal>{research.summary}</p>

      <dl className="research-facts">
        <div className="research-fact" data-reveal>
          <dt className="mono">Degree</dt>
          <dd>{research.degree}</dd>
        </div>
        <div className="research-fact" data-reveal>
          <dt className="mono">Institution</dt>
          <dd>{research.institution}</dd>
        </div>
        <div className="research-fact" data-reveal>
          <dt className="mono">Timeline</dt>
          <dd>{research.duration}</dd>
        </div>
        <div className="research-fact" data-reveal>
          <dt className="mono">Focus</dt>
          <dd>{research.focus}</dd>
        </div>
        <div className="research-fact" data-reveal>
          <dt className="mono">Funding</dt>
          <dd>{research.funding}</dd>
        </div>
      </dl>

      <div className="research-interests" data-reveal>
        <h3 className="mono">Current interests</h3>
        <ul>
          {research.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
        <p className="research-note mono">{research.note}</p>
      </div>
    </div>
  </section>
);

export default Research;
