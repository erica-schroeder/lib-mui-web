import { Divider, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { PermanentNavDrawerLayout } from './PermanentNavDrawerLayout';

const meta = {
    component: PermanentNavDrawerLayout,
    argTypes: {
        logoAlign: {
            control: { type: 'radio' },
            options: ['left', 'center'],
            description: 'Where the logo is placed',
        },
    },
} satisfies Meta<typeof PermanentNavDrawerLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const navItems = [{
  label: 'About', to: '/about'
}, {
  label: 'Services',
  submenu: [
    { label: 'Consulting', to: '/services/consulting' },
    { label: 'Design', to: '/services/design' },
  ],
}];

export const WithNav: Story = {
  args: {
    navItems: navItems,
    logo: <Typography>Logo</Typography>,
    navItemDivider: <Divider orientation="vertical" flexItem sx={{ border: '1px solid', height: 20, alignSelf: 'center' }} />,
    children: (
      <>
        <h1>Card Title</h1>
        <p>This is the content of the card.</p>
      </>
    ),
      footer: <Stack sx={{alignItems: 'center'}}>footer</Stack>
  },
};

export const NoNav: Story = {
  args: {
    logo: <Typography>Logo</Typography>,
  },
};