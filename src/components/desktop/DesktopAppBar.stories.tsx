import type { Meta, StoryObj } from '@storybook/react';
import { DesktopAppBar } from './DesktopAppBar';
import { Divider, Typography } from '@mui/material';

const meta = {
    component: DesktopAppBar,
    argTypes: {
        logoAlign: {
            control: { type: 'radio' },
            options: ['left', 'center'],
            description: 'Where the logo is placed',
        },
    },
} satisfies Meta<typeof DesktopAppBar>;

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
    navItemDivider: <Divider orientation="vertical" flexItem sx={{ border: '1px solid', height: 20, alignSelf: 'center' }} />
  },
};

export const NoNav: Story = {
  args: {
    logo: <Typography>Logo</Typography>,
  },
};