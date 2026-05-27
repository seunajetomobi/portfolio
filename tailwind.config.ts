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
        ink: '#0e0e0d',
        'ink-light': '#5a5a56',
        'ink-faint': '#9a9994',
        paper: '#f5f3ef',
        'paper-warm': '#ede9e2',
        accent: '#2a5c45',
        'accent-pale': '#dceee6',
        rule: 'rgba(14, 14, 13, 0.12)',

        // Dark mode colors
        'dark-ink': '#f5f3ef',
        'dark-ink-light': '#c9c8c0',
        'dark-ink-faint': '#8f8d84',
        'dark-paper': '#0e0e0d',
        'dark-paper-warm': '#1a1a18',
        'dark-accent': '#4a8f6d',
        'dark-accent-pale': '#1a3d30',
        'dark-rule': 'rgba(245, 243, 239, 0.12)',
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
