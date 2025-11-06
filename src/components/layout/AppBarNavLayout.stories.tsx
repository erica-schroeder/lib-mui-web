import { Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { AppBarNavLayout } from './AppBarNavLayout';

const meta = {
    component: AppBarNavLayout,
    argTypes: {
        logoAlign: {
            control: { type: 'radio' },
            options: ['left', 'center'],
            description: 'Where the logo is placed',
        },
    },
} satisfies Meta<typeof AppBarNavLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = (args) =>
  <AppBarNavLayout
    logo={<Typography>Logo</Typography>}
    navItems={[{
      label: 'About', to: '/about'
    }, {
      label: 'Services',
      submenu: [
        { label: 'Consulting', to: '/services/consulting' },
        { label: 'Design', to: '/services/design' },
      ],
    }]}
    footer={<Stack sx={{ alignItems: 'center' }}>footer</Stack>}
    {...args}
  >
    <>
      <h1>Card Title</h1>
      <p>This is the content of the card.</p>
    </>
  </AppBarNavLayout>;

export const Default = Template.bind({});
