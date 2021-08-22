import { ThemeTypography } from '../types/ThemeTypography';
import { ThemeBreakpoints } from '../types/ThemeBreakpoints';
import { ThemeSpace } from '../types/ThemeSpace';
import { defaultTypography } from './defaultTypography';
import { defaultSpace } from './defaultSpace';
import { defaultBreakpoints } from './defaultBreakpoints';
import { ColorPallete } from '../types/ThemeColors';

export type Theme = {
  colorsLight: ColorPallete;
  colorsDark: ColorPallete;
  typography: ThemeTypography;
  breakpoints: ThemeBreakpoints;
  space: ThemeSpace;
};

export default function createTheme({
  colorsLight,
  colorsDark,
  typography,
  breakpoints,
}: Partial<Theme>): Theme {
  return {
    colorsLight: colorsLight,
    colorsDark: colorsDark || colorsLight,
    typography: typography || defaultTypography,
    breakpoints: breakpoints || defaultBreakpoints,
    space: defaultSpace,
  };
}
