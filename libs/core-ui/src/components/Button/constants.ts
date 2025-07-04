export const SHADCN_VARIANTS = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const;

export const BUTTON_VARIANT_STYLES = {
  default: [
    'bg-brand.bold',
    'hover:bg-brand.bold.hovered',
    'active:bg-brand.bold.pressed',
    'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
  ],
  secondary: [
    'bg-accent.forestGreen.subtlest text-default',
    'hover:bg-accent.forestGreen.subtlest.hovered',
    'active:bg-accent.forestGreen.subtlest.pressed',
    'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
  ],
  outline: [
    'bg-transparent border border-brand text-brand',
    'hover:bg-accent.forestGreen.subtlest',
    'active:bg-accent.forestGreen.subtlest.hovered',
    'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
  ],
  ghost: [
    'bg-transparent border-0 text-default shadow-none',
    'hover:bg-accent.forestGreen.subtlest',
    'active:bg-accent.forestGreen.subtlest.hovered',
    'focus-visible:ring-forestGreen-400 focus-visible:ring-2',
  ],
  link: [
    'bg-transparent border-0 text-default shadow-none rounded-none border-brand',
    'hover:bg-transparent',
    'focus-visible:underline focus-visible:ring-0',
  ],
  danger: [
    'bg-danger.bold',
    'hover:bg-danger.bold.hovered',
    'active:bg-danger.bold.pressed',
    'focus-visible:ring-crimsonRed-500 focus-visible:ring-2',
  ],
  warning: [
    'bg-warning.bold text-default',
    'hover:bg-warning.bold.hovered',
    'active:bg-warning.bold.pressed',
    'focus-visible:ring-orangePeel-500 focus-visible:ring-2',
  ],
  discovery: [
    'bg-discovery.bold text-inverse',
    'hover:bg-discovery.bold.hovered',
    'active:bg-discovery.bold.pressed',
    'focus-visible:ring-royalPurple-300 focus-visible:ring-2',
  ],
  information: [
    'bg-information.bold text-inverse',
    'hover:bg-information.bold.hovered',
    'active:bg-information.bold.pressed',
    'focus-visible:ring-royalPurple-300 focus-visible:ring-2',
  ],
  success: [
    'bg-success.bold text-inverse',
    'hover:bg-success.bold.hovered',
    'active:bg-success.bold.pressed',
    'focus-visible:ring-mossGreen-300 focus-visible:ring-2',
  ],
};

export const ALL_VARIANT_STYLES = {
  ...BUTTON_VARIANT_STYLES,
  icon: BUTTON_VARIANT_STYLES.default,
  'icon-secondary': BUTTON_VARIANT_STYLES.secondary,
  'icon-outline': BUTTON_VARIANT_STYLES.outline,
  'icon-ghost': BUTTON_VARIANT_STYLES.ghost,
  'icon-link': BUTTON_VARIANT_STYLES.link,
  'icon-danger': BUTTON_VARIANT_STYLES.danger,
  'icon-warning': BUTTON_VARIANT_STYLES.warning,
  'icon-discovery': BUTTON_VARIANT_STYLES.discovery,
} as const;
