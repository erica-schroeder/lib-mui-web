import { NavItem } from '@/types/navigation'
import { AppBar, AppBarProps, Box, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { DesktopAppBarNavItem } from './DesktopAppBarNavItem'

interface DesktopAppBarProps extends AppBarProps {
  logo: React.ReactNode;
  logoAlign?: 'left' | 'center';
  navItemDivider?: React.ReactNode;
  navItems?: NavItem[];
}

export const DesktopAppBar: React.FC<DesktopAppBarProps> = ({
  logo = <Box/>,
  navItems = null,
  logoAlign='center',
  navItemDivider=null,
  ...appBarProps
}) => {

  const NavBar = <Stack direction="row" alignItems="center" divider={navItemDivider}>
    {navItems?.map((item, idx) =>
        <DesktopAppBarNavItem navItem={item} />
    )}
    </Stack>

  const LogoCenterLayout =
    <Stack sx={{ flex: 1, alignItems: "center" }}>
      {logo}
      {NavBar}
    </Stack>

  const LogoLeftLayout =
    <Stack direction="row" sx={{ flexGrow: 1, justifyContent: "space-between", alignItems: "center" }}>
      {logo}
      {NavBar}
    </Stack>


  return (
    <AppBar position="static" sx={{ py: 1, mb: 2 }}
      {...appBarProps}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {logoAlign === 'center'
          ? LogoCenterLayout
          : LogoLeftLayout
        }
      </Toolbar>
    </AppBar>
  )
}