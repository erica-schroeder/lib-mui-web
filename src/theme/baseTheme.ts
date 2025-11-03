import { SvgIconProps } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    navItemPrimary: React.CSSProperties
    navItemSecondary: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    navItemPrimary?: React.CSSProperties
    navItemSecondary?: React.CSSProperties
  }

  interface Theme {
    icons: {
      arrowDown: React.FC<SvgIconProps>
      arrowUp: React.FC<SvgIconProps>
      menu: React.FC<SvgIconProps>
      close: React.FC<SvgIconProps>
    }
  }
  interface ThemeOptions {
    icons?: {
      arrowDown?: React.FC<SvgIconProps>
      arrowUp?: React.FC<SvgIconProps>
      menu?: React.FC<SvgIconProps>
      close?: React.FC<SvgIconProps>
    }
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navItemPrimary: true
    navItemSecondary: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    nav: true
  }
}


export const baseTheme = createTheme({
  palette: {
  },
  typography: {
    navItemPrimary: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
    navItemSecondary: {
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
  },
  icons: {
    arrowDown: ArrowDownIcon,
    arrowUp: ArrowUpIcon,
    menu: MenuIcon,
    close: CloseIcon,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: 'Arial, sans-serif' }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'nav' },
          style: ({ theme }) => ({
            textTransform: 'none',
            ...theme.typography.navItemPrimary,
            fontSize: '1.25rem',
            borderRadius: 0,
            fontWeight: 'bold',
          }),
        },
      ],
    },
  }
});