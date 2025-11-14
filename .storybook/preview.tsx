import type { Preview } from '@storybook/react-vite';
import { baseTheme } from '@/theme/baseTheme';
import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter } from 'react-router';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={baseTheme}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  )
];

export default preview;