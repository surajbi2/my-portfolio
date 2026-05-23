import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiBook, FiCode,
  FiBriefcase, FiFolder, FiExternalLink, FiArrowUpRight, FiMapPin, FiCalendar
} from 'react-icons/fi';
import { FaCode, FaVuejs } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact, SiNodedotjs, SiPython, SiJavascript,
  SiTailwindcss, SiMongodb, SiMysql, SiFramer,
  SiGit, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiGithub, SiStreamlit, SiPostman, SiSelenium
} from 'react-icons/si';
import { educationData, skillCategories, internships, projects } from './data';

/* ─── Scroll helper ─── */
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

/* ─── Skill icon map ─── */
const skillIcons = {
  'React': SiReact, 'Node.js': SiNodedotjs, 'Python': SiPython, 'JavaScript': SiJavascript,
  'Vue.js': FaVuejs, 'Tailwind CSS': SiTailwindcss, 'C Programming': FaCode, 'MongoDB': SiMongodb,
  'MySQL': SiMysql, 'Streamlit': SiStreamlit, 'Postman': SiPostman, 'Git': SiGit,
  'HTML5': SiHtml5, 'CSS3': SiCss3, 'Bootstrap': SiBootstrap, 'Express.js': SiExpress,
  'VS Code': VscVscode, 'GitHub': SiGithub, 'Framer Motion': SiFramer, 'Selenium': SiSelenium,
};

/* ─── Fade-in variant ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

/* ═══════════════════════════════════════
   APP
═══════════════════════════════════════ */
const App = () => (
  <div style={{ background: 'var(--bg-base)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
    {/* Global ambient orbs */}
    <div className="orb" style={{ width: 500, height: 500, top: -100, left: -150, background: 'rgba(201,168,76,0.06)', animationDelay: '0s' }} />
    <div className="orb" style={{ width: 400, height: 400, top: '40%', right: -100, background: 'rgba(120,80,200,0.05)', animationDelay: '-4s' }} />
    <div className="orb" style={{ width: 300, height: 300, bottom: '10%', left: '20%', background: 'rgba(201,168,76,0.04)', animationDelay: '-8s' }} />

    <Nav />
    <Hero />
    <Education />
    <Skills />
    <Internships />
    <Projects />
    <Footer />
  </div>
);

/* ═══════════════════════════════════════
   NAV
═══════════════════════════════════════ */
const Nav = () => (
  <motion.nav
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201,168,76,0.12)',
    }}
  >
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px' }}>
      <motion.span
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="font-display gradient-text"
        style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.02em', cursor: 'default' }}
      >
        Suraj Kumar
      </motion.span>

      <div style={{ display: 'flex', gap: 4 }}>
        {['home', 'education', 'skills', 'internships', 'projects', 'contact'].map((link, i) => (
          <motion.button
            key={link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            onClick={() => scrollTo(link)}
            style={{
              position: 'relative', background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', padding: '8px 12px',
              fontFamily: 'Inter, sans-serif', transition: 'color 0.25s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
            <span className="nav-link-line" />
          </motion.button>
        ))}
      </div>
    </div>
  </motion.nav>
);

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
const Hero = () => (
  <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>

      {/* Text */}
      <motion.div style={{ flex: '1 1 400px' }} initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
        <motion.p variants={fadeUp} style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>
          Welcome to my portfolio
        </motion.p>

        <motion.h1 variants={fadeUp} className="font-display" style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text-primary)', margin: '0 0 12px' }}>
          Ramagiri<br /><span className="gradient-text">Suraj Kumar</span>
        </motion.h1>

        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <span style={{ width: 32, height: 2, background: 'var(--gold)', borderRadius: 1 }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 400, margin: 0 }}>
            Creative Full Stack Developer
          </p>
        </motion.div>

        <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
          Building elegant digital experiences — passionate about crafting performant, beautiful, and user-centric web applications.
        </motion.p>

        <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button className="btn-gold" onClick={() => scrollTo('contact')}>
            <FiMail /> Get In Touch <FiArrowUpRight />
          </button>
          <button
            onClick={() => scrollTo('projects')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '11px 28px', background: 'transparent',
              border: '1px solid var(--gold-border)', borderRadius: 50,
              color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--gold-border)'; }}
          >
            <FiFolder /> View Projects
          </button>
        </motion.div>
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        style={{ flex: '0 0 auto', position: 'relative' }}
      >
        <div style={{ position: 'relative', width: 260, height: 260 }}>
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -8, borderRadius: '50%',
              background: 'conic-gradient(from 0deg, transparent 60%, var(--gold), transparent)',
            }}
          />
          <div style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            background: 'var(--bg-base)',
          }} />
          <div className="pulse-avatar" style={{
            position: 'relative', width: '100%', height: '100%',
            borderRadius: '50%', overflow: 'hidden',
            border: '3px solid rgba(201,168,76,0.3)',
          }}>
            <img src="image.jpg" alt="Suraj Kumar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: 'spring' }}
            style={{
              position: 'absolute', bottom: 10, right: -20,
              background: 'linear-gradient(135deg, #C9A84C, #A07830)',
              borderRadius: 12, padding: '8px 14px',
              color: '#0A0A0F', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.05em', whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
            }}
          >
            Full Stack Dev
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════
   SECTION WRAPPER
═══════════════════════════════════════ */
const SectionWrap = ({ id, icon, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    style={{ padding: '96px 0' }}
  >
    <div className="container">
      {/* Section heading */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <motion.div
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(201,168,76,0.1)', border: '1px solid var(--gold-border)',
            color: 'var(--gold)', fontSize: '1.3rem', marginBottom: 20,
          }}
        >
          {icon}
        </motion.div>
        <h2 className="font-display gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, margin: '0 0 16px' }}>
          {title}
        </h2>
        <div className="section-divider" />
      </div>
      {children}
    </div>
  </motion.section>
);

/* ═══════════════════════════════════════
   EDUCATION
═══════════════════════════════════════ */
const Education = () => (
  <SectionWrap id="education" icon={<FiBook />} title="Education">
    <div style={{ position: 'relative', paddingLeft: 28 }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: 5, top: 0, bottom: 0,
        width: 1, background: 'linear-gradient(to bottom, var(--gold), transparent)',
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
          >
            {/* Dot */}
            <div style={{ position: 'relative', flexShrink: 0, marginLeft: -29, marginTop: 6 }}>
              <div className="timeline-dot" />
            </div>

            {/* Card */}
            <div className="glass-card" style={{ flex: 1, padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <h3 className="font-display" style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 600, margin: '0 0 6px' }}>
                  {edu.degree}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FiMapPin style={{ color: 'var(--gold)', fontSize: '0.8rem' }} /> {edu.institution}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FiCalendar style={{ color: 'var(--gold)', fontSize: '0.8rem' }} /> {edu.duration}
                </p>
              </div>
              <div style={{
                padding: '12px 24px', background: 'rgba(201,168,76,0.08)',
                border: '1px solid var(--gold-border)', borderRadius: 10, textAlign: 'center',
              }}>
                <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem', margin: 0, fontFamily: 'Playfair Display, serif' }}>{edu.grade}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', margin: '4px 0 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Score</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrap>
);

/* ═══════════════════════════════════════
   SKILLS
═══════════════════════════════════════ */
const Skills = () => (
  <SectionWrap id="skills" icon={<FiCode />} title="Skills & Technologies">
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {Object.entries(skillCategories).map(([category, skills], ci) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.08 }}
        >
          <h3 style={{
            color: 'var(--text-primary)', fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16,
            paddingLeft: 14, borderLeft: '2px solid var(--gold)',
          }}>
            {category}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 12 }}>
            {skills.map((skill) => {
              const Icon = skillIcons[skill] || FiCode;
              return (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <Icon style={{ color: 'var(--gold)', fontSize: '1.8rem' }} />
                  <span>{skill}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

/* ═══════════════════════════════════════
   INTERNSHIPS
═══════════════════════════════════════ */
const Internships = () => (
  <SectionWrap id="internships" icon={<FiBriefcase />} title="Experience">
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {internships.map((item, i) => (
        <motion.div
          key={i}
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={{ padding: '28px 28px 24px' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: 'rgba(201,168,76,0.1)', border: '1px solid var(--gold-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold)', fontSize: '1.2rem', flexShrink: 0,
            }}>
              <FiBriefcase />
            </div>
            <span style={{
              fontSize: '0.72rem', color: 'var(--gold)', fontWeight: 600,
              background: 'rgba(201,168,76,0.08)', border: '1px solid var(--gold-border)',
              borderRadius: 20, padding: '4px 12px', letterSpacing: '0.04em',
            }}>
              {item.duration}
            </span>
          </div>
          <h3 className="font-display" style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 600, margin: '0 0 6px' }}>
            {item.title}
          </h3>
          <p style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 600, marginBottom: 12, letterSpacing: '0.04em' }}>
            @ {item.company}
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

/* ═══════════════════════════════════════
   PROJECTS
═══════════════════════════════════════ */
const Projects = () => (
  <SectionWrap id="projects" icon={<FiFolder />} title="Projects">
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ color: 'var(--gold)', fontSize: '1.4rem' }}><FiFolder /></div>
            {project.link && (
              <motion.a
                href={project.link} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--gold-border)', color: 'var(--gold)',
                  textDecoration: 'none', fontSize: '0.9rem',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.15)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--gold-border)'; }}
              >
                <FiExternalLink />
              </motion.a>
            )}
          </div>

          <h3 className="font-display" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
            {project.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.87rem', lineHeight: 1.7, margin: 0, flex: 1 }}>
            {project.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
            {project.tech.split(',').map(t => (
              <span key={t.trim()} className="tech-badge">{t.trim()}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrap>
);

/* ═══════════════════════════════════════
   FOOTER / CONTACT
═══════════════════════════════════════ */
const Footer = () => (
  <footer id="contact" style={{
    borderTop: '1px solid rgba(201,168,76,0.12)',
    background: 'rgba(15,15,24,0.8)',
    padding: '80px 0 40px',
    marginTop: 32,
  }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
          Let's Connect
        </p>
        <h2 className="font-display gradient-text" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, marginBottom: 16 }}>
          Let's Build Something Amazing
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: 420, margin: '0 auto 40px', lineHeight: 1.7, fontSize: '0.93rem' }}>
          I'm always open to discussing new projects, creative ideas or opportunities. Drop me a message!
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
          {[
            { icon: FiGithub, href: 'https://github.com/surajbi2', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/suraj-kumar-ramagiri-8b47411a2/', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:ramagirisurajkumar@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -4 }}
              aria-label={label}
              style={{ textDecoration: 'none' }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <button className="btn-gold" onClick={() => window.location.href = 'mailto:ramagirisurajkumar@gmail.com'}>
          <FiMail /> Send a Message
        </button>

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(201,168,76,0.08)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Ramagiri Suraj Kumar &nbsp;·&nbsp; Crafted with passion & React
          </p>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default App;