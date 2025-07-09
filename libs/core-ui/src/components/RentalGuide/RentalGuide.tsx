import { CarouselButtonType, RentalGuideProps } from './interface';
import clsx from 'clsx';
import Text from '../Text';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { CONFIG } from './constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shadcn-ui/components/ui/carousel';
import Button from '../Button';
import { useIntl } from '@fs/intl';
import { useRef } from 'react';

export default function RentalGuide({
  children,
  className,
  ...props
}: RentalGuideProps) {
  const { t } = useIntl();
  const prevRef = useRef<CarouselButtonType>(null);
  const nextRef = useRef<CarouselButtonType>(null);

  const handlePrevClick = () => {
    prevRef?.current?.click?.();
  };

  const handleNextClick = () => {
    nextRef?.current?.click?.();
  };

  return (
    <Carousel
      opts={{
        align: 'start',
        dragThreshold: 0.5,
      }}
      className="bg-extras-offWhite flex flex-row justify-between items-center py-6"
    >
      <CarouselPrevious ref={prevRef} className="hidden" />
      <CarouselNext ref={nextRef} className="hidden" />

      <ChevronLeftIcon
        size={40}
        className={clsx(['text-forestGreen-900 cursor-pointer flex-shrink-0'])}
        role="button"
        onClick={handlePrevClick}
        aria-label="Previous"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handlePrevClick();
          }
        }}
      />

      <div
        className={clsx(
          ['text-center font-inter flex flex-col items-center gap-12'],
          className
        )}
        {...props}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <Text
                size="lg"
                weight="medium"
                className="text-accent.amberGold font-barlowCondensed tracking-widest"
              >
                {t('Renting is easy').toUpperCase()}
              </Text>

              <div className="w-full max-w-xs">
                <CarouselContent>
                  {CONFIG.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-extras-charcoal text-inverse flex items-center justify-center">
                        <item.icon size={24} />
                      </div>

                      <Text size="xl" weight="medium">
                        {t(item.title)}
                      </Text>

                      <Text size="sm" weight="normal" className="px-4">
                        {t(item.description)}
                      </Text>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </div>
          </div>
        </div>

        <Button className="flex-grow-0 flex-shrink-1 w-max">
          {t('Explore our styles').toUpperCase()}
        </Button>
      </div>

      <ChevronRightIcon
        size={40}
        className={clsx(['text-forestGreen-900 cursor-pointer flex-shrink-0'])}
        role="button"
        onClick={handleNextClick}
        aria-label="Next"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleNextClick();
          }
        }}
      />
    </Carousel>
  );
}
