'use client';

import { useEffect } from 'react';

// Activates the self-hosted Noto CJK fonts after first hydration by adding
// .cjk-active to <html>. This keeps CJK font requests off the critical render
// path (they don't compete with the CSS for bandwidth on initial paint) while
// still self-hosting them via next/font/google rather than a Google CDN link.
export default function CJKFontActivator() {
  useEffect(() => {
    document.documentElement.classList.add('cjk-active');
  }, []);
  return null;
}
