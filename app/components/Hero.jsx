'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import Link from 'next/link';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      } 
    },
    hover: { 
      scale: 1.1, 
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  const bgCircleVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const scrollButtonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    hover: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 1.5 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8 + (custom * 0.1),
        ease: [0.25, 0.1, 0.25, 1],
      }
    }),
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const backgroundCircleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 0.2, 0.1],
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background decorative elements */}
      <motion.div
        variants={bgCircleVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-70 filter blur-3xl"
      />
      <motion.div
        variants={bgCircleVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-70 filter blur-3xl"
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="order-2 lg:order-1"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full mb-4"
            >
              Full-Stack Developer
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6"
            >
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                digital experiences
              </span> that matter
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              I'm a passionate web developer specializing in building high-performance, 
              user-friendly applications with modern technologies.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex gap-4 mb-8">
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Connect with me:</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub size={20} />, url: 'https://github.com' },
                  { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com' },
                  { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Developer"
                fill
                objectFit="cover"
                priority
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        variants={scrollButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <FaArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
} 