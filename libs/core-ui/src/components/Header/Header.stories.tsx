import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
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

export const Default: Story = {
  args: {
    children: 'Header Component',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: 'This is custom content for the Header component',
  },
};

export const WithCustomClassName: Story = {
  args: {
    children: 'Header with custom styling',
    className: 'bg-blue-100 p-4 rounded-lg',
  },
};

export const Empty: Story = {
  args: {},
};
