import type { Meta, StoryObj } from '@storybook/react';

import { Check, ChevronRight, MailOpen, Rabbit, X } from 'lucide-react';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Elements/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button {...args} variant="default">
          Default
        </Button>
        <Button {...args} variant="secondary">
          Secondary
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="ghost">
          Ghost
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="danger">
          Danger
        </Button>
        <Button {...args} variant="warning">
          Warning
        </Button>
        <Button {...args} variant="discovery">
          Discovery
        </Button>
        <Button {...args} variant="information">
          Information
        </Button>
        <Button {...args} variant="success">
          Success
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="icon">
          <Rabbit />
        </Button>
        <Button {...args} variant="icon-secondary">
          <MailOpen />
        </Button>
        <Button {...args} variant="icon-outline">
          <ChevronRight />
        </Button>
        <Button {...args} variant="icon-ghost">
          <X />
        </Button>
        <Button {...args} variant="icon-link">
          <Check />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="icon-danger">
          <Rabbit />
        </Button>
        <Button {...args} variant="icon-warning">
          <MailOpen />
        </Button>
        <Button {...args} variant="icon-discovery">
          <ChevronRight />
        </Button>
        <Button {...args} variant="icon-information">
          <X />
        </Button>
        <Button {...args} variant="icon-success">
          <Check />
        </Button>
      </div>
    </div>
  ),
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

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <Button {...args} variant="danger" size="sm">
          Small
        </Button>
        <Button {...args} variant="warning" size="sm">
          <MailOpen />
          Small with icon
        </Button>
        <Button {...args} variant="icon-discovery" size="sm">
          <MailOpen />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="danger" size="default">
          Default
        </Button>
        <Button {...args} variant="warning" size="default">
          <MailOpen />
          Default with icon
        </Button>
        <Button {...args} variant="icon-discovery" size="default">
          <MailOpen />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button {...args} variant="danger" size="lg">
          Large
        </Button>
        <Button {...args} variant="warning" size="lg">
          <MailOpen />
          Large with icon
        </Button>
        <Button {...args} variant="icon-discovery" size="lg">
          <MailOpen />
        </Button>
      </div>
    </div>
  ),
};
