import Grainient from '../components/Grainient';
import { site } from '../data';

const Hero = () => (
  <section className="hero" id="top" aria-label="Introduction">
    <div className="hero-bg" aria-hidden="true">
      <Grainient
        className="hero-grainient"
        color1="#3b3a36"
        color2="#22211e"
        color3="#0e0e0c"
        timeSpeed={0.16}
        colorBalance={-0.1}
        warpStrength={1.1}
        warpFrequency={3.6}
        warpSpeed={1.2}
        warpAmplitude={34}
        blendAngle={-24}
        blendSoftness={0.22}
        rotationAmount={300}
        noiseScale={2.2}
        grainAmount={0.09}
        grainScale={2.6}
        grainAnimated
        contrast={1.18}
        saturation={0}
        zoom={0.94}
      />
      <div className="hero-veil" />
    </div>

    <div className="hero-inner" data-hero-inner>
      <header className="hero-topline mono" data-hero-fade>
        <span>{site.name}</span>
        <span>Folio — 2026</span>
      </header>

      <h1 className="hero-title">
        <span className="hero-line">
          <span className="hero-word" data-hero-line>Web</span>
        </span>
        <span className="hero-line">
          <span className="hero-word" data-hero-line>Developer</span>
        </span>
        <span className="hero-line hero-line-serif">
          <span className="hero-word" data-hero-line>&amp; research scholar</span>
        </span>
      </h1>

      <footer className="hero-foot" data-hero-fade>
        <p className="hero-blurb">
          Full-stack builds in React, Vue and Node — now pursuing a PhD in
          computer science, studying artificial intelligence at Central
          University of Karnataka.
        </p>
        <div className="hero-meta mono">
          <span>{site.location}</span>
          <span>PhD Scholar, CUK</span>
          <span className="hero-scroll-cue" aria-hidden="true">Scroll ↓</span>
        </div>
      </footer>
    </div>
  </section>
);

export default Hero;
