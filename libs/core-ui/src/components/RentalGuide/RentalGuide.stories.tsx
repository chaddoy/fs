import type { Meta, StoryObj } from '@storybook/react';
import RentalGuide from './RentalGuide';

const meta: Meta<typeof RentalGuide> = {
  title: 'Components/RentalGuide',
  component: RentalGuide,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content to display inside the component',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
