import { NavItem } from "@/types/navigation";
import { useTheme } from '@mui/material/styles';
import { Container, Stack, useMediaQuery } from "@mui/material";
import { DesktopAppBar } from "@/components/desktop/DesktopAppBar";
import { MobileAppBar } from "@/components/mobile/MobileAppBar";
import { PermanentNavDrawer } from "@/components/nav-drawer/PermanentNavDrawer";
import { AppLayoutProps } from "./AppLayoutProps";

interface PermanentNavDrawerLayoutProps extends AppLayoutProps {
    desktopNavDrawerProps?: Object;
}

export const PermanentNavDrawerLayout: React.FC<PermanentNavDrawerLayoutProps> = ({
    navItems,
    logo,
    logoAlign='center',
    mobileLogoPosition='center',
    mobileDrawerAnchor='left',
    footer=null,
    containerProps={},
    desktopNavDrawerProps={},
    children,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack sx={{ minHeight: "100vh" }}>
            {isDesktop
                ? <DesktopAppBar logo={logo} logoAlign={logoAlign} />
                : <MobileAppBar navItems={navItems} logo={logo} logoPosition={mobileLogoPosition} drawerAnchor={mobileDrawerAnchor} />
            }
            <Stack direction="row" sx={{ flexGrow: 1 }}>
                {isDesktop &&
                    <PermanentNavDrawer navItems={navItems} {...desktopNavDrawerProps} />
                }
                <Container sx={{ flexGrow: 1 }} {...containerProps}>
                    {children}
                </Container>
            </Stack>
            {footer}
        </Stack>
    );
}