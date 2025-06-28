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
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
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
