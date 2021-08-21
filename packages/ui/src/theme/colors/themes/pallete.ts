import { ColorPallete } from './types';
import { swatches } from '../swatches';

// Current Definitions: https://github.com/omariosouto/devsoutinho-gallery/blob/main/src/theme/globals.css
const defaultPallete: ColorPallete = {
  white: 'white',
  black: 'black',
  defaultBackground: 'white',
  defaultTextColor: 'black',
  neutral: {
    '050': swatches['grey-050'],
    '100': swatches['grey-100'],
    '200': swatches['grey-200'],
    '300': swatches['grey-300'],
    '400': swatches['grey-400'],
    '500': swatches['grey-500'],
    '600': swatches['grey-600'],
    '700': swatches['grey-700'],
    '800': swatches['grey-800'],
    '900': swatches['grey-900'],
  },
  primary: {
    '050': swatches['red-vivid-050'],
    '100': swatches['red-vivid-100'],
    '200': swatches['red-vivid-200'],
    '300': swatches['red-vivid-300'],
    '400': swatches['red-vivid-400'],
    '500': swatches['red-vivid-500'],
    '600': swatches['red-vivid-600'],
    '700': swatches['red-vivid-700'],
    '800': swatches['red-vivid-800'],
    '900': swatches['red-vivid-900'],
  },
  accent: {
    '050': swatches['indigo-050'],
    '100': swatches['indigo-100'],
    '200': swatches['indigo-200'],
    '300': swatches['indigo-300'],
    '400': swatches['indigo-400'],
    '500': swatches['indigo-500'],
    '600': swatches['indigo-600'],
    '700': swatches['indigo-700'],
    '800': swatches['indigo-800'],
    '900': swatches['indigo-900'],
  },
  positive: {
    '050': swatches['green-050'],
    '100': swatches['green-100'],
    '200': swatches['green-200'],
    '300': swatches['green-300'],
    '400': swatches['green-400'],
    '500': swatches['green-500'],
    '600': swatches['green-600'],
    '700': swatches['green-700'],
    '800': swatches['green-800'],
    '900': swatches['green-900'],
  },
  negative: {
    '050': swatches['red-050'],
    '100': swatches['red-100'],
    '200': swatches['red-200'],
    '300': swatches['red-300'],
    '400': swatches['red-400'],
    '500': swatches['red-500'],
    '600': swatches['red-600'],
    '700': swatches['red-700'],
    '800': swatches['red-800'],
    '900': swatches['red-900'],
  },
  warning: {
    '050': swatches['yellow-050'],
    '100': swatches['yellow-100'],
    '200': swatches['yellow-200'],
    '300': swatches['yellow-300'],
    '400': swatches['yellow-400'],
    '500': swatches['yellow-500'],
    '600': swatches['yellow-600'],
    '700': swatches['yellow-700'],
    '800': swatches['yellow-800'],
    '900': swatches['yellow-900'],
  },
};

const devsoutinhoPalleteDark = {
  ...defaultPallete,
  white: 'white',
  black: 'black',
  defaultBackground: 'black',
  defaultTextColor: 'white',
};

export const pallete = {
  light: defaultPallete,
  dark: devsoutinhoPalleteDark,
};