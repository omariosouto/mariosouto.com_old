import { ThemeColor } from '../../@types/styled.d';
import { ThemeTypography } from '../types/ThemeTypography';
import { ThemeBreakpoints } from '../types/ThemeBreakpoints';
import { defaultTypography } from './defaultTypography';
import { defaultBreakpoints } from './defaultBreakpoints';

export type Theme = {
  colorsLight: ThemeColor;
  colorsDark: ThemeColor;
  typography: ThemeTypography;
  breakpoints: ThemeBreakpoints;
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
  };
}
