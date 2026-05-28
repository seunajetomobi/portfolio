'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex justify-between items-center px-4 sm:px-6 md:px-16 py-5 transition-all duration-300 ${
        isScrolled
          ? 'bg-paper/95 dark:bg-dark-paper/95 backdrop-blur-xl border-b border-rule dark:border-dark-rule'
          : 'bg-transparent'
      }`}
    >
      <Link href="#" className="font-serif text-lg font-light uppercase tracking-widest text-ink dark:text-dark-ink">
        Seun Ajetomobi
      </Link>

      <div className="hidden sm:flex gap-6 md:gap-10 items-center">
        <ul className="flex gap-6 md:gap-10 list-none">
          <li>
            <Link
              href="#services"
              className="text-xs font-light uppercase tracking-wider text-ink-light dark:text-dark-ink-light transition-colors duration-200 hover:text-accent dark:hover:text-dark-accent"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-xs font-normal uppercase tracking-wider text-ink-light dark:text-dark-ink-light transition-colors duration-200 hover:text-accent dark:hover:text-dark-accent"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-xs font-normal uppercase tracking-wider text-ink-light dark:text-dark-ink-light transition-colors duration-200 hover:text-accent dark:hover:text-dark-accent"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-paper-warm dark:hover:bg-dark-paper-warm transition-colors duration-200"
          aria-label="Toggle dark mode"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            // Moon icon for dark mode
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ink dark:text-dark-ink"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            // Sun icon for light mode
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-dark-ink"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-paper-warm dark:hover:bg-dark-paper-warm transition-colors duration-200"
          aria-label="Toggle dark mode"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ink dark:text-dark-ink"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-dark-ink"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col gap-1.5 group p-2"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-5 h-0.5 bg-ink dark:bg-dark-ink transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-ink dark:bg-dark-ink transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-5 h-0.5 bg-ink dark:bg-dark-ink transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-paper dark:bg-dark-paper border-b border-rule dark:border-dark-rule shadow-lg">
          <ul className="flex flex-col gap-0 list-none">
            <li>
              <Link
                href="#services"
                onClick={closeMobileMenu}
                className="block px-4 sm:px-6 md:px-16 py-3 text-xs font-normal uppercase tracking-wider text-ink-light dark:text-dark-ink-light hover:text-accent dark:hover:text-dark-accent hover:bg-paper-warm dark:hover:bg-dark-paper-warm transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                onClick={closeMobileMenu}
                className="block px-4 sm:px-6 md:px-16 py-3 text-xs font-normal uppercase tracking-wider text-ink-light dark:text-dark-ink-light hover:text-accent dark:hover:text-dark-accent hover:bg-paper-warm dark:hover:bg-dark-paper-warm transition-colors duration-200"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="block px-4 sm:px-6 md:px-16 py-3 text-xs font-normal uppercase tracking-wider text-ink-light dark:text-dark-ink-light hover:text-accent dark:hover:text-dark-accent hover:bg-paper-warm dark:hover:bg-dark-paper-warm transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
