import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
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
    children: 'Text Component',
  },
};

export const Presets: Story = {
  render: () => (
    <>
      <Text as="pre">Pre</Text>
      <Text as="code">Code</Text>
      <Text as="blockquote">Blockquote</Text>
      <p>
        <Text as="span">Span</Text>
      </p>
      <p>
        <Text as="em">Emphasized</Text>
      </p>
      <p>
        <Text as="strong">Strong</Text>
      </p>
      <p>
        <Text as="i">Italic</Text>
      </p>
      <p>
        <Text as="b">Bold</Text>
      </p>
      <Text as="p">Paragraph</Text>
      <Text as="h4">Heading 4</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h1">Heading 1</Text>
    </>
  ),
};

export const Font: Story = {
  render: () => (
    <>
      <Text as="p" font="sans">
        This is the default font
      </Text>
      <Text as="p" font="serif">
        This is serif font
      </Text>
      <Text as="p" font="mono">
        This is mono font
      </Text>
    </>
  ),
};

export const Size: Story = {
  render: () => (
    <>
      <Text as="p" size="xs">
        This is xs size (12px / 0.75rem)
      </Text>
      <Text as="p" size="sm">
        This is sm size (14px / 0.875rem)
      </Text>
      <Text as="p" size="base">
        This is base size (16px / 1rem)
      </Text>
      <Text as="p" size="lg">
        This is lg size (18px / 1.125rem)
      </Text>
      <Text as="p" size="xl">
        This is xl size (20px / 1.25rem)
      </Text>
      <Text as="p" size="2xl">
        This is 2xl size (24px / 1.5rem)
      </Text>
      <Text as="p" size="3xl">
        This is 3xl size (30px / 1.875rem)
      </Text>
      <Text as="p" size="4xl">
        This is 4xl size (36px / 2.25rem)
      </Text>
    </>
  ),
};

export const Weight: Story = {
  render: () => (
    <>
      <Text as="p" weight="light">
        This is light weight
      </Text>
      <Text as="p" weight="normal">
        This is normal weight
      </Text>
      <Text as="p" weight="medium">
        This is medium weight
      </Text>
      <Text as="p" weight="semibold">
        This is semibold weight
      </Text>
      <Text as="p" weight="bold">
        This is bold weight
      </Text>
      <Text as="p" weight="bold">
        This is extrabold weight
      </Text>
      <Text as="p" weight="bold">
        This is black weight
      </Text>
    </>
  ),
};

export const Italic: Story = {
  render: () => (
    <Text as="p" italic>
      This is italic
    </Text>
  ),
};

export const Underline: Story = {
  render: () => (
    <Text as="p" underline>
      This is underline
    </Text>
  ),
};

export const Strikethrough: Story = {
  render: () => (
    <Text as="p" strikethrough>
      This is strikethrough
    </Text>
  ),
};

export const Truncate: Story = {
  render: () => (
    <Text as="p" truncate>
      Et incidunt praesentium. Doloribus ea aut aut. Voluptatibus aut
      consequatur ut voluptatum corporis natus. Veritatis aut beatae in sapiente
      voluptas perferendis totam et quibusdam. In nemo dolores. Cupiditate
      possimus autem enim illo qui pariatur qui laudantium. Unde libero eius.
      Consequatur accusantium velit consequatur tempora eum. Quam nisi iste
      cumque suscipit commodi quam delectus exercitationem voluptatem. Cumque
      ipsam qui consectetur laudantium est et quia possimus velit. Enim est
      itaque quia ut.
    </Text>
  ),
};

export const Align: Story = {
  render: () => (
    <>
      <Text as="p" align="left">
        This is left align
      </Text>
      <Text as="p" align="right">
        This is right align
      </Text>
      <Text as="p" align="center">
        This is center align
      </Text>
      <Text as="p" align="justify">
        Et incidunt praesentium. Doloribus ea aut aut. Voluptatibus aut
        consequatur ut voluptatum corporis natus. Veritatis aut beatae in
        sapiente voluptas perferendis totam et quibusdam. In nemo dolores.
        Cupiditate possimus autem enim illo qui pariatur qui laudantium. Unde
        libero eius. Consequatur accusantium velit consequatur tempora eum. Quam
        nisi iste cumque suscipit commodi quam delectus exercitationem
        voluptatem. Cumque ipsam qui consectetur laudantium est et quia possimus
        velit. Enim est itaque quia ut.
      </Text>
    </>
  ),
};
