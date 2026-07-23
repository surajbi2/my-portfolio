import SectionHead from './SectionHead';
import { projects } from '../data';

const Projects = () => (
  <section className="section projects" id="work">
    <SectionHead
      index="03"
      label="Selected work"
      title={
        <>
          Projects that carry <em>real traffic.</em>
        </>
      }
    />

    <ul className="project-list">
      {projects.map((project, index) => (
        <li key={project.title} data-reveal>
          <a
            className="project-row"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-index mono">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="project-main">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
            <div className="project-side">
              <span className="project-kind mono">{project.kind}</span>
              <span className="project-tech">{project.tech}</span>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
