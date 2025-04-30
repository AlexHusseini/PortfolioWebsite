'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = {
  frontend: [
    'React',
    'JavaScript / TypeScript',
    'HTML / CSS',
    'Next.js',
    'Tailwind CSS',
    'Redux',
    'SASS/SCSS',
    'Responsive Design',
    'UI/UX',
    'Material UI',
    'Bootstrap'
  ],
  backend: [
    'Python',
    'Java',
    'C#',
    'Node.js',
    'Express',
    'MongoDB',
    'RESTful APIs',
    'Firebase',
    'GraphQL',
    'SQL Databases',
    'Authentication & Authorization',
    'API Development'
  ],
  tools: [
    'Git / GitHub',
    'Webpack / Vite',
    'Jest / Testing Library',
    'CI/CD',
    'Docker',
    'AWS',
    'Agile/Scrum',
    'Figma',
    'Performance Optimization',
    'Cross-browser Compatibility',
    'Accessibility',
    'SEO'
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
          
          {/* Skills List */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {skills[activeTab].map((skill) => (
              <motion.div 
                key={skill} 
                variants={itemVariants}
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 