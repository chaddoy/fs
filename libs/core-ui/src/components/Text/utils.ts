import { TextAsType } from './interface';

export const getElementClassNames = (as?: TextAsType) => {
  switch (as) {
    case 'h1':
      return 'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance';
    case 'h2':
      return 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0';
    case 'h3':
      return 'scroll-m-20 text-2xl font-semibold tracking-tight';
    case 'h4':
      return 'scroll-m-20 text-xl font-semibold tracking-tight';
    case 'p':
      return 'leading-7 [&:not(:first-child)]:mt-6';
    case 'blockquote':
      return 'mt-6 border-l-2 pl-6 italic';
    case 'code':
      return 'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold';
    default:
      return '';
  }
};
