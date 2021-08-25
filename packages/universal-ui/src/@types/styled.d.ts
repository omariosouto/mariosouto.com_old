import 'styled-components';
// import { ThemeTypography } from '../theme/types/ThemeTypography';
// import { ThemeBreakpoints } from '../theme/types/ThemeBreakpoints';
// import { ThemeSpace } from '../theme/types/ThemeSpace';
// import { ColorPallete } from '../theme/types/ThemeColors';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: Record<string, string>;
    colors: Record<string, string>;
    space: Record<string, string>;
    breakpoints: Record<string, string>;
  }
}
