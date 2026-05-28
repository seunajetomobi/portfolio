'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import { PostHogProvider } from '@/app/providers/PostHogProvider';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
}
