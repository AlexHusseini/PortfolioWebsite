'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    period: '2023',
    role: 'Full Stack Developer',
    description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment processing using Stripe. Implemented responsive design for optimal user experience across devices. Used Redux for state management and integrated with a headless CMS for product content.\n\nTechnologies: React, Node.js, MongoDB, Express, Stripe API, Redux, Jest, AWS',
    category: 'fullstack',
    githubUrl: 'https://github.com/AlexHusseini/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform-demo.com',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    period: '2022',
    role: 'Frontend Developer',
    description: 'A responsive task management application with drag-and-drop interface, real-time updates, and team collaboration features. Implemented authentication with multiple providers and real-time notifications for task updates and team activities.\n\nTechnologies: React, Firebase, Redux, Material UI, React DnD, TypeScript, GitHub Actions',
    category: 'frontend',
    githubUrl: 'https://github.com/AlexHusseini/task-management',
    liveUrl: 'https://task-manager-demo.com',
  },
  {
    id: 3,
    title: 'Real Estate Listing API',
    period: '2022',
    role: 'Backend Developer',
    description: 'A property listing platform API with search filters, interactive maps integration, and virtual tour capabilities for real estate agents and buyers. Implemented geocoding and property search algorithms with efficient database indexing for fast results.\n\nTechnologies: Node.js, Express, MongoDB, Google Maps API, AWS S3, Docker, Jest, Swagger',
    category: 'backend',
    githubUrl: 'https://github.com/AlexHusseini/realestate-app',
    liveUrl: null,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.2 
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
        
        <div className="max-w-4xl mx-auto">
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
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8 relative mb-8 last:mb-0 cursor-pointer ${
                index % 2 === 0 ? 'md:ml-0 md:mr-16' : 'md:ml-16 md:mr-0'
              }`}
              style={{ 
                transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 block">
                  {project.period}
                </span>
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <GitHubIcon fontSize="small" />
                    <span className="text-sm">Code</span>
                  </a>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 