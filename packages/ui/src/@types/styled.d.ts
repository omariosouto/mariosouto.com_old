import 'styled-components';
import { ThemeTypography } from '../theme/types/ThemeTypography';
import { ThemeColors } from '../theme/types/ThemeColors';
import { ThemeBreakpoints } from '../theme/types/ThemeBreakpoints';
import { ThemeSpace } from '../theme/types/ThemeSpace';
import { ThemeContainer } from '../theme/types/ThemeContainer';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: ThemeTypography;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    colors: ThemeColors;
    space: ThemeSpace;
    breakpoints: ThemeBreakpoints;
    container: ThemeContainer;
  }
}
