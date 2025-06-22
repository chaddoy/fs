import './style.css';
import React from 'react';
import { clsx } from 'clsx';

interface MDXProps {
  children: React.ReactNode;
  className?: string;
}

interface MDXLinksProps extends MDXProps {
  isSticky?: boolean;
}

export const MDXPage = ({ children, className }: MDXProps) => (
  <div className="absolute top-0 left-0 w-full">{children}</div>
);

export const MDXHeader = ({ children, className }: MDXProps) => (
  <div className={clsx('!pt-8 !px-3 md:!px-10', className)}>{children}</div>
);

export const MDXLinks = ({
  children,
  className,
  isSticky = false,
}: MDXLinksProps) => (
  <div
    id="mdx-links"
    className={clsx(
      'border-t border-b px-10 py-3 !my-8 flex flex-row gap-8 overflow-x-auto z-50 bg-white',
      isSticky && 'sticky top-0',
      className
    )}
  >
    {children}
  </div>
);

export const MDXLink = ({ children, className }: MDXProps) => (
  <div className={clsx('whitespace-nowrap', className)}>{children}</div>
);

export const MDXBody = ({ children, className }: MDXProps) => (
  <div
    id="mdx-body"
    className={clsx('!px-3 md:!px-10 !pb-12 !text-lg', className)}
  >
    {children}
  </div>
);

export const MDXSectionTitle = ({ children, className }: MDXProps) => (
  <div className={clsx('!text-2xl !font-bold !mb-8', className)}>
    {children}
  </div>
);

export const MDXText = ({ children, className }: MDXProps) => (
  <p
    className={clsx(
      '!text-base !text-gray-900 !leading-relaxed !mb-4',
      className
    )}
  >
    {children}
  </p>
);
