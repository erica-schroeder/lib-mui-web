import { NavItem } from '@/types/navigation';
import { Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { Link, useNavigate } from 'react-router';

interface DesktopAppBarNavItemProps {
  navItem: NavItem;
}

export const DesktopAppBarNavItem: React.FC<DesktopAppBarNavItemProps> = ({
  navItem,
}) => {
  const navigate = useNavigate();

  const theme = useTheme()
  const ArrowDownIcon = theme.icons.arrowDown

  if (!navItem.submenu) {
    return (
      <Button
        variant='nav'
        disableRipple
        key={navItem.label}
        component={Link}
        to={navItem.to}
      >
        {navItem.label}
      </Button>
    );
  }

  return (
    <PopupState variant='popover' popupId='menu-nav-button'>
      {(popupState) => {
        return (
          <>
            <Button
              variant='nav'
              disableRipple
              {...bindTrigger(popupState)}
              endIcon={<ArrowDownIcon />}
            >
              {navItem.label}
            </Button>
            <Menu
              disableScrollLock
              {...bindMenu(popupState)}
            >
              {navItem?.submenu?.map(o =>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    navigate(o.to);
                  }}>
                  <Typography variant='navItemSecondary'>
                    {o.label}
                  </Typography>
                </MenuItem>)
              }
            </Menu>
          </>
        );
      }}
    </PopupState>
  );
}