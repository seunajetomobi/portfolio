'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    num: '01',
    title: 'Hardware & Software Support',
    description:
      'Diagnosing and resolving hardware faults, OS installations, software configuration, and driver issues across Windows, macOS, and Linux environments.',
    color: 'from-blue-500 to-cyan-500',
    darkColor: 'dark:from-blue-400 dark:to-cyan-400',
  },
  {
    num: '02',
    title: 'Network Troubleshooting',
    description:
      'LAN/WAN diagnostics, Wi-Fi optimisation, VPN configuration, and connectivity issue resolution to keep your team online and productive.',
    color: 'from-purple-500 to-pink-500',
    darkColor: 'dark:from-purple-400 dark:to-pink-400',
  },
  {
    num: '03',
    title: 'Endpoint Security',
    description:
      'Deploying and managing antivirus, patch management, and access control policies to protect endpoints from modern security threats.',
    color: 'from-cyan-500 to-blue-500',
    darkColor: 'dark:from-cyan-400 dark:to-blue-400',
  },
  {
    num: '04',
    title: 'Hardware Procurement & Maintenance',
    description:
      'Strategic hardware acquisition planning, vendor management, lifecycle optimization, and preventive maintenance programs for IT infrastructure.',
    color: 'from-violet-500 to-purple-500',
    darkColor: 'dark:from-violet-400 dark:to-purple-400',
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="border-t border-rule dark:border-dark-rule">
      <div className="px-4 sm:px-6 md:px-16 py-12 md:py-24">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 mb-12 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-ink dark:text-dark-ink">
            What I do
          </h2>
          <span className="text-xs uppercase tracking-widest text-ink-faint dark:text-dark-ink-faint whitespace-nowrap">
            Services
          </span>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-slate-700 p-6 md:p-8 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800"
              variants={itemVariants}
            >
              {/* Gradient accent background */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} ${service.darkColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 rounded-lg blur`}></div>
              
              {/* Top accent line with gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} ${service.darkColor}`}></div>

              <p className="text-xs text-ink-faint dark:text-dark-ink-faint mb-4 font-light tracking-wide uppercase">
                {service.num}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-normal leading-snug mb-4 text-ink dark:text-dark-ink bg-gradient-to-r via-ink dark:via-dark-ink bg-clip-text">
                {service.title}
              </h3>
              <p className="text-sm text-ink-light dark:text-dark-ink-light leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
