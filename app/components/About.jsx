'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const highlights = [
  { label: 'Current role', value: 'Software Engineer, WitnessAI' },
  { label: 'Education', value: 'Software Engineering, KSU' },
  { label: 'Focus', value: 'Go, TypeScript, product integrations' },
];

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-4 mb-12">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm text-center"
              >
                <div className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                  {item.label}
                </div>
                <div className="text-gray-800 dark:text-gray-100 font-semibold">
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              I&apos;m Alexander Husseini, a software engineer at WitnessAI working on the integrations that power the company&apos;s product suite. I write Go and TypeScript, own test coverage for new work, and care about shipping code that sales and customers can actually rely on.
            </p>
            
            <p>
              Before converting to full-time, I interned on browser-based JavaScript tools and Chrome extensions, digging through DOM edge cases, REST APIs, and automated tests. On the side I build full-stack apps, CLI tools, and quantitative research programs, from Flutter and Firebase to Python, PostgreSQL, and Go.
            </p>
            
            <p>
              I&apos;m finishing a Software Engineering degree with a Cybersecurity minor at Kennesaw State University. When I&apos;m not at work, I&apos;m usually shipping a side project, learning a new tool, or tightening something I already built.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
