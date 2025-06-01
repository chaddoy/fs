import type { Meta, StoryObj } from '@storybook/react';

import { ChevronRight, MailOpen } from 'lucide-react';
import Button from '@core-ui/Button';

const meta = {
  component: Button,
  title: 'Elements/Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: <ChevronRight />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <MailOpen />
        Login with Email
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Save',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
};
