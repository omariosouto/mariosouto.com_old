import { ColorPallete } from '../../../types/ThemeColors';
import { getColorBySwatche } from '../getColorBySwatch';
import { palleteDefaults } from '../palleteDefaults';

const light: ColorPallete = {
  white: '#ffffff',
  primary: getColorBySwatche('devsoutinho'),
  accent: getColorBySwatche('pink'),
  ...palleteDefaults,
};

const dark: ColorPallete = {
  ...light,
  white: light.neutral['050'],
  neutral: {
    '050': light.neutral['100'],
    '100': light.neutral['200'],
    '200': light.neutral['300'],
    '300': light.neutral['400'],
    '400': light.neutral['500'],
    '500': light.neutral['600'],
    '600': light.neutral['700'],
    '700': light.neutral['800'],
    '800': light.neutral['800'],
    '900': light.neutral['900'],
  },
};

export const devsoutinhoPallete = {
  light,
  dark,
};
