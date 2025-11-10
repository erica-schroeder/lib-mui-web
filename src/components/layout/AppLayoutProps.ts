import { NavItem } from '@/types/navigation';
import { SxProps, Theme } from '@mui/material/styles';

export interface AppLayoutProps {
    sx?: SxProps<Theme>;
    navItems: NavItem[];
    logo: React.ReactNode;
    children: React.ReactNode[];
    footer?: React.ReactNode[];
    logoAlign?: 'left' | 'center';
    mobileLogoPosition?: 'center' | 'opposite';
    mobileDrawerAnchor?: 'left' | 'right';
    containerProps?: Object;
    mobileNavDrawerProps?: Object;
}