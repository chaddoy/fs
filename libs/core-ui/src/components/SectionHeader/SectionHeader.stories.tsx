import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from './SectionHeader';
import Button from '../Button';
import { ChevronRight } from 'lucide-react';

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    eyebrow: 'STYLE IN THE WILD',
    title: 'Love from our customers',
    description:
      'Hear from our valued customers and discover the experiences that make us proud',
    addOn: (
      <Button size="sm">
        All <ChevronRight />
      </Button>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
