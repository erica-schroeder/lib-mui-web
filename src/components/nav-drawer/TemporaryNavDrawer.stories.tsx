import type { Meta, StoryObj } from '@storybook/react';
import { TemporaryNavDrawer } from './TemporaryNavDrawer';
 
const meta = {
  component: TemporaryNavDrawer,
} satisfies Meta<typeof TemporaryNavDrawer>;

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

export const LeftAnchor: Story = {
  args: {
    navItems: navItems,
    open: true,
    anchor: 'left',
    onClose: () => console.log('Close me'),
  },
};

export const RightAnchor: Story = {
  args: {
    navItems: navItems,
    open: true,
    anchor: 'right',
    onClose: () => console.log('Close me'),
  },
}