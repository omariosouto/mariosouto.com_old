import 'styled-components';
import { ThemeTypography } from '../theme/types/ThemeTypography';
import { ThemeBreakpoints } from '../theme/types/ThemeBreakpoints';

// Color
interface Color {
  main: {
    color: string;
    contrastColor: string;
  };
  light?: {
    color: string;
    contrastColor: string;
  };
}
export interface ThemeColor {
  background: Color;
  primary: Color;
  secondary?: Color;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: ThemeTypography;
    colors: ThemeColor;
    breakpoints: ThemeBreakpoints;
  }
}
