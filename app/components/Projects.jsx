'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment processing using Stripe.',
    image: '/images/project-ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    githubUrl: 'https://github.com/AlexHusseini/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform-demo.com',
  },
  {
    id: 2,
    title: 'Task Management Dashboard',
    description: 'A responsive task management application with drag-and-drop interface, real-time updates, and team collaboration features.',
    image: '/images/project-task-manager.jpg',
    tags: ['React', 'Firebase', 'Redux', 'Material UI', 'React DnD'],
    githubUrl: 'https://github.com/AlexHusseini/task-management',
    liveUrl: 'https://task-manager-demo.com',
  },
  {
    id: 3,
    title: 'Real Estate Listing App',
    description: 'A property listing platform with search filters, interactive maps, and virtual tour capabilities for real estate agents and buyers.',
    image: '/images/project-realestate.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Google Maps API', 'AWS S3'],
    githubUrl: 'https://github.com/AlexHusseini/realestate-app',
    liveUrl: 'https://realestate-demo.com',
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            My Projects
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </div>
        
        <motion.div
          ref={ref}
          variants={staggerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <div className="font-medium">Project Image</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    aria-label="View source code on GitHub"
                  >
                    <GitHubIcon fontSize="small" /> Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    aria-label="View live demo"
                  >
                    <OpenInNewIcon fontSize="small" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AlexHusseini" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button-secondary inline-flex items-center gap-2"
          >
            <GitHubIcon fontSize="small" /> View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 