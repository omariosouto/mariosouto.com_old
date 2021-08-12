import { ThemeColor } from '../../@types/styled.d';
import { ThemeTypography } from '../types/ThemeTypography';
import { ThemeBreakpoints } from '../types/ThemeBreakpoints';
import { ThemeSpace } from '../types/ThemeSpace';
import { defaultTypography } from './defaultTypography';
import { defaultBreakpoints } from './defaultBreakpoints';

export type Theme = {
  colorsLight: ThemeColor;
  colorsDark: ThemeColor;
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
    space: {
      x0: '0',
      x0_5: '0.125rem',
      x1: '0.25rem',
      x1_5: '0.375rem',
      x2: '0.5rem',
      x2_5: '0.625rem',
      x3: '0.75rem',
      x3_5: '0.875rem',
      x4: '1rem',
      x5: '1.25rem',
      x6: '1.5rem',
    },
  };
}

/*
[Tailwind]
w-0	width: 0px;
w-px	width: 1px;
w-0.5	width: 0.125rem;
w-1	width: 0.25rem;
w-1.5	width: 0.375rem;
w-2	width: 0.5rem;
w-2.5	width: 0.625rem;
w-3	width: 0.75rem;
w-3.5	width: 0.875rem;
w-4	width: 1rem;
w-5	width: 1.25rem;
w-6	width: 1.5rem;
w-7	width: 1.75rem;
w-8	width: 2rem;
w-9	width: 2.25rem;
w-10	width: 2.5rem;
w-11	width: 2.75rem;
w-12	width: 3rem;
w-14	width: 3.5rem;
w-16	width: 4rem;

[xstyled]
0: '0',
0.5: '0.125rem',
1: '0.25rem',
1.5: '0.375rem',
2: '0.5rem',
2.5: '0.625rem',
3: '0.75rem',
3.5: '0.875rem',
4: '1rem',
5: '1.25rem',
6: '1.5rem',
7: '1.75rem',
8: '2rem',
9: '2.25rem',
10: '2.5rem',
11: '2.75rem',
12: '3rem',
14: '3.5rem',
16: '4rem',
*/
