export const CONFIG = {
  fontFamily: {
    brand: 'font-montserrat',
    tagline: 'font-robotoCondensed',
    menu: 'font-montserrat',
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
    label: 'header.menu.1',
    href: '/collection',
    children: [
      {
        label: 'header.menu.1.menu-item.1',
        href: '/tuxedos-suits',
      },
      {
        label: 'header.menu.1.menu-item.2',
        href: '/shirts',
      },
      {
        label: 'header.menu.1.menu-item.3',
        href: '/vests-cummerbunds',
      },
      {
        label: 'header.menu.1.menu-item.4',
        href: '/ties',
      },
      {
        label: 'header.menu.1.menu-item.5',
        href: '/accessories',
      },
    ],
  },
  {
    label: 'header.menu.2',
    href: '/occasions',
    children: [
      {
        label: 'header.menu.2.menu-item.1',
        href: '/weddings',
      },
      {
        label: 'header.menu.2.menu-item.2',
        href: '/proms-school-formals',
      },
      {
        label: 'header.menu.2.menu-item.3',
        href: '/business-events',
      },
      {
        label: 'header.menu.2.menu-item.4',
        href: '/black-tie-events',
      },
      {
        label: 'header.menu.2.menu-item.5',
        href: '/graduations',
      },
    ],
  },
  {
    label: 'header.menu.3',
    href: '/showroom',
  },
  {
    label: 'header.menu.4',
    href: '/schedule',
  },
];
