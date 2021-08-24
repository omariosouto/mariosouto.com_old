import 'styled-components';
import { ThemeTypography } from '@devsoutinho/ui/src/theme/types/ThemeTypography';
import { ThemeBreakpoints } from '../theme/types/ThemeBreakpoints';
import { ThemeSpace } from '../theme/types/ThemeSpace';
import { ColorPallete } from '../theme/types/ThemeColors';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: ThemeTypography;
    colors: ColorPallete;
    space: ThemeSpace;
    breakpoints: ThemeBreakpoints;
  }
}