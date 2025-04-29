'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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
          
          <motion.div variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              I'm Alexander Husseini, a passionate software developer with a strong focus on creating clean, efficient, and user-friendly web applications. With a background in computer science and several years of industry experience, I specialize in building modern web solutions that not only look great but also perform excellently.
            </p>
            
            <p>
              My journey in software development began with a curiosity about how things work, which evolved into a passion for crafting digital experiences that solve real problems. I enjoy the challenge of taking complex requirements and turning them into elegant, intuitive solutions.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <p>
              I'm always open to new opportunities and collaborations where I can leverage my skills to create impactful solutions. Feel free to reach out if you'd like to discuss potential projects or just connect!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 