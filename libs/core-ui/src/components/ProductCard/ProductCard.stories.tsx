import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import ProductImage1 from '../../assets/images/product-card/product-image-1.jpg';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    image: ProductImage1,
    name: 'Ivory Double-Breasted Classic',
    description: 'Lightweight linen blend, ideal for summer weddings.',
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  render: (args) => (
    <div className="bg-extras-offWhite flex items-center justify-center p-4">
      <ProductCard {...args} />
    </div>
  ),
};
