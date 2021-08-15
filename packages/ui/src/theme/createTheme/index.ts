import { ThemeColor } from '../../@types/styled.d';
import { ThemeTypography } from '../types/ThemeTypography';
import { ThemeBreakpoints } from '../types/ThemeBreakpoints';
import { ThemeSpace } from '../types/ThemeSpace';
import { ThemeContainer } from '../types/ThemeContainer';
import { defaultTypography } from './defaultTypography';
import { defaultSpace } from './defaultSpace';
import { defaultBreakpoints } from './defaultBreakpoints';

export type Theme = {
  colorsLight: ThemeColor;
  colorsDark: ThemeColor;
  typography: ThemeTypography;
  breakpoints: ThemeBreakpoints;
  space: ThemeSpace;
  container: ThemeContainer;
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
    container: {
      xs: '0',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  };
}
