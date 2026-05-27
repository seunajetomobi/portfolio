'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '300+', label: 'Tickets Resolved' },
  { num: '99%', label: 'SLA Compliance' },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <motion.div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-3 border-t border-rule dark:border-dark-rule"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="px-4 sm:px-6 md:px-16 py-12 md:py-16 border-b sm:border-b-0 sm:border-r border-rule dark:border-dark-rule last:border-r-0"
          variants={itemVariants}
        >
          <div className="font-serif text-4xl md:text-5xl font-light leading-none text-ink dark:text-dark-ink mb-2 tracking-tight">
            {stat.num}
          </div>
          <div className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
