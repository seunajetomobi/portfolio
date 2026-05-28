import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        ink: '#0f172a',
        'ink-light': '#475569',
        'ink-faint': '#94a3b8',
        paper: '#f8fafc',
        'paper-warm': '#f1f5f9',
        accent: '#0ea5e9',
        'accent-pale': '#e0f2fe',
        'accent-secondary': '#7c3aed',
        'accent-tertiary': '#06b6d4',
        rule: 'rgba(15, 23, 42, 0.1)',

        // Dark mode colors
        'dark-ink': '#f1f5f9',
        'dark-ink-light': '#cbd5e1',
        'dark-ink-faint': '#64748b',
        'dark-paper': '#0f172a',
        'dark-paper-warm': '#1e293b',
        'dark-accent': '#38bdf8',
        'dark-accent-pale': '#082f49',
        'dark-accent-secondary': '#a78bfa',
        'dark-accent-tertiary': '#22d3ee',
        'dark-rule': 'rgba(241, 245, 249, 0.1)',
      },
      fontFamily: {
        serif: "'Cormorant Garamond', Georgia, serif",
        sans: "'DM Sans', system-ui, sans-serif",
      },
      fontSize: {
        'xs': '0.72rem',
        'sm': '0.78rem',
        'base': '0.95rem',
        'lg': '1.05rem',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.01em',
        wider: '0.14em',
        widest: '0.22em',
      },
      animation: {
        'fade-up': 'fadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-bar': 'scaleBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(24px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        scaleBar: {
          '0%': { 
            transform: 'scaleX(0)' 
          },
          '100%': { 
            transform: 'scaleX(1)' 
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
