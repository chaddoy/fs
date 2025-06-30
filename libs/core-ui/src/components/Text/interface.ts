import { HTMLAttributes, ReactNode, RefObject } from 'react';

export type TextAsType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'b'
  | 'i'
  | 'strong'
  | 'em'
  | 'span'
  | 'blockquote'
  | 'code'
  | 'pre';
export type TextAlignType = 'left' | 'right' | 'center' | 'justify';
export type TextFontType = 'sans' | 'serif' | 'mono';
export type TextSizeType =
  /** Extra small (12px / 0.75rem) */
  | 'xs'
  /** Small (14px / 0.875rem) */
  | 'sm'
  /** Base (16px / 1rem) */
  | 'base'
  /** Large (18px / 1.125rem) */
  | 'lg'
  /** Extra large (20px / 1.25rem) */
  | 'xl'
  /** 2X large (24px / 1.5rem) */
  | '2xl'
  /** 3X large (30px / 1.875rem) */
  | '3xl'
  /** 4X large (36px / 2.25rem) */
  | '4xl'
  /** 5X large (48px / 3rem) */
  | '5xl'
  /** 6X large (60px / 3.75rem) */
  | '6xl'
  /** 7X large (72px / 4.5rem) */
  | '7xl'
  /** 8X large (96px / 6rem) */
  | '8xl'
  /** 9X large (128px / 8rem) */
  | '9xl';
export type TextWeightType =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export interface BaseTextProps {
  children?: ReactNode;
  className?: string;
  as?: TextAsType;
  align?: TextAlignType;
  block?: boolean;
  font?: TextFontType;
  italic?: boolean;
  /**
   * Text size.
   * - xs: 12px / 0.75rem
   * - sm: 14px / 0.875rem
   * - base: 16px / 1rem
   * - lg: 18px / 1.125rem
   * - xl: 20px / 1.25rem
   * - 2xl: 24px / 1.5rem
   * - 3xl: 30px / 1.875rem
   * - 4xl: 36px / 2.25rem
   * - 5xl: 48px / 3rem
   * - 6xl: 60px / 3.75rem
   * - 7xl: 72px / 4.5rem
   * - 8xl: 96px / 6rem
   * - 9xl: 128px / 8rem
   */
  size?: TextSizeType;
  strikethrough?: boolean;
  truncate?: boolean;
  underline?: boolean;
  weight?: TextWeightType;
  wrap?: boolean;
  ref?: RefObject<HTMLElement | null>;
}

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
} & HTMLAttributes<HTMLHeadingElement>;

type ParagraphProps = {
  as?: 'p';
} & HTMLAttributes<HTMLParagraphElement>;

type SpanProps = {
  as?: 'span' | 'b' | 'em' | 'i' | 'strong';
} & HTMLAttributes<HTMLSpanElement>;

type BlockquoteProps = {
  as?: 'blockquote';
} & HTMLAttributes<HTMLQuoteElement>;

type CodeProps = {
  as?: 'code' | 'pre';
} & HTMLAttributes<HTMLElement>;

export type TextProps = BaseTextProps &
  (HeadingProps | ParagraphProps | BlockquoteProps | CodeProps | SpanProps);
