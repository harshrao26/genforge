'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const url = pathname + (search || '');
    window.gtag('config', 'G-V3Q4Z90H7V', { page_path: url });
  }, [pathname]);

  return null;
}