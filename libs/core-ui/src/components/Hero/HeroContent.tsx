import { useIntl } from '@fs/intl';
import Text from '../Text';
import Button from '../Button';
import clsx from 'clsx';

export default function HeroContent() {
  const { t } = useIntl();

  return (
    <div
      className={clsx([
        'flex flex-col justify-center items-center gap-2 pt-10 pb-16 py-2 w-full',
        'md:justify-center md:gap-4 md:pt-0 md:pb-0 md:w-[calc(80%-4px)]',
      ])}
    >
      <Text
        size="base"
        className={clsx([
          'text-accent.amberGold font-barlowCondensed tracking-widest text-sm md:text-base',
          'md:hidden',
          'lg:block',
        ])}
      >
        {t('hero.eyebrow').toUpperCase()}
      </Text>

      <div
        className={clsx([
          'flex flex-col items-center gap-6',
          'sm:gap-2',
          'md:gap-4',
          'lg:gap-6',
          'xl:gap-10',
        ])}
      >
        <div className="flex flex-col items-center">
          {t('hero.title')
            .split('\n')
            .map((line, index) => (
              <Text
                key={index}
                as="h1"
                className={clsx([
                  'text-default font-playfairDisplay m-0 text-4xl text-center',
                  'sm:text-6xl',
                  'md:text-5xl',
                  'lg:text-6xl',
                  'xl:text-7xl',
                ])}
              >
                {line}
              </Text>
            ))}
        </div>

        <Text
          size="base"
          className={clsx([
            'text-accent.jetBlack.bolder font-inter text-sm text-center w-3/4',
            'sm:py-4 sm:text-sm',
            'md:w-4/5 md:text-sm',
            'lg:w-4/5 lg:text-base',
            'xl:w-3/5',
          ])}
        >
          {t('hero.subtitle')}
        </Text>

        <div className="flex gap-6">
          <Button size="lg" className="md:w-28 lg:w-max">
            {t('Collection')}
          </Button>
          <Button size="lg" variant="outline" className="md:w-28 lg:w-32">
            {t('Showroom')}
          </Button>
        </div>
      </div>
    </div>
  );
}
