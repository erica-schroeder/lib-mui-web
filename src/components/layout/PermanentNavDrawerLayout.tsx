import { NavItem } from "@/types/navigation";
import { useTheme } from "@emotion/react";
import { Container, Stack, useMediaQuery } from "@mui/material";
import { DesktopAppBar } from "../desktop/DesktopAppBar";
import { MobileAppBar } from "../mobile/MobileAppBar";

interface PermanentNavDrawerLayoutProps {
    navItems: NavItem[],
    logo: React.ReactNode,
    children: React.ReactNode[],
    footer: React.ReactNode[],
    logoAlign?: 'left' | 'center',
    mobileLogoPosition?: 'center' | 'opposite',
    mobileDrawerAnchor?: 'left' | 'right',
}
export const PermanentNavDrawerLayout: React.FC<PermanentNavDrawerLayoutProps> = ({
    navItems,
    logo,
    logoAlign='center',
    mobileLogoPosition='center',
    mobileDrawerAnchor='right',
    footer=null,
    children,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack sx={{ minHeight: "100vh" }}>
            {isDesktop
                ? <DesktopAppBar navItems={navItems} logo={logo} logoAlign={logoAlign} />
                : <MobileAppBar navItems={navItems} logo={logo} logoPosition={mobileLogoPosition} drawerAnchor={mobileDrawerAnchor} />
            }
            <Container sx={{ flexGrow: 1 }}>
                {children}
            </Container>
            {footer}
        </Stack>
    );
}