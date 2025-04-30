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
    title: 'Alpha Options Tool – Quantitative Options Research Program',
    period: '2024-2025',
    role: 'Quantitative Developer',
    description: 'A Python-based research program developed to identify high-alpha options contracts by analyzing market structure, volatility, and pricing inefficiencies. The program processes real-time and historical data to surface contracts with the best potential for directional plays in SPX, QQQ, and other major indices.\n\nEngineered custom metrics such as TAS (Time-Adjusted Signal), RA-SAS (Risk-Adjusted Signal Alpha Score), and ER (Expected Return) to quantify trade opportunities. These signals are evaluated across factors like bid/ask slippage, open interest, delta exposure, gamma behavior, and theta decay to rank contracts based on potential alpha per dollar risked.\n\nThe tool supports filtering by DTE ranges, contract liquidity, and volatility skew to prioritize scalable, low-friction setups. Through this project, I deepened my understanding of quantitative modeling, options pricing mechanics, and data-driven signal design.',
    skills: ['Python', 'NumPy', 'Pandas', 'Data Analysis', 'Financial Modeling', 'Algorithm Design'],
    category: 'quantitative',
    githubUrl: 'https://github.com/AlexHusseini/options-alpha-toolkit',
    liveUrl: null,
  },
  {
    id: 3,
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
                scale: 1.01,
                y: -2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.06)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 relative mb-10 last:mb-0 cursor-pointer"
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