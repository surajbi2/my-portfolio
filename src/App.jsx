import React from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiBook, FiCode,
  FiBriefcase, FiFolder, FiArrowUpRight
} from 'react-icons/fi';
import { FaCode, FaVuejs } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact, SiNodedotjs, SiPython, SiJavascript,
  SiTailwindcss, SiMongodb, SiMysql, SiFramer,
  SiGit, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiGithub, SiStreamlit, SiPostman, SiSelenium
} from 'react-icons/si';
import { educationData, skillCategories, internships, projects } from './data';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-gray-100 min-h-screen">
      <Nav />
      {/* <Navbar /> */}
      <Hero />

      <Section icon={<FiBook />} title="Education">
        <EducationTimeline />
      </Section>

      <Section icon={<FiCode />} title="Skills">
        <SkillsGrid />
      </Section>

      <Section icon={<FiBriefcase />} title="Internships">
        <InternshipList />
      </Section>

      <Section icon={<FiFolder />} title="Projects">
        <ProjectGallery />
      </Section>

      <Footer />
    </div>
  );
};
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 150;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

// import GooeyNav from './components/Nav'

// update with your own items
// const items = [
//   { label: "Home", href: "#" },
//   { label: "About", href: "#" },
//   { label: "Contact", href: "#" },
// ];

// const Navbar=()=>{
// return(
// <div style={{ height: '600px', position: 'relative' }}>
//   <GooeyNav
//     items={items}
//     animationTime={600}
//     pCount={15}
//     minDistance={20}
//     maxDistance={42}
//     maxRotate={75}
//     colors={[1, 2, 3, 1, 2, 3, 1, 4]}
//     timeVariance={300}
//   />
// </div>)
// }

// Navbar


const Nav = () => {


  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-white/10 z-50"
    >
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl font-bold mb-2 md:mb-0 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          Ramagiri Suraj Kumar
        </motion.h1>
        <div className="flex md:space-x-4">
          {['home', 'education', 'skills', 'internships', 'projects', 'contact'].map((link) => (
            <motion.button
              type="button"
              key={link}
              onClick={() => scrollToSection(link)}
              whileHover={{ scale: 1.05 }}
              className="md:px-3 px-1 py-2 relative group text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => (
  <section id="home" className="pt-32 pb-16 md:px-6 px-2 relative">

    <div className="container mx-auto text-center relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 opacity-10"
        >
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float-delayed"></div>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6 max-w-2xl mx-auto relative"
        >
        {/* Column layout with staggered words */}
        <div className="flex items-center gap-0">
          {["Creative", "Full Stack", "Developer"].map((word, index) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 30, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "backOut"
              }}
              whileHover={{
                scale: 1.05,
                backgroundImage: 'linear-gradient(to right, #22d3ee, #38bdf8)',
                transition: { duration: 0.3 },
                cursor: "grab"
              }}
              className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent md:text-5xl text-2xl font-bold leading-tight hover:text-cyan-200 transition-all cursor-auto"
            >
              {word.split(" ").map((part, i) => (
                <span key={i} className="inline-block mr-2">
                  {part}
                </span>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Animated subtitle */}
        <motion.p
          className="text-xl text-gray-300/90 tracking-wide relative inline-block mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative pb-1">
            Building things to web, passionate about learning new technologies and frameworks
            <motion.span
              className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              />
          </span>
        </motion.p>

        {/* Animated button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.2 }}
          className="mt-8 flex justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("contact")} // "contact" is the footer ID
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 text-white group relative overflow-hidden hover:cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <div className="relative z-10 flex items-center gap-2">
              <FiMail className="text-lg transition-transform group-hover:scale-110" />
              <span>Start a Conversation</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </button>
        </motion.div>

      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className='w-24 h-24 md:w-44 md:h-44 lg:w-44 lg:h-44 absolute bottom-10 right-30 rounded-full overflow-hidden border-4 border-cyan-400/20 shadow-lg shadow-cyan-400/30 animate-float'>
      <img src="profile.jpg" alt="profile" />
    </motion.div>
  </section>
);

const Section = ({ title, children, icon }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="py-16 px-6 relative"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
        {React.cloneElement(icon, { className: "text-cyan-400 text-2xl" })}
        {title}
      </h2>
      {children}
    </div>
  </motion.section>
);

// Education Timeline
const EducationTimeline = () => (
  <div id='education' className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/30 before:to-transparent">
    {educationData.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-4 group"
      >
        <div className={`md:text-right pt-4 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
          <h3 className="text-xl font-bold text-cyan-300">{edu.degree}</h3>
          <p className="text-gray-300/90">{edu.institution}</p>
          <p className="text-sm text-gray-400 mt-2">{edu.duration}</p>
        </div>
        <div className="pb-8">
          <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/20 backdrop-blur-sm">
            <p className="font-mono text-cyan-400 text-lg">{edu.grade}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// Skills
const skillIcons = {
  'React': SiReact, 'Node.js': SiNodedotjs, 'Python': SiPython, 'JavaScript': SiJavascript, 'Vue.js': FaVuejs,
  'Tailwind CSS': SiTailwindcss, 'C Programming': FaCode, 'MongoDB': SiMongodb, 'MySQL': SiMysql, 'Streamlit': SiStreamlit,
  'Postman': SiPostman, 'Git': SiGit, 'HTML5': SiHtml5, 'CSS3': SiCss3, 'Bootstrap': SiBootstrap, 'Express.js': SiExpress,
  'VS Code': VscVscode, 'GitHub': SiGithub, 'Framer Motion': SiFramer, 'Selenium': SiSelenium
};

const SkillsGrid = () => (
  <section id="skills" className="py-4">
    
    <div className="space-y-8 ">
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category}>
          {/* Category Title */}
          <h3 className="text-xl md:text-2xl text-gray-300 font-semibold mb-4 border-l-4 border-cyan-400 pl-3">
            {category}
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            {skills.map((skill) => {
              const SkillIcon = skillIcons[skill] || FiCode;
              return (
                <motion.div
                  key={skill}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/5 hover:border-cyan-400/30 transition-all flex flex-col items-center justify-center gap-2 backdrop-blur-sm hover:cursor-pointer"
                >
                  <SkillIcon className="text-3xl text-cyan-400 transition-transform hover:scale-110 " />
                  <span className="text-gray-300/90">{skill}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </section>
);


// Internships
const InternshipList = () => (
  <div id='internships' className="grid gap-6 md:grid-cols-2">
    {internships.map((internship, index) => (
      <motion.div
        key={index}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="p-6 bg-black/30 rounded-lg shadow-lg border border-white/10"
      >
        <h3 className="text-xl font-bold text-cyan-300">{internship.title}</h3>
        <p className="text-gray-300 mt-2">{internship.company}</p>
        <p className="text-sm text-gray-500 mt-2">{internship.duration}</p>
        <p className="mt-4 text-gray-400">{internship.description}</p>
      </motion.div>
    ))}
  </div>
);

// Projects
const ProjectGallery = () => (
  <div
    id='projects'
    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-cyan-400/20 transition-all backdrop-blur-sm"
      >
        <h3 className="text-xl font-bold text-cyan-300">{project.title}</h3>
        <p className="text-sm text-cyan-400/90 mt-2">{project.tech}</p>
        <p className="mt-4 text-gray-300/90">{project.description}</p>
        {project.link && (
          <motion.a
            href={project.link}
            target='_blank'
            whileHover={{ x: 5 }}
            className=" mt-4 text-cyan-400 hover:text-cyan-300 flex items-center gap-2 group"
          >
            <span>Explore Project</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        )}
      </motion.div>
    ))}
  </div>
);

// Footer
const Footer = () => (
  <footer id="contact" className="bg-gray-900/50 py-12 mt-16 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: FiGithub, link: 'https://github.com/surajbi2' },
            { icon: FiLinkedin, link: 'https://www.linkedin.com/in/suraj-kumar-ramagiri-8b47411a2/' },
            { icon: FiMail, link: 'mailto:ramagirisurajkumar@gmail.com' }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -5, scale: 1.1 }}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400/80 tracking-wide">
          © {new Date().getFullYear()} Ramagiri Suraj Kumar. Crafted with passion and React
        </p>
      </div>
    </div>
  </footer>
);

export default App;