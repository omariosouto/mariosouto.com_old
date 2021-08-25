import { DefaultTheme } from 'styled-components';

export default function createTheme(): DefaultTheme {
  return {
    breakpoints: {
      xs: '0px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    typography: {},
    colors: {
      'primary050': 'white',
      'primary100': 'blue',
      'primary200': 'yellow',
    },
    space: {
      'xpx': '1px',
      'x1': '2px',
      'x2': '4px',
    }
  }
}
