import type { Meta, StoryObj } from '@storybook/react';
import { NavDrawerItem } from './NavDrawerItem';
 
const meta = {
  component: NavDrawerItem,
} satisfies Meta<typeof NavDrawerItem>;
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    navItem: {
      label: 'About', to: '/about'
    },
    onNavigate: () => console.log('Navigated!'),
  },
}

export const Nested: Story = {
  args: {
    navItem: {
      label: 'Services',
      submenu: [
        { label: 'Consulting', to: '/services/consulting' },
        { label: 'Design', to: '/services/design' },
      ],
    },
    onNavigate: () => console.log('Navigated!'),
  },
}
