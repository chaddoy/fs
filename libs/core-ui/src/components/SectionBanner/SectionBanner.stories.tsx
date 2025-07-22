import type { Meta, StoryObj } from '@storybook/react';
import SectionBanner from './SectionBanner';
import SectionBannerImage1 from '../../assets/images/section-banner/banner-image-1.jpg';
import { P } from '../Typography';
import Button from '../Button';
import { ChevronRight } from 'lucide-react';

const meta: Meta<typeof SectionBanner> = {
  title: 'Components/SectionBanner',
  component: SectionBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionBanner>;

export const Default: Story = {
  args: {
    color: 'burntOrange-subtle',
    image: SectionBannerImage1,
  },
  render: (args) => {
    return (
      <SectionBanner {...args}>
        <SectionBanner.Content className="sm:gap-2">
          <SectionBanner.Header>Visit Us at Our Showroom</SectionBanner.Header>

          <div className="flex flex-col gap-8">
            <P size="2xs">
              Experience our latest collection in person, with guidance from our
              dedicated team to help you find your perfect style.
            </P>

            <div>
              <Button variant="secondary">
                Visit Showroom <ChevronRight />
              </Button>
            </div>
          </div>
        </SectionBanner.Content>
      </SectionBanner>
    );
  },
};
