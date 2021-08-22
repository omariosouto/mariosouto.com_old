import { ColorPallete } from '../../../types/ThemeColors';
import { getColorBySwatche } from '../getColorBySwatch';
import { palleteDefaults } from '../palleteDefaults';

const light: ColorPallete = {
  primary: getColorBySwatche('orange-vivid'),
  accent: getColorBySwatche('pink'),
  ...palleteDefaults,
};

const dark: ColorPallete = {
  ...light,
  neutral: {
    '050': light.neutral['600'],
    '100': light.neutral['600'],
    '200': light.neutral['600'],
    '300': light.neutral['600'],
    '400': light.neutral['600'],
    '500': light.neutral['600'],
    '600': light.neutral['600'],
    '700': light.neutral['600'],
    '800': light.neutral['600'],
    '900': light.neutral['600'],
  },
};

export const devsoutinhoPallete = {
  light,
  dark,
};
