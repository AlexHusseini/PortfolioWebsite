'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    description: 'Lead the development of responsive web applications using React, Next.js, and TypeScript. Implemented state management solutions with Redux and Context API. Collaborated with designers to create intuitive user interfaces and improved website performance by 40%.',
    type: 'work',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Solutions Agency',
    location: 'New York, NY',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed and maintained client websites using React, JavaScript, and CSS frameworks. Worked in agile teams to deliver high-quality web applications. Integrated REST APIs and implemented responsive designs for mobile and desktop platforms.',
    type: 'work',
  },
  {
    id: 3,
    title: 'Web Development Intern',
    company: 'StartUp Ventures',
    location: 'Remote',
    period: 'Jun 2019 - Feb 2020',
    description: 'Assisted in developing front-end components using HTML, CSS, and JavaScript. Participated in code reviews and collaborated with the development team to implement new features and fix bugs.',
    type: 'work',
  },
  {
    id: 4,
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    location: 'Boston, MA',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focused on web development, algorithms, and data structures. Completed capstone project on building interactive web applications using modern JavaScript frameworks.',
    type: 'education',
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Experience & Education
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative border-l-2 border-blue-400 dark:border-blue-500 ml-6"
          >
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id} 
                variants={itemVariants}
                className="mb-12 ml-8 relative"
              >
                <div className="absolute -left-14 mt-1.5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                    {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                  </div>
                </div>
                
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
                    {exp.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 font-medium mt-1">
                    {exp.company} • {exp.location}
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/pdf/alexander-husseini-resume.pdf" 
            download
            className="button button-primary inline-flex items-center gap-2"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
} 