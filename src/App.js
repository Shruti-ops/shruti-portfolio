import React, { useEffect } from "react";
import './styles/index.css';
import './styles/custom.css';
import 'animate.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ['#7c3aed', '#ec4899', '#3b82f6', '#8b5cf6'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#7c3aed',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            out_mode: 'out'
          }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 200 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className="gradient-bg min-h-screen">
      <div id="particles-js" className="particles-container"></div>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;
