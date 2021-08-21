import { ColorPallete } from './types';
import { pallete } from './pallete';
import {
  ButtonColors,
  PatternColors,
  ThemeColors,
} from '../../types/ThemeColors';

export const devSoutinhoColorTheme = {
  light: createColorTheme(pallete.light),
  dark: createColorTheme(pallete.dark),
};

function createColorTheme(currentPallete: ColorPallete): ThemeColors {
  const componentColorSchemeNames = [
    'primary',
    'accent',
    'positive',
    'negative',
    'warning',
    'neutral',
  ] as const;
  const patternColorSchemeNames = [
    'fillBase',
    'fillBaseReverse',
    'fillPrimary',
    'fillAccent',
    'fillPositive',
    'fillNegative',
    'fillWarning',
  ] as const;
  const globalDefinitions = {
    white: currentPallete.white,
    black: currentPallete.black,
    defaultBackground: currentPallete.defaultBackground,
    defaultTextColor: currentPallete.defaultTextColor,
  };

  const ButtonColors = componentColorSchemeNames.reduce(
    (acc, item: typeof componentColorSchemeNames[number]) => {
      return {
        ...acc,
        [item]: {
          focusFeedback: currentPallete[item]['050'],
          darkColor: currentPallete[item][600],
          darkColorContrastText: currentPallete.white,
          lightColor: currentPallete[item][100],
          lightColorContrastText: currentPallete[item][600],
          focus: {
            darkColor: currentPallete[item][700],
            darkColorContrastText: currentPallete.white,
            lightColor: currentPallete[item][200],
            lightColorContrastText: currentPallete[item][600],
          },
        },
      };
    },
    {}
  ) as ButtonColors;

  const patterns: Record<
    typeof patternColorSchemeNames[number],
    PatternColors
  > = {
    fillBase: {
      bg: globalDefinitions.defaultBackground,
      colorBase: globalDefinitions.defaultTextColor,
      colorContrastBase: currentPallete.neutral['600'],
      colorContrastLight: currentPallete.neutral['600'],
      colorContrastStrong: currentPallete.neutral['600'],
      colorHighlightLight: currentPallete.primary['600'],
      colorHighlight: currentPallete.primary['600'],
      colorHighlightStrong: currentPallete.primary['600'],
    },
    fillPrimary: {
      bg: currentPallete.primary['600'],
      colorBase: globalDefinitions.white,
      colorContrastBase: currentPallete.neutral['600'],
      colorContrastLight: currentPallete.neutral['600'],
      colorContrastStrong: currentPallete.neutral['600'],
      colorHighlightLight: currentPallete.neutral['600'],
      colorHighlight: currentPallete.neutral['600'],
      colorHighlightStrong: currentPallete.neutral['600'],
    },
    fillAccent: {
      bg: currentPallete.accent['600'],
      colorBase: globalDefinitions.white,
      colorContrastBase: currentPallete.neutral['600'],
      colorContrastLight: currentPallete.neutral['600'],
      colorContrastStrong: currentPallete.neutral['600'],
      colorHighlightLight: currentPallete.neutral['600'],
      colorHighlight: currentPallete.neutral['600'],
      colorHighlightStrong: currentPallete.neutral['600'],
    },
  };

  return {
    ...globalDefinitions,
    ...patterns,
    button: ButtonColors,
  };
}
