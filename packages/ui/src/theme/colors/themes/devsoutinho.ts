import { swatches } from '../swatches';

interface ColorSet {
  '050': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

export interface ColorPallete {
  white: string;
  black: string;
  defaultBackground: string;
  defaultTextColor: string;
  neutral: ColorSet;
  primary: ColorSet;
  accent: ColorSet;
  positive: ColorSet;
  negative: ColorSet;
  warning: ColorSet;
  modes?: Record<string, ColorPallete>;
}

// Current Definitions: https://github.com/omariosouto/devsoutinho-gallery/blob/main/src/theme/globals.css
const devsoutinhoPalleteDefault: ColorPallete = {
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
    // pink vivid
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
    // orange
    '050': swatches['red-050'],
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
  ...devsoutinhoPalleteDefault,
  white: 'white',
  black: 'black',
  defaultBackground: 'black',
  defaultTextColor: 'white',
};

export const devsoutinhoPalletes: ColorPallete = {
  ...devsoutinhoPalleteDefault,
  modes: {
    dark: devsoutinhoPalleteDark,
  },
};

// ================================================================================================
// ================================================================================================
// ================================================================================================

export function createDevSoutinhoColorTheme({
  mode,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
{
  // TODO: Add support to this in future
  colorPallete?: ColorPallete;
  mode?: string;
}): unknown {
  const currentColorPallete =
    devsoutinhoPalletes.modes[mode] || devsoutinhoPalletes;

  return {
    white: currentColorPallete.white,
    black: currentColorPallete.black,
    defaultBackground: currentColorPallete.defaultBackground,
    defaultTextColor: currentColorPallete.defaultTextColor,
    /// Patterns
    fillBase: {
      bg: currentColorPallete.white,
      colorContrast: currentColorPallete.primary['600'],
      colorContrastStrong: currentColorPallete.primary['600'],
      colorContrastLight: currentColorPallete.primary['600'],
      colorHighlight: currentColorPallete.primary['600'],
      colorHighlightStrong: currentColorPallete.primary['600'],
      colorHighlightLight: currentColorPallete.primary['600'],
    },
    fillBaseReverse: {
      bg: currentColorPallete.neutral[900],
    },
    fillPrimary: {},
    fillAccent: {},
    fillPositive: {},
    fillWarning: {},
    fillNegative: {},
    // [Button]
    button: {
      ...[
        'primary',
        'accent',
        'positive',
        'negative',
        'warning',
        'neutral',
      ].reduce((acc, item) => {
        const currentColor = item as unknown;

        return {
          ...acc,
          [item]: {
            focusFeedback: currentColorPallete[currentColor]['050'],
            darkColor: currentColorPallete[currentColor][600],
            darkColorContrastText: currentColorPallete.white,
            lightColor: currentColorPallete[currentColor][100],
            lightColorContrastText: currentColorPallete[currentColor][600],
            focus: {
              darkColor: currentColorPallete[currentColor][700],
              darkColorContrastText: currentColorPallete.white,
              lightColor: currentColorPallete[currentColor][200],
              lightColorContrastText: currentColorPallete[currentColor][600],
            },
          },
        };
      }, {}),
    },
    // Alert
    // ...
  };
}
