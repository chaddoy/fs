import type { Meta, StoryObj } from '@storybook/react';
import {
  H1 as H1Component,
  H2 as H2Component,
  H3 as H3Component,
  H4 as H4Component,
} from './Headings';
import { HeadingProps } from './types';
import HeadingWrapper from './HeadingWrapper';

const meta: Meta<HeadingProps> = {
  title: 'Typography/Headings',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  name: 'H1',
  render: () => {
    return <HeadingWrapper Component={H1Component} />;
  },
};

export const H2: Story = {
  name: 'H2',
  render: () => {
    return <HeadingWrapper Component={H2Component} />;
  },
};

export const H3: Story = {
  name: 'H3',
  parameters: {
    docs: {
      description: {
        story: 'Size remains the same for desktop and mobile',
      },
    },
  },
  render: () => {
    return <HeadingWrapper Component={H3Component} />;
  },
};

export const H4: Story = {
  name: 'H4',
  parameters: {
    docs: {
      description: {
        story: 'Size remains the same for desktop and mobile',
      },
    },
  },
  render: () => {
    return <HeadingWrapper Component={H4Component} />;
  },
};
