import { HTMLAttributes } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  mobile?: boolean;
}

export type ParagraphSize =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export type ParagraphFont =
  | 'brand'
  | 'tagline'
  | 'navigation'
  | 'eyebrow'
  | 'headings'
  | 'body';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  bold?: boolean;
  font?: ParagraphFont;
  children: React.ReactNode;
}

export interface EyebrowProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
