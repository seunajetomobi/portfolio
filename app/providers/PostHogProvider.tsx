'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';

function PostHogPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views only if PostHog is initialized
    if (pathname && posthog && typeof posthog.capture === 'function') {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      try {
        posthog.capture('$pageview', {
          $current_url: url,
        });
      } catch (error) {
        console.error('PostHog capture error:', error);
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      // Check if already initialized
      if (posthog && typeof posthog.init === 'function') {
        // Initialize PostHog only once
        if (!posthog.__loaded) {
          posthog.init('phc_m2iqBdAM2tHcD8vU5muifH8cHmHj4uB9baYFkYTeuXxB', {
            api_host: 'https://us.i.posthog.com',
            person_profiles: 'identified_only',
          });
        }
      }
    } catch (error) {
      console.error('PostHog initialization error:', error);
    }
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageTracker />
      </Suspense>
      {children}
    </>
  );
}
