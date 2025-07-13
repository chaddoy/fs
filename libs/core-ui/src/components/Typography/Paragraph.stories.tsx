import type { Meta, StoryObj } from '@storybook/react';
import { P as PComponent } from './Paragraph';
import { HeadingProps } from './interface';
import FontCard from './FontCard';
import { BODY_FONT_SIZES } from './constants';
import { H2 } from './Headings';

const meta: Meta<HeadingProps> = {
  title: 'Typography/Body',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  name: 'P',
  render: () => {
    return (
      <div className="flex flex-col gap-12 px-8 py-0">
        {Object.entries(BODY_FONT_SIZES).map(([key, value]) => {
          return (
            <div key={key} className="flex flex-col gap-4 p-0">
              <H2>{key}</H2>
              {key === 'xs' && (
                <PComponent>Default size for body copy</PComponent>
              )}

              <FontCard size={value}>
                <PComponent size={key as keyof typeof BODY_FONT_SIZES}>
                  Body text, font-weight: 400
                </PComponent>
              </FontCard>

              <FontCard size={value}>
                <PComponent size={key as keyof typeof BODY_FONT_SIZES} bold>
                  Body text, font-weight: 500
                </PComponent>
              </FontCard>
            </div>
          );
        })}
      </div>
    );
  },
};
