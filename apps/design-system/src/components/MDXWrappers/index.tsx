import './style.css';
import React from 'react';
import { clsx } from 'clsx';

export const MDXPage = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute top-0 left-0 w-full">{children}</div>;
};

export const MDXHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="!pt-8 !px-3 md:!px-10">{children}</div>;
};

export const MDXBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div id="mdx-body" className={clsx('!px-3 md:!px-10 !pb-12', className)}>
      {children}
    </div>
  );
};

export const MDXText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        '!text-base !text-gray-900 !leading-relaxed !mb-4',
        className
      )}
    >
      {children}
    </div>
  );
};
