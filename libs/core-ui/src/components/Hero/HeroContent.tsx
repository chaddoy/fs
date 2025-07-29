import { useIntl } from '@fs/intl';
import Button from '../Button';
import clsx from 'clsx';
import { Eyebrow, H1, P } from '../Typography';

export default function HeroContent() {
  const { t } = useIntl();

  return (
    <div
      className={clsx([
        'flex flex-col justify-center items-center gap-2 pt-10 pb-16 py-2 w-full bg-extras-offWhite',
        'md:justify-center md:gap-4 md:pt-0 md:pb-0 md:w-[calc(80%-4px)]',
      ])}
    >
      <Eyebrow>{t('hero.eyebrow')}</Eyebrow>

      <div
        className={clsx([
          'flex flex-col items-center gap-6',
          'sm:gap-2',
          'md:gap-4',
          'lg:gap-6',
        ])}
      >
        <div className="flex flex-col items-center">
          {t('hero.title')
            .split('\n')
            .map((line, index) => (
              <H1
                key={index}
                className={clsx([
                  `!font-${index === 0 ? 'bold' : 'normal'}`,
                  'sm:text-6xl',
                  'md:text-5xl',
                  'lg:text-6xl',
                  'xl:text-7xl',
                ])}
              >
                {line}
              </H1>
            ))}
        </div>

        <P
          className={clsx([
            'text-accent.jetBlack.bolder font-body text-sm text-center w-3/4',
            'sm:py-4 sm:text-sm',
            'md:w-4/5 md:text-sm',
            'lg:w-4/5 lg:text-base',
            'xl:w-3/5',
          ])}
        >
          {t('hero.subtitle')}
        </P>

        <div className="flex gap-6">
          <Button size="lg" className="md:w-28 lg:w-max">
            {t('hero.button.0')}
          </Button>
          <Button size="lg" variant="outline" className="md:w-28 lg:w-32">
            {t('hero.button.1')}
          </Button>
        </div>
      </div>
    </div>
  );
}
