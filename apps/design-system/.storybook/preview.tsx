import '@core-ui/styles/global.css';
import './styles.css';
import type { Preview } from '@storybook/react';
import { IntlProvider } from '@fs/intl';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          'For designers',
          'For developers',
          'Foundations',
          'Components',
          'Hooks',
          'Utilities',
          '*',
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <IntlProvider locale="en">
        <Story />
      </IntlProvider>
    ),
  ],
};

export default preview;
