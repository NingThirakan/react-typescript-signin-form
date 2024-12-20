// Supports weights 100-900
import '@fontsource-variable/inter';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  colorSchemes: { dark: true },
  palette: {
    primary: {
      main: '#171717'
    },
    background: {
      default: '#f5f5f5',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#e5e5e5',
      '300': '#d4d4d4',
      '400': '#a3a3a3',
      '500': '#737373',
      '600': '#525252',
      '700': '#404040',
      '800': '#262626',
      '900': '#171717',
    }
  },
  typography: {
    fontFamily: ['Inter, sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          variants: [
            {
              style: {
                borderColor: theme.palette.grey[300],
                '&:hover': {
                  borderColor: theme.palette.grey[400],
                }
              }
            }
          ]
        }),
      }
    }
  }
})

const AppTheme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppTheme