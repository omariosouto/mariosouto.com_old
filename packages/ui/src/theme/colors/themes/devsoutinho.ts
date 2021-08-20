import { ColorPallete, ColorPalleteColorSetNames } from './types';
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

  const patterns = patternColorSchemeNames.reduce(
    (acc, item: typeof patternColorSchemeNames[number]) => {
      const palleteColorByPatternColorName: Record<
        typeof patternColorSchemeNames[number],
        ColorPalleteColorSetNames
      > = {
        fillPrimary: 'primary',
        fillAccent: 'accent',
        fillPositive: 'positive',
        fillNegative: 'negative',
        fillWarning: 'neutral',
        fillBase: 'neutral',
        fillBaseReverse: 'primary',
      };
      const currentColor = palleteColorByPatternColorName[item];
      return {
        ...acc,
        [item]: {
          bg: currentPallete[currentColor]['600'],
          colorContrast: new Set(['fillBase']).has(item)
            ? currentPallete.neutral['900']
            : currentPallete.neutral['100'],
          colorContrastStrong: currentPallete.neutral['600'],
          colorContrastLight: currentPallete.neutral['600'],
          colorHighlightLight: currentPallete.primary['600'],
          colorHighlight: currentPallete.primary['700'],
          colorHighlightStrong: currentPallete.primary['900'],
        },
      };
    },
    {}
  ) as Record<typeof patternColorSchemeNames[number], PatternColors>;

  return {
    ...globalDefinitions,
    /// [Patterns]
    ...patterns,
    // [Components]
    button: ButtonColors,
  };
}
