'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    num: '01',
    title: 'Hardware & Software Support',
    description:
      'Diagnosing and resolving hardware faults, OS installations, software configuration, and driver issues across Windows, macOS, and Linux environments.',
  },
  {
    num: '02',
    title: 'Network Troubleshooting',
    description:
      'LAN/WAN diagnostics, Wi-Fi optimisation, VPN configuration, and connectivity issue resolution to keep your team online and productive.',
  },
  {
    num: '03',
    title: 'Endpoint Security',
    description:
      'Deploying and managing antivirus, patch management, and access control policies to protect endpoints from modern security threats.',
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
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-rule dark:border-dark-rule divide-y md:divide-y-0 md:divide-x divide-rule dark:divide-dark-rule"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 group hover:bg-accent-pale dark:hover:bg-dark-accent-pale transition-colors duration-300"
              variants={itemVariants}
            >
              <p className="text-xs text-ink-faint dark:text-dark-ink-faint mb-4 font-light tracking-wide">
                {service.num}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-normal leading-snug mb-4 text-ink dark:text-dark-ink">
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
