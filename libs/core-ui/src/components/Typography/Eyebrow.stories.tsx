import type { Meta, StoryObj } from '@storybook/react';
import { Eyebrow } from './Eyebrow';
import { HeadingProps } from './types';

const meta: Meta<HeadingProps> = {
  title: 'Typography/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
  args: {
    children: 'WELL SUITED',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
