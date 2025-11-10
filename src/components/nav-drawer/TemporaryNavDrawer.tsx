import { NavItem } from "@/types/navigation"
import { CloseIcon } from "@/util/icons";
import { Box, Drawer, DrawerProps, IconButton, List } from "@mui/material";
import { NavDrawerItem } from "./NavDrawerItem";

interface TemporaryNavDrawerProps extends DrawerProps {
    navItems: NavItem[],
    onClose: () => void
}

export const TemporaryNavDrawer: React.FC<TemporaryNavDrawerProps> = ({
    navItems,
    onClose,
    ...drawerProps
}) => {
    return (
        <Drawer
            onClose={onClose}
            ModalProps={{
                disableScrollLock: true,
                    disableRestoreFocus: false, // let MUI restore focus
    disableAutoFocus: false,    // auto-focus first element inside drawer
            }}
            {...drawerProps}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 1
                }}
            >
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{ minWidth: 250 }} role="presentation" >
                <List>
                    {navItems.map((item) =>
                        <NavDrawerItem key={item.label} navItem={item} onNavigate={onClose} />
                    )}
                </List>
            </Box>
        </Drawer>
    );
};