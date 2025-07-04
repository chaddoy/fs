import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@shadcn-ui';
import Autoplay from 'embla-carousel-autoplay';
import { DEFAULT_HERO_IMAGES } from './constants';

export default function HeroCarousel() {
  return (
    <Carousel
      className="w-full gap-0"
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="gap-0">
        {DEFAULT_HERO_IMAGES.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <Card className="rounded-none border-0">
              <CardContent className="flex aspect-[3/2] items-center justify-center p-0 border-0">
                <img
                  src={image}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
