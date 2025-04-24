'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // This is where you would typically initialize analytics
    // and track page views
    
    const url = pathname + searchParams.toString();
    
    // Example tracking function (replace with actual analytics implementation)
    const trackPageView = (url: string) => {
      console.log(`Page viewed: ${url}`);
      // Here you would call your analytics service, e.g.:
      // window.gtag('config', 'GA-MEASUREMENT-ID', {
      //   page_path: url,
      // });
    };
    
    trackPageView(url);
    
  }, [pathname, searchParams]);
  
  return null;
}