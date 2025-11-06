import { NavItem } from "@/types/navigation";
import { Box, DrawerProps, List } from "@mui/material";
import { NavDrawerItem } from "./NavDrawerItem";

interface PermanentNavDrawerProps extends DrawerProps {
    navItems: NavItem[],
}

export const PermanentNavDrawer: React.FC<PermanentNavDrawerProps> = ({
    navItems,
    sx,
    ...props
}) => {
    return (
        <Box
            sx={{
                width: 250,
                borderRight: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: (theme) => theme.palette.background.paper,
                ...sx
            }}
            role="presentation"
            {...props}
        >
            <List>
                {navItems.map((item) =>
                    <NavDrawerItem key={item.label} navItem={item} />
                )}
            </List>
        </Box>
    );
};