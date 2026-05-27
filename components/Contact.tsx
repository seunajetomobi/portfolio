'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ fullName: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
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
                  name="fullName"
                  placeholder="Jane Smith"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
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
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me what you need help with…"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send message →'}
                </button>
              </div>

              {submitted && (
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
