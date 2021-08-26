import 'styled-components';
import { BreakpointsTheme } from '../theme/foundation/breakpoints';
import { TypographyTheme } from '../theme/foundation/typography';
import { SpaceTheme } from '../theme/foundation/space';
import { ColorPalleteTheme } from '../theme/foundation/colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPalleteTheme;
    space: SpaceTheme;
    typography: TypographyTheme;
    breakpoints: BreakpointsTheme;
  }
}
