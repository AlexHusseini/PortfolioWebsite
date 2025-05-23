'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    id: 1,
    title: 'Liteweight – AI-Powered Fitness App',
    period: '2025 (In Progress)',
    role: 'Mobile Developer',
    description: 'A cross-platform mobile app developed in collaboration with a partner to help users track workouts, bodyweight, sleep, and overall fitness goals. Built using Flutter, the app stores all data locally through SQLite and provides features like structured workout logging (sets, reps, RIR), a dynamic calendar, and a stats screen to visualize muscle group volume trends.\n\nA standout feature is the AI assistant, powered by a backend hosted on Vercel using serverless functions connected to OpenAI\'s GPT-3.5 Turbo, with a fallback to Hugging Face. The chatbot generates personalized workout plans, offers nutrition feedback, and tracks user progress. The app also integrates with Apple HealthKit and Android Health Connect to automatically sync fitness and health metrics.\n\nWe tested the app on both iOS and Android, using Xcode to ensure compatibility across iOS devices. The project was designed with an offline-first experience, secure local storage, and plans for future premium features and social sharing tools.',
    skills: ['Flutter', 'Dart', 'SQLite', 'GPT API Integration', 'HealthKit', 'Health Connect', 'Secure Storage', 'Xcode (iOS Testing)', 'Mobile App Development', 'Collaboration'],
    category: 'mobile',
    githubUrl: 'https://github.com/AlexHusseini/liteweight',
    liveUrl: null,
  },
  {
    id: 2,
    title: 'TSMocker – TypeScript Mock Data Generator',
    period: '2025',
    role: 'CLI Tool Developer',
    description: 'A powerful TypeScript-based CLI tool for generating realistic mock data from TypeScript interfaces. TSMocker automatically analyzes TypeScript interfaces and generates appropriate mock data that matches the type structure.\n\nThe tool supports various types including primitive types, complex types (arrays, objects, unions), date objects, and optional properties. It provides multiple output formats (JSON, CSV) and features smart data generation with context-aware string generation for emails, names, and addresses, realistic number ranges, appropriate date formats, and nested object structures.\n\nTSMocker can be installed globally or locally via npm and offers a simple command-line interface with options for specifying the schema file, interface name, number of mock objects, output format, and output file. The tool is built with a modular architecture including a TypeScript interface parser, mock data generator, and CLI entry point, making it extensible and maintainable.',
    skills: ['TypeScript', 'Node.js', 'CLI Development', 'Type Analysis', 'Code Generation', 'Unit Testing', 'npm Package', 'Data Mocking', 'Developer Tools'],
    category: 'tool',
    githubUrl: 'https://github.com/AlexHusseini/tsmocker',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'Options Alpha Toolkit – Quantitative Options Research Program',
    period: '2024-2025',
    role: 'Quantitative Developer',
    description: 'A Python-based desktop application developed to evaluate and rank high-alpha options contracts by modeling market structure, volatility conditions, and execution costs. The program calculates custom alpha metrics—TAS (True Alpha Score), RA-SAS (Risk-Adjusted Scalping Alpha Score), and Expected Return—across option chains to surface the most statistically favorable contracts on SPX, QQQ, and other major instruments.\n\nThe system supports CSV-based batch analysis and enables filtering by DTE, delta, open interest, and implied volatility skew. It features a PyQt5 interface with embedded Matplotlib for curve plotting, interactive visualizations, and parameter tuning. A Monte Carlo simulation engine is also integrated to approximate P&L under stochastic price paths using Greek-based adjustments.\n\nThis project emphasized core software engineering concepts including event-driven programming, data pipeline design, numerical modeling, and GUI development within a standalone cross-platform environment.',
    skills: ['Python', 'PyQt5', 'NumPy', 'Pandas', 'Matplotlib', 'SciPy', 'Object-Oriented Design', 'Event-Driven Programming', 'Monte Carlo Simulation', 'Data Visualization', 'CSV Parsing and Processing', 'GUI Development'],
    category: 'quantitative',
    githubUrl: 'https://github.com/AlexHusseini/options-alpha-toolkit',
    liveUrl: null,
  },
  {
    id: 4,
    title: 'Project Management System',
    period: '2025',
    role: 'Full Stack Developer',
    description: 'A collaborative desktop application built using Python with a Tkinter GUI and PostgreSQL for data storage. The system was designed to help project teams manage everything from user access to risk tracking and requirements management.\n\nFeatures include secure login and registration with role-based access, project and team management modules, risk tracking with a visual risk matrix, and an effort tracking module that logs development hours across five phases. The application also supports data export in CSV and PDF formats for reporting purposes.\n\nAs the group leader, I coordinated development efforts and personally built core components such as the login/registration system, the interactive risk matrix visualization, the requirements tracking interface, and the export functionalities. I implemented SQL parameterization for security, integrated real-time error handling, and ensured a user-friendly design. The project includes Docker configuration for PostgreSQL and startup scripts to streamline setup on any machine.',
    skills: ['Python', 'Tkinter', 'PostgreSQL', 'SQL', 'Docker', 'GUI Development', 'Data Export', 'User Authentication', 'Collaboration'],
    category: 'desktop',
    githubUrl: 'https://github.com/AlexHusseini/SWEmanagement',
    liveUrl: null,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0,
        delay: 0 
      },
    }),
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Projects
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              ref={ref} 
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.02,
                y: -4,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 relative mb-10 last:mb-0 cursor-pointer hover:shadow-lg"
              style={{ 
                transformOrigin: 'center',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 block">
                  {project.period}
                </span>
                <div className="flex space-x-3">
                  {project.id === 1 ? (
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <OpenInNewIcon fontSize="small" />
                      <span className="text-sm">App Link</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 ml-1">(Coming Soon)</span>
                    </a>
                  ) : (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <GitHubIcon fontSize="small" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <OpenInNewIcon fontSize="small" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 pr-32">
                {project.title}
              </h3>
              <div className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                {project.role} • <span className="capitalize">{project.category}</span>
              </div>
              
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 