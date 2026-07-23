import { Analytics } from "@vercel/analytics/next"
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Preloader from './sections/Preloader';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Research from './sections/Research';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const App = () => {
  const rootRef = useRef(null);
  const lenisRef = useRef(null);
  const [showPreloader] = useState(
    () => !sessionStorage.getItem('rsk-intro') && !prefersReducedMotion()
  );

  useEffect(() => {
    const reduceMotion = prefersReducedMotion();

    let lenis = null;
    let rafCallback = null;
    if (!reduceMotion) {
      lenis = new Lenis({ autoRaf: false, lerp: 0.1 });
      lenisRef.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      rafCallback = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(rafCallback);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      /* ── Intro ── */
      const intro = gsap.timeline();

      if (showPreloader) {
        sessionStorage.setItem('rsk-intro', '1');
        intro
          .from('[data-preloader-name]', {
            yPercent: 120,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.15,
          })
          .from('[data-preloader-rule]', { scaleX: 0, duration: 0.55, ease: 'power2.inOut' }, '-=0.35')
          .from('[data-preloader-tag]', { autoAlpha: 0, duration: 0.45 }, '-=0.3')
          .to('[data-preloader]', {
            yPercent: -100,
            duration: 0.75,
            ease: 'power3.inOut',
            delay: 0.35,
          })
          .set('[data-preloader]', { display: 'none' });
      }

      if (!reduceMotion) {
        intro
          .from(
            '[data-hero-line]',
            { yPercent: 112, duration: 1.05, ease: 'power4.out', stagger: 0.09 },
            showPreloader ? '-=0.35' : 0.1
          )
          .from(
            '[data-hero-fade]',
            { autoAlpha: 0, y: 22, duration: 0.8, ease: 'power3.out', stagger: 0.12 },
            '-=0.65'
          )
          .from('.nav', { autoAlpha: 0, y: -14, duration: 0.6, ease: 'power2.out' }, '-=0.6');
      }

      if (reduceMotion) return;

      /* ── Hero cover: page slides over the pinned hero ── */
      gsap.to('[data-hero-inner]', {
        scale: 0.94,
        yPercent: -5,
        autoAlpha: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.site-main',
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      });

      // Once the main content fully covers the hero, hide it so the
      // fixed contact panel is what shows at the end of the page.
      ScrollTrigger.create({
        trigger: '.site-main',
        start: 'top top',
        onEnter: () => gsap.set('.hero', { visibility: 'hidden' }),
        onLeaveBack: () => gsap.set('.hero', { visibility: 'visible' }),
      });

      /* ── Generic reveals ── */
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 36,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      /* ── Manifesto word scrub ── */
      gsap.from('[data-scrub-words] .w', {
        opacity: 0.1,
        stagger: 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-scrub-words]',
          start: 'top 78%',
          end: 'bottom 45%',
          scrub: true,
        },
      });

      /* ── Skills marquee ── */
      gsap.to('[data-ticker]', { xPercent: -50, duration: 32, repeat: -1, ease: 'none' });
    }, rootRef);

    return () => {
      ctx.revert();
      if (rafCallback) gsap.ticker.remove(rafCallback);
      lenis?.destroy();
      lenisRef.current = null;
    };
  }, [showPreloader]);

  const handleNavigate = (id) => {
    const lenis = lenisRef.current;
    const target =
      id === 'top'
        ? 0
        : id === 'contact'
          ? document.documentElement.scrollHeight
          : document.getElementById(id);
    if (target === null) return;

    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site" ref={rootRef}>
      {showPreloader && <Preloader />}
      <Nav onNavigate={handleNavigate} />
      <Hero />
      <main className="site-main">
        <Manifesto />
        <Research />
        <Projects />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  );
};

export default App;
