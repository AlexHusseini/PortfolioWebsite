'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaServer, FaLaptopCode, FaMobileAlt, FaCloudUploadAlt } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    rotate: -5 
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.1, 0.25, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'TypeScript', level: 75 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'MongoDB', level: 70 },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: level => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn more about my background, skills, and what drives me as a developer.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={imageVariants}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <motion.div 
              className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Web Developer & UI/UX Enthusiast
            </motion.h3>
            <motion.p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate full-stack developer with 5+ years of experience building web applications 
              that are not only functional but also beautiful and intuitive.
            </motion.p>
            <motion.p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development started with a curiosity about how websites work, which led 
              me to dive deep into various technologies and frameworks. I enjoy solving complex problems 
              and creating solutions that make a real difference.
            </motion.p>
            <motion.p className="text-gray-600 dark:text-gray-400">
              Outside of coding, I enjoy hiking, photography, and exploring new coffee shops. I believe 
              that diverse experiences contribute to a more creative approach to problem-solving.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="mb-4"
                variants={itemVariants}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                    variants={skillBarVariants}
                    custom={skill.level}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Problem Solver</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I enjoy tackling complex problems and finding elegant solutions through creative thinking and analytical approaches.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Continuous Learner</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I'm constantly exploring new technologies and methodologies to stay at the cutting edge of web development.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
          >
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Team Player</h4>
            <p className="text-gray-600 dark:text-gray-400">
              I thrive in collaborative environments and enjoy working with cross-functional teams to deliver exceptional results.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
} 