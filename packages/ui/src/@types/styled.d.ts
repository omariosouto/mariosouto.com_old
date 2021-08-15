import 'styled-components';
import { ThemeTypography } from '../theme/types/ThemeTypography';
import { ThemeBreakpoints } from '../theme/types/ThemeBreakpoints';
import { ThemeSpace } from '../theme/types/ThemeSpace';
import { ThemeContainer } from '../theme/types/ThemeContainer';

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
    space: ThemeSpace;
    breakpoints: ThemeBreakpoints;
    container: ThemeContainer;
  }
}
