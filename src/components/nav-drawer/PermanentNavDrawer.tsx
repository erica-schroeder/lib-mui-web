import { NavItem } from "@/types/navigation";
import { Box, Drawer, DrawerProps, List } from "@mui/material";
import { NavDrawerItem } from "./NavDrawerItem";

interface TemporaryNavDrawerProps extends DrawerProps {
    navItems: NavItem[],
}

export const TemporaryNavDrawer: React.FC<TemporaryNavDrawerProps> = ({
    navItems,
    ...drawerProps
}) => {
    return (
        <Drawer
            variant='permanent'
            ModalProps={{
                disableScrollLock: true
            }}
            {...drawerProps}
        >
            <Box sx={{ width: 250 }} role="presentation" >
                <List>
                    {navItems.map((item) =>
                        <NavDrawerItem key={item.label} navItem={item} />
                    )}
                </List>
            </Box>
        </Drawer>
    );
};