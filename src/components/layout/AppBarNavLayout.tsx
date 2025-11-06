import { Container, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { DesktopAppBar } from "../desktop/DesktopAppBar";
import { MobileAppBar } from "../mobile/MobileAppBar";
import { AppLayoutProps } from "./AppLayoutProps";

interface AppBarNavLayoutProps extends AppLayoutProps {
    navItemDivider?: React.ReactNode,
}
export const AppBarNavLayout: React.FC<AppBarNavLayoutProps> = ({
    navItems,
    navItemDivider,
    logo,
    logoAlign = 'center',
    mobileLogoPosition = 'center',
    mobileDrawerAnchor = 'right',
    footer = null,
    containerProps = {},
    children,
}) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack sx={{ minHeight: "100vh" }}>
            {isDesktop
                ? <DesktopAppBar navItems={navItems} logo={logo} logoAlign={logoAlign} navItemDivider={navItemDivider} />
                : <MobileAppBar navItems={navItems} logo={logo} logoPosition={mobileLogoPosition} drawerAnchor={mobileDrawerAnchor} />
            }
            <Container sx={{ flexGrow: 1 }} {...containerProps} >
                {children}
            </Container>
            {footer}
        </Stack>
    );
}