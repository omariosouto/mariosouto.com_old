import { DefaultTheme } from 'styled-components';
import breakpoints from '../foundation/breakpoints';
import typography from '../foundation/typography';
import space from '../foundation/space';
import colors from '../foundation/colors';

type ColorModes = 'light' | 'dark';

export default function createTheme(colorMode: ColorModes = 'light'): DefaultTheme {
  return {
    colors: colors[colorMode],
    breakpoints,
    typography,
    space,
  }
}
