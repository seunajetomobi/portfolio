import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { ClientLayout } from './ClientLayout';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600'],
  variable: '--font-serif',
});

const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Seun Ajetomobi — IT Support Specialist',
  description: 'Dedicated IT Support Specialist solving technical challenges, empowering end users, and building reliable infrastructure.',
  keywords: ['IT Support', 'Technical Support', 'Infrastructure', 'Windows', 'Azure', 'M365'],
  authors: [{ name: 'Seun Ajetomobi' }],
  metadataBase: new URL('https://seunajetomobi.com'),
  openGraph: {
    title: 'Seun Ajetomobi — IT Support Specialist',
    description: 'Dedicated IT Support Specialist solving technical challenges, empowering end users, and building reliable infrastructure.',
    type: 'website',
    url: 'https://seunajetomobi.com',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0e0e0d" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-paper dark:bg-dark-paper text-ink dark:text-dark-ink transition-colors duration-300">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
