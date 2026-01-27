'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'default' | 'gradient' | 'glass';
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = '',
      variant = 'default',
      hover = true,
      glow = false,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-2xl border border-[var(--color-border)] p-6
      transition-all duration-300 ease-out
    `;

    const variantStyles = {
      default: 'bg-[var(--color-bg-card)]',
      gradient: 'bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-darker)]',
      glass: 'glass',
    };

    const hoverStyles = hover
      ? 'hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-card-hover)] hover:-translate-y-1'
      : '';

    const glowStyles = glow ? 'shadow-[0_0_30px_rgba(48,180,255,0.15)]' : '';

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${hoverStyles}
          ${glowStyles}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card Header Component
export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

// Card Title Component
export function CardTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}

// Card Description Component
export function CardDescription({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-1 text-sm text-[var(--color-text-muted)] ${className}`}>
      {children}
    </p>
  );
}

// Card Content Component
export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

// Card Footer Component
export function CardFooter({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-4 flex items-center gap-3 ${className}`}>{children}</div>
  );
}

export default Card;
