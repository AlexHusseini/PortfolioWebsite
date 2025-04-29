'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'HTML / CSS', level: 95 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'RESTful APIs', level: 90 },
    { name: 'Firebase', level: 80 },
  ],
  tools: [
    { name: 'Git / GitHub', level: 90 },
    { name: 'Webpack / Vite', level: 80 },
    { name: 'Jest / Testing Library', level: 80 },
    { name: 'CI/CD', level: 75 },
    { name: 'Docker', level: 70 },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowProgress(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & Technologies' },
  ];

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Skills & Expertise
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto" ref={ref}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 dark:bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Skills Progress Bars */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {skills[activeTab].map((skill, index) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill"
                    style={{ 
                      width: showProgress ? `${skill.level}%` : '0%',
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Redux', 'SASS/SCSS', 'GraphQL', 'AWS', 'Responsive Design', 
                'UI/UX', 'Agile/Scrum', 'Figma', 'Material UI', 'Bootstrap',
                'SEO', 'Performance Optimization', 'Cross-browser Compatibility',
                'Accessibility'
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 