import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectsStack.css';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  { id: 1, title: "LAWLITE", desc: "A generative AI solution for demystifying legal documents. It simplifies complex legal jargon into understandable language.", tech: ["Python", "React", "FastAPI", "Gemini API"] },
  { id: 2, title: "SNAP CV", desc: "An intelligent resume builder that helps students create ATS-friendly CVs using AI-driven suggestions.", tech: ["React", "Node.js", "MongoDB", "NLP"] },
  { id: 3, title: "PRICE TRACER", desc: "Online agriculture product price tracing system designed to provide real-time market data to farmers.", tech: ["React", "Flask", "MySQL", "BeautifulSoup"] }
];

const ProjectsStack = () => {
  const componentRef = useRef();
  const containerRef = useRef();

  useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    // Set initial state: Card 0 is visible, others are below and invisible
    gsap.set(cards, { 
      transformOrigin: "top center" 
    });
    
    gsap.set(cards.slice(1), { 
      yPercent: 100, 
      opacity: 0, 
      scale: 0.9 
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        pin: true,
        start: "top top",
        // Total scroll length: more cards = more scroll distance
        end: `+=${cards.length * 100}%`, 
        scrub: 1,
      }
    });

    cards.forEach((card, i) => {
      if (i > 0) {
        tl.to(card, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          zIndex: i, // Ensures new card comes to front
          duration: 1,
          ease: "power2.out"
        }, "-=0.5") // Overlap for smoothness
        
        // Push the PREVIOUS card back and blur it
        .to(cards[i - 1], {
          scale: 0.85,
          opacity: 0.3,
          y: -50,
          filter: "blur(10px)",
          duration: 1,
          ease: "power2.out"
        }, "<"); // Starts at the same time as the card above
      }
    });
  }, componentRef);
  
  return () => ctx.revert();
}, []);

  return (
    <section ref={componentRef} className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Selected Works</h2>
        <div className="scroll-indicator">Scroll to Explore</div>
      </div>

      <div className="cards-wrapper" ref={containerRef}>
        {projectData.map((p, i) => (
          <div key={p.id} className="project-card">
            <div className="card-inner">
              <div className="card-left">
                <span className="project-index">0{i + 1} / 0{projectData.length}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="tech-stack">
                  {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <button className="cta-button">View Case Study</button>
              </div>
              
              <div className="card-right">
                <div className="visual-container">
                  <div className="mockup-frame">
                    <div className="glow-effect" />
                    <span className="placeholder-text">Live Preview coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsStack;