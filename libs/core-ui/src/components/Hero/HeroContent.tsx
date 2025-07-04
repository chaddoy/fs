import { useIntl } from '@fs/intl';
import clsx from 'clsx';
import Text from '../Text';
import Button from '../Button';

export default function HeroContent() {
  const { t } = useIntl();

  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center gap-2 pt-10 pb-16 py-2 w-full',
        'md:justify-center md:gap-4 md:pt-0 md:pb-0 md:w-[calc(80%-4px)]'
      )}
    >
      <Text
        size="base"
        className="text-accent.amberGold font-barlowCondensed tracking-widest"
      >
        {t('YOUR NEW GO-TO')}
      </Text>

      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <Text as="h1" size="2xl" className="text-default font-montserrat m-0">
            {t('Suits for the Groom')}
          </Text>
          <Text as="h2" size="2xl" className="text-default font-inter m-0">
            {t('and the Squad')}
          </Text>
        </div>

        <Text className="text-extras-charcoal font-robotoCondensed">
          {t('Sharp style for unforgettable days.')}
        </Text>

        <div className="flex gap-6">
          <Button size="lg">{t('Collection')}</Button>
          <Button size="lg" variant="outline">
            {t('Showroom')}
          </Button>
        </div>
      </div>
    </div>
  );
}
