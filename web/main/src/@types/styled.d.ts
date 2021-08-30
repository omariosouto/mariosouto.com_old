import 'styled-components';
import { BreakpointsTheme } from '@devsoutinho/universalui/src/theme/foundation/breakpoints';
import { TypographyTheme } from '@devsoutinho/universalui/src/theme/foundation/typography';
import { SpaceTheme } from '@devsoutinho/universalui/src/theme/foundation/space';
import { ColorPalleteTheme } from '@devsoutinho/universalui/src/theme/foundation/colors';
import { Platforms } from '@devsoutinho/universalui/src/theme/types/Platforms';

declare module 'styled-components' {
  export interface DefaultTheme {
    platform: Platforms;
    colors: ColorPalleteTheme;
    space: SpaceTheme;
    typography: TypographyTheme;
    breakpoints: BreakpointsTheme;
  }
}
