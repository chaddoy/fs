import '@core-ui-styles/global.css';
import './styles.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'For designers', 'For developers', 'Foundations', 'Components', 'Hooks', 'Utilities', '*'],
      },
    },
  },
};

export default preview;
