'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 md:pt-20">
      {/* Left side */}
      <motion.div
        className="flex flex-col justify-center px-4 sm:px-6 md:px-16 py-12 md:py-0 md:border-r border-rule dark:border-dark-rule"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xs font-light uppercase tracking-widest text-accent dark:text-dark-accent mb-6"
          variants={itemVariants}
        >
          IT Support Specialist
        </motion.p>

        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight text-ink dark:text-dark-ink mb-2"
          variants={itemVariants}
        >
          Keeping <em className="font-serif italic text-accent dark:text-dark-accent not-italic">systems</em>
          <br />
          running smoothly
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-ink-light dark:text-dark-ink-light font-light leading-relaxed mt-6 max-w-lg"
          variants={itemVariants}
        >
          Dedicated to solving technical challenges, empowering end users, and building reliable infrastructure — one ticket at a time.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap mt-12"
          variants={itemVariants}
        >
          <Link href="#contact" className="btn-primary">
            Get in touch →
          </Link>
          <Link href="#services" className="btn-ghost">
            My services
          </Link>
        </motion.div>
      </motion.div>

      {/* Right side - Photo placeholder */}
      <div className="relative h-56 md:h-auto flex flex-col items-center justify-center md:min-h-full">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* Avatar image */}
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent dark:border-dark-accent flex-shrink-0 shadow-lg">
            <Image
              src="/avatar.jpg"
              alt="Seun Ajetomobi - IT Support Specialist"
              width={320}
              height={320}
              priority
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                filter: 'grayscale(100%) contrast(1.2) brightness(0.95)',
              }}
            />
          </div>
        </div>

        {/* Corner label */}
        <div className="absolute bottom-4 right-4 text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint">
          Available for hire
        </div>
      </div>
    </section>
  );
}
