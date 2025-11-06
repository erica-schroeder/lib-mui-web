import { NavItem } from '@/types/navigation'
import { Collapse, List, ListItemButton, MenuItem, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

interface NavDrawerItemProps {
  navItem: NavItem
  onNavigate?: () => void
}

export const NavDrawerItem: React.FC<NavDrawerItemProps> = ({
  navItem,
  onNavigate = () => {}
}) => {
  const navigate = useNavigate()
  const [openSubmenu, setOpenSubmenu] = useState(false)
  const theme = useTheme()
  const ArrowDownIcon = theme.icons.arrowDown
  const ArrowUpIcon = theme.icons.arrowUp

  // If there is no submenu, render a simple MenuItem
  if (!navItem.submenu) {
    return (
      <MenuItem
        disableRipple
        component={Link}
        to={navItem.to ?? '#'}
        onClick={() => onNavigate()}
      >
        <Typography
          variant="navItemPrimary"
          sx={(theme) => ({
            fontFamily: theme.typography.navItemPrimary.fontFamily,
          })}>
          {navItem.label}
        </Typography>
      </MenuItem>
    )
  }

  // Render parent item with collapsible submenu
  return (
    <>
      <MenuItem disableRipple onClick={() => setOpenSubmenu((prev) => !prev)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="navItemPrimary"
          sx={(theme) => ({
            fontFamily: theme.typography.navItemPrimary.fontFamily,
            pr: 2
          })}
        >
          {navItem.label}
        </Typography>
        {openSubmenu ? <ArrowUpIcon sx={{ color: theme.typography.navItemPrimary.color }} /> : <ArrowDownIcon sx={{ color: theme.typography.navItemPrimary.color }} />}
      </MenuItem>

      <Collapse in={openSubmenu} unmountOnExit>
        <List disablePadding>
          {navItem.submenu.map((o) => (
            <ListItemButton
              key={o.label}
              onClick={() => {
                if (o.to) navigate(o.to)
                onNavigate()
              }}
            >
              <Typography
                variant="navItemSecondary"
                sx={(theme) => ({
                  fontFamily: theme.typography.navItemSecondary.fontFamily,
                  pl: 2
                })}
              >
                {o.label}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}