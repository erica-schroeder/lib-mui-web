import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Divider, SxProps, Theme, AppBarProps, Box, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { TemporaryNavDrawer } from '@/components/nav-drawer/TemporaryNavDrawer'
import { NavItem } from '@/types/navigation'

interface MobileAppBarProps extends AppBarProps {
  Logo?: React.FC
  navItems: NavItem[]
  drawerAnchor?: 'left' | 'right'
  logoPosition?: 'center' | 'opposite'
  sx?: SxProps<Theme>
}

export const MobileAppBar: React.FC<MobileAppBarProps> = ({
  Logo = () => <Box/>,
  navItems,
  drawerAnchor='right',
  logoPosition='center',
  sx,
  ...appBarProps
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const OppositeLayout = () =>
    <>
      {drawerAnchor === 'left' &&
        <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
          <MenuIcon fontSize="large" />
        </IconButton>
      }
    <Logo />
      {drawerAnchor === 'right' &&
        <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
          <MenuIcon fontSize="large" />
        </IconButton>
      }
    </>


const isLeft = drawerAnchor === 'left';
  const CenterLayout = () =>
    <>
      <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ visibility: isLeft ? 'visible' : 'hidden' }}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Logo />
      <IconButton color="inherit" edge="end" onClick={toggleDrawer} sx={{ visibility: !isLeft ? 'visible' : 'hidden' }}>
        <MenuIcon fontSize="large" />
      </IconButton>
    </>


  return (
    <>
      <AppBar position="static" sx={{ py: 1, mb: 2 }}
        {...appBarProps}
      >


<Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  { logoPosition === 'center'
  ? <CenterLayout />
  : <OppositeLayout /> }

</Toolbar>

        <Divider />
      </AppBar>

      <TemporaryNavDrawer
        open={drawerOpen}
        onClose={toggleDrawer}
        navItems={navItems}
        anchor={drawerAnchor}
      />
    </>
  )
}