'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Windows & Active Directory', percentage: 92 },
  { name: 'Network Administration', percentage: 85 },
  { name: 'Cloud (Azure / M365)', percentage: 78 },
  { name: 'Help Desk & ITSM', percentage: 88 },
  { name: 'Scripting (PowerShell)', percentage: 72 },
  { name: 'Cybersecurity Basics', percentage: 80 },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="border-t border-rule dark:border-dark-rule bg-paper-warm dark:bg-dark-paper-warm">
      <div className="px-4 sm:px-6 md:px-16 py-12 md:py-24">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left column */}
          <motion.div variants={itemVariants}>
            <span className="text-xs uppercase tracking-widest text-ink-faint dark:text-dark-ink-faint mb-4 block font-light">
              Skills
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-ink dark:text-dark-ink mb-6">
              Core proficiencies
            </h2>
            <p className="text-base text-ink-light dark:text-dark-ink-light leading-relaxed font-light">
              A broad technical skillset honed through hands-on support roles, continuous learning, and industry certifications.
            </p>
          </motion.div>

          {/* Right column - Skill bars */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <span className="text-xs uppercase tracking-wider text-ink dark:text-dark-ink font-normal min-w-max sm:min-w-40">
                  {skill.name}
                </span>
                <div className="flex-1 h-px bg-rule dark:bg-dark-rule relative overflow-hidden">
                  <motion.div
                    className="h-[3px] bg-ink dark:bg-dark-ink absolute top-[-1px] left-0"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + index * 0.1,
                    }}
                    style={{ originX: 0 }}
                  />
                </div>
                <span className="text-xs text-ink-faint dark:text-dark-ink-faint min-w-max">
                  {skill.percentage}%
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
