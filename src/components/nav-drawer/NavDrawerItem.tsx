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
  const ArrowUpIcon = theme.icons.arrowDown

  // If there is no submenu, render a simple MenuItem
  if (!navItem.submenu) {
    return (
      <MenuItem
        component={Link}
        to={navItem.to ?? '#'}
        onClick={() => onNavigate()}
      >
        <Typography variant="navItemPrimary">{navItem.label}</Typography>
      </MenuItem>
    )
  }

  // Render parent item with collapsible submenu
  return (
    <>
      <MenuItem onClick={() => setOpenSubmenu((prev) => !prev)}>
        <Typography variant="navItemPrimary" sx={{ pr: 2 }}>
          {navItem.label}
        </Typography>
        {openSubmenu ? <ArrowUpIcon /> : <ArrowDownIcon />}
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
              <Typography variant="navItemSecondary" sx={{ pl: 2 }}>
                {o.label}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}