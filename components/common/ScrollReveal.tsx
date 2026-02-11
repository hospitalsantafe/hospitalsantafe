'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: 'div' | 'section';
}

export default function ScrollReveal({
  children,
  className,
  stagger = false,
  as: Tag = 'div',
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.querySelectorAll('[data-animate]').forEach((child) => {
        child.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = el.querySelectorAll('[data-animate]');
    animatedElements.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      data-stagger={stagger || undefined}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
