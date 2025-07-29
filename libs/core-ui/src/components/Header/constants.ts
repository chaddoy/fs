export const CONFIG = {
  fontFamily: {
    brand: 'font-brand',
    tagline: 'font-tagline',
    menu: 'font-navigation',
  },
  mobile: {
    color: {
      text: 'text-extras-offWhite',
      background: 'bg-extras-heavyForestGreen',
      border: 'border-extras-heavyForestGreen',
    },
  },
  desktop: {
    color: {
      text: 'text-extras-heavyForestGreen',
      background: 'bg-white',
      border: 'border-extras-heavyForestGreen',
    },
  },
};

export const MENU_ITEMS = [
  {
    label: 'header.menu.0.title',
    href: '/collection',
    children: [
      {
        label: 'header.menu.0.menu-item.0',
        href: '/tuxedos-suits',
      },
      {
        label: 'header.menu.0.menu-item.1',
        href: '/shirts',
      },
      {
        label: 'header.menu.0.menu-item.2',
        href: '/vests-cummerbunds',
      },
      {
        label: 'header.menu.0.menu-item.3',
        href: '/ties',
      },
      {
        label: 'header.menu.0.menu-item.4',
        href: '/accessories',
      },
    ],
  },
  {
    label: 'header.menu.1.title',
    href: '/occasions',
    children: [
      {
        label: 'header.menu.1.menu-item.0',
        href: '/weddings',
      },
      {
        label: 'header.menu.1.menu-item.1',
        href: '/proms-school-formals',
      },
      {
        label: 'header.menu.1.menu-item.2',
        href: '/business-events',
      },
      {
        label: 'header.menu.1.menu-item.3',
        href: '/black-tie-events',
      },
      {
        label: 'header.menu.1.menu-item.4',
        href: '/graduations',
      },
    ],
  },
  {
    label: 'header.menu.2.title',
    href: '/showroom',
  },
  {
    label: 'header.menu.3.title',
    href: '/schedule',
  },
];
