import { TemporaryNavDrawer } from '@/components/nav-drawer/TemporaryNavDrawer'
import { NavItem } from '@/types/navigation'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, AppBarProps, Box, IconButton, SxProps, Theme, Toolbar } from '@mui/material'
import React, { useState } from 'react'

interface MobileAppBarProps extends AppBarProps {
  logo?: React.ReactNode
  navItems: NavItem[]
  drawerAnchor?: 'left' | 'right'
  logoPosition?: 'center' | 'opposite'
  sx?: SxProps<Theme>
}

export const MobileAppBar: React.FC<MobileAppBarProps> = ({
  logo = <Box />,
  navItems,
  drawerAnchor = 'right',
  logoPosition = 'center',
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

      {logo}

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

      {logo}

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
          {logoPosition === 'center'
            ? <CenterLayout />
            : <OppositeLayout />}
        </Toolbar>
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