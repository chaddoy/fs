import { SHADCN_VARIANTS } from './constants';

export const isShadcnVariant = (
  variant: string
): variant is (typeof SHADCN_VARIANTS)[number] => {
  return SHADCN_VARIANTS.includes(variant as (typeof SHADCN_VARIANTS)[number]);
};
