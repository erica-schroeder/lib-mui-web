import type { Meta, StoryObj } from '@storybook/react';
import { MobileAppBar } from './MobileAppBar';
import { Typography } from '@mui/material';

const meta = {
    component: MobileAppBar,
    argTypes: {
        drawerAnchor: {
            control: { type: 'radio' },
            options: ['left', 'right'],
            description: 'Which side the drawer appears on',
        },
        logoPosition: {
            control: { type: 'radio' },
            options: ['center', 'opposite'],
            description: 'Logo alignment in the app bar',
        },
    },
} satisfies Meta<typeof MobileAppBar>;

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

export const Default: Story = {
  args: {
    navItems: navItems,
    logo: <Typography>Logo</Typography>
  },
};