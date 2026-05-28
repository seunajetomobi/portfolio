'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xgoqdnwq');

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
    <section id="contact" className="border-t border-rule dark:border-dark-rule">
      <div className="px-4 sm:px-6 md:px-16 py-12 md:py-24">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left side */}
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-ink dark:text-dark-ink mb-6 leading-snug">
              Let's work <em className="font-serif italic text-accent dark:text-dark-accent not-italic">together</em>
            </h2>
            <p className="text-base text-ink-light dark:text-dark-ink-light leading-relaxed font-light mb-8">
              Whether you need ongoing IT support, a one-time fix, or a consultation on your infrastructure — I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint mb-2">
                  Email
                </p>
                <a
                  href="mailto:info@seunajetomobi.com"
                  className="text-base text-ink dark:text-dark-ink hover:text-accent dark:hover:text-dark-accent transition-colors duration-200"
                >
                  info@seunajetomobi.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint mb-2">
                  Location
                </p>
                <p className="text-base text-ink dark:text-dark-ink">Stockholm, Sweden</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint mb-2">
                  Availability
                </p>
                <p className="text-base text-accent dark:text-dark-accent font-medium">
                  ● Open to opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint block mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  placeholder="Jane Smith"
                  required
                  className="form-input"
                />
                <ValidationError field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint block mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@company.com"
                  required
                  className="form-input"
                />
                <ValidationError field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me what you need help with…"
                  required
                  rows={5}
                  className="form-input resize-none"
                />
                <ValidationError field="message" errors={state.errors} />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send message →'}
                </button>
              </div>

              {state.succeeded && (
                <motion.p
                  className="text-sm text-accent dark:text-dark-accent font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
