'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// Define skills by category
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
    ],
    icon: '💻',
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Firebase', level: 85 },
      { name: 'RESTful APIs', level: 85 },
    ],
    icon: '⚙️',
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Figma/Adobe XD', level: 75 },
      { name: 'Jest/React Testing Library', level: 65 },
      { name: 'Webpack/Vite', level: 70 },
      { name: 'Docker', level: 60 },
    ],
    icon: '🛠️',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 }
  }
};

const barVariants = {
  hidden: { width: 0 },
  visible: width => ({
    width: `${width}%`,
    transition: { 
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  })
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            My Skills
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-3xl w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-lg"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    variants={skillVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={barVariants}
                        className={`h-full rounded-full ${
                          catIndex === 0
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                            : catIndex === 1
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                            : 'bg-gradient-to-r from-blue-400 to-cyan-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 