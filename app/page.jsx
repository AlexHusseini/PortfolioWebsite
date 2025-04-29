'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      {isVisible && <ScrollToTop />}
    </main>
  );
} 