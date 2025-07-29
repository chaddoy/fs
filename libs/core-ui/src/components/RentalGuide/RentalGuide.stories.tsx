import type { Meta, StoryObj } from '@storybook/react';
import RentalGuide from './RentalGuide';
import { RENTAL_GUIDE_ITEMS } from './constants';

const meta: Meta<typeof RentalGuide> = {
  title: 'Components/RentalGuide',
  component: RentalGuide,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    items: RENTAL_GUIDE_ITEMS,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
