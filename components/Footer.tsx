'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rule dark:border-dark-rule">
      <div className="px-4 sm:px-6 md:px-16 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
        <p className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint text-center sm:text-left">
          © {currentYear} Seun Ajetomobi
        </p>

        <ul className="flex gap-6 md:gap-8 list-none">
          <li>
            <Link
              href="https://www.linkedin.com/in/seunajetomobi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint hover:text-accent dark:hover:text-dark-accent transition-colors duration-200"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint hover:text-accent dark:hover:text-dark-accent transition-colors duration-200"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-xs uppercase tracking-wider text-ink-faint dark:text-dark-ink-faint hover:text-accent dark:hover:text-dark-accent transition-colors duration-200"
            >
              CV / Résumé
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
