import { P } from '../Typography';
import { ProductCardProps } from './types';
import clsx from 'clsx';

export default function ProductCard({
  className,
  image,
  name,
  description,
  onClick,
  ...props
}: ProductCardProps) {
  const productName = typeof name === 'string' ? name : '';

  return (
    <div
      className={clsx('w-80 bg-white', className)}
      {...props}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick?.();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${productName}`}
      data-testid="product-card"
    >
      <img
        src={image}
        alt={productName}
        className="w-80 object-cover pointer-events-none"
        data-testid="product-card-image"
      />

      <div
        className="flex flex-col gap-2 pt-2 px-8 pb-8"
        data-testid="product-card-content"
      >
        <P
          size="2xs"
          bold
          className="text-center"
          data-testid="product-card-name"
        >
          {name}
        </P>
        <P
          size="3xs"
          className="text-center"
          data-testid="product-card-description"
        >
          {description}
        </P>
      </div>
    </div>
  );
}
